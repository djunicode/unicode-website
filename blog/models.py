from django.db import models
from multiselectfield import MultiSelectField
# from django.contrib.auth import get_user_model
from django.conf import settings
from django.urls import reverse
from django.db.models.signals import pre_save, post_save
from django.core.mail import EmailMessage
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.template.loader import get_template
from django.template import Context
from django.utils import timezone
from django.utils.text import slugify
from profiles.models import UserProfile
from newsletter.models import Newsletter

# User = get_user_model()

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
    ('design', 'Web Design')
)


class PostManager(models.Manager):
    def published(self, *args, **kwargs):
        return Post.objects.all().filter(draft=False).filter(publish__lte=timezone.now())


def upload_location(instance, filename):
    return "blog/{user}/{filename}".format(user=instance.author, filename=filename)


class Post(models.Model):
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    cover = models.ImageField(upload_to=upload_location, blank=True)
    content = models.TextField()
    slug = models.SlugField(blank=True)
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    draft = models.BooleanField(default=False)
    publish = models.DateField()
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    objects = PostManager()

    def __str__(self):
        return self.title

    def get_api_url(self):
        return reverse('posts-api:detail', kwargs={"slug": self.slug})

    def get_absolute_url(self):
        return reverse('posts:detail', kwargs={"slug": self.slug})

    class Meta:
        ordering = ["-timestamp", "-updated"]


def pre_save_post_receiver(sender, instance, *args, **kwargs):
    slug = slugify(instance.title)
    qs = Post.objects.filter(slug=slug).order_by("-id")
    if qs.exists():
        new_slug = f"{slug}-{qs.count()}"
        slug = new_slug
    instance.slug = slug


pre_save.connect(pre_save_post_receiver, sender=Post)


def post_save_event_receiver(sender, instance, *args, **kwargs):
    subscribers = Newsletter.objects.all()
    subject = 'Unicode Blog Notification'
    from_email = settings.EMAIL_HOST_USER
    from_email = settings.EMAIL_HOST_USER
    to_list = [subscriber.email for subscriber in subscribers]
    to_list.append(from_email)
    context = {
        'title': instance.title,
        'url': settings.BASE_URL + '/BlogSingle/' + instance.slug,
        'message': "Check out the new blog"
    }
    message = get_template(
        'email_blog.html').render(context)
    # Code referenced from stackoverflow for sending multipart content especially images in email
    # https://stackoverflow.com/questions/1633109/creating-a-mime-email-template-with-images-to-send-with-python-django
    img_data = open(instance.cover.path, 'rb').read()
    html_part = MIMEMultipart(_subtype='related')
    body = MIMEText(message, _subtype='html')
    html_part.attach(body)
    img = MIMEImage(img_data, 'jpeg')
    img.add_header('Content-Id', '<blogcover>')
    img.add_header("Content-Disposition", "inline", filename="blogcover")
    html_part.attach(img)
    msg = EmailMessage(subject, None, to=to_list,
                       from_email=from_email)
    msg.attach(html_part)
    msg.send()


post_save.connect(post_save_event_receiver, sender=Post)


class CommentManager(models.Manager):
    def all(self, *args, **kwargs):
        # For now display all the comments
        return Comment.objects.filter(approved_comment=False)


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=200)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    approved_comment = models.BooleanField(default=False)

    objects = CommentManager()

    def __str__(self):
        return self.text

    class Meta:
        ordering = ["-timestamp"]


# def pre_save_comment_receiver(sender, instance, *args, **kwargs):
#     print(instance.post.id)
#     instance.approved_comment = True

# pre_save.connect(pre_save_comment_receiver, sender=Comment)

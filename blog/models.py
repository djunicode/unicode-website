from multiselectfield import MultiSelectField
# from django.contrib.auth import get_user_model
from django.urls import reverse
from django.db.models.signals import pre_save
from django.utils import timezone
from django.utils.text import slugify
from django.db import models
from profiles.models import UserProfile

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
        new_slug = "{}-{}" .format(slug, qs.count())
        slug = new_slug
    instance.slug = slug


pre_save.connect(pre_save_post_receiver, sender=Post)


class CommentManager(models.Manager):
    def all(self, *args, **kwargs):
        return Comment.objects.filter(approved_comment=True)


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

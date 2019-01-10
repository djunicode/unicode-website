from multiselectfield import MultiSelectField
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
)


def upload_location(instance, filename):
    return "blog/{user}/{filename}".format(user=instance.user, filename=filename)


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    cover = models.ImageField(upload_to=upload_location, blank=True)
    content = models.TextField()
    slug = models.SlugField(blank=True)
    tag = models.CharField(max_length=255)
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    draft = models.BooleanField(default=False)
    publish = models.DateField()
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey('Post', related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=200)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    approved_comments = models.BooleanField(default=False)

    def __str__(self):
        return self.text

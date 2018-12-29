from django.db import models
from django.contrib.auth import get_user_model
from multiselectfield import MultiSelectField

User = get_user_model()

TECHNOLOGIES_CHOICES = (
    ('web', 'Web DEvelopment'),
    ('app', 'App Development'),
)


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='blog/%Y/%m/%d/', blank=True)
    content = models.TextField()
    slug = models.SlugField()
    tag = models.CharField(max_length=255)
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    create_date = models.DateTimeField(auto_now_add=True)
    publish_date = models.DateTimeField(blank=True, null=True) 
    
    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey('Post', related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
    approved_comments = models.BooleanField(default=False)

    def __str__(self):
        return self.text
        
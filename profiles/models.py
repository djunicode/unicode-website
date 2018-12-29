from django.db import models
from django.contrib.auth import get_user_model
from multiselectfield import MultiSelectField

User = get_user_model()

STACK_CHOICES = (
    ('frontend', 'Frontend'),
    ('backend', 'Backend'),
    ('fullstack', 'Full Stack'),
    ('design', 'Design'),
)


def upload_profile_image(instance):
    return "profiles/{user}".format(user=instance.user)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    profile_pic = models.ImageField(upload_to=upload_profile_image, blank=True)
    bio = models.CharField(max_length=255, blank=True)
    date_joined = models.DateTimeField(auto_now=True)
    date_passed = models.DateTimeField(auto_now=True)
    stack = MultiSelectField(choices=STACK_CHOICES, max_choices=2)
    github_link = models.CharField(max_length=255, blank=True)
    linkedin_link = models.CharField(max_length=255, blank=True)
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

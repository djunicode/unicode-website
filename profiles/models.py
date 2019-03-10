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


def upload_location(instance, filename):
    return "profiles/{filename}".format(filename=filename)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    profile_pic = models.ImageField(upload_to=upload_location, blank=True)
    bio = models.CharField(max_length=255, blank=True)
    date_joined = models.DateField()
    date_passed = models.DateField()
    stack = MultiSelectField(choices=STACK_CHOICES, max_choices=2)
    github_link = models.CharField(max_length=255, blank=True)
    linkedin_link = models.CharField(max_length=255, blank=True)
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name

    @property
    def get_email(self):
        return self.user.email

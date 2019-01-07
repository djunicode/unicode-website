from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from multiselectfield import MultiSelectField

User = get_user_model()

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
)


def upload_location(instance, filename):
    return "projects/%Y/%m/%d/{filename}".format(filename=filename)


class Project(models.Model):
    team = models.ManyToManyField(User)
    title = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='projects/%Y/%m/%d/', blank=True)
    description = models.TextField()
    slug = models.SlugField(blank=True)
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    year = models.DateField(default=timezone.now())
    repo_link = models.CharField(max_length=255)

    def __str__(self):
        return self.title

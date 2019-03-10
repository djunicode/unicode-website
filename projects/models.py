from datetime import datetime
from django.db import models
from django.contrib.auth import get_user_model
from multiselectfield import MultiSelectField
from django.db.models.signals import pre_save
from django.urls import reverse
from django.utils.text import slugify
from profiles.models import UserProfile

User = get_user_model()

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
)


class ProjectManager(models.Manager):
    def recent(self, *args, **kwargs):
        year = datetime.now().year
        projects = Project.objects.all().filter(year__year__gte=year)
        if not len(projects):
            year = year - 1
            projects = Project.objects.all().filter(year__year__gte=year)
        return projects


def upload_location(instance, filename):
    return "projects/%Y/%m/%d/{filename}".format(filename=filename)


class Project(models.Model):
    team = models.ManyToManyField(UserProfile)
    title = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='projects/%Y/%m/%d/', blank=True)
    description = models.TextField()
    slug = models.SlugField(blank=True)
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    year = models.DateField()
    repo_link = models.CharField(max_length=255)

    objects = ProjectManager()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('projects:detail', kwargs={"slug": self.slug})

    class Meta:
        ordering = ["-year"]


def pre_save_project_receiver(sender, instance, *args, **kwargs):
    slug = slugify(instance.title)
    qs = Project.objects.filter(slug=slug).order_by("-id")
    if qs.exists():
        new_slug = "{}-{}" .format(slug, qs.count())
        slug = new_slug
    instance.slug = slug


pre_save.connect(pre_save_project_receiver, sender=Project)

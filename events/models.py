from django.db import models
from django.conf import settings
from multiselectfield import MultiSelectField

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
)


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    slug = models.SlugField(blank=True)
    date = models.DateTimeField(auto_now=True)
    event_amount = models.PositiveSmallIntegerField(default=0)
    user = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.title


class Participant(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    sap_id = models.CharField(max_length=11)
    email = models.EmailField(max_length=255, unique=True)
    contact = models.CharField(max_length=10)

    def __str__(self):
        name = self.first_name + self.last_name
        return name

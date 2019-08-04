from django.db import models
from django.conf import settings
from multiselectfield import MultiSelectField
from django.utils.text import slugify
from django.db.models.signals import pre_save, post_save
from django.core.mail import EmailMessage
from django.template.loader import get_template
from django.template import Context
from newsletter.models import Newsletter

TECHNOLOGIES_CHOICES = (
    ('web', 'Web Development'),
    ('app', 'App Development'),
)


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    technologies = MultiSelectField(choices=TECHNOLOGIES_CHOICES)
    slug = models.SlugField(blank=True)
    date = models.DateTimeField()
    event_amount = models.PositiveSmallIntegerField(default=0)
    user = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.title


def pre_save_event_receiver(sender, instance, *args, **kwargs):
    slug = slugify(instance.title)
    qs = Event.objects.filter(slug=slug).order_by("-id")
    if qs.exists():
        new_slug = f"{slug}-{qs.count()}"
        slug = new_slug
    instance.slug = slug


pre_save.connect(pre_save_event_receiver, sender=Event)

"""
def post_save_event_receiver(sender, instance, *args, **kwargs):
    subscribers = Newsletter.objects.all()
    subject = 'Unicode Event Notification'
    from_email = settings.EMAIL_HOST_USER
    to_list = [subscribers.email for subscriber in subscribers]
    to_list.append(from_email)
    context = {
        'title': instance.title,
        'url': 'http://localhost:8000/api/events/detail/' + instance.slug,
        'message': "Check out the new event"
    }
    message = get_template(
        'email.html').render(context)
    msg = EmailMessage(subject, message, to=to_list,
                       from_email=from_email)
    msg.content_subtype = 'html'
    msg.send()


post_save.connect(post_save_event_receiver, sender=Event)
"""


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

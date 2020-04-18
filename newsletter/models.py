from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.core.mail import EmailMessage
from django.template.loader import get_template
from django.template import Context


class Newsletter(models.Model):
    email = models.EmailField(max_length=256)

    def __str__(self):
        return self.email


def post_save_event_receiver(sender, instance, *args, **kwargs):
    subject = 'Unicode Subscription Notification'
    from_email = settings.EMAIL_HOST_USER
    to_list = [instance.email]
    context = {
        'message': 'Thanks for subscribing!',
        'description': 'Stay tuned for new blogs and events'
    }
    message = get_template(
        'email_subscribe.html').render(context)
    msg = EmailMessage(subject, message, to=to_list,
                       from_email=from_email)
    msg.content_subtype = 'html'
    msg.send()


post_save.connect(post_save_event_receiver, sender=Newsletter)


class Contact(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=256)
    message = models.TextField()

    def __str__(self):
        return f'{self.name} - {self.email}'


def post_save_event_receiver(sender, instance, *args, **kwargs):
    subject = 'Unicode Contact Form Notification'
    from_email = settings.EMAIL_HOST_USER
    to_list = [instance.email]
    to_list.append(from_email)
    context = {
        'name': instance.name,
        'message': instance.message
    }
    message = get_template(
        'email_contact.html').render(context)
    msg = EmailMessage(subject, message, to=to_list,
                       from_email=from_email)
    msg.content_subtype = 'html'
    msg.send()


post_save.connect(post_save_event_receiver, sender=Contact)

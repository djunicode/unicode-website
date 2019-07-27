from django.urls import path
from .views import NewsletterSubscribe, ContactView

app_name = 'newsletter-api'

urlpatterns = [
    path('newsletter-subscribe/', NewsletterSubscribe.as_view(), name='newsletter_subscribe'),
    path('contact/', ContactView.as_view(), name='contact_form'),
]

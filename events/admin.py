from django.contrib import admin
from .models import Event
from .models import Participant

# Register your models here.
admin.site.register(Event)
admin.site.register(Participant)

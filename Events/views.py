from django.shortcuts import render, get_object_or_404, redirect
from .models import Event, Participant
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth import get_user_model
from django.utils import timezone
from .forms import EventForm, ParticipantForm


def event_list(request):
    events = Event.objects.all()
    context = {
        "events": events
    }

    return render(request, 'Events/event_list.html', context)


def event_create(request):
    if request.user.is_authenticated:
        raise Http404
    form = EventForm(request.POST)
    user = Event.objects.get(id=1)
    print(user)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.user = user
        instance.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Create"
    }
    return render(request, "Events/event_form.html", context)


def event_update(request, slug=None):
    if request.user.is_authenticated:
        raise Http404
    # obj = get_object_or_404(Event, slug = slug)
    form = EventForm(request.POST)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Update"
    }
    return render(request, "Events/event_form.html", context)


def event_detail(request, slug=None):
    event = Event.objects.get(id=1)
    participant = Participant.objects.get(id=1)
    form = ParticipantForm(request.POST or None)
    count = Participant.objects.all().count()
    if form.is_valid():
        form = form.save(commit=False)
        form.participant = participant
        form.save()
        return HttpResponse("Thanks for registering")
    context = {
        "title": event.title,
        "form": form,
        "description": event.description,
        "technologies": event.technologies,
        "date": event.date,
        "event_amount": event.event_amount,
        "user": event.user,
        "count": count
    }
    return render(request, "Events/event_detail.html", context)

from django.shortcuts import render, get_object_or_404, redirect, reverse
from .models import Event, Participant
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth import get_user_model
from django.utils import timezone
from .forms import EventForm, ParticipantForm
from django.core.paginator import Paginator


def event_list(request):
    events = Event.objects.all()
    # page = request.GET.get.

    context = {
        "events": events
    }
    return render(request, 'events/event_list.html', context)


def event_create(request):
    if not request.user.is_superuser:
        raise Http404
    form = EventForm(request.POST or None)
    user = Event.objects.get(id=1)
    # event = Event.objects.filter(id=id)
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
    return render(request, "events/event_form.html", context)


def event_update(request):
    if not request.user.is_superuser:
        raise Http404
    # obj = get_object_or_404(Event, slug = slug)
    form = EventForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
        return HttpResponse('Thanks for registering')
    context = {
        "form": form,
        "title": "Update"
    }
    return render(request, "events/event_form.html", context)


def event_detail(request, id):
    event = Event.objects.filter(id=id)
    participant = Participant.objects.all()
    form = ParticipantForm(request.POST or None)
    if form.is_valid():
        form = form.save(commit=False)
        form.participant = participant
        form.save()
        return HttpResponse("Thanks for registering")
    context = {
        "form": form,
        "event": event,
    }
    return render(request, "events/event_detail.html", context)

from django.shortcuts import render, get_object_or_404, redirect
from .models import Event, Participant
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth import get_user_model
from django.utils import timezone
from .forms import EventForm, ParticipantForm

def event_list(request):
    events = Event.objects.filter(getdate__gte = timezone.now()).order_by('date')
    context = {
    "events" : events
    }

    return render(request, 'Events/tester.html', context)


def event_create(request):
    if request.user.is_authenticated
        raise Http404
    form = EventForm(request.Event)
    user = get_object_or_404(Event, user = request.user)
    print(user)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.author = user
        instance.save()
         return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Create Event"
    }
    return render(request, "event_form.html", context)


def event_update(request):
    if request.user.is_authenticated
        raise Http404
    obj = get_object_or_404(Event, slug = slug)
    form = EventForm(request.Event, instance = obj)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
         return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Update Event"
    }
    return render(request, "event_form.html", context)


def event_detail(request, slug = None):
    event = get_object_or_404(Event, slug = slug)
    form = EventForm(request.Event)
    if form.is_valid():
        form = form.save()
        form.event = event
        form.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    conext = {
        "title": "Event Details",
        "event": event,
    }
    return render(request, "event_detail.html", context)


def participant_entry(request):
    participant = get_object_or_404(Participant, slug = slug)
    form = ParticipantForm(request.Participant)
    if form.is_valid():
        form =  form.save()
        form.participant = participant
        form.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    context ={
    "title":"Participant Details",
    "participant":participant,
    }
    return render(request, "participant_detail.html", context)


def participant_count(request):
    count = Participant.objects.filter(event="eventname").count()

    return render(request, "event_form.html", count)


# Create your views here.

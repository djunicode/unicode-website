from .models import Event, Participant
from django import forms


class EventForm(forms.ModelForm):
    publish = forms.DateField(widget=forms.SelectDateWidget)

    class Meta:
        model = Event
        fields = [
            "title",
            # "event_name",
            "description",
            "technologies",
            "event_amount",
            "publish",
        ]


class ParticipantForm(forms.ModelForm):
    # event = forms.CharField()

    class Meta:
        model = Participant
        fields = [
            "first_name",
            "last_name",
            "sap_id",
            "email",
            "contact",
            "event",
        ]

from .models import Event, Participant
from django import forms


class EventForm(forms.ModelForms):
    publish = forms.DateField(widget=forms.SelectDateWidget)

    class Meta:
        model = Event
        fields = [
            "title",
            "description",
            "technologies",
            "event_amount",
            "publish",
        ]

    class ParticipantForm(forms.ModelForms):
        event = forms.CharField()

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

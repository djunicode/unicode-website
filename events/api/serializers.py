from rest_framework import serializers
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from events.models import Event, Participant


class EventListSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    technology = serializers.SerializerMethodField()

    url = serializers.HyperlinkedIdentityField(view_name='events-api:detail')

    class Meta:
        model = Event
        fields = [
            'url',
            'title',
            'description',
            'technology',
            'date',
            'event_amount',
            'user'
        ]

    def get_title(self, obj):
        return obj.title

    def get_technology(self, obj):
        data = []
        for i in obj.technologies:
            data.append(i.capitalize())


class EventDetailSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='events-api:participant')

    class Meta:
        model = Event
        fields = [
            'url',
            'title',
            'description',
            'technologies',
            'date',
            'event_amount',
            'user'
        ]


class EventCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = [
            'title',
            'description',
            'technologies',
            'date',
            'event_amount',
            'user'
        ]
        read_only_fields = ['user', ]


class ParticipantCreateSerializer(serializers.ModelSerializer):
    # event = serializer.SerializerMethodField()

    class Meta:
        model = Participant
        fields = [
            'id',
            'event',
            'first_name',
            'last_name',
            'sap_id',
            'email',
            'contact'
        ]

    def participant_add(self, obj):
        name = obj.first_name + " " + obj.last_name
        return name

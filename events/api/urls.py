from django.urls import path
from events.api.views import (
    EventListAPIView, EventUpdateAPIView,
    EventDetailAPIView, EventCreateAPIView,
    ParticipantCreateAPIView,
)

app_name = 'events-api'

urlpatterns = [
    path('', EventListAPIView.as_view(), name='list'),
    path('create/', EventCreateAPIView.as_view(), name='create'),
<<<<<<< HEAD
    path('update/', EventUpdateAPIView.as_view(), name='update'),
    path('detail/<slug:slug>', EventDetailAPIView.as_view(), name='detail'),
    path('detail/<slug:slug>/participant/', ParticipantCreateAPIView.as_view(), name='participant'),
=======
    path('update/<pk>', EventUpdateAPIView.as_view(), name='update'),
    path('detail/<pk>', EventDetailAPIView.as_view(), name='detail'),
    path('detail/<pk>/participant/', ParticipantCreateAPIView.as_view(), name='participant'),
>>>>>>> upstream/master
]

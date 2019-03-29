from rest_framework.generics import (
    CreateAPIView, UpdateAPIView, DestroyAPIView,
    ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView
)
from rest_framework.permissions import (
    AllowAny, IsAuthenticated,
    IsAdminUser, IsAuthenticatedOrReadOnly
)
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter
)
from django.db.models import Q
from .serializers import (
    EventListSerializer, EventDetailSerializer, EventCreateSerializer, ParticipantCreateSerializer
)
from events.models import Event, Participant
# from .pagination import ProjectLimitOffsetPagination


class EventListAPIView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventListSerializer
    permission_class = [AllowAny]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'technologies', 'date']


class EventDetailAPIView(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventDetailSerializer
    permission_class = [AllowAny]

    """def get_queryset(self,id):
        queryset_list = Event.objects.filter(id=id)
        return  queryset_list"""


class EventUpdateAPIView(UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventCreateSerializer
    permission_class = [IsAdminUser]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class EventCreateAPIView(CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventCreateSerializer
    permission_class = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ParticipantCreateAPIView(CreateAPIView):
    queryset = Participant.objects.all()
    serializer_class = ParticipantCreateSerializer

    def perform_create(self, serializer):
        serializer.save()

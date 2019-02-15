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
    ProjectListSerializer, ProjectDetailSerializer
)
from projects.models import Project
from .pagination import ProjectLimitOffsetPagination


class ProjectDetailAPIView(RetrieveAPIView):
    serializer_class = ProjectDetailSerializer
    permission_class = [AllowAny]
    queryset = Project.objects.all()
    lookup_field = 'slug'


class ProjectListAPIView(ListAPIView):
    serializer_class = ProjectListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'content', 'author__user__username', 'technologies']
    permission_class = [AllowAny]
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self, *args, **kwargs):
        qs = Project.objects.all()
        search = self.request.GET.get("s", None)
        year = self.request.GET.get("year", None)
        if search:
            qs = qs.filter(Q(title__icontains=search) | Q(description__icontains=search) | Q(
                technologies__icontains=search)).distinct()
        if year:
            qs = qs.filter(year__year=year)
        return qs

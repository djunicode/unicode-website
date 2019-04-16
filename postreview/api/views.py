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
    ReviewListSerializer, ReviewUpdateSerializer, ReviewDetailSerializer, ReviewCreateSerializer,
    ReviewDeleteSerializer
)
from postreview.models import Review
# from .pagination import ProjectLimitOffsetPagination


class ReviewListAPIView(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewListSerializer
    permission_class = [AllowAny]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['first_name', 'last_name']


class ReviewDetailAPIView(RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDetailSerializer
    permission_class = [AllowAny]

    """def get_queryset(self,id):
        queryset_list = Review.objects.filter(id=id)
        return  queryset_list"""


class ReviewUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewUpdateSerializer
    permission_class = [IsAdminUser]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class ReviewCreateAPIView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer
    permission_class = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDeleteAPIView(DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer
    permission_class = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

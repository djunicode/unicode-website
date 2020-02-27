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
    CommentCreateSerializer,
    PostListSerializer, PostDetailSerializer
)
from blog.models import Post, Comment
from .pagination import PostLimitOffsetPagination


class CommentCreateAPIView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PostDetailAPIView(RetrieveAPIView):
    serializer_class = PostDetailSerializer
    permission_class = [AllowAny]
    queryset = Post.objects.published()
    lookup_field = 'slug'


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'content', 'author__user__username', 'technologies']
    permission_class = [AllowAny]
    pagination_class = PostLimitOffsetPagination

    def get_queryset(self, *args, **kwargs):
        qs = Post.objects.published()
        query = self.request.GET.get("s", None)
        if query:
            qs = qs.filter(Q(title__icontains=query) | Q(content__icontains=query) | Q(
                author__user__username__icontains=query) | Q(technologies__icontains=query)).distinct()
        return qs

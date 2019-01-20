from django.urls import path
from .views import (
    CommentCreateAPIView,
    PostDetailAPIView, PostListAPIView,
)

app_name = 'posts-api'

urlpatterns = [
    path('', PostListAPIView.as_view(), name='list'),
    path('<slug:slug>', PostDetailAPIView.as_view(), name='detail'),
    path('<slug:slug>/comment', CommentCreateAPIView.as_view(), name='comment')
]

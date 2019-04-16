from django.urls import path
from postreview.api.views import (
    ReviewListAPIView, ReviewUpdateAPIView,
    ReviewDetailAPIView, ReviewCreateAPIView,
    ReviewDeleteAPIView
)

app_name = 'postreview-api'

urlpatterns = [
    path('', ReviewListAPIView.as_view(), name='list'),
    path('create/', ReviewCreateAPIView.as_view(), name='create'),
    path('update/<pk>', ReviewUpdateAPIView.as_view(), name='update'),
    path('detail/<pk>', ReviewDetailAPIView.as_view(), name='detail'),
    path('delete/<pk>', ReviewDeleteAPIView.as_view(), name='delete'),
]

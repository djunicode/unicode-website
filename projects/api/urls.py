from django.urls import path
from .views import (
    ProjectDetailAPIView, ProjectListAPIView
)

app_name = 'projects-api'

urlpatterns = [
    path('', ProjectListAPIView.as_view(), name='list'),
    path('<slug:slug>', ProjectDetailAPIView.as_view(), name='detail'),
]

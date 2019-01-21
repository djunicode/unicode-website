from django.urls import path
from .views import create_review

app_name = 'posts'

urlpatterns = [
    path('createreview', create_review, name='create')
]
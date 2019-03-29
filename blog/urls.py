from django.urls import path
from .views import (
    post_list, post_detail, post_create, post_update, post_delete
)

app_name = 'posts'

urlpatterns = [
    path('', post_list, name='list'),
    path('create', post_create, name='create'),
    path('<slug:slug>', post_detail, name='detail'),
    path('<slug:slug>/edit', post_update, name='edit'),
    path('<slug:slug>/delete', post_delete, name='delete')
]

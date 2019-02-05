from django.urls import path
from .views import (
    project_list, project_detail, project_create, project_update, project_delete
)

app_name = "projects"

urlpatterns = [
    path('', project_list, name='list'),
    path('create', project_create, name='create'),
    path('<slug:slug>', project_detail, name='detail'),
    path('<slug:slug>/edit', project_update, name='edit'),
    path('<slug:slug>/delete', project_delete, name='delete')
]

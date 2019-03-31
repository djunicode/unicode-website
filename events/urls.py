from django.urls import path
from .views import (event_list, event_create, event_detail, event_update
                    )

app_name = 'events'

urlpatterns = [
    path('list/', event_list, name='list'),
    path('create/', event_create, name='create'),
    path('detail/<int:id>', event_detail, name='detail'),
    path('update/', event_update, name='update'),
]

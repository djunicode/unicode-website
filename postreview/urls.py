from django.urls import path
from postreview.views import (
    post_create_view, post_update_view, list_reviews, review_detail_view,
    review_delete_view
)

app_name = 'Review'

urlpatterns = [
    path('', list_reviews, name='product-list'),
    path('create/', post_create_view, name='product-list'),
    path('<int:id>/', review_detail_view, name='product-detail'),
    path('<int:id>/update/', post_update_view, name='product-update'),
    path('<int:id>/delete/', review_delete_view, name='product-delete'),
]

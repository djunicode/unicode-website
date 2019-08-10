from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)


class PostReviewLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 8
    max_limit = 10

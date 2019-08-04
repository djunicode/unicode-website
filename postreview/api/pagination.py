from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)


class PostReviewLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2
    max_limit = 10

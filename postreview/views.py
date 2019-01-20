from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from .models import review


def create_review(request, *args, **kwargs):
    obj = review.objects.get(id=1)
    context = {
        "title": "Create",
        "first_name": obj.first_name,
        "last_name": obj.last_name,
        "photograph": obj.photograph,
        "designation": obj.designation,
        "company": obj.company,
        "department": obj.department,
        "comments": obj.comments
    }

    context = {
        'object': obj
    }
    return render(request, "post_review.html", context)

from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from .models import newslet


def news_view(request, *args, **kwargs):
        obj = newslet.objects.get(id=1)
        context = {
        'email': obj.email
        }

        context = {
        'object': obj
        }
        return render(request, "newsletter.html", context)

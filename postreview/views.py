# from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
# from django.contrib.auth import get_user_model
# from django.core.paginator import Paginator
# from django.db.models import Q
from .forms import reviewForm
from .models import Review


def post_create_view(request):
    form = reviewForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = reviewForm()
    context = {
        'form': form
    }
    return render(request, "postreview/review_create.html", context)


def post_update_view(request, id=id):
    obj = get_object_or_404(Review, id=id)
    form = reviewForm(request.POST or None, instance=obj)
    if form.is_valid():
        form.save()
    context = {
        'form': form
    }
    return render(request, "postreview/review_create.html", context)


def list_reviews(request):
    queryset = Review.objects.all()  # list of objects
    context = {
        "object_list": queryset
    }
    return render(request, "postreview/review_list.html", context)


def review_detail_view(request, id):
    obj = get_object_or_404(Review, id=id)
    context = {
        "object": obj
    }
    return render(request, "postreview/review_detail.html", context)


def review_delete_view(request, id):
    obj = get_object_or_404(Review, id=id)
    if request.method == "POST":
        obj.delete()
        return redirect('/')
    context = {
        "object": obj
    }
    return render(request, "postreview/review_delete.html", context)

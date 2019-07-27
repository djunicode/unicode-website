from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from django.db.models import Q
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
    queryset_list = Review.objects.all()  # list of objects
    query = request.GET.get("q", None)
    if query:
        queryset_list = queryset_list.filer(Q(first_name__icontains=query) | Q(last_name__icontains=query) | Q(
            photograph__icontains=query) | Q(designation__icontains=query) | Q(company__icontains=query) | Q(
            comments__icontains=query)).distinct()
    paginator = Paginator(queryset_list, 10)
    page = request.GET.get('page')
    object_list = paginator.get_page(page)
    context = {
        "object_list": object_list
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

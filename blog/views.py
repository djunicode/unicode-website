from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from django.utils import timezone
from .models import Post, Comment
from .forms import PostForm, CommentForm
from profiles.models import UserProfile


def post_create(request):
    if not request.user.is_authenticated:
        raise Http404
    form = PostForm(request.POST or None)
    user = get_object_or_404(UserProfile, user=request.user)
    print(user)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.author = user
        instance.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Create"
    }
    return render(request, "blog/post_form.html", context)


def post_update(request, slug=None):
    if not request.user.is_authenticated:
        raise Http404
    obj = get_object_or_404(Post, slug=slug)
    form = PostForm(request.POST or None, instance=obj)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Update"
    }
    return render(request, "blog/post_form.html", context)


def post_detail(request, slug=None):
    post = get_object_or_404(Post, slug=slug)
    comment_list = Comment.objects.all().filter(post=post)
    form = CommentForm(request.POST or None)
    if form.is_valid():
        form = form.save(commit=False)
        form.post = post
        form.save()
        return HttpResponseRedirect(post.get_absolute_url())
    context = {
        "post": post,
        "comment_list": comment_list,
        "form": form,
        "title": "Detail",
    }
    # print(request.user)
    # print(object.author.user.username)
    if request.user == post.author.user:
        context["user"] = True
    else:
        context["user"] = False
    return render(request, "blog/post_detail.html", context)


def post_list(request):
    queryset_list = Post.objects.published()
    query = request.GET.get("q", None)
    if query:
        queryset_list = queryset_list.filter(Q(title__icontains=query) | Q(content__icontains=query) | Q(
            author__user__first_name__icontains=query) | Q(author__user__last_name__icontains=query) | Q(
            technologies__icontains=query)).distinct()
    paginator = Paginator(queryset_list, 10)
    page = request.GET.get('page')
    post_list = paginator.get_page(page)
    context = {
        "title": "List",
        "post_list": post_list,
    }
    if request.user.is_authenticated:
        context["user"] = True
    else:
        context["user"] = False
    return render(request, "blog/post_list.html", context)


def post_delete(request, slug=None):
    if not request.user.is_staff or not request.user.is_superuser:
        raise Http404
    instance = get_object_or_404(Post, slug=slug)
    if request.POST:
        instance.delete()
        return redirect("posts:list")
    context = {
        "title": "Delete",
        "object": instance
    }
    return render(request, "blog/confirm_delete.html", context)

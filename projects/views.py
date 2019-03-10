from datetime import date
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from django.utils import timezone
from .models import Project
from .forms import ProjectForm
from profiles.models import UserProfile

User = get_user_model()


def project_create(request):
    if not request.user.is_authenticated:
        raise Http404
    form = ProjectForm(request.POST or None)
    if form.is_valid():
        users_id = form["team"].value()
        instance = form.save(commit=False)
        instance.save()
        for id in users_id:
            user_obj = User.objects.get(id=id)
            user = get_object_or_404(UserProfile, user=user_obj)
            instance.team.add(user.user.id)
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "title": "Create",
        "form": form
    }
    return render(request, "projects/project_form.html", context)


def project_update(request, slug=None):
    if not request.user.is_authenticated:
        raise Http404
    obj = get_object_or_404(Project, slug=slug)
    form = ProjectForm(request.POST or None, instance=obj)
    if form.is_valid():
        users = obj.team.all()
        for user in users:
            obj.team.remove(user.user.id)
        obj.save()
        users_id = form["team"].value()
        instance = form.save(commit=False)
        instance.save()
        for id in users_id:
            user_obj = User.objects.get(id=id)
            user = get_object_or_404(UserProfile, user=user_obj)
            instance.team.add(user.user.id)
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
        "title": "Update"
    }
    return render(request, "projects/project_form.html", context)


def project_detail(request, slug=None):
    project = get_object_or_404(Project, slug=slug)
    project_year = project.year
    second_year = []
    third_year = []
    fourth_year = []
    for t in project.team.all():
        member = UserProfile.objects.get(user=t)
        delta1 = member.date_passed - member.date_joined
        delta2 = project_year - member.date_joined
        number_of_days = delta1.days - delta2.days
        stack = []
        for i in range(len(member.stack)):
            stack.append(member.stack[i].capitalize())
        member_obj = {
            "name": member,
            "email": member.get_email,
            "bio": member.bio,
            "stack": stack
        }
        if number_of_days < 365:
            member_obj["year"] = "BE"
            fourth_year.append(member_obj)
        elif number_of_days < 365 * 2:
            member_obj["year"] = "TE"
            third_year.append(member_obj)
        else:
            member_obj["year"] = "SE"
            second_year.append(member_obj)
    context = {
        "title": "Detail",
        "project": project,
        "second_year": second_year,
        "third_year": third_year,
        "fourth_year": fourth_year,
    }
    if request.user.is_authenticated:
        context["user"] = True
    else:
        context["user"] = False
    return render(request, "projects/project_detail.html", context)


def project_list(request):
    queryset_list = Project.objects.all()
    query = request.GET.get("q", None)
    if query:
        queryset_list = queryset_list.filter(Q(title__icontains=query) | Q(description__icontains=query) | Q(
            technologies__icontains=query) | Q(team__user__first_name__icontains=query) | Q(
            team__user__last_name__icontains=query)).distinct()
    paginator = Paginator(queryset_list, 10)
    page = request.GET.get('page')
    post_list = paginator.get_page(page)
    context = {
        "title": "Projects",
        "project_list": post_list
    }
    if request.user.is_authenticated:
        context["user"] = True
    else:
        context["user"] = False
    return render(request, "projects/project_list.html", context)


def project_delete(request, slug=None):
    if not request.user.is_staff or not request.user.is_superuser:
        raise Http404
    instance = get_object_or_404(Project, slug=slug)
    if request.POST:
        instance.delete()
        return redirect("projects:list")
    context = {
        "title": "Delete",
        "object": instance
    }
    return render(request, "projects/confirm_delete.html", context)

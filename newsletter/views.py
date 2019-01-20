from django.http import HttpResponse
from django.shortcuts import render
from .models import newslet

def news_view(request, *args, **kwargs):
	obj=newslet.objects.get(id=1)
	context = {
	'email' : obj.email
	}

	context={
	'object': obj
	}
	return render(request, "newsletter.html", context)

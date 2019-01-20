from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from .models import review

def create_review(request, *args, **kwargs):
    obj=review.objects.get(id=1)
    user = get_object_or_404(UserProfile, user=request.user)
    print(user)
    context = {
        "form": form,
        "title": "Create"
    }

    context = {
    'object': obj
    }
    return render(request, "post_review.html", context)
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import reverse

User = get_user_model()


class review(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    photograph = models.ImageField(upload_to='review/%Y/%m/%d/', blank=True)
    designation = models.CharField(max_length=128)
    company = models.CharField(max_length=128)
    department = models.CharField(max_length=120)
    comments = models.CharField(max_length=255)

    def get_absolute_url(self):
        return reverse("postreview:post-detail", kwargs={"id": self.id})

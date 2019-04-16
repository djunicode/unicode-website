from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class Review(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    photograph = models.ImageField(upload_to='postreview/%Y/%m/%d/', blank=True)
    designation = models.CharField(max_length=128)
    company = models.CharField(max_length=128)
    department = models.CharField(max_length=120)
    comments = models.CharField(max_length=255)

    def get_absolute_url(self):
        return reverse("postreview:product-detail", kwargs={"id": self.id})

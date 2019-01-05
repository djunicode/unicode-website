from django.db import models


class newslet(models.Model):
    email = models.EmailField(max_length=254)

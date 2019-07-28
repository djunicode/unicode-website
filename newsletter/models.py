from django.db import models


class Newsletter(models.Model):
    email = models.EmailField(max_length=256)

    def __str__(self):
        return self.email


class Contact(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=256)
    message = models.TextField()

    def __str__(self):
        return f'{self.name} - {self.email}'

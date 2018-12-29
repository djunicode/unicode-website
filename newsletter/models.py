from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class newslet(models.Model):
    email=models.EmailField(max_length=254,**options)
    
    def __str__(self):
        return self.email



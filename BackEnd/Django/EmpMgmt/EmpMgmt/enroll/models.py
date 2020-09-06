from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    position = models.CharField(max_length=30)
    
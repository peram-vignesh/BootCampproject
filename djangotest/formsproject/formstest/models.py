from django.db import models

class User(models.Model):
    name=models.CharField(max_length=30,unique=True)
    email=models.EmailField(max_length=50,unique=True)
    email_verify=models.EmailField(max_length=50,unique=True)
    password=models.CharField(max_length=30,unique=True)
    password_verify=models.CharField(max_length=30,unique=True)

    def __str__(self) -> str:
        return str(self.email)


# Create your models here.

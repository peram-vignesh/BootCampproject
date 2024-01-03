from django.db import models

class Test_table(models.Model):
    First_name=models.CharField(max_length=30,unique=True)
    Last_name=models.CharField(max_length=30,unique=True)
    email=models.EmailField(max_length=50,unique=True)

    def __str__(self) -> str:
        return str(self.email)

# Create your models here.

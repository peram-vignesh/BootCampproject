from django.db import models

class Topic(models.Model):
    name_top=models.CharField(max_length=30,unique=True)

    def __str__(self) -> str:
        return self.name_top
    
class Webpage(models.Model):
    topic=models.ForeignKey(Topic, on_delete=models.CASCADE)
    name=models.CharField(max_length=250,unique=True)
    url=models.URLField(unique=True)

    def __str__(self):
        return self.name
    
class AccessRecord(models.Model):
    name=models.ForeignKey(Webpage,on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self) -> str:
        return str(self.date)

# Create your models here.


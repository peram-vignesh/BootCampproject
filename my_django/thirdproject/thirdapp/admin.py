from django.contrib import admin
from thirdapp.models import Topic, AccessRecord, Webpage
admin.site.register(AccessRecord)
admin.site.register(Topic)
admin.site.register(Webpage)

# Register your models here.

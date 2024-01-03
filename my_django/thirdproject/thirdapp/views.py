from django.shortcuts import render
from thirdapp.models import Topic,Webpage,AccessRecord

# Create your views here.
def index (request):
    webpage_list=AccessRecord.objects.order_by('date')
    date_dict={'access_records':webpage_list}
    return render(request,'sample.html',context=date_dict)
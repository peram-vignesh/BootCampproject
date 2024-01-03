from django.shortcuts import render
from testapp.models import Test_table

def index (request):
    webpage_list=Test_table.objects.order_by('First_name')
    name_dict={'test_table': webpage_list}
    return render(request,'test.html',context=name_dict)

# Create your views here.

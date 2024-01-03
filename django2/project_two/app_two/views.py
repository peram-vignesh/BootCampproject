from django.shortcuts import render

# Create your views here.
def index(request):
    my_dict={'insert': 'Hello I am app number two'}
    return render(request,'app_two/index.html',context=my_dict)
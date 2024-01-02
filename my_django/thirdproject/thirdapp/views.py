from django.shortcuts import render

# Create your views here.
def index (request):
    mydict={'insert_me':"I am from views"}
    return render(request,'sample.html',context=mydict)
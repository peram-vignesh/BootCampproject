from django.shortcuts import render
from . import form1

def index(request):
    return render(request,'index.html')

def form2 (request):
    form=form1.myform()
    if request.method=='POST':
        form=form1.myform(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('Error Form Invalid')
    return render(request,'forms.html',{'form':form})

# Create your views here.

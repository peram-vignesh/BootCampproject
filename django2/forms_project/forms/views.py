from django.shortcuts import render
from . import forms

# Create your views here.
def index(request):
    return render(request,'index.html')

def form_name_view(request):
    form=forms.formname()
    if request.method=='POST':
        form=forms.formname(request.POST)

        if form.is_valid():
            print("VALIDATION SUCCESS")
            print('Name'+form.cleaned_data['name'])
            print('email'+form.cleaned_data['email'])
            print('text'+form.cleaned_data['text'])
    return render (request,'forms.html',{'form':form})

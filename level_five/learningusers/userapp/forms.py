from django.forms import ModelForm
from django.contrib.auth.models import User
from userapp.models import userinfo
from django import forms

class userform(ModelForm):
    password=forms.CharField(widget=forms.PasswordInput())

    class Meta():
        model=User
        fields=('username',"email",'password')
class userprofile (ModelForm):
    class Meta():
        model=userinfo
        fields=('portfolio','profile_pic')



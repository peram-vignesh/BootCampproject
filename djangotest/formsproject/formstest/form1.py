from django.forms import ModelForm
from django.core import validators
from formstest.models import User

class myform(ModelForm):
    class Meta:
        model=User
        fields='__all__'

    
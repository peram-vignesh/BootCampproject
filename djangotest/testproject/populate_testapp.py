import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','testproject.settings')

import django
django.setup()

import random
from testapp.models import Test_table
from faker import Faker
f=Faker()

def populate(N=15):
    for i in range(N):
        firstname=f.name()
        lastname=f.name()
        mail=f.email()
        webpg=Test_table.objects.get_or_create(First_name=firstname, Last_name=lastname,email=mail)[0]
if __name__=='__main__':
    print('Starting Populating')
    populate(30)
    print('Populated')
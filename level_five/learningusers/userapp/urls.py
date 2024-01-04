
from django.urls import path
from userapp import views

app_name='userapp'

urlpatterns=[
    path('register',views.register,name='register'),
    path('userlogin/',views.user_login,name='user_login')
]
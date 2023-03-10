"""bombay_software URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from authentication.views import *
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    # path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('register/', Register, name="register"),
    path('', MyLoginView.as_view(), name='login'),
    path('logout/', Logout, name='logout'),
    path('user/',UserListing,name='user'),
    path('update-password/',Update_password_show,name='update_password_show'),
    path('update-password/save/',Update_password_validation,name="update_password_validation"),
    path('update-password/save/update/',Update_password_save,name='update_password_save'),
    path('profile-edit/',EditProfile,name='profile_edit'),
    # path('user/',UserListing,name='user'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += [re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT})]
handler404 = 'authentication.views.handler404'
handler500 = 'authentication.views.handler500'

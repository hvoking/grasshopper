# Django imports
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('app_manager/', admin.site.urls),
    path('', include('apps.grass_nodes.urls')),
]

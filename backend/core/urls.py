# Django imports
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('grasshopper_manager/', admin.site.urls),
    path('', include('apps.geometries.urls')),
    path('', include('apps.nodes.urls')),
]

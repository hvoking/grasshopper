# Django imports
from django.urls import path

# App imports
from apps.files import views

urlpatterns = [
	path('folders/', views.folders),
	path('folders/<str:file>/', views.files),
]
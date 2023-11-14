# Django imports
from django.urls import path

# App imports
from apps.geometries import views

urlpatterns = [
	path('geometries/', views.geometries),
	path('geometries-detail/<str:geometry>/', views.geometriesDetail),
	path('geometries-parameters/', views.geometriesWithParameters)
]
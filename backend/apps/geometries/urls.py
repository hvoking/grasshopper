# Django imports
from django.urls import path, re_path

# App imports
from apps.geometries.views import ListView, geometriesDetail, ParametersView

urlpatterns = [
	re_path(r'geometries/', ListView.as_view()),
	path('geometries-detail/<str:geometry>/', geometriesDetail),
	re_path('geometries-parameters/', ParametersView.as_view())
]
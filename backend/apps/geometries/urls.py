# Django imports
from django.urls import re_path

# App imports
from apps.geometries.views import ListView, DetailView, ParametersView

urlpatterns = [
	re_path(r'^geometries/', ListView.as_view()),
	re_path(r'^geometries-detail', DetailView.as_view()),
	re_path(r'^geometries-parameters/', ParametersView.as_view())
]
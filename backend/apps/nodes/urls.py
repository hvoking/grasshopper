# Django imports
from django.urls import path, re_path

# App imports
from apps.nodes.views import SearchView, DetailView

urlpatterns = [
	re_path(r'^search_api', SearchView.as_view()),
	re_path(r'^nodes-detail', DetailView.as_view())
]
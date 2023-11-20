# Django imports
from django.urls import re_path

# App imports
from apps.geometries.views import ListView, ParametersView, FoldersView, FilesView, SearchView, NodesView

urlpatterns = [
	re_path(r'^geometries/', ListView.as_view()),
	re_path(r'^geometries-parameters/', ParametersView.as_view()),
	re_path(r'^folders_api', FoldersView.as_view()),
	re_path(r'^files_api', FilesView.as_view()),
	re_path(r'^search_api', SearchView.as_view()),
	re_path(r'^nodes_api', NodesView.as_view())
]
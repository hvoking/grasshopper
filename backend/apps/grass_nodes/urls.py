# Django imports
from django.urls import re_path

# App imports
from apps.grass_nodes.views.list import ListView
from apps.grass_nodes.views.parameters import ParametersView
from apps.grass_nodes.views.folders import FoldersView
from apps.grass_nodes.views.files import FilesView
from apps.grass_nodes.views.search import SearchView
from apps.grass_nodes.views.nodes import NodesView

urlpatterns = [
	re_path(r'^geometries/', ListView.as_view()),
	re_path(r'^geometries-parameters/', ParametersView.as_view()),
	re_path(r'^folders_api', FoldersView.as_view()),
	re_path(r'^files_api', FilesView.as_view()),
	re_path(r'^search_api', SearchView.as_view()),
	re_path(r'^nodes_api', NodesView.as_view())
]
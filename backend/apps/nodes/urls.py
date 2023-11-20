# Django imports
from django.urls import path, re_path

# App imports
from apps.nodes.views import NodesView

urlpatterns = [
	re_path(r'^nodes_api', NodesView.as_view())
]
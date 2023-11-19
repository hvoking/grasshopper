# Django imports
from django.urls import re_path

# App imports
from apps.files.views import FoldersView, FilesView

urlpatterns = [
	re_path(r'^folders_api', FoldersView.as_view()),
	re_path(r'^files_api', FilesView.as_view()),
]
# Django imports
from django.urls import re_path

# App imports
from apps.files.views import FoldersView, FilesView

urlpatterns = [
	re_path(r'^folders', FoldersView.as_view()),
	re_path(r'^files', FilesView.as_view()),
]
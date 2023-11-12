# Django imports
from django.urls import path

# App imports
from apps.nodes import views

urlpatterns = [
	path('nodes-list/<str:node>/', views.nodesList),
	path('nodes-detail/<str:node>/', views.nodesDetail),
	path('folders/', views.folders),
]
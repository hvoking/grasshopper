from django.urls import path
from . import views

urlpatterns = [
	# path('nodes/nodes-list', views.nodesList, name="nodesList"),
	path('nodes/nodes-list/<str:node>/', views.nodesList, name="nodesList"),
	path('nodes/nodes-detail/<str:node>/', views.nodesDetail, name="nodesDetail"),
	path('nodes/geometries/', views.geometries, name="geometries"),
]
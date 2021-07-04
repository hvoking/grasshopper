from django.urls import path
from . import views

urlpatterns = [
	# path('nodes/nodes-list', views.nodesList, name="nodesList"),
	path('nodes-list/<str:node>/', views.nodesList, name="nodesList"),
	path('nodes-detail/<str:node>/', views.nodesDetail, name="nodesDetail"),
	path('geometries/', views.geometries, name="geometries"),
	path('geometries-detail/<str:geometry>/', views.geometriesDetail, name="geometriesDetail"),
	path('geometries-parameters/', views.geometriesWithParameters, name="geometriesWithParameters"),
	path('folders/', views.folders, name="folders"),
	path('folders/<str:file>/', views.files, name="files"),
]
# App imports
from apps.grass_nodes.services.list import list_service
from apps.grass_nodes.utils import paths

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

# List all geometries in threejs folder
class ListView(APIView):
	def get(self, request, **kwargs):
		resp = list_service.get_geometries(paths.geometries_path)
		return Response(resp)
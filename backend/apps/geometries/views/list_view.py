# App imports
from apps.geometries.services import list_service
from apps.utils.paths import geometries_path

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

# List all geometries in threejs folder
class ListView(APIView):
	def get(self, request, **kwargs):
		resp = list_service.get_geometries(geometries_path)
		return Response(resp)
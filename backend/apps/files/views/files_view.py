# App imports
from apps.files.services import files_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

# Three.js path
threejsTypesPath = '../frontend/node_modules/@types/three/src/'

# List all files in threejs folder
class FilesView(APIView):
	def get(self, request, **kwargs):
		file = self.request.GET.get('file')
		path = threejsTypesPath + f'{file}'
		resp = files_service.get_geometries(path)
		return Response(resp)
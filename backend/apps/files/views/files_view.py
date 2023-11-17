# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# App imports
from apps.files.services import files_service

# Three.js path
threejsTypesPath = '../frontend/node_modules/@types/three/src/'

# List all files in threejs folder
@api_view(['GET'])
def files(request, file):
	path = threejsTypesPath + f'{file}'
	currentListOfGeometries = files_service.get_geometries(path)
	resp = {f'{file}': currentListOfGeometries} 
	return Response(resp)
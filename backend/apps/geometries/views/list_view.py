# App imports
from apps.geometries.services import list_service
from apps.utils.paths import threejsTypesPath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# List all geometries in threejs folder
@api_view(['GET'])
def geometries(request):
	return Response({'geometries': list_service.get_geometries(threejsTypesPath + 'geometries/')})
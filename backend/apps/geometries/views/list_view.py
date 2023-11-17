# App imports
from apps.geometries.services.utils import listOfGeometries
from apps.geometries.services.paths import threejsTypesPath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# List all geometries in threejs folder
@api_view(['GET'])
def geometries(request):
	return Response({'geometries': listOfGeometries(threejsTypesPath + 'geometries/')})
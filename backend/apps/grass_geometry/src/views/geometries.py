# App imports
from apps.grass_geometry.utils.utils import parameters, readFile, listOfGeometries
from apps.grass_geometry.utils.regularExpressions import nodePropertiesRegex, nodeInterfaceRegex
from apps.grass_geometry.utils.paths import *

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

# List all geometries in threejs folder
@api_view(['GET'])
def geometries(request):
	return Response({'geometries': listOfGeometries(threejsTypesPath + 'geometries/')})

@api_view(['GET'])
def geometriesWithParameters(request):
	return Response(parameters(geometryPath, nodePropertiesRegex))

# Opens geometry file and matching the regex
@api_view(['GET'])
def geometriesDetail(request, geometry):
	geometriesTypes = readFile(threejsTypesPath + "geometries/" + geometry + ".d.ts")
	interface = [i.groups() for i in re.finditer(nodeInterfaceRegex, geometriesTypes)]
	geometries = [i[0] for i in interface]
	# types = [i[2] for i in interface]
	return Response({"inputs": geometries, "output": geometry})

# List all files in threejs folder
@api_view(['GET'])
def files(request, file):
	return Response({f'{file}': listOfGeometries(threejsTypesPath + f'{file}')})
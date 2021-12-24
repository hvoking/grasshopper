from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.utils.utils import parameters, readFile, listOfGeometries
from backend.utils.regularExpressions import nodePropertiesRegex, nodeInterfaceRegex
from backend.utils.paths import *
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


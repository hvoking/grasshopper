# System imports
from os import listdir

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

# Regular expression
geometriesFoldersRegex = re.compile(r"(')(\w+)(')")

# Three.js path
threejsTypesPath = '../frontend/node_modules/@types/three/src/'

def listOfGeometries(path):
	geometries = []
	for i in listdir(path):
		if i!='Geometries.d.ts':
			i = i.split(".d.ts")[0]
			geometries.append(i)
	return sorted(geometries)

@api_view(['GET'])
def folders(request):
	folders = [i.group(2) for i in re.finditer(geometriesFoldersRegex, str(listdir(threejsTypesPath)))]
	return Response({"folders" : folders})

# List all files in threejs folder
@api_view(['GET'])
def files(request, file):
	return Response({f'{file}': listOfGeometries(threejsTypesPath + f'{file}')})
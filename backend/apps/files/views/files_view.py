# System imports
from os import listdir

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Three.js path
threejsTypesPath = '../frontend/node_modules/@types/three/src/'

def listOfGeometries(path):
	geometries = []
	for i in listdir(path):
		if i!='Geometries.d.ts':
			i = i.split(".d.ts")[0]
			geometries.append(i)
	return sorted(geometries)

# List all files in threejs folder
@api_view(['GET'])
def files(request, file):
	filesPath = threejsTypesPath + f'{file}'
	currentListOfGeometries = listOfGeometries(filesPath)
	resp = {f'{file}': currentListOfGeometries} 
	return Response(resp)
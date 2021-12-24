from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.utils.utils import readFile, nodesNames, geometriesNames
from backend.utils.regexPatterns import nodesListPattern, nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern
from backend.utils.regularExpressions import *
from os import listdir
from backend.utils.paths import *

# List of nodes and geometries available for search
nodes = nodesNames(threeExportationFilePath) +  geometriesNames(threejsGeometriesPath)

# File that contains all nodes available for search
text = readFile(threeExportationFilePath)

# Set of nodes starting with requested "${node}" argument
@api_view(['GET'])
def nodesList(request, node):
	return Response({"nodes": nodesListPattern(node, nodes)})

# Single node matchs request
@api_view(['GET'])
def nodesDetail(request, node):
	nodePath = nodeDetailPattern(node, text)
	nodePath = threejsTypesPath + nodePath[0].replace("'", "").replace('.', '') + ".d.ts"
	nodeInfo = readFile(nodePath)
	nodeInput = nodeInputPattern(nodeInfo)
	nodeInputWords = nodeInputWordsPattern(nodeInput)
	return Response({"inputs": nodeInputWords, "output": node})

@api_view(['GET'])
def folders(request):
	folders = [i.group(2) for i in re.finditer(geometriesFoldersRegex, str(listdir(threejsTypesPath)))]
	return Response({"folders" : folders})


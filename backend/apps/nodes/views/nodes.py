# System imports
from os import listdir

# App imports
from apps.nodes.utils.utils import readFile, nodesNames, geometriesNames
from apps.nodes.utils.regexPatterns import nodesListPattern, nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern
from apps.nodes.utils.paths import threejsTypesPath, threejsGeometriesPath, threeExportationFilePath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

# List of nodes and geometries available for search
nodes = nodesNames(threeExportationFilePath) +  geometriesNames(threejsGeometriesPath)

# File that contains all nodes available for search
text = readFile(threeExportationFilePath)

# Regular expression
geometriesFoldersRegex = re.compile(r"(')(\w+)(')")

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


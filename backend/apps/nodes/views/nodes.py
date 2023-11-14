# App imports
from apps.nodes.services.utils import readFile, nodesNames, geometriesNames
from apps.nodes.services.regexPatterns import nodesListPattern, nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern
from apps.nodes.services.paths import threejsTypesPath, threejsGeometriesPath, threeExportationFilePath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
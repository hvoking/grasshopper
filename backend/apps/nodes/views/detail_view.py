from apps.nodes.services.utils import readFile
from apps.nodes.services.patterns import nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern
from apps.nodes.services.paths import threejsTypesPath, threeExportationFilePath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# File that contains all nodes available for search
text = readFile(threeExportationFilePath)

# Single node matchs request
@api_view(['GET'])
def nodesDetail(request, node):
	nodePath = nodeDetailPattern(node, text)
	nodePath = threejsTypesPath + nodePath[0].replace("'", "").replace('.', '') + ".d.ts"
	nodeInfo = readFile(nodePath)
	nodeInput = nodeInputPattern(nodeInfo)
	nodeInputWords = nodeInputWordsPattern(nodeInput)
	return Response({"inputs": nodeInputWords, "output": node})
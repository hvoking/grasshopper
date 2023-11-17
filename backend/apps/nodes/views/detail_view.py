# App imports
from apps.nodes.services.patterns import nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern

# Utils imports
from apps.utils.paths import threejsTypesPath, threeExportationFilePath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text
	
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
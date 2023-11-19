# App imports
from apps.nodes.services.patterns import nodeDetailPattern, nodeInputPattern, nodeInputWordsPattern

# Utils imports
from apps.utils.paths import threejsTypesPath, threeExportationFilePath

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text
	
# File that contains all nodes available for search
text = readFile(threeExportationFilePath)

def get_details(node):
	nodePath = nodeDetailPattern(node, text)
	nodePath = threejsTypesPath + nodePath[0].replace("'", "").replace('.', '') + ".d.ts"
	nodeInfo = readFile(nodePath)
	nodeInput = nodeInputPattern(nodeInfo)
	nodeInputWords = nodeInputWordsPattern(nodeInput)
	resp = {"inputs": nodeInputWords, "output": node}
	return resp
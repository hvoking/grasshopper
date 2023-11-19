# App imports
from apps.nodes.services.patterns import detail_pattern, input_pattern, words_pattern

# Utils imports
from apps.utils.paths import types_path, exportation_path

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text
	
# File that contains all nodes available for search
text = readFile(exportation_path)

def get_details(node):
	node_path = detail_pattern(node, text)
	node_path = types_path + node_path[0].replace("'", "").replace('.', '') + ".d.ts"
	nodeInfo = readFile(node_path)
	nodeInput = input_pattern(nodeInfo)
	nodeInputWords = words_pattern(nodeInput)
	resp = {"inputs": nodeInputWords, "output": node}
	return resp
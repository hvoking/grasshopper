# App imports
from apps.geometries.services.nodes.patterns import detail_pattern, input_pattern, words_pattern

# Utils imports
from apps.utils.paths import types_path, exportation_path

# Third-party imports
import re

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text
	
# File that contains all nodes available for search
text = readFile(exportation_path)

def get_nodes(node_name):
	node_path = detail_pattern(node_name, text)
	node_path = types_path + node_path[0].replace("'", "").replace('.', '') + ".d.ts"
	nodeInfo = readFile(node_path)
	nodeInput = input_pattern(nodeInfo)
	nodeInputWords = words_pattern(nodeInput)
	resp = {"inputs": nodeInputWords, "output": node_name}
	return resp

def get_geometries(geometry):
	current_path = types_path + "geometries/" + geometry + ".d.ts"
	geometriesTypes = readFile(current_path)
	current_pattern = re.compile(r'(\w+)(\??:) (\w+)(?:[,\)])')
	current_iterator = re.finditer(current_pattern, geometriesTypes)
	interface = [i.groups() for i in current_iterator]
	geometries = [i[0] for i in interface]
	resp = {"inputs": geometries, "output": geometry}
	return resp
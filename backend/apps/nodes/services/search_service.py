# System imports
import os

# Utils imports
from apps.utils.paths import geometries_path, exportation_path

# Third-party imports
import re

def checkNull(regexItem):
	return '' if regexItem == None else regexItem

def nodeInputRegex(node):
	return re.compile(rf"(')({node})(\w+)?(')", re.I)

def search_pattern(node, nodes):
	nodesList = re.finditer(nodeInputRegex(node), str(nodes))
	return set([i.group(2) + checkNull(i.group(3)) for i in nodesList])
	

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

# Opens Three.d.ts file and finds the inputs with regex 
def get_nodes_names(path):
	text = readFile(path)
	current_pattern = re.compile(r"(\w+)(')")
	current_iterator = re.finditer(current_pattern, text)
	resp = [i.group(1) for i in current_iterator]
	return resp

def get_geometries_names(path):
	directory_list = os.listdir(path)
	resp = [i.split('.d.ts')[0] for i in directory_list]
	return resp

# List of nodes and geometries available for search
def get_nodes(node):
	nodes_names = get_nodes_names(exportation_path)
	geometries_names = get_geometries_names(geometries_path)
	nodes = nodes_names + geometries_names
	resp = search_pattern(node, nodes)
	return resp
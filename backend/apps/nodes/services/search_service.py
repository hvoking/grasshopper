# System imports
import os

# Third-party imports
import re

# Utils imports
from apps.utils.paths import threejsGeometriesPath, threeExportationFilePath

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

# Opens Three.d.ts file and finds the inputs with regex 
def get_nodes_names(path):
	text = readFile(path)
	m = re.compile(r"(\w+)(')")
	resp = [i.group(1) for i in re.finditer(m, text)]
	return resp

def get_geometries_names(path):
	resp = [i.split('.d.ts')[0] for i in os.listdir(path)]
	return resp

# List of nodes and geometries available for search
def get_nodes():
	nodes_names = get_nodes_names(threeExportationFilePath)
	geometries_names = get_geometries_names(threejsGeometriesPath)
	resp = nodes_names + geometries_names
	return resp
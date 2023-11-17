# System imports
import os

# Third-party imports
import re

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

# Opens Three.d.ts file and finds the inputs with regex 
def nodesNames(threePath):
	text = readFile(threePath)
	m = re.compile(r"(\w+)(')")
	return [i.group(1) for i in re.finditer(m, text)]

def geometriesNames(geometriesPath):
	return [i.split('.d.ts')[0] for i in os.listdir(geometriesPath)]
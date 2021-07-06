import re
import os

def checkNull(regexItem):
	return '' if regexItem == None else regexItem

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

def parameters(geometryPath, m):
	geometries = {}
	for geometry in os.listdir(geometryPath):
		geoFile = readFile(geometryPath + geometry)
		matches = [i.group(4) for i in re.finditer(m, geoFile)]
		if len(matches):
			geometries[geometry] = matches[0]
	return geometries

def listOfGeometries(path):
	geometries = []
	for i in os.listdir(path):
		if i!='Geometries.d.ts':
			i = i.split(".d.ts")[0]
			geometries.append(i)
	return sorted(geometries)

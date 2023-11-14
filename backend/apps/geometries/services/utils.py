# System imports
import os

# Third-party imports
import re

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

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
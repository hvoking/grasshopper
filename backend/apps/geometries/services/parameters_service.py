# System imports
import os

# Third-party imports
import re

def get_parameters(geometryPath, m):
	geometries = {}
	for geometry in os.listdir(geometryPath):
		geoFile = readFile(geometryPath + geometry)
		matches = [i.group(4) for i in re.finditer(m, geoFile)]
		if len(matches):
			geometries[geometry] = matches[0]
	return geometries
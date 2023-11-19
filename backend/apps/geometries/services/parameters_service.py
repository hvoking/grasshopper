# System imports
import os

# App imports
from apps.utils.paths import geometryPath

# Third-party imports
import re

nodePropertiesRegex = re.compile(r'(constructor)(.*)(\( )(.*)( \))')

def get_parameters(geometryPath):
	geometries = {}
	for geometry in os.listdir(geometryPath):
		geoFile = readFile(geometryPath + geometry)
		matches = [i.group(4) for i in re.finditer(nodePropertiesRegex, geoFile)]
		if len(matches):
			geometries[geometry] = matches[0]
	return geometries
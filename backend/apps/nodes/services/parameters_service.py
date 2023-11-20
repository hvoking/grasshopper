# System imports
import os

# App imports
from apps.utils.paths import geometry_path

# Third-party imports
import re

nodePropertiesRegex = re.compile(r'(constructor)(.*)(\( )(.*)( \))')

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

def get_parameters():
	geometries = {}
	for geometry in os.listdir(geometry_path):
		current_path = geometry_path + geometry
		geoFile = readFile(current_path)
		current_iterator = re.finditer(nodePropertiesRegex, geoFile)
		matches = [i.group(4) for i in current_iterator]
		if len(matches):
			geometries[geometry] = matches[0]
	return geometries
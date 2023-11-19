# App imports
from apps.utils.paths import types_path

# Third-party imports
import re

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

def get_details(geometry):
	current_path = types_path + "geometries/" + geometry + ".d.ts"
	geometriesTypes = readFile(current_path)
	current_pattern = re.compile(r'(\w+)(\??:) (\w+)(?:[,\)])')
	current_iterator = re.finditer(current_pattern, geometriesTypes)
	interface = [i.groups() for i in current_iterator]
	geometries = [i[0] for i in interface]
	resp = {"inputs": geometries, "output": geometry}
	return resp
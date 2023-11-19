# App imports
from apps.utils.paths import threejsTypesPath

# Third-party imports
import re

nodeInterfaceRegex = re.compile(r'(\w+)(\??:) (\w+)(?:[,\)])')

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

def get_details(geometry):
	geometriesTypes = readFile(threejsTypesPath + "geometries/" + geometry + ".d.ts")
	interface = [i.groups() for i in re.finditer(nodeInterfaceRegex, geometriesTypes)]
	geometries = [i[0] for i in interface]
	# types = [i[2] for i in interface]
	resp = {"inputs": geometries, "output": geometry}
	return resp
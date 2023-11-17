# App imports
from apps.utils.paths import threejsTypesPath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

nodeInterfaceRegex = re.compile(r'(\w+)(\??:) (\w+)(?:[,\)])')

def readFile(path):
	with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
	return text

# Opens geometry file and matching the regex
@api_view(['GET'])
def geometriesDetail(request, geometry):
	geometriesTypes = readFile(threejsTypesPath + "geometries/" + geometry + ".d.ts")
	interface = [i.groups() for i in re.finditer(nodeInterfaceRegex, geometriesTypes)]
	geometries = [i[0] for i in interface]
	# types = [i[2] for i in interface]
	resp = {"inputs": geometries, "output": geometry}
	return Response(resp)
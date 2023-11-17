# App imports
from apps.nodes.services.utils import nodesNames, geometriesNames
from apps.nodes.services.patterns import nodesListPattern
from apps.nodes.services.paths import threejsGeometriesPath, threeExportationFilePath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# List of nodes and geometries available for search
nodes = nodesNames(threeExportationFilePath) +  geometriesNames(threejsGeometriesPath)

# Set of nodes starting with requested "${node}" argument
@api_view(['GET'])
def nodesList(request, node):
	return Response({"nodes": nodesListPattern(node, nodes)})
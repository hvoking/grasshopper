# App imports
from apps.nodes.services import list_service
from apps.nodes.services.patterns import nodesListPattern

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Set of nodes starting with requested "${node}" argument
@api_view(['GET'])
def nodesList(request, node):
	nodes = list_service.get_nodes()
	resp = {"nodes": nodesListPattern(node, nodes)}
	return Response(resp)
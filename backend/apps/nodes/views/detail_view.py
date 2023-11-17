# App imports
from apps.nodes.services import detail_service
# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Single node matchs request
@api_view(['GET'])
def nodesDetail(request, node):
	resp = detail_service.get_details(node)
	return Response(resp)
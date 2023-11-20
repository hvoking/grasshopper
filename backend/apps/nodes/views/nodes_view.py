# App imports
from apps.nodes.services.nodes import nodes_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

# Single node matchs request
class NodesView(APIView):
	def get(self, request, **kwargs):
		node_name = self.request.GET.get('node_name')
		type_name = self.request.GET.get('type_name')
		if type_name == "nodes":
			resp = nodes_service.get_nodes(node_name)
		else:
			resp = nodes_service.get_geometries(node_name)
		return Response(resp)
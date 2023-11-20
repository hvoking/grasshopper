# App imports
from apps.nodes.services import search_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

class SearchView(APIView):
	def get(self, request, **kwargs):
		node = self.request.GET.get('node')
		resp = search_service.get_nodes(node)
		return Response(resp)
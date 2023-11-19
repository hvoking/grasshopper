# App imports
from apps.nodes.services import detail_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

# Single node matchs request
class DetailView(APIView):
	def get(self, request, **kwargs):
		node = self.request.GET.get('node')
		resp = detail_service.get_details(node)
		return Response(resp)
# App imports
from apps.nodes.services import folders_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

class FoldersView(APIView):
	def get(self, request, **kwargs):
		resp = folders_service.get_folders()
		return Response(resp)
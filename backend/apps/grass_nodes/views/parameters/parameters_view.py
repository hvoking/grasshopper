# App imports
from apps.grass_nodes.services.parameters import parameters_service

# Third-party imports
from rest_framework.views import APIView
from rest_framework.response import Response

class ParametersView(APIView):
	def get(self, request, **kwargs):
		resp = parameters_service.get_parameters()
		return Response(resp)
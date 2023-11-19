# App imports
from apps.geometries.services import detail_service

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Opens geometry file and matching the regex
@api_view(['GET'])
def geometriesDetail(request, geometry):
	resp = detail_service.get_details(geometry)
	return Response(resp)
# App imports
from apps.geometries.services import parameters_service
from apps.utils.paths import geometryPath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

nodePropertiesRegex = re.compile(r'(constructor)(.*)(\( )(.*)( \))')

@api_view(['GET'])
def geometriesWithParameters(request):
	return Response(parameters_service.get_parameters(geometryPath, nodePropertiesRegex))
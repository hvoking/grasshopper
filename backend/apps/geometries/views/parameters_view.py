# App imports
from apps.geometries.services.utils import parameters
from apps.geometries.services.paths import geometryPath

# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re

nodePropertiesRegex = re.compile(r'(constructor)(.*)(\( )(.*)( \))')

@api_view(['GET'])
def geometriesWithParameters(request):
	return Response(parameters(geometryPath, nodePropertiesRegex))
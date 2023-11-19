# App imports
from apps.files.services import folders_service
# Third-party imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def folders(request):
	resp = folders_service.get_folders()
	return Response({"folders" : resp})
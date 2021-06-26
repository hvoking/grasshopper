from rest_framework import serializers
from .models import Nodes

class NodesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Nodes
		fields = '__all__'
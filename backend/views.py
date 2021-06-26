from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Nodes
from .serializers import NodesSerializer
import re


path = './frontend/node_modules/@types/three/src/Three.d.ts'
with open(path, 'r', encoding = 'utf8') as f:
		text = f.read()
m = re.compile(r"(\w+)(')")
nodes = [i.group(1) for i in re.finditer(m, text)]

def checkNull(a):
		return '' if a == None else a
		

@api_view(['GET'])
def nodesList(request, node):
	n = re.compile(rf"({node})(\w+)?(')")
	searchedNodes = [i.group(1) + checkNull(i.group(2)) for i in re.finditer(n, str(nodes))]
	return Response({"nodes": searchedNodes})

@api_view(['GET'])
def nodesDetail(request, node):
	n = re.compile(rf"(\.\/)(.+)(/)({node})(')")
	p = re.finditer(n, text)
	nodePath = [i.group(0) for i in p]
	url = './frontend/node_modules/@types/three/src'
	nodePath = url + nodePath[0].replace("'", "").replace('.', '') + ".d.ts"
	with open(nodePath, 'r') as f:
		nodeInfo = f.read()
	q = re.compile(r'(constructor\()(.*)(\))')
	nodeConstructor = re.finditer(q, nodeInfo)
	nodeInput = [i.group(2) for i in nodeConstructor]

	r = re.compile(r"(\w+)(\??:)")
	inputWords = re.finditer(r, nodeInput[0])
	nodeInputWords = [i.group(1) for i in inputWords]
	return Response({"nodes": nodeInputWords, "node": node})


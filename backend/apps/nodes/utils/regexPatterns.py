from .utils import checkNull
from .regularExpressions import nodesListRegex, nodeDetailRegex, nodeInputRegex, nodeInputWordsRegex
import re

def nodesListPattern(node, nodes):
	nodesList = re.finditer(nodeInputRegex(node), str(nodes))
	return set([i.group(2) + checkNull(i.group(3)) for i in nodesList])

def nodeDetailPattern(node, text):
	p = re.finditer(nodeInputWordsRegex(node), text)
	return [i.group(0) for i in p]

def nodeInputPattern(nodeInfo):
	nodeConstructor = re.finditer(nodesListRegex, nodeInfo)
	return [i.group(2) for i in nodeConstructor]

def nodeInputWordsPattern(nodeInput):
	inputWords = re.finditer(nodeDetailRegex, nodeInput[0])
	return [i.group(1) for i in inputWords]
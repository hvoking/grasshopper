import re

nodesListRegex = re.compile(r'(constructor\()(.*)(\))')

def nodeInputPattern(nodeInfo):
	nodeConstructor = re.finditer(nodesListRegex, nodeInfo)
	return [i.group(2) for i in nodeConstructor]

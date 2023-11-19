import re

def checkNull(regexItem):
	return '' if regexItem == None else regexItem

def nodeInputRegex(node):
	return re.compile(rf"(')({node})(\w+)?(')", re.I)

def search_pattern(node, nodes):
	nodesList = re.finditer(nodeInputRegex(node), str(nodes))
	return set([i.group(2) + checkNull(i.group(3)) for i in nodesList])
	
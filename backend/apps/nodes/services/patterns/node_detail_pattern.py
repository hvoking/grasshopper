import re

def nodeInputWordsRegex(node):
	return re.compile(rf"(\.\/)(.+)(/)({node})(')")

def nodeDetailPattern(node, text):
	p = re.finditer(nodeInputWordsRegex(node), text)
	return [i.group(0) for i in p]
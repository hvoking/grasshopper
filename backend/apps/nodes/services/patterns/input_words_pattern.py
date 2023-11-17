import re

nodeDetailRegex = re.compile(r"(\w+)(\??:)")

def nodeInputWordsPattern(nodeInput):
	inputWords = re.finditer(nodeDetailRegex, nodeInput[0])
	return [i.group(1) for i in inputWords]
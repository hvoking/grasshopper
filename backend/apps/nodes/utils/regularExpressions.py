import re

# regexPatterns file 
nodesListRegex = re.compile(r'(constructor\()(.*)(\))')
nodeDetailRegex = re.compile(r"(\w+)(\??:)")

def nodeInputRegex(node):
	return re.compile(rf"(')({node})(\w+)?(')", re.I)
	
def nodeInputWordsRegex(node):
	return re.compile(rf"(\.\/)(.+)(/)({node})(')")
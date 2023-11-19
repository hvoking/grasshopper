import re

def input_pattern(nodeInfo):
	current_pattern = re.compile(r'(constructor\()(.*)(\))')
	current_iterator = re.finditer(current_pattern, nodeInfo)
	resp = [i.group(2) for i in current_iterator]
	return resp

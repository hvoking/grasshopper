import re

def words_pattern(nodeInput):
	current_pattern = re.compile(r"(\w+)(\??:)")
	current_iterator = re.finditer(current_pattern, nodeInput[0])
	resp = [i.group(1) for i in current_iterator]
	return resp
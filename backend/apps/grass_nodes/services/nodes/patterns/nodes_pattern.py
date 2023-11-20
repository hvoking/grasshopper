# Third-party imports
import re

def nodes_pattern(node, text):
	current_pattern = re.compile(rf"(\.\/)(.+)(/)({node})")
	current_iterator = re.finditer(current_pattern, text)
	resp = [i.group(0) for i in current_iterator]
	return resp
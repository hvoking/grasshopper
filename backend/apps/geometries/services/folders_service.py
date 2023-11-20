# System imports
from os import listdir

# App imports
from apps.utils.paths import types_path

# Third-party imports
import re

def get_folders():
	current_directory = str(listdir(types_path))
	current_pattern = re.compile(r"(')(\w+)(')")
	current_iterator = re.finditer(current_pattern, current_directory)
	resp = [i.group(2) for i in current_iterator]
	return resp
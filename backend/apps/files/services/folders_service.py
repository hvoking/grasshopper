# System imports
from os import listdir

# App imports
from apps.utils.paths import threejsTypesPath

# Third-party imports
import re

# Regular expression
geometriesFoldersRegex = re.compile(r"(')(\w+)(')")

def get_folders():
	current_directory = str(listdir(threejsTypesPath))
	current_iterator = re.finditer(geometriesFoldersRegex, current_directory)
	resp = [i.group(2) for i in current_iterator]
	return resp
# System imports
from os import listdir

# App imports
from apps.utils.paths import threejsTypesPath

# Third-party imports
import re

# Regular expression
geometriesFoldersRegex = re.compile(r"(')(\w+)(')")

def get_folders():
	resp = [i.group(2) for i in re.finditer(geometriesFoldersRegex, str(listdir(threejsTypesPath)))]
	return resp
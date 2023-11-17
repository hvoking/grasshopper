# System imports
from os import listdir

def get_geometries(path):
	geometries = []
	for i in listdir(path):
		if i!='Geometries.d.ts':
			i = i.split(".d.ts")[0]
			geometries.append(i)
	return sorted(geometries)
# System imports
import os

def get_geometries(path):
	geometries = []
	for i in os.listdir(path):
		if i!='Geometries.d.ts':
			i = i.split(".d.ts")[0]
			geometries.append(i)
	return sorted(geometries)
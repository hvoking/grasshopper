def nodes(arg):
    pass

def geometries(arg):
   pass


# @api_view(['GET'])
# def separation(request, geometry):
# 	m = re.compile(r'(constructor)(.*)(\( )(.*)( \))')
# 	n = re.compile(r'(\w+)( = )([^,]*)')
# 	with open(geometryPath + geometry + "Geometry.js", 'r', encoding = 'utf8') as f:
# 		geometries = f.read()
# 	propertiesWithNames = [i.group(4) for i in re.finditer(m, geometries)][0]
# 	defaultProperties = [i.group(3) for i in re.finditer(n, propertiesWithNames)]
# 	return Response({
# 		"shape": geometry, 
# 		"defaultProperties": defaultProperties, 
# 	})

# Optional function to convert directly strings to their types
# def convertTypes(objects, types):
# 	newObjects = []
# 	for item, objectType in zip(objects, types):
# 		if objectType == "number":
# 			if "Math" not in item:
# 				if '.' not in item:
# 					item = int(item)
# 				else:
# 					item = float(item)
# 			else:
# 				item = item.replace("Math.PI", "pi")
# 				item = eval(item)
# 		newObjects.append(item)
# 	return newObjects

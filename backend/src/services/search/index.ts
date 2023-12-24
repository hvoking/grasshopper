// Third-party imports
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const geometriesPath = path.resolve(__dirname, "../../../../frontend/node_modules/@types/three/src/geometries/");
const exportationPath = path.resolve(__dirname, "../../../../frontend/node_modules/@types/three/src/Three.d.ts");

const getNodesNames = (filePath: any) => {
  const text = readFileSync(filePath);
  const currentPattern = /(\w+)(?=.js')/g;

  const resp = [];
  let match;
  while ((match = currentPattern.exec(text.toString())) !== null) {
    resp.push(match[1]);
  }
  return resp;
};

const getGeometriesNames = (directoryPath: any) => {
  try {
    const directoryList = readdirSync(directoryPath);
    return directoryList.map(i => i.split('.d.ts')[0]);
  } 
  catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
};

export const searchNode = (node: any) => {
  const nodesNames = getNodesNames(exportationPath);
  const geometriesNames = getGeometriesNames(geometriesPath);
  const nodes = nodesNames.concat(geometriesNames);
  const filterNodes = nodes.filter((currentNode: any) => {
    if (currentNode.toLowerCase().includes(node.toLowerCase())) {
      return currentNode
    }
  })
  return filterNodes
};
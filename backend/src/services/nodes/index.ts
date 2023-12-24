// App imports
import { nodesPattern, inputPattern, wordsPattern } from './patterns';

// Third-party imports
import { readFileSync } from 'fs';
import path from 'path';

const nodesTypesPath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src');
const exportationPath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src/Three.d.ts');

const text = readFileSync(exportationPath);

export const getNodes = (nodeName: any) => {
  const nodePath = nodesPattern(nodeName, text);
  const nodePathFormatted = nodesTypesPath + nodePath[0].replace("'", '').replace('.', '') + '.d.ts';
  const nodeInfo = readFileSync(nodePathFormatted);
  const nodeInput = inputPattern(nodeInfo);
  const nodeInputWords = wordsPattern(nodeInput);
  return { inputs: nodeInputWords, output: nodeName };
};

export const getGeometryNode = (geometry: any) => {
  const currentPath = `${nodesTypesPath}/geometries/${geometry}.d.ts`;
  const geometriesTypes = readFileSync(currentPath).toString();
  const currentPattern = /(\w+)(\??:) (\w+)(?:[,\)])/g;
  const currentIterator = [...geometriesTypes.matchAll(currentPattern)];
  const currentInterface = currentIterator.map(i => i.slice(1, 3));
  const geometries = currentInterface.map(i => i[0]);
  return { inputs: geometries, output: geometry };
};
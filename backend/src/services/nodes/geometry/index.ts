// Third-party imports
import { readFileSync } from 'fs';
import path from 'path';

const nodesTypesPath = path.resolve(__dirname, '../../../../../frontend/node_modules/@types/three/src');

export const getGeometryNode = (geometry: any) => {
  const currentPath = `${nodesTypesPath}/geometries/${geometry}.d.ts`;
  const geometriesTypes = readFileSync(currentPath);
  const currentPattern = /(\w+)(\??:) (\w+)(?:[,\)])/g;
  const currentIterator = [...geometriesTypes.toString().matchAll(currentPattern)];
  const currentInterface = currentIterator.map(i => i.slice(1, 3));
  const geometries = currentInterface.map(i => i[0]);
  const resp = { inputs: geometries, output: geometry }
  return resp;
};
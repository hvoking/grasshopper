import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const re = /(constructor)(.*)(\( )(.*)( \))/g;
const geometryPath = path.resolve(__dirname, '../../../../frontend/node_modules/three/src/Geometries/');

export const getParameters = () => {
  const geometries: any = {};
  const geometryFiles = readdirSync(geometryPath);
  geometryFiles.forEach(geometry => {
    const currentPath = `${geometryPath}${geometry}`;
    const geoFile: any = readFileSync(currentPath);
    const currentIterator = [...geoFile.matchAll(re)];
    const matches = currentIterator.map(i => i[4]);
    if (matches.length > 0) {
      geometries[geometry] = matches[0];
    }
  });
  return geometries;
};
// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const srcPath = '../../../../frontend/node_modules/@types/three/src';

export const getFiles = (file: any) => {
  const filePath = path.resolve(__dirname, srcPath + '/' + file);
  const listOfFiles = [];
  const files = readdirSync(filePath);

  for (const file of files) {
    if (file !== 'listOfFiles.d.ts') {
      const geometry = file.split('.d.ts')[0];
      listOfFiles.push(geometry);
    }
  }

  return listOfFiles.sort();
};

export const getGeometries = () => {
  const filePath = path.resolve(__dirname, srcPath + '/geometries');
  const currentDir = readdirSync(filePath)
    .map(item => item.split('.d.ts')[0])
  return currentDir.sort();
};
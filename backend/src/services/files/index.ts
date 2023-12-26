// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const srcPath = '../../../../frontend/node_modules/@types/three/src';

export const getFiles = (file: any) => {
  const filePath = path.resolve(__dirname, srcPath + '/' + file);
  const currentDir = readdirSync(filePath)
    .map(item => item.split('.d.ts')[0])
  return currentDir.sort();
};
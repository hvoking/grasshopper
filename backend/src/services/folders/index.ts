// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const typesPath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src');

export const getFolders = () => {
  try {
    const pattern = /\b(?<!\.)\w+\b(?!\.)/g;
    const directoryFiles = readdirSync(typesPath);
    const resp = directoryFiles.filter((file: any) => file.match(pattern));
    return resp;
  } 
  catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
};
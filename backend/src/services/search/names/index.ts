// Third-party imports
import { readFileSync, readdirSync } from 'fs';

export const getNodesNames = (filePath: any) => {
  const text = readFileSync(filePath);
  const currentPattern = /(\w+)(?=.js')/g;

  const resp = [];
  let match;
  while ((match = currentPattern.exec(text.toString())) !== null) {
    resp.push(match[1]);
  }
  return resp;
};

export const getGeometriesNames = (dirPath: any) => {
  try {
    const directoryList = readdirSync(dirPath);
    return directoryList.map(i => i.split('.d.ts')[0]);
  } 
  catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
};
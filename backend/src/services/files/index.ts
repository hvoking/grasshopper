// Third-party imports
import { readdirSync } from 'fs';

export const getFiles = (path: any) => {
  const listOfFiles = [];
  const files = readdirSync(path);

  for (const file of files) {
    if (file !== 'listOfFiles.d.ts') {
      const geometry = file.split('.d.ts')[0];
      listOfFiles.push(geometry);
    }
  }

  return listOfFiles.sort();
};
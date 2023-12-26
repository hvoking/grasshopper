// App imports
import { getFiles, getGeometries } from '../../services/files';

// Third-party imports
import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const threejsTypesPath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src');

  try {
    const { file } = req.query;
    const path = threejsTypesPath + '/' + file;
    const resp = getFiles(path)
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

router.get('/geometries', (req, res) => {
  try {
    const resp = getGeometries();
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'});
  }
});

export default router;
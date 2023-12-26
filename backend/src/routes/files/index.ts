// App imports
import { getFiles } from '../../services/files';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const { file } = req.query;
    const resp = getFiles(file)
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

export default router;
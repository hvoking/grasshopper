// App imports
import { searchNode } from '../../services/search';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const { currentNode } = req.query;
    const resp = searchNode(currentNode);
    res.send(resp)
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

export default router;
// App imports
import { getParameters } from '../../services/parameters';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/geometries-parameters', (req, res) => {
  try {
    const resp = getParameters();
    res.send(resp)
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

module.exports = router;
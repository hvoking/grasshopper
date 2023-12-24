// App imports
import { getFiles } from './services/files';
import { getFolders } from './services/folders';
import { getGeometries } from './services/geometries';
import { searchNode } from './services/search';
import { getNodes, getGeometryNode } from './services/nodes';
import { getParameters } from './services/parameters';

// Third-party imports
import express, { Express, Request, Response } from 'express';
import cors from "cors";
import path from 'path';

const app: Express = express();
app.use(cors<Request>());
const port: number = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("All good to go")
})

app.get('/geometries/', (req, res) => {
  const geometriesPath = path.resolve(__dirname, '../../frontend/node_modules/@types/three/src/geometries/');
  try {
    const resp = getGeometries(geometriesPath)
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

app.get('/geometries-parameters', (req, res) => {
  try {
    const resp = getParameters();
    res.send(resp)
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

app.get('/folders_api/', (req, res) => {
  try {
    const resp = getFolders()
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

app.get('/files_api', (req, res) => {
  const threejsTypesPath = path.resolve(__dirname, '../../frontend/node_modules/@types/three/src');

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

app.get('/search_api', (req, res) => {
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

app.get('/nodes_api', (req, res) => {
  try {
    const { node_name, type_name } = req.query;
    let resp = null;
    if (type_name === "nodes") {
      resp = getNodes(node_name)
    } 
    else {
      resp = getGeometryNode(node_name)
    }
    resp && res.send(resp)

  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
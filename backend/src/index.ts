// Third-party imports
import express, { Express, Request } from 'express';
import cors from "cors";

// Routes imports
const geometriesRouter = require('./routes/geometries')
const parametersRouter = require('./routes/parameters')
const foldersRouter = require('./routes/folders')
const filesRouter = require('./routes/files')
const searchRouter = require('./routes/search')
const nodesRouter = require('./routes/nodes')

const app: Express = express();
const port: number = 8000;

app.use(cors<Request>());
app.use('/', geometriesRouter);
app.use('/', parametersRouter);
app.use('/', foldersRouter);
app.use('/', filesRouter);
app.use('/', searchRouter);
app.use('/', nodesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
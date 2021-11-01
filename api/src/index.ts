import express from 'express';
import bodyParser from 'body-parser';
import { getItems, createItem } from './db/queries';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  response.json({ info: 'sratatita'});
});

app.get('/items', getItems);
app.post('/items', createItem);

app.listen(port, () => {
  console.log(`app is on ${port}`);
});

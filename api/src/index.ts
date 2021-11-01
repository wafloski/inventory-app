import express from 'express';
import bodyParser from 'body-parser';
import { getItems, getItem, createItem, deleteItem, updateItem } from './db/queries';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  response.json({ info: 'inventory app'});
});

app.get('/items', getItems);
app.get('/items/:id', getItem);
app.post('/items', createItem);
app.patch('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

app.listen(port, () => {
  console.log(`app is on ${port}`);
});

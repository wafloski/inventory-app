const Item = require('./models/Item');

export const getItems = async (_: any, response: any) => {
  try {
    const items = await Item.query();
    response.status(200).send(items);
  }
  catch (error) {
    response.send(error);
  }
};

export const getItem = async (request: any, response: any) => {
  try {
    const item = await Item.query().findById(request.params.id);
    response.status(200).send(item);
  }
  catch (error) {
    response.send(error);
  }
};

export const createItem = async (request: any, response: any) => {
  try {
    const result = await Item.query().insert(request.body);
    response.status(201).send(result);
  }
  catch (error) {
    response.send(error);
  }
};

export const updateItem = async (request: any, response: any) => {
  try {
    await Item.query().update(request.body).where('id', request.params.id);
    response.send(`Item with id: ${request.params.id} updated`);
  }
  catch (error) {
    response.send(error);
  }
};

export const deleteItem = async (request: any, response: any) => {
  try {
    await Item.query().deleteById(request.params.id);
    response.send(`Item with id: ${request.params.id} removed`);
  }
  catch (error) {
    response.send(error);
  }
};

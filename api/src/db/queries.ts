import Item from './models/Item'
import { Request, Response } from 'express';

export const getItems = async (_: unknown, response: Response) => {
  try {
    const items = await Item.query();
    response.status(200).send(items);
  }
  catch (error) {
    response.send(error);
  }
};

export const getItem = async (request: Request, response: Response) => {
  try {
    const item = await Item.query().findById(request.params.id);
    response.status(200).send(item);
  }
  catch (error) {
    response.send(error);
  }
};

export const createItem = async (request: Request, response: Response) => {
  try {
    const result = await Item.query().insert(request.body);
    response.status(201).send(result);
  }
  catch (error) {
    response.send(error);
  }
};

export const updateItem = async (request: Request, response: Response) => {
  try {
    await Item.query().update(request.body).where('id', request.params.id);
    response.send(`Item with id: ${request.params.id} updated`);
  }
  catch (error) {
    response.send(error);
  }
};

export const deleteItem = async (request: Request, response: Response) => {
  try {
    await Item.query().deleteById(request.params.id);
    response.send(`Item with id: ${request.params.id} removed`);
  }
  catch (error) {
    response.send(error);
  }
};

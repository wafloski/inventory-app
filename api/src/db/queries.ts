import * as pg from 'pg';
import { v4 as uuid } from 'uuid';

const { Pool } = pg;

const pool = new Pool({

});

export const getItems = (request: any, response: any) => {
  pool.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
};

export const createItem = (request: any, response: any) => {
  const { name, amount } = request.body;
  const id = uuid();

  pool.query('INSERT INTO items (id, name, amount) VALUES ($1, $2, $3)', [id, name, amount], (error, results) => {
    if (error) {
      throw error
    }
    // @ts-ignore
    response.status(201).send(`User added with ID: ${results.id}`)
  })
};

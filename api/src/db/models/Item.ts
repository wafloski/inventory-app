import { Model } from 'objection';
import knex from '../config/database';

Model.knex(knex);

class Item extends Model {
  static get tableName() {
    return 'items';
  }
}

export default Item;

const { Model } = require('objection');
import knex from '../config/database';

Model.knex(knex);

class Item extends Model {
  static get tableName() {
    return 'items';
  }
}

module.exports = Item;
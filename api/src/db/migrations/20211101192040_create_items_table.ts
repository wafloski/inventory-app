import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').notNullable().primary();
    table.string('name').notNullable();
    table.string('amount');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('items');
}


import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex.raw('TRUNCATE TABLE "items" CASCADE');

    // Deletes ALL existing entries
    await knex("items").del();

    // Inserts seed entries
    await knex("items").insert([
        {name: 'pomidor', amount: 1},
        {name: 'ogorek', amount: 2},
        {name: 'marchew', amount: 3},
        {name: 'cebula', amount: 3},
    ]);
}

import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('users', (table) => {
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('users', (table) => {
    table.dropTimestamps();
  });
}

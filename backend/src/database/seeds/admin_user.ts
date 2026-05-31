import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, name: "Admin", email: process.env.ADMIN_LOGIN, password: process.env.ADMIN_PASSWORD },
    ]);
};

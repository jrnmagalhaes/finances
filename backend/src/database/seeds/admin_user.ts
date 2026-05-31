import type { Knex } from "knex";
import bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);

    await knex("users").insert([
        { id: 1, name: "Admin", email: process.env.ADMIN_LOGIN, password: hashed },
    ]);
};

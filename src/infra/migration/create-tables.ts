import { client } from "../db/connection";

const createTables = async () => {
  await client.connect();
  await client.query(`CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(30),
    password VARCHAR(255)
  );`);

  await client.end();
};

createTables();

import { client } from "../db/connection";

const createDatabase = async () => {
  await client.connect();
  await client.query(`DROP DATABASE IF EXISTS injection_example;`);
  await client.query(`CREATE DATABASE injection_example;`);
  await client.end();
};

createDatabase();

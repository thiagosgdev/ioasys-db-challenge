import { Pool, Client } from "pg";

import config from "../../config/database-credentials";

const client = new Client(config);

const connection = new Pool(config);

export {connection, client}
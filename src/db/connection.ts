import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (connectionString === undefined) {
  throw new Error("Connection String Undefined");
}

const connection = pgPromise()(connectionString);

export default connection;

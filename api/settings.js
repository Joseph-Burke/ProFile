import dotenv from 'dotenv';
dotenv.config();

export const {
  DB_USER: databaseUser,
  DB_HOST: databaseHost,
  DB: databaseName,
  DB_PASS: databasePassword,
  DB_PORT: port,
} = process.env;

export const databaseDialect = 'postgres';

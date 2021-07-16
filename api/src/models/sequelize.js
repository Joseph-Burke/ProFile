import { Sequelize } from 'sequelize';
import {
  databaseDialect,
  databaseUser,
  databaseHost,
  databaseName,
  databasePassword,
  port,
} from '../settings';

export const sequelize = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  {
    host: databaseHost,
    port,
    dialect: databaseDialect,
  }
);

(async () => {
  await sequelize.sync();
})();

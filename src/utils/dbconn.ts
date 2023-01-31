import { DataSource } from "typeorm";
require('env');

export default async function dbconn() {
  const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["../entities/*.js"],
    logging: true,
    synchronize: true,
  });

  await dataSource.initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch(err => console.log('Error during Data Source initialization', err));

  return dataSource;
}
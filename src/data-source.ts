import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'dbLab1',
  entities: [
    __dirname + '/entity/*.ts'
  ],
  synchronize: false
};

export default connectionOptions;

import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  charset: 'utf8mb4',

  ssl: {
    rejectUnauthorized: true
  }
});

export default pool;
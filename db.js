import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: '2JryJAvVwJ6Leno.root',
  password: 'kaRfKal7xZLxcRzJ',
  database: 'test',
  waitForConnections: true,
  charset: 'utf8mb4'
});

export default pool;
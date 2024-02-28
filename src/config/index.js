import { createPool } from 'mysql2/promise'
import { config } from 'dotenv'

config()

export const connection = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  database: process.env.DB_NAME
})

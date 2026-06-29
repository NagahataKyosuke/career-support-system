import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4'
  })

  const [rows] = await connection.execute(`
    SELECT
      id,
      company,
      category,
      start_period,
      recommendation,
      created_at
    FROM experiences
    ORDER BY id DESC
  `)

  await connection.end()

  return rows
})
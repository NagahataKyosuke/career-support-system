import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'career_support',
    charset: 'utf8mb4'
  })

  const [rows] = await connection.execute(`
    SELECT
      id,
      start_period,
      recommendation,
      created_at
    FROM experiences
    ORDER BY id DESC
  `)

  await connection.end()

  return rows
})
import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4'
  })

  const [rows] = await connection.execute(
    'SELECT * FROM experiences WHERE id = ?',
    [id]
  )

  await connection.end()

  if (rows.length === 0) {
    return { error: 'Not Found' }
  }

  return rows[0]
})
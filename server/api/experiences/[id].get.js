import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'career_support',
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
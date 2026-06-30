import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8mb4'
    })

    await connection.execute(
      'DELETE FROM experiences WHERE id = ?',
      [id]
    )

    await connection.end()

    return {
      success: true
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      error: error.message
    }
  }
})
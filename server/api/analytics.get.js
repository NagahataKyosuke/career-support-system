import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4'
  })

  const [categoryData] = await connection.execute(`
    SELECT category, COUNT(*) as count
    FROM experiences
    GROUP BY category
  `)

  const [periodData] = await connection.execute(`
    SELECT start_period, COUNT(*) as count
    FROM experiences
    GROUP BY start_period
  `)

  const [recommendationData] = await connection.execute(`
    SELECT category, AVG(recommendation) as avg_score
    FROM experiences
    GROUP BY category
  `)

  const [companyData] = await connection.execute(`
    SELECT company, COUNT(*) as count
    FROM experiences
    GROUP BY company
    ORDER BY count DESC
    LIMIT 5
  `)

  await connection.end()

  return {
    categoryData,
    periodData,
    recommendationData,
    companyData
  }
})
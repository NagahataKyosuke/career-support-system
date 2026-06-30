import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id
    const body = await readBody(event)

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8mb4'
    })

    await connection.execute(
      `
      UPDATE experiences
      SET
        company=?,
        category=?,
        start_period=?,
        schedule=?,
        sites=?,
        recommendation=?,
        merit=?,
        demerit=?,
        motivation=?,
        gakuchika=?,
        difficulty=?,
        research_method=?,
        self_analysis=?,
        self_analysis_advice=?,
        advice=?
      WHERE id=?
      `,
      [
        body.company,
        body.category,
        body.startPeriod,
        body.schedule,
        body.sites.join(','),
        Number(body.recommendation),
        body.merit,
        body.demerit,
        body.motivation,
        body.gakuchika,
        body.difficulty,
        body.researchMethod,
        body.selfAnalysis.join(','),
        body.selfAnalysisAdvice,
        body.advice,
        id
      ]
    )

    await connection.end()

    return { success: true }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: error.message
    }
  }
})
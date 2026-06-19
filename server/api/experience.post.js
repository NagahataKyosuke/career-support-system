import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  try {
    console.log('API到達')

    const body = await readBody(event)
    console.log('受信データ:', body)

    const connection = await mysql.createConnection({
      host: 'mysql',
      user: 'root',
      password: 'root',
      database: 'career_support',
      charset: 'utf8mb4'
    })

    const [result] = await connection.execute(
      `INSERT INTO experiences (
        company,
        start_period,
        schedule,
        sites,
        recommendation,
        merit,
        demerit,
        motivation,
        gakuchika,
        difficulty,
        research_method,
        research_tool,
        self_analysis,
        self_analysis_advice,
        advice
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?)`,
      [
        body.company || null,
        body.startPeriod || null,
        body.schedule || null,
        body.sites?.join(',') || null,
        Number(body.recommendation),
        body.merit || null,
        body.demerit || null,
        body.motivation || null,
        body.gakuchika || null,
        body.difficulty || null,
        body.researchMethod || null,
        body.researchTool || null,
        body.selfAnalysis?.join(',') || null,
        body.selfAnalysisAdvice || null,
        body.advice || null
      ]
    )

    await connection.end()

    console.log('INSERT成功')
    console.log(result)

    return {
      success: true,
      message: '保存成功'
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      error: error.message
    }
  }
})
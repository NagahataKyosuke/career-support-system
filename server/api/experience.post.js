import mysql from 'mysql2/promise'

function classifyCategory(body) {
  const company = body.company || ''

  // 企業名ベース分類
  const IT = ['NTTデータ', '富士通', 'NEC', 'SCSK', '楽天', 'LINE']
  const MAKER = ['キーエンス', 'パナソニック', 'SONY', 'トヨタ']
  const FINANCE = ['三菱UFJ', 'みずほ', '野村證券']
  const CONSULTING = ['アクセンチュア', 'デロイト', 'PwC']

  if (IT.includes(company)) return 'IT'
  if (MAKER.includes(company)) return 'メーカー'
  if (FINANCE.includes(company)) return '金融'
  if (CONSULTING.includes(company)) return 'コンサル'

  // アンケート回答ベース分類
  const score = {
    IT: 0,
    メーカー: 0,
    金融: 0,
    コンサル: 0
  }

  if (body.researchMethod === 'OpenWork') score.IT += 2
  if (body.researchMethod === 'OB訪問') score.金融 += 2

  if (body.sites?.includes('OfferBox')) {
    score.IT += 1
    score.コンサル += 1
  }

  if ((body.advice || '').includes('論理')) {
    score.コンサル += 2
  }

  let best = 'その他'
  let max = 0

  for (const key in score) {
    if (score[key] > max) {
      max = score[key]
      best = key
    }
  }

  return best
}

export default defineEventHandler(async (event) => {
  try {
    console.log('API到達')

    const body = await readBody(event)
    console.log('受信データ:', body)

    const category = classifyCategory(body)

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
        category,
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
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?)`,
      [
        body.company || null,
        body.category || null,
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
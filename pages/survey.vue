<script setup>
import { ref } from 'vue'

const company = ref('')
const category = ref('')
const startPeriod = ref('')
const schedule = ref('')
const sites = ref([])
const recommendation = ref('')
const merit = ref('')
const demerit = ref('')
const motivation = ref('')
const gakuchika = ref('')
const difficulty = ref('')
const researchMethod = ref('')
const researchTool = ref('')
const selfAnalysis = ref([])
const selfAnalysisAdvice = ref('')
const advice = ref('')
const submittedData = ref(null)

async function submitForm() {
  const data = {
    company: company.value,
    category: category.value,
    startPeriod: startPeriod.value,
    schedule: schedule.value,
    sites: sites.value,
    recommendation: recommendation.value,
    merit: merit.value,
    demerit: demerit.value,
    motivation: motivation.value,
    gakuchika: gakuchika.value,
    difficulty: difficulty.value,
    researchMethod: researchMethod.value,
    researchTool: researchTool.value,
    selfAnalysis: selfAnalysis.value,
    selfAnalysisAdvice: selfAnalysisAdvice.value,
    advice: advice.value
  }

  submittedData.value = data

  try {
    const result = await $fetch('/api/experience', {
      method: 'POST',
      body: data
    })

    console.log(result)
    alert('送信成功')
  }catch (error) {
  console.error('FULL ERROR:', error)
  alert(JSON.stringify(error))
}
}
</script>

<template>
  <div class="survey-page">
    <h1>就活アンケート</h1>

    <div class="question-card">
      <h3>企業名</h3>
      <input v-model="company" type="text">
      <h3>業界カテゴリ</h3>

      <label>
        <input type="radio" v-model="category" value="IT">
        IT
      </label><br>

      <label>
        <input type="radio" v-model="category" value="メーカー">
        メーカー
      </label><br>

      <label>
        <input type="radio" v-model="category" value="金融">
        金融
      </label><br>

      <label>
        <input type="radio" v-model="category" value="コンサル">
        コンサル
      </label><br>

      <label>
        <input type="radio" v-model="category" value="その他">
        その他
      </label>
    </div>

    <div class="question-card">
      <h3>1. 就活を開始した時期</h3>
      <label><input type="radio" v-model="startPeriod" value="学部2年以前">学部2年以前</label>
      <label><input type="radio" v-model="startPeriod" value="学部3年前期">学部3年前期</label>
      <label><input type="radio" v-model="startPeriod" value="学部3年夏">学部3年夏</label>
      <label><input type="radio" v-model="startPeriod" value="学部3年後期">学部3年後期</label>
      <label><input type="radio" v-model="startPeriod" value="学部3年冬">学部3年冬</label>
      <label><input type="radio" v-model="startPeriod" value="学部4年前期">学部4年前期</label>
      <label><input type="radio" v-model="startPeriod" value="学部4年後期">学部4年後期</label>
    </div>

    <div class="question-card">
      <h3>2. 就活スケジュール</h3>
      <textarea v-model="schedule"></textarea>
    </div>

    <div class="question-card">
      <h3>3. 利用した就活サイト</h3>
      <label><input type="checkbox" v-model="sites" value="マイナビ">マイナビ</label>
      <label><input type="checkbox" v-model="sites" value="リクナビ">リクナビ</label>
      <label><input type="checkbox" v-model="sites" value="OfferBox">OfferBox</label>
      <label><input type="checkbox" v-model="sites" value="OpenWork">OpenWork</label>
    </div>

    <div class="question-card">
      <h3>4. おすすめ度</h3>
      <label><input type="radio" v-model="recommendation" value="1">1</label>
      <label><input type="radio" v-model="recommendation" value="2">2</label>
      <label><input type="radio" v-model="recommendation" value="3">3</label>
      <label><input type="radio" v-model="recommendation" value="4">4</label>
      <label><input type="radio" v-model="recommendation" value="5">5</label>
    </div>

    <div class="question-card">
      <h3>5. 利用サイトのメリット</h3>
      <textarea v-model="merit"></textarea>
    </div>

    <div class="question-card">
      <h3>6. 利用サイトのデメリット</h3>
      <textarea v-model="demerit"></textarea>
    </div>

    <div class="question-card">
      <h3>7. ESの志望動機の書き方</h3>
      <textarea v-model="motivation"></textarea>
    </div>

    <div class="question-card">
      <h3>8. ESのガクチカの書き方</h3>
      <textarea v-model="gakuchika"></textarea>
    </div>

    <div class="question-card">
      <h3>9. ESで苦労したこと</h3>
      <textarea v-model="difficulty"></textarea>
    </div>

    <div class="question-card">
      <h3>10. 企業研究の方法</h3>

      <label><input type="radio" v-model="researchMethod" value="HP">HP</label>
      <label><input type="radio" v-model="researchMethod" value="OB訪問">OB訪問</label>
      <label><input type="radio" v-model="researchMethod" value="OpenWork">OpenWork</label>
      <label><input type="radio" v-model="researchMethod" value="説明会">説明会</label>
      <label><input type="radio" v-model="researchMethod" value="SNS">SNS</label>
    </div>

    <div class="question-card">
      <h3>11. おすすめの情報収集ツール</h3>
      <textarea v-model="researchTool"></textarea>
    </div>

    <div class="question-card">
      <h3>12. 自己分析の方法</h3>

      <label>
        <input type="checkbox" v-model="selfAnalysis" value="自己分析ツール">
        自己分析ツール
      </label>

      <label>
        <input type="checkbox" v-model="selfAnalysis" value="友人や先輩">
        友人や先輩
      </label>

      <label>
        <input type="checkbox" v-model="selfAnalysis" value="キャリアセンター">
        キャリアセンター
      </label>
    </div>

    <div class="question-card">
      <h3>13. 自己分析のおすすめ方法</h3>
      <textarea v-model="selfAnalysisAdvice"></textarea>
    </div>

    <div class="question-card">
      <h3>14. 後輩へのアドバイス</h3>
      <textarea v-model="advice"></textarea>
    </div>

    <div class="button-area">
      <button class="submit-btn" @click="submitForm">送信</button>

      <NuxtLink to="/">
        <button class="back-btn">トップへ戻る</button>
      </NuxtLink>
    </div>

    <div v-if="submittedData" class="preview-card">
      <h2>回答内容確認</h2>
      <p>開始時期: {{ submittedData.startPeriod }}</p>
      <p>利用サイト: {{ submittedData.sites.join(', ') }}</p>
      <p>おすすめ度: {{ submittedData.recommendation }}</p>
    </div>
  </div>
</template>

<style scoped>
.survey-page {
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top right, #1e3a8a, transparent 25%),
    radial-gradient(circle at bottom left, #1d4ed8, transparent 25%),
    linear-gradient(135deg, #020617, #0f172a);
  color: white;
}

h1 {
  text-align: center;
  font-size: 52px;
  margin-bottom: 50px;
}

.question-card {
  max-width: 1000px;
  margin: 0 auto 32px auto;
  padding: 32px;
  border-radius: 24px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(96, 165, 250, 0.15);
}

.question-card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #dbeafe;
  font-size: 24px;
}

.question-card label {
  display: block;
  margin: 12px 0;
  font-size: 18px;
}

input[type="text"] {
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 12px;
  padding: 0 16px;
  font-size: 16px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  min-height: 150px;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
}

input[type="radio"],
input[type="checkbox"] {
  margin-right: 12px;
  transform: scale(1.2);
}

.button-area {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 40px 0;
}

.submit-btn,
.back-btn {
  min-width: 200px;
  height: 64px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  transition: all 0.25s ease;
}

.submit-btn:hover,
.back-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.45);
}

.preview-card {
  max-width: 1000px;
  margin: auto;
  padding: 32px;
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.9);
}

.preview-card h2 {
  margin-top: 0;
}
</style>
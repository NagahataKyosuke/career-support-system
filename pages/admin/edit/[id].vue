<script setup>
import { ref } from 'vue'

const route = useRoute()
const id = route.params.id

const { data } = await useFetch(`/api/experiences/${id}`)

const company = ref(data.value?.company || '')
const category = ref(data.value?.category || '')
const startPeriod = ref(data.value?.start_period || '')
const schedule = ref(data.value?.schedule || '')
const sites = ref(data.value?.sites ? data.value.sites.split(',') : [])
const recommendation = ref(String(data.value?.recommendation || ''))
const merit = ref(data.value?.merit || '')
const demerit = ref(data.value?.demerit || '')
const motivation = ref(data.value?.motivation || '')
const gakuchika = ref(data.value?.gakuchika || '')
const difficulty = ref(data.value?.difficulty || '')
const researchMethod = ref(data.value?.research_method || '')
const selfAnalysis = ref(
  data.value?.self_analysis
    ? data.value.self_analysis.split(',')
    : []
)
const selfAnalysisAdvice = ref(
  data.value?.self_analysis_advice || ''
)
const advice = ref(data.value?.advice || '')

async function submitForm() {
  const formData = {
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
    selfAnalysis: selfAnalysis.value,
    selfAnalysisAdvice: selfAnalysisAdvice.value,
    advice: advice.value
  }

  try {
    await $fetch(`/api/experiences/${id}`, {
      method: 'PUT',
      body: formData
    })

    alert('更新成功')
    navigateTo('/experiences')
  } catch (error) {
    console.error(error)
    alert('更新失敗')
  }
}
</script>

<template>
  <div class="survey-page">
    <h1>アンケート編集</h1>

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
      <h3>3. 利用した情報収集サービス（複数選択可）</h3>

      <label>
        <input type="checkbox" v-model="sites" value="マイナビ">
        マイナビ
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="リクナビ">
        リクナビ
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="ONE CAREER">
        ONE CAREER
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="OpenWork">
        OpenWork
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="OfferBox">
        OfferBox
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="dodaキャンパス">
        dodaキャンパス
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="キミスカ">
        キミスカ
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="外資就活">
        外資就活
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="unistyle">
        unistyle
      </label>

      <label>
        <input type="checkbox" v-model="sites" value="その他">
        その他
      </label>
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
      <h3>11. 自己分析の方法</h3>

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
      <h3>12. 自己分析のおすすめ方法</h3>
      <textarea v-model="selfAnalysisAdvice"></textarea>
    </div>

    <div class="question-card">
      <h3>13. 後輩へのアドバイス</h3>
      <textarea v-model="advice"></textarea>
    </div>

    <div class="button-area">
      <button class="submit-btn" @click="submitForm">更新</button>

      <NuxtLink to="/">
        <button class="back-btn">トップへ戻る</button>
      </NuxtLink>
    </div>

  </div>
</template>
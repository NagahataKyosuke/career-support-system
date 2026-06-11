<script setup>
import { ref } from 'vue'

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

function submitForm() {
  submittedData.value = {
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
}
</script>

<template>
  <div>
    <h1>就活アンケート</h1>

    <hr>

    <h3>1. 就活を開始した時期</h3>

    <label><input type="radio" v-model="startPeriod" value="学部2年以前">学部2年以前</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部3年前期">学部3年前期</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部3年夏">学部3年夏</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部3年後期">学部3年後期</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部3年冬">学部3年冬</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部4年前期">学部4年前期</label><br>
    <label><input type="radio" v-model="startPeriod" value="学部4年後期">学部4年後期</label><br>
    <label><input type="radio" v-model="startPeriod" value="修士1年前期">修士1年前期</label><br>
    <label><input type="radio" v-model="startPeriod" value="修士1年夏">修士1年夏</label><br>
    <label><input type="radio" v-model="startPeriod" value="修士1年後期">修士1年後期</label><br>
    <label><input type="radio" v-model="startPeriod" value="修士2年">修士2年</label>

    <hr>

    <h3>2. 就活スケジュール</h3>

    <textarea v-model="schedule" rows="5" cols="60"></textarea>

    <hr>

    <h3>3. 利用した就活サイト（複数選択可）</h3>

    <label><input type="checkbox" v-model="sites" value="マイナビ">マイナビ</label>
    <label><input type="checkbox" v-model="sites" value="リクナビ">リクナビ</label>
    <label><input type="checkbox" v-model="sites" value="OfferBox">OfferBox</label>
    <label><input type="checkbox" v-model="sites" value="OpenWork">OpenWork</label>

    <hr>

    <h3>4. おすすめ度</h3>

    <label><input type="radio" v-model="recommendation" value="1">1</label>
    <label><input type="radio" v-model="recommendation" value="2">2</label>
    <label><input type="radio" v-model="recommendation" value="3">3</label>
    <label><input type="radio" v-model="recommendation" value="4">4</label>
    <label><input type="radio" v-model="recommendation" value="5">5</label>

    <hr>

    <h3>5. 利用サイトのメリット</h3>
    <textarea v-model="merit" rows="5" cols="60"></textarea>

    <h3>6. 利用サイトのデメリット</h3>
    <textarea v-model="demerit" rows="5" cols="60"></textarea>

    <h3>7. ESの志望動機の書き方</h3>
    <textarea v-model="motivation" rows="5" cols="60"></textarea>

    <h3>8. ESのガクチカの書き方</h3>
    <textarea v-model="gakuchika" rows="5" cols="60"></textarea>

    <h3>9. ESで苦労したこと</h3>
    <textarea v-model="difficulty" rows="5" cols="60"></textarea>

    <hr>

    <h3>10. 企業研究の方法</h3>

    <label><input type="radio" v-model="researchMethod" value="HP">HP</label>
    <label><input type="radio" v-model="researchMethod" value="OB訪問">OB訪問</label>
    <label><input type="radio" v-model="researchMethod" value="OpenWork">OpenWork</label>
    <label><input type="radio" v-model="researchMethod" value="説明会">説明会</label>
    <label><input type="radio" v-model="researchMethod" value="SNS">SNS</label>

    <hr>

    <h3>11. おすすめの情報収集ツール</h3>

    <textarea v-model="researchTool" rows="5" cols="60"></textarea>

    <hr>

    <h3>12. 自己分析の方法</h3>

    <label><input type="checkbox" v-model="selfAnalysis" value="自己分析ツール">自己分析ツール</label>
    <label><input type="checkbox" v-model="selfAnalysis" value="友人や先輩">友人や先輩</label>
    <label><input type="checkbox" v-model="selfAnalysis" value="キャリアセンター">キャリアセンター</label>

    <hr>

    <h3>13. 自己分析のおすすめ方法</h3>

    <textarea
      v-model="selfAnalysisAdvice"
      rows="5"
      cols="60"
    ></textarea>

    <hr>

    <h3>14. 後輩へのアドバイス</h3>

    <textarea
      v-model="advice"
      rows="5"
      cols="60"
    ></textarea>

    <hr>

    <button @click="submitForm">
      送信
    </button>

    <NuxtLink to="/">
      <button>トップへ戻る</button>
    </NuxtLink>

    <hr>

    <div v-if="submittedData">
      <h2>回答内容確認</h2>

      <p>開始時期: {{ submittedData.startPeriod }}</p>
      <p>利用サイト: {{ submittedData.sites.join(', ') }}</p>
      <p>おすすめ度: {{ submittedData.recommendation }}</p>
      <p>企業研究方法: {{ submittedData.researchMethod }}</p>
      <p>後輩へのアドバイス: {{ submittedData.advice }}</p>
    </div>
  </div>
</template>
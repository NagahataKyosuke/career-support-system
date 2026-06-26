<script setup>
const route = useRoute()
const id = route.params.id

const { data: experience } = await useFetch(`/api/experiences/${id}`)
</script>

<template>
  <div class="page" v-if="experience">
    <h1>就活体験談詳細</h1>

    <div class="hero-card">
      <h2>{{ experience.company || '企業名未登録' }}</h2>
      <p class="rating">
        {{ '★'.repeat(experience.recommendation || 0) }}
      </p>
    </div>

    <div class="info-card">
      <h3>就活開始時期</h3>
      <p>{{ experience.start_period }}</p>
    </div>

    <div class="info-card">
      <h3>スケジュール</h3>
      <p>{{ experience.schedule }}</p>
    </div>

    <div class="info-card">
      <h3>利用サイト</h3>
      <p>{{ experience.sites }}</p>
    </div>

    <div class="info-card">
      <h3>メリット</h3>
      <p>{{ experience.merit }}</p>
    </div>

    <div class="info-card">
      <h3>デメリット</h3>
      <p>{{ experience.demerit }}</p>
    </div>

    <div class="info-card">
      <h3>志望動機</h3>
      <p>{{ experience.motivation }}</p>
    </div>

    <div class="info-card">
      <h3>ガクチカ</h3>
      <p>{{ experience.gakuchika }}</p>
    </div>

    <div class="info-card">
      <h3>難しかったこと</h3>
      <p>{{ experience.difficulty }}</p>
    </div>

    <div class="info-card">
      <h3>企業研究方法</h3>
      <p>{{ experience.research_method }}</p>
    </div>

    <div class="info-card">
      <h3>企業研究ツール</h3>
      <p>{{ experience.research_tool }}</p>
    </div>

    <div class="info-card">
      <h3>自己分析</h3>
      <p>{{ experience.self_analysis }}</p>
    </div>

    <div class="info-card">
      <h3>自己分析アドバイス</h3>
      <p>{{ experience.self_analysis_advice }}</p>
    </div>

    <div class="info-card">
      <h3>後輩へのアドバイス</h3>
      <p>{{ experience.advice }}</p>
    </div>

    <NuxtLink to="/experiences">
      <button class="back-btn">一覧へ戻る</button>
    </NuxtLink>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 50px 20px;
  background:
    radial-gradient(circle at top right, #1e3a8a, transparent 25%),
    radial-gradient(circle at bottom left, #1d4ed8, transparent 25%),
    linear-gradient(135deg, #020617, #0f172a);
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  font-size: 48px;
  margin-bottom: 40px;
}

.hero-card {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 30px;
  padding: 32px;
  border-radius: 24px;
  background: rgba(30,41,59,0.85);
  text-align: center;
}

.hero-card h2 {
  margin: 0;
  font-size: 38px;
}

.rating {
  color: #facc15;
  font-size: 28px;
}

.info-card {
  max-width: 1000px;
  margin: 0 auto 24px auto;
  padding: 28px;
  border-radius: 20px;
  background: rgba(30,41,59,0.8);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

.info-card h3 {
  margin-top: 0;
  color: #93c5fd;
}

.info-card p {
  line-height: 1.8;
  white-space: pre-wrap;
}

.back-btn {
  display: block;
  margin: 40px auto;
  min-width: 220px;
  height: 60px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
</style>
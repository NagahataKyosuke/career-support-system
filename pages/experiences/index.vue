<script setup>
const { data: experiences } = await useFetch('/api/experiences')
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="logo">Career Support System</div>

      <nav class="nav">
        <NuxtLink to="/">ホーム</NuxtLink>
        <NuxtLink to="/survey">アンケート</NuxtLink>
      </nav>
    </header>

    <div class="container">
      <h1>就活体験談一覧</h1>

      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="card"
      >
        <NuxtLink
          :to="`/experiences/${experience.id}`"
          class="card-link"
        >
          <div class="card-top">
            <h2>{{ experience.company || '企業名未登録' }}</h2>

            <span class="rating">
              {{ '★'.repeat(experience.recommendation || 0) }}
            </span>
          </div>

          <p>就活開始時期: {{ experience.start_period }}</p>
          <p>登録日時: {{ experience.created_at }}</p>

          <div class="detail-text">
            詳細を見る →
          </div>
        </NuxtLink>
      </div>

      <div class="back-button">
        <NuxtLink to="/">
          <button>トップへ戻る</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top right, #1e3a8a, transparent 25%),
    radial-gradient(circle at bottom left, #1d4ed8, transparent 25%),
    linear-gradient(135deg, #020617, #0f172a);
  color: white;
}

.header {
  width: 100%;
  height: 90px;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(96,165,250,0.15);
}

.logo {
  font-size: 28px;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 28px;
}

.nav a {
  text-decoration: none;
  color: #cbd5e1;
  font-weight: 600;
}

.nav a:hover {
  color: #60a5fa;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 50px 20px;
}

h1 {
  text-align: center;
  font-size: 52px;
  margin-bottom: 50px;
}

.card {
  margin-bottom: 28px;
  border-radius: 24px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.25);
  transition: all 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card-link {
  display: block;
  padding: 28px;
  text-decoration: none;
  color: white;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card h2 {
  margin: 0;
  font-size: 34px;
}

.rating {
  color: #facc15;
  font-size: 24px;
}

.card p {
  margin: 16px 0;
  font-size: 20px;
  color: #cbd5e1;
}

.detail-text {
  margin-top: 20px;
  color: #60a5fa;
  font-weight: 700;
}

.back-button {
  text-align: center;
  margin-top: 40px;
}

button {
  min-width: 220px;
  height: 60px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
</style>
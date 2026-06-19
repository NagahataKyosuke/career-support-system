<script setup>
const { data: experiences } = await useFetch('/api/experiences')
</script>

<template>
  <div class="container">
    <h1>就活体験談一覧</h1>

    <div
      v-for="experience in experiences"
      :key="experience.id"
      class="card"
    >
      <NuxtLink :to="`/experiences/${experience.id}`">
        <h2>{{ experience.company || '企業名未登録' }}</h2>
      </NuxtLink>

      <p>就活開始時期: {{ experience.start_period }}</p>

      <p>
        おすすめ度:
        {{ '★'.repeat(experience.recommendation || 0) }}
      </p>

      <p>登録日時: {{ experience.created_at }}</p>
    </div>

    <div class="back-button">
      <NuxtLink to="/">
        <button>トップへ戻る</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background: #f5f7fb;
  font-family: sans-serif;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 42px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card h2 {
  margin-top: 0;
  color: #2563eb;
  font-size: 32px;
}

.card a {
  text-decoration: none;
}

.card p {
  margin: 12px 0;
  font-size: 20px;
}

.back-button {
  text-align: center;
  margin-top: 40px;
}

button {
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}
.button-area {
  display: inline-flex;
  gap: 20px;
  padding: 20px;
  border: 3px solid #2563eb;
  border-radius: 20px;
  background: white;
}
</style>
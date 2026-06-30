<script setup>
import { ref, computed } from 'vue'

const { data: experiences } = await useFetch('/api/experiences')

const password = ref('')
const isAdmin = ref(false)

/* 検索用 */
const searchKeyword = ref('')
const selectedCategory = ref('')

const filteredExperiences = computed(() => {
  if (!experiences.value) return []

  return experiences.value.filter(exp => {
    const companyMatch =
      !searchKeyword.value ||
      exp.company?.includes(searchKeyword.value)

    const categoryMatch =
      !selectedCategory.value ||
      exp.category === selectedCategory.value

    return companyMatch && categoryMatch
  })
})

function login() {
  if (password.value === 'nagahata123') {
    isAdmin.value = true
    alert('管理者ログイン成功')
  } else {
    alert('パスワードが違います')
  }
}

async function deleteExperience(id) {
  const ok = confirm('本当に削除しますか？')
  if (!ok) return

  try {
    await $fetch(`/api/experiences/${id}`, {
      method: 'DELETE'
    })

    alert('削除成功')
    location.reload()
  } catch (error) {
    console.error(error)
    alert('削除失敗')
  }
}
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="logo">Career Support System</div>

      <nav class="nav">
        <NuxtLink to="/">ホーム</NuxtLink>
        <NuxtLink to="/survey">アンケート</NuxtLink>
        <NuxtLink to="/analytics">分析ダッシュボード</NuxtLink>
      </nav>
    </header>

    <div class="container">
      <h1>就活体験談一覧</h1>

      <!-- 絞り込み検索 -->
      <div class="filter-box">
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="企業名で検索"
        >

        <select v-model="selectedCategory">
          <option value="">すべて</option>
          <option value="IT">IT</option>
          <option value="メーカー">メーカー</option>
          <option value="金融">金融</option>
          <option value="コンサル">コンサル</option>
          <option value="その他">その他</option>
        </select>
      </div>

      <div class="admin-login" v-if="!isAdmin">
        <input
          v-model="password"
          type="password"
          placeholder="管理者パスワード"
        >
        <button @click="login">ログイン</button>
      </div>

      <div
        v-for="experience in filteredExperiences"
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

          <p>業界カテゴリ: {{ experience.category || '未分類' }}</p>
          <p>就活開始時期: {{ experience.start_period }}</p>
          <p>登録日時: {{ experience.created_at }}</p>

          <div class="detail-text">
            詳細を見る →
          </div>
        </NuxtLink>

        <div v-if="isAdmin" class="admin-buttons">
          <NuxtLink :to="`/admin/edit/${experience.id}`">
            <button class="edit-btn">編集</button>
          </NuxtLink>

          <button
            class="delete-btn"
            @click="deleteExperience(experience.id)"
          >
            削除
          </button>
        </div>
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
  gap: 32px;
  align-items: center;
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
  margin-bottom: 40px;
}

/* 検索 */
.filter-box {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.filter-box input,
.filter-box select {
  height: 50px;
  border: none;
  border-radius: 12px;
  padding: 0 16px;
  font-size: 16px;
}

.filter-box input {
  width: 300px;
}

.filter-box select {
  width: 180px;
}

.admin-login {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.admin-login input {
  width: 300px;
  height: 50px;
  border-radius: 12px;
  border: none;
  padding: 0 16px;
}

.card {
  margin-bottom: 28px;
  border-radius: 24px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.25);
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

.admin-buttons {
  padding: 0 28px 28px 28px;
}

.edit-btn {
  width: 120px;
  height: 45px;
  background: #10b981;
  border: none;
  border-radius: 12px;
  color: white;
}

.delete-btn {
  width: 120px;
  height: 45px;
  margin-left: 12px;
  background: #ef4444;
  border: none;
  border-radius: 12px;
  color: white;
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
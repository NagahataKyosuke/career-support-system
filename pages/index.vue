<template>
  <div class="page">
    <header class="header">
      Career Support System
    </header>

    <main class="hero">
      <h1>就活情報共有システム</h1>

      <div class="menu-card">
        <NuxtLink to="/experiences">
          <button>📖 体験談を見る</button>
        </NuxtLink>

        <NuxtLink to="/survey">
          <button>📝 アンケート回答</button>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<style>
/* 1. 背景 */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top right, #dbeafe, transparent 30%),
    radial-gradient(circle at bottom left, #c7d2fe, transparent 30%),
    linear-gradient(135deg, #f8fafc, #e2e8f0);
}

/* 全体 */
.page {
  min-height: 100vh;
}

/* 5. ヘッダー改善 */
.header {
  width: 100%;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  padding: 24px 40px;
  font-size: 28px;
  font-weight: 700;
  box-sizing: border-box;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

/* 中央配置 */
.hero {
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 2. タイトル調整 */
h1 {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 60px;
}

/* 4. カード風 */
.menu-card {
  display: flex;
  gap: 32px;
  padding: 50px;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px);
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow:
    0 20px 40px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.7);
}

/* 3. ボタン改善 */
button {
  width: 280px;
  height: 90px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  transition: all 0.25s ease;
}

button:hover {
  transform: translateY(-4px) scale(1.02);
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}
</style>
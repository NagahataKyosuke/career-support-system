<template>
  <div class="page">
    <header class="header">
      <div class="logo">Career Support System</div>

      <nav class="nav">
        <NuxtLink to="/experiences">体験談一覧</NuxtLink>
        <NuxtLink to="/survey">アンケート</NuxtLink>
      </nav>
    </header>

    <main class="hero">
      <h1>就活情報共有システム</h1>

      <p class="description">
        先輩たちの就職活動の経験を共有し、<br>
        これから就活を始める学生の情報収集をサポートします。
      </p>

      <div class="menu-card">
        <NuxtLink to="/experiences" class="menu-link">
          <div class="menu-button">
            <div class="icon">📖</div>
            <div>
              <h2>体験談を見る</h2>
              <p>先輩の就活経験を閲覧</p>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/survey" class="menu-link">
          <div class="menu-button">
            <div class="icon">📝</div>
            <div>
              <h2>アンケート回答</h2>
              <p>あなたの経験を共有</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </main>

    <footer class="footer">
      Doshisha University Career Support Project
    </footer>
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

/* Header */
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  border-bottom: 1px solid rgba(96,165,250,0.15);
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #f8fafc;
}

.nav {
  display: flex;
  gap: 28px;
}

.nav a {
  text-decoration: none;
  color: #cbd5e1;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s;
}

.nav a:hover {
  color: #60a5fa;
}

/* Main */
.hero {
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  animation: fadeIn 1s ease;
}

h1 {
  font-size: 64px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  text-shadow: 0 4px 20px rgba(0,0,0,0.25);
  animation: float 4s ease-in-out infinite;
}

.description {
  text-align: center;
  font-size: 22px;
  color: #cbd5e1;
  margin-bottom: 60px;
  line-height: 1.8;
}

.menu-card {
  display: flex;
  gap: 32px;
  padding: 24px;
  border-radius: 30px;
  background: rgba(30, 41, 59, 0.75);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(96,165,250,0.18);
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
  animation: slideUp 1.2s ease;
}

.menu-link {
  text-decoration: none;
  color: inherit;
}

.menu-button {
  width: 360px;
  height: 180px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 24px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  box-shadow:
    0 8px 24px rgba(37,99,235,0.35),
    inset 0 1px 0 rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.menu-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 70%;
  height: 100%;
  background: rgba(255,255,255,0.18);
  transform: skewX(-25deg);
  transition: 0.8s;
}

.menu-button:hover::before {
  left: 140%;
}

.menu-button:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 24px 48px rgba(37,99,235,0.45),
    inset 0 1px 0 rgba(255,255,255,0.2);
}

.icon {
  font-size: 56px;
}

.menu-button h2 {
  margin: 0 0 10px 0;
  font-size: 25px;
  color: white;
}

.menu-button p {
  margin: 0;
  color: #dbeafe;
  font-size: 18px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  color: #94a3b8;
  font-size: 14px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
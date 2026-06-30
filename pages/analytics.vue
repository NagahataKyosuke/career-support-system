<script setup>
import { computed } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Pie, Bar } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
)

const { data } = await useFetch('/api/analytics')

const categoryChart = computed(() => ({
  labels:
    data.value?.categoryData
      ?.filter(item => item.category)
      .map(item => item.category) || [],
  datasets: [
    {
      data:
        data.value?.categoryData
          ?.filter(item => item.category)
          .map(item => item.count) || [],
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6'
      ]
    }
  ]
}))

const categorySummary = computed(() => {
  const items =
    data.value?.categoryData?.filter(item => item.category) || []

  const total = items.reduce((sum, item) => sum + item.count, 0)

  return items.map(item => ({
    category: item.category,
    percent: total === 0
      ? 0
      : ((item.count / total) * 100).toFixed(1)
  }))
})

const periodChart = computed(() => ({
  labels:
    data.value?.periodData?.map(item => item.start_period) || [],
  datasets: [
    {
      label: '人数',
      data:
        data.value?.periodData?.map(item => item.count) || [],
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      borderWidth: 1,
      borderRadius: 8
    }
  ]
}))

const recommendationChart = computed(() => ({
  labels:
    data.value?.recommendationData
      ?.filter(item => item.category)
      .map(item => item.category) || [],
  datasets: [
    {
      label: '平均おすすめ度',
      data:
        data.value?.recommendationData
          ?.filter(item => item.category)
          .map(item => Number(item.avg_score)) || [],
      backgroundColor: '#10b981',
      borderColor: '#10b981',
      borderWidth: 1,
      borderRadius: 8
    }
  ]
}))

const companyChart = computed(() => ({
  labels:
    data.value?.companyData
      ?.filter(item => item.company)
      .map(item => item.company) || [],
  datasets: [
    {
      label: '回答数',
      data:
        data.value?.companyData
          ?.filter(item => item.company)
          .map(item => item.count) || [],
      backgroundColor: '#f59e0b',
      borderColor: '#f59e0b',
      borderWidth: 1,
      borderRadius: 8
    }
  ]
}))

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>

<template>
  <div class="analytics-page">
    <h1>分析ダッシュボード</h1>

    <div class="chart-card">
      <h2>業界別割合</h2>

      <div class="chart-wrapper pie-layout">
        <div class="pie-area">
          <Pie :data="categoryChart" />
        </div>

        <div class="summary-card">
          <h3>割合一覧</h3>

          <div
            v-for="item in categorySummary"
            :key="item.category"
            class="summary-row"
          >
            <span>{{ item.category }}</span>
            <span>{{ item.percent }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chart-card">
      <h2>就活開始時期</h2>
      <div class="chart-wrapper">
        <Bar :data="periodChart" :options="barOptions" />
      </div>
    </div>

    <div class="chart-card">
      <h2>業界別おすすめ度平均</h2>
      <div class="chart-wrapper">
        <Bar :data="recommendationChart" :options="barOptions" />
      </div>
    </div>

    <div class="chart-card">
      <h2>人気企業ランキング TOP5</h2>
      <div class="chart-wrapper">
        <Bar :data="companyChart" :options="barOptions" />
      </div>
    </div>

    <NuxtLink to="/">
      <button>トップへ戻る</button>
    </NuxtLink>
  </div>
</template>

<style scoped>
.analytics-page {
  min-height: 100vh;
  padding: 40px;
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

.chart-card {
  max-width: 1000px;
  margin: 40px auto;
  padding: 32px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.chart-card h2 {
  color: black;
  text-align: center;
  margin-bottom: 30px;
}

.chart-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
}

.pie-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.pie-area {
  width: 420px;
  height: 420px;
}

.summary-card {
  min-width: 260px;
  padding: 24px;
  border-radius: 18px;
  background: #f8fafc;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.summary-card h3 {
  color: black;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
  font-size: 18px;
  color: black;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}

button {
  display: block;
  margin: 40px auto;
  padding: 16px 32px;
  border: none;
  border-radius: 16px;
  background: #2563eb;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>
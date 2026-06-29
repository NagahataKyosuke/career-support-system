<script setup>
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
  labels: data.value.categoryData.map(item => item.category),
  datasets: [
    {
      data: data.value.categoryData.map(item => item.count)
    }
  ]
}))

const periodChart = computed(() => ({
  labels: data.value.periodData.map(item => item.start_period),
  datasets: [
    {
      label: '人数',
      data: data.value.periodData.map(item => item.count)
    }
  ]
}))

const recommendationChart = computed(() => ({
  labels: data.value.recommendationData.map(item => item.category),
  datasets: [
    {
      label: '平均おすすめ度',
      data: data.value.recommendationData.map(item => item.avg_score)
    }
  ]
}))

const companyChart = computed(() => ({
  labels: data.value.companyData.map(item => item.company),
  datasets: [
    {
      label: '回答数',
      data: data.value.companyData.map(item => item.count)
    }
  ]
}))
</script>

<template>
  <div class="analytics-page">
    <h1>分析ダッシュボード</h1>

    <div class="chart-card">
      <h2>業界別割合</h2>
      <Pie :data="categoryChart" />
    </div>

    <div class="chart-card">
      <h2>就活開始時期</h2>
      <Bar :data="periodChart" />
    </div>

    <div class="chart-card">
      <h2>業界別おすすめ度平均</h2>
      <Bar :data="recommendationChart" />
    </div>

    <div class="chart-card">
      <h2>人気企業ランキング TOP5</h2>
      <Bar :data="companyChart" />
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
}

.chart-card h2 {
  color: black;
  text-align: center;
  margin-bottom: 30px;
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
</style>
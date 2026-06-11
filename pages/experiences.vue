<script setup>
import { ref, computed } from 'vue'

const experiences = [
  {
    company: 'キーエンス',
    startPeriod: '学部3年夏',
    advice: 'インターンに積極的に参加した'
  },
  {
    company: 'NTTデータ',
    startPeriod: '修士1年前期',
    advice: 'OB訪問が役立った'
  },
  {
    company: '富士通',
    startPeriod: '学部3年冬',
    advice: 'ESを早めに作成した'
  }
]

const searchKeyword = ref('')

const filteredExperiences = computed(() => {
  return experiences.filter(experience =>
    experience.company.includes(searchKeyword.value)
  )
})
</script>

<template>
  <div>
    <h1>就活体験談一覧</h1>

    <input
      v-model="searchKeyword"
      placeholder="企業名を検索"
    >

    <div
      v-for="experience in filteredExperiences"
      :key="experience.company"
    >
      <hr>

      <h2>{{ experience.company }}</h2>

      <p>
        就活開始時期:
        {{ experience.startPeriod }}
      </p>

      <p>
        アドバイス:
        {{ experience.advice }}
      </p>
    </div>

    <hr>

    <NuxtLink to="/">
      <button>トップへ戻る</button>
    </NuxtLink>
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.params.id

const { data: experience } = await useFetch(`/api/experiences/${id}`)
</script>

<template>
  <div v-if="experience">
    <h1>就活体験談詳細</h1>

    <p>ID: {{ experience.id }}</p>
    <p>就活開始時期: {{ experience.start_period }}</p>
    <p>スケジュール: {{ experience.schedule }}</p>
    <p>利用サイト: {{ experience.sites }}</p>
    <p>おすすめ度: {{ experience.recommendation }}</p>
    <p>メリット: {{ experience.merit }}</p>
    <p>デメリット: {{ experience.demerit }}</p>
    <p>志望動機: {{ experience.motivation }}</p>
    <p>ガクチカ: {{ experience.gakuchika }}</p>
    <p>難しかったこと: {{ experience.difficulty }}</p>
    <p>企業研究方法: {{ experience.research_method }}</p>
    <p>企業研究ツール: {{ experience.research_tool }}</p>
    <p>自己分析: {{ experience.self_analysis }}</p>
    <p>自己分析アドバイス: {{ experience.self_analysis_advice }}</p>
    <p>アドバイス: {{ experience.advice }}</p>

    <NuxtLink to="/experiences">
      <button>一覧へ戻る</button>
    </NuxtLink>
  </div>
</template>
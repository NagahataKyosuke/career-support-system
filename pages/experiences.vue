<script setup>
const { data: experiences } = await useFetch('/api/experiences')
</script>

<template>
  <div>
    <h1>就活体験談一覧</h1>

    <div
      v-for="experience in experiences"
      :key="experience.id"
    >
      <hr>

      <h2>ID: {{ experience.id }}</h2>

      <p>
        就活開始時期:
        {{ experience.start_period }}
      </p>

      <p>
        おすすめ度:
        {{ experience.recommendation }}
      </p>

      <p>
        登録日時:
        {{ experience.created_at }}
      </p>
    </div>

    <hr>

    <NuxtLink to="/">
      <button>トップへ戻る</button>
    </NuxtLink>
  </div>
</template>
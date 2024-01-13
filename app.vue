<template>
  <div>
    <NuxtLoadingIndicator color="amber" />
    <NuxtPageLoader v-if="loading" />
    <NuxtLayout v-else-if="!loading">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const nuxt = useNuxtApp();
const loading = ref(true);
nuxt.hook("app:mounted", (app) => {
  loading.value = false;
});
const test = ref();
</script>

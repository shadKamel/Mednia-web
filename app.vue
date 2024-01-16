<template>
  <div class="font-Inter">
    <NuxtLoadingIndicator color="sky" />
    <!-- <NuxtPageLoader v-if="loading" /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const nuxt = useNuxtApp();
const loading = ref(true);
// nuxt.hook("app:mounted", (app) => {
//   loading.value = false;
// });
const test = ref();
</script>

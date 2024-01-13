<template>
  <div
    class="bg-gradient-to-r from-amber-500 to-rose-500 h-[50px] flex items-center justify-center"
  >
    <ul class="space-x-10 flex">
      <li>
        <NuxtLink
          :to="{ name: 'index' }"
          class="text-white font-semibold capitalize"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'posts' }"
          class="text-white font-semibold capitalize"
        >
          posts
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'index' }"
          class="text-white font-semibold capitalize"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'index' }"
          class="text-white font-semibold capitalize"
        >
          Home
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

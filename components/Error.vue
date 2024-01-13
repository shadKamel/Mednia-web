<template>
  <div class="text-red-500 font-medium text-xs">
    <ul
      class="list-inside list-disc space-y-1"
      v-if="typeof props.error === 'object'"
    >
      <li v-for="(error, index) in props.error" :key="index">
        {{ error }}
      </li>
    </ul>
    <span v-else v-text="props.error"></span>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error?: string | Object;
}>();
</script>

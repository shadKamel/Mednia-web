<template>
  <div class="bg-red-500 rounded-md shadow p-5">
    {{ props.item }}
  </div>
</template>

<script setup lang="ts">
import type { Item } from "@types";
const props = defineProps<{
  item: Item;
}>();
</script>

<template>
    <Icon :icon="props.icon" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const props = defineProps<{
    icon: string
}>()
</script>

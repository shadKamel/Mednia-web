<template>
  <div class="space-x-2">
    <input
      v-bind="$attrs"
      type="checkbox"
      class="accent-rose-600 w-4 h-4"
      :checked="props.modelValue"
      @change="
        (e: Event) =>
          $emit('update:modelValue', (e.target as HTMLInputElement).value)
      "
    />

    <label class="cursor-pointer" :for="id" v-text="props.label" />
  </div>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
const props = defineProps<{
  modelValue: any;
  label?: string;
}>();

defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits(["update:modelValue"]);

const id = computed<string>(() => attrs.id as string);
</script>

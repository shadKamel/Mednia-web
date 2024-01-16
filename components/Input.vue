<template>
  <div class="flex flex-col space-y-1">
    <label
      v-if="props.label"
      class="capitalize font-medium text-lg"
      :for="`${$attrs.id as string}`"
      v-text="props.label"
    />
    <input
      class="bg-gray-100 rounded-lg w-full px-3 py-2"
      v-bind="$attrs"
      :value="props.modelValue"
      @input="
        (e: Event) => {
          emits('update:modelValue', (e.target as HTMLInputElement)?.value);
        }
      "
    />
    <Error :error="props.errors" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    errors?: string | Object;
    label?: string;
    modelValue: any;
  }>(),
  {
    modelValue: "",
  }
);

const emits = defineEmits(["update:modelValue"]);
</script>

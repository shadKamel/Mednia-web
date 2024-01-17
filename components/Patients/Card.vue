<template>
  <div class="bg-white rounded-md flex overflow-hidden max-h-[5rem]">
    <img
      src="/imgs/patient.png"
      class="aspect-square object-cover object-center w-20 h-20"
    />
    <div class="flex flex-1 divide-x-2 p-3">
      <div class="flex-1">
        <p class="font-semibold text-lg capitalize">{{ fullname }} {{}}</p>
        <p class="text-[#669BBC] font-semibold">
          {{ birthDate }}
        </p>
      </div>
      <button
        class="flex items-center px-3 hover:bg-gray-100 transition-all duration-200"
        @click="() => $emit('selectPatient', props.patient)"
      >
        <img src="/imgs/chevron-right.png" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
const props = defineProps({
  patient: Object,
});

const emit = defineEmits(["selectPatient"]);

const birthDate = useDateFormat(props.patient?.birthDate, "YYYY-MM-DD");
const fullname = computed(() => {
  return `${props.patient?.firstName}  ${props.patient?.secondName}  ${props.patient?.thirdName} (${props.patient?.phoneNumber})`;
});
</script>

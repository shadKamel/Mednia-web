<template>
  <div class="min-w-[600px] px-10 sticky h-screen top-0 bg-[#F0F0F0]">
    <h1 class="mt-[100px] font-semibold text-4xl capitalize">
      medical histories
    </h1>

    <div class="mt-9 space-y-2">
      <div class="flex justify-between">
        <h2 class="text-2xl capitalize">patients</h2>

        <div class="space-x-3">
          <button class="rounded-full p-2 bg-[#669BBC]">
            <img src="/imgs/plus.svg" class="w-6 h-6" alt="" />
          </button>
          <button class="rounded-full p-2 bg-white">
            <img src="/imgs/filter.svg" class="w-6 h-6" alt="" />
          </button>
        </div>
      </div>

      <div class="flex items-center bg-white px-1 rounded-md">
        <img src="/imgs/search.svg" class="w-8 h-8" alt="" />
        <input
          v-model="search"
          class="px-5 py-3 flex-1 placeholder:capitalize"
          placeholder="search..."
        />
      </div>
    </div>

    <div class="my-10 space-y-4">
      <h2 class="text-xl capitalize">Results</h2>
      <!-- {{ patientStore.selectedPatient }} -->
      <div class="space-y-4">
        <PatientsCard
          v-for="(patient, index) in props.patients"
          :patient="patient"
          @selectPatient="(patient) => (patientStore.selectedPatient = patient)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["patients"]);
const search = ref("");

const patientStore = useMyPatientsStore();
</script>

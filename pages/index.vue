<template>
  <main class="flex items-start">
    <HomeMedicalHistories :patients="patients" class="overflow-auto" />
    <HomePatientProfile />
  </main>
</template>

<script lang="ts" setup>
const {
  data: patients,
  pending: loading,
  error: patientsError,
} = useFetch("/api/patient");
</script>

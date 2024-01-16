<template>
  <main class="flex items-start">
    <HomeMedicalHistories class="overflow-auto" />
    <HomePatientProfile />
    {{patients}}
  </main>
</template>

<script lang="ts" setup>
const {
  data: patients,
  pending: loading,
  error: patientsError,
} = useFetch("/api/patient");   
</script>

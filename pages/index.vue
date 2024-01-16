<template>
  <main class="flex items-start">
    <HomeMedicalHistories class="overflow-auto" />
    <HomePatientProfile />
  </main>
</template>

<script lang="ts" setup>
const {
  data: Patients,
  pending: loading,
  error: patientsError,
} = useFetch("/", {
  baseURL: "askdjfslkd",
});
</script>

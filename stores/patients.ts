import { defineStore } from "pinia";
export const useMyPatientsStore = defineStore("patients", () => {
  const selectedPatient = ref<{
    [key: string]: any;
  }>({});

  return {
    selectedPatient,
  };
});

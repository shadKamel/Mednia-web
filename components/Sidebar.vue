<template>
  <div class="w-[110px] fixed h-full bg-[#003049]">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex justify-center items-center py-5 bg-[#1E1E1E]">
          <img src="/imgs/Mednia.svg" alt="" />
        </div>
        <div class="flex flex-col space-y-5 mt-10">
          <NuxtLink
            v-for="(link, index) in links"
            :to="{ name: link.name }"
            class="flex justify-center text-center text-white py-3"
            activeClass="bg-white text-black"
          >
            <Icon :icon="link.icon" class="w-8 h-8" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col py-5 space-y-5">
        <div class="flex justify-center">
          <button>
            <img src="/imgs/log-in.png" alt="" />
          </button>
        </div>
        <div class="flex justify-center">
          <img src="/imgs/profile.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    icon: "iconoir:home-simple-door",
    name: "index",
  },
  {
    icon: "solar:notification-unread-lines-linear",
    name: "Patients",
  },
  {
    icon: "iconoir:round-flask",
    name: "Patients",
  },
  {
    icon: "iconoir:chat-bubble",
    name: "Patients",
  },
  {
    icon: "iconoir:user",
    name: "Patients",
  },
]);
</script>

<style scoped></style>

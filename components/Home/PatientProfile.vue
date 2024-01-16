<template>
  <div class="w-full ps-4">
    <div class="bg-[#F0F0F0] p-6 flex space-x-5">
      <div>
        <img src="/imgs/patient.png" class="rounded-md" alt="" />
      </div>

      <div class="space-y-2">
        <h1 class="font-medium capitalize text-2xl">kosar luqman</h1>
        <p>male, 23 years old (1/1/2012)</p>
        <p>male, 23 years old (1/1/2012)</p>

        <div class="flex space-x-5">
          <div class="flex items-center space-x-2">
            <img src="/imgs/phone.png" alt="" />
            <span> asdjflkasdjflaksdfj </span>
          </div>

          <div class="flex items-center space-x-2">
            <img src="/imgs/mail.png" alt="" />
            <span> asdjflkasdjflaksdfj </span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-5 mt-10">
      <div class="bg-gray-100 p-5 rounded-md">
        <h1 class="text-gray-500 text-2xl capitalize">chronic Diases</h1>
        <div class="mt-2 divide-y divide-gray-300 max-h-[20rem] overflow-auto">
          <Diases />
          <Diases />
          <Diases />
          <Diases />
          <Diases />
        </div>
      </div>
      <div class="bg-gray-100 p-5 rounded-md">
        <h1 class="text-gray-500 text-2xl capitalize">chronic Diases</h1>
        <div class="mt-2 divide-y divide-gray-300 max-h-[20rem] overflow-auto">
          <Diases />
          <Diases />
          <Diases />
          <Diases />
          <Diases />
        </div>
      </div>
      <div class="bg-gray-100 p-5 rounded-md">
        <h1 class="text-gray-500 text-2xl capitalize">chronic Diases</h1>
        <div class="mt-2 divide-y divide-gray-300 max-h-[20rem] overflow-auto">
          <Diases />
          <Diases />
          <Diases />
          <Diases />
          <Diases />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

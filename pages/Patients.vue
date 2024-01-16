<template>
  <div class="max-w-[82rem] mx-auto mt-10 space-y-10 px-10">
    <h1 class="text-4xl font-bold">Add Patient</h1>
    <form class="space-y-8">
      <div
        class="border-2 flex flex-wrap gap-5 relative border-[#111111] rounded-[40px] p-10"
      >
        <h2 class="font-semibold absolute -top-4 left-10 bg-white px-2 p-1">
          Biography
        </h2>
        <Input label="Full name" />
        <Input label="Birth Date" type="date" />
        <div class="space-y-2">
          <Label for="gender">gender</Label>
          <select
            id="gender"
            class="capitalize bg-gray-100 rounded-lg w-full px-3 py-2.5"
          >
            <option value="">Gender</option>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Input label="Full name" />
        <Input label="Full name" />
      </div>

      <div
        class="border-2 flex flex-wrap gap-5 relative border-[#111111] rounded-[40px] p-10"
      >
        <h2 class="font-semibold absolute -top-4 left-10 bg-white px-2 p-1">
          Citizenship
        </h2>
        <div class="w-full px-2 space-y-5 sm:px-0">
          <TabGroup>
            <TabList
              class="flex w-[14rem] space-x-1 rounded-xl bg-gray-300/20 p-1"
            >
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'w-full rounded-lg py-1 text-sm font-medium leading-5',
                    selected
                      ? 'bg-[#669BBC] text-white shadow'
                      : 'text-gray-500 ',
                  ]"
                >
                  National ID
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'w-full rounded-lg py-1 text-sm font-medium leading-5',
                    selected
                      ? 'bg-[#669BBC] text-white shadow'
                      : 'text-gray-500',
                  ]"
                >
                  Passport
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2">
              <TabPanel :class="['flex   w-full gap-5  rounded-xl bg-white']">
                <Input label="National ID Number" type="text" />
                <Input label="Front of National ID" type="file" />
                <Input label="Back of National ID" type="file" />
              </TabPanel>
              <TabPanel :class="['flex   w-full gap-5  rounded-xl bg-white']">
                <Input label="Passport Number" type="text" />
                <Input label="Passport scan" type="file" />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      <div
        class="border-2 flex flex-wrap gap-5 relative border-[#111111] rounded-[40px] p-10"
      >
        <h2 class="font-semibold absolute -top-4 left-10 bg-white px-2 p-1">
          Contact
        </h2>
        <Input label="Phone Number" />
        <Input label="Email Address" />
        <Input label="Photo of the Patient " type="file" />
      </div>

      <div>
        <button
          class="px-3 py-2 rounded-md text-white bg-[#669BBC] flex items-center space-x-2"
        >
          <Icon icon="ic:round-plus" class="w-6 h-6" />
          <span>Add Patient</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

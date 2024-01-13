<template>
    <div class="sticky top-0 flex h-screen w-[15rem] flex-col bg-white shadow">
        <!-- brand name -->
        <div class="px-5 py-6">
            <h1 class="flex items-center space-x-5">
                <span>
                    <Icon
                        icon="tabler:brand-x-filled"
                        class="text-4xl text-amber-500"
                    />
                </span>
                <span class="text-xl font-semibold capitalize">brand name</span>
            </h1>
        </div>

        <hr />

        <div class="flex flex-1 flex-col justify-between pb-10">
            <ul class="flex flex-col space-y-3 py-10">
                <li
                    v-for="(link, index) in links"
                    :key="index"
                    class="flex items-center space-x-5 px-5 py-2 text-xl font-semibold capitalize"
                >
                    <Icon :icon="link.icon" class="h-8 w-8" />
                    <NuxtLink
                        :to="{
                            name: link.routeName,
                        }"
                        class="flex-1"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
            <div class="px-5">
                <button
                    type="button"
                    class="flex w-full items-center justify-center space-x-3 rounded-md bg-red-500 px-5 py-2 font-semibold text-white"
                    @click="() => logout()"
                >
                    <span>Logout</span>
                    <Icon icon="humbleicons:logout" class="h-8 w-8" />
                    <Spinner v-if="authStore.status === 'pending'" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { NavigationLink } from '@/types'

const authStore = useAuthStore()

const links = ref<NavigationLink[]>([
    {
        name: 'dashboard',
        routeName: 'index',
        icon: 'ic:round-space-dashboard',
    },
    {
        name: 'items',
        routeName: 'items',
        icon: 'solar:box-bold-duotone',
    },
    {
        name: 'purchase',
        routeName: 'purchase',
        icon: 'bxs:purchase-tag',
    },
    {
        name: 'additions',
        routeName: 'additions',
        icon: 'solar:box-bold-duotone',
    },
])

const logout = () => {
    authStore.logout().then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        authStore.user = null
        authStore.token = null
        navigateTo('/login')
    })
}
</script>

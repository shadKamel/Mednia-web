<template>
    <form
        class="flex min-w-[20rem] flex-col space-y-5"
        @submit.prevent="() => authenticate()"
    >
        <h1
            class="text-center text-3xl font-semibold text-rose-500 antialiased"
        >
            Login
        </h1>
        <Input
            id="email"
            placeholder="email"
            type="text"
            class="w-full"
            v-model="loginForm.email"
            :errors="error?.data?.errors?.email"
        />
        <Input
            id="password"
            placeholder="password"
            type="password"
            class="w-full"
            v-model="loginForm.password"
            :errors="error?.data?.errors?.password"
        />
        <Checkbox
            v-model="loginForm.rememberMe"
            label="Remember me"
            id="remember_me"
        />
        <div class="flex">
            <Button type="submit">Login</Button>
        </div>
    </form>
</template>

<script setup lang="ts">
import type { LoginForm, User } from '@/types'
import type { LoginResponse } from '@/types'

definePageMeta({
    layout: 'auth',
    middleware: 'guest',
})

const loginForm = ref<LoginForm>({
    email: '',
    password: '',
    rememberMe: false,
})

const { execute: getCsrfCookie } = useApiFetch('/sanctum/csrf-cookie', {
    immediate: false,
    method: 'GET',
})

const {
    error,
    execute: login,
    data: loginData,
} = useApiFetch<LoginResponse>('/api/login', {
    body: loginForm.value,
    immediate: false,
    watch: false,
    method: 'post',
})

const authenticate = () => {
    const { setUser, token } = useAuthStore()

    try {
        getCsrfCookie().then((res) => {
            login()
                .then(() => {
                    setUser(
                        loginData?.value?.token as string,
                        loginData?.value?.user as User
                    )
                })
                .then(() => {
                    navigateTo('/')
                })
        })
    } catch (message) {
        console.log(message)
    }
}
</script>

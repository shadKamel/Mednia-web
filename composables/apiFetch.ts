import { useLocalStorage } from '@vueuse/core'
import type { AsyncData, UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <DataT>(
    url: string | (() => string),
    options?: any
) => {
    const config = useRuntimeConfig()
    const XSRF = useCookie('XSRF-TOKEN')

    let token = null

    if (process.client) {
        token = localStorage.getItem('token')
    }
    // const token = useLocalStorage("token", null);
    const { data, error, execute, pending, refresh, status, then } =
        useFetch<DataT>(url, {
            baseURL: config.public.api_url,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'X-XSRF-TOKEN': XSRF.value as string,
            },
            credentials: 'include',
            onResponseError: (context) => {
                if (context.response.status === 401) {
                    localStorage.removeItem('token')
                    return navigateTo({
                        name: 'login',
                    })
                }
            },
            ...options,
        })

    return { data, error, execute, pending, refresh, status, then }
}

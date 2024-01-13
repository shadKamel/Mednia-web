import type { AsyncDataOptions } from 'nuxt/app'

export const useAsyncApiFetch = <DataT>(
    key: string,
    url: string,
    fetchOptions: AsyncDataOptions<DataT>,
    options?: AsyncDataOptions<DataT>
) => {
    const config = useRuntimeConfig()
    const XSRF = useCookie('XSRF-TOKEN')
    let token: string = ''
    if (process.client) {
        token = localStorage.getItem('token') ?? ''
    }
    // const token = useLocalStorage('token', null)
    const request = useAsyncData<DataT>(key, () =>
        $fetch(url, {
            baseURL: config.public.api_url,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'X-XSRF-TOKEN': XSRF.value as string,
            },
            credentials: 'include',
            onResponseError: (context: any) => {
                if (context.response.status === 401) {
                    localStorage.removeItem('token')
                    return navigateTo({
                        name: 'login',
                    })
                }
            },

            ...fetchOptions,
        })
    )

    return request
}

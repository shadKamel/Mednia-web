export const useMyFetch = <DataT>(
    url: string,
    options: { [key: string]: any }
) => {
    const config = useRuntimeConfig()
    const XSRF = useCookie('XSRF-TOKEN')
    let token = null

    if (process.client) {
        token = localStorage.getItem('token')
    }
    return $fetch<DataT>(url, {
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
}

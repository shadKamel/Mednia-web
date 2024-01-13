export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (process.client) {
        const { token } = useAuthStore()
        if (!token) {
            window.location.pathname = '/login'
        }
    }
})

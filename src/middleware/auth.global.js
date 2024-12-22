import { useUser } from '@/stores/user'
import useLogout from '@/composables/useLogout'

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useUser()
    const { resetStore } = useLogout()

    if (to.meta.auth && !store.isLogin) {
        resetStore()
        return navigateTo('/entry/login', { params: to.params, query: { redirect: to.fullPath } })
    }
})
import { i18n } from '@/plugins/i18n'
import getPageTitle from '@/utils/get-page-title'

export default defineNuxtRouteMiddleware((to, from) => {
    document.title = getPageTitle(to.meta.title ? i18n.global.t(to.meta.title || 'g.system-system-name', to.params.lang) : '')
})
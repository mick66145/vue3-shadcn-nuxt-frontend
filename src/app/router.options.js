
/* Layout */
import MainLayout from '@/layouts/MainLayout.vue'

/* Router Modules */
import entryRouter from './modules/entry'
import redirectRouter from './modules/redirect'
import memberCenterRouter from './modules/member-center'

export const constantRoutes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: () => import('@/pages/front/Front.vue'),
                name: 'Front',
                meta: { title: '首頁' },
            },
        ],
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/error-page/404.vue'),
    },
    entryRouter,
    redirectRouter,
    memberCenterRouter,
]

export default {
    routes: (_routes) => constantRoutes,
}

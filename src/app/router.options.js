
export const constantRoutes = [
    {
        path: '/',
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
]

export default {
    routes: (_routes) => constantRoutes,
}

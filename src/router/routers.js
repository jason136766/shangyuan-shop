export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
            showFooter: true,
        }
    },
    {
        path: '/mall',
        name: 'Mall',
        component: () => import('@/views/Mall'),
        meta: {
            showFooter: true,
        }
    }
]
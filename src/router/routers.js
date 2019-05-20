export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
            index: 0,
            showFooter: true,
        }
    },
    {
        path: '/mall',
        name: 'Mall',
        component: () => import('@/views/Mall'),
        meta: {
            index: 1,
            showFooter: true,
        }
    },
    {
        path: '/found',
        name: 'Found',
        component: () => import('@/views/Found'),
        meta: {
            index: 3,
            showFooter: true,
        }
    },
    {
        path: '/my',
        name: 'My',
        component: () => import('@/views/My'),
        meta: {
            index: 4,
            showFooter: true,
        }
    }
]
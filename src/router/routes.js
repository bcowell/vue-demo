import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/hackernews',
        name: 'hackernews',
        component: () => import('@/views/HackerNews.vue'),
    },
    {
        path: '/hackernews/:id',
        name: 'hackernewsItem',
        props: (route) => ({
            id: parseInt(route.params.id)
        }),
        component: () => import('@/components/HackerNewsItem.vue'),
    },
    {
        path: '/cats',
        name: 'cats',
        component: () => import('@/views/Cats.vue'),
    },
];

export default routes;

import VueRouter from "vue-router";
import Login from '@/pages/Login/index.vue'
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            name: 'register',
            path: '/register',
            component: Login,
            meta: {
                title: '注册'
            }
        },
        {
            name: 'forget',
            path: '/forget',
            component: Login,
            meta: {
                title: '注册'
            }
        },
    ]
})

router.afterEach((to, from) => {
    document.title = to.meta.title
})
export default router
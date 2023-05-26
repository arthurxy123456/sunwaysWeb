import VueRouter from "vue-router";
import Login from '@/pages/Login/index.vue'
import Layout from '@/pages/Layout/index.vue'
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
                title: '忘记密码'
            }
        },
        {
            name: 'layout',
            path: '/layout',
            component: Layout,
            meta: {
                title: '总览'
            }
        },
    ]
})
router.beforeEach((to, from,next) => {
    // document.title = to.meta.title
    console.log(to,from);
    next()
})
router.afterEach((to, from) => {
    document.title = to.meta.title
})
export default router
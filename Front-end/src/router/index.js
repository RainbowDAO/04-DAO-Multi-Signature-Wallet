import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/',
        component: layout,
        redirect: '/myMultiSign',
        children: [
            {
                path: '/creator',
                name: 'creator',
                component: () => import('../views/multiSignFactory/creatorMulti'),
            },
            {
                path: '/myMultiSign',
                name: 'myMultiSign',
                component: () => import('../views/mineMultiSign/myMultiSign'),
            },
            {
                path: '/multiSignPanel',
                name: 'multiSignPanel',
                component: () => import('../views/multiSignPanel/multiSignPanel'),
            }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router

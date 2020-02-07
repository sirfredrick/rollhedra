import Vue from 'vue'
import VueRouter from 'vue-router'
import Platonic from '../views/Platonic.vue'
import Catalan from '../views/Catalan.vue'
import Bipyramid from '../views/Bipyramid.vue'
import Trapezohedra from '../views/Trapezohedra.vue'
import Home from '../views/Home.vue'
import RollTabs from '../components/RollTabs.vue'
import LearnTabs from '../components/LearnTabs.vue'
import About from '../views/About.vue'
import LearnPlatonic from '../views/LearnPlatonic.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/roll',
        components: {
            default: Home,
            tabs: RollTabs
        },
        children: [
            {
                path: 'platonic',
                name: 'platonic',
                component: Platonic
            },
            {
                path: 'catalan',
                name: 'catalan',
                component: Catalan
            },
            {
                path: 'bipyramid',
                name: 'bipyramid',
                component: Bipyramid
            },
            {
                path: 'trapezohedra',
                name: 'trapezohedra',
                component: Trapezohedra
            },
        ]
    },
    {
        path:'/learn',
        components: {
            default: Home,
            tabs: LearnTabs
        },
        children: [
            {
                path: 'about',
                name: 'about',
                component: About
            },
            {
                path: 'platonic',
                name: 'platonic',
                component: LearnPlatonic
            },
        ]
    },
    {
        path: "*",
        redirect: "/roll/platonic",
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

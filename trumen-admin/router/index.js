import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'home',
        component: ()=>import('../views/HomeComponent.vue')
    },
    {
        path:'/user',
        name:'user',
        component: ()=>import('../views/UserComponent.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router
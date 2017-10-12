import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FormLogin from '../login/FormLogin.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: FormLogin
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
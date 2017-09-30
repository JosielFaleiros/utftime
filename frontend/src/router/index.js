import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Teste from '@/components/Teste'
import Vazio from '@/components/Vazio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    },
    {
      path: '/vazio',
      name: 'Vazio',
      component: Vazio
    }
  ]
})

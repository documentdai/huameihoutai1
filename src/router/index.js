import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/index.vue'
import routes from './routes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: routes,
      redirect: '/course-list'
    }
  ]
})

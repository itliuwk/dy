import Vue from 'vue'
import Router from 'vue-router'
import maoyan from '@/components/maoyan'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dy',
      component: maoyan
    }
  ]
})

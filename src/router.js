import Vue from 'vue'
import Router from 'vue-router'
import Settings from './components/Settings.vue'
import DeviceList from './components/DeviceList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/devices',
      name: 'devices',
      component: DeviceList
    },
    {
    path: '/devices',
    name: 'devices',
    component: DeviceList
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Settings
    }
  ]
})

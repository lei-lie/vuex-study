import Vue from 'vue'
import Router from 'vue-router'
import StateCom from '../views/state.vue'
import GetterCom from "../views/getter.vue"
import MutatiosCom from '../views/mutations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/StateCom',
      name: 'StateCom',
      component: StateCom
    },
    {
      path: '/getterCom',
      name: 'GetterCom',
      component: GetterCom
    },
    {
      path: '/mutatiosCom',
      name: 'MutatiosCom',
      component: MutatiosCom
    }
  ]
})

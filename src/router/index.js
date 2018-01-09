import Vue from 'vue'
import Vuetify from 'vuetify'

import Router from 'vue-router'
import CommitLogGenerator from '@/components/CommitLogGenerator'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommitLogGenerator',
      component: CommitLogGenerator
    }
  ]
})

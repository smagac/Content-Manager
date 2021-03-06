import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'
import store from 'renderer/vuex/store';
  
Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})


let assetDir = localStorage.getItem('assets');
if (assetDir) {
  store.dispatch('ChangeAssets', assetDir);
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')


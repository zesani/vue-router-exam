import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Foo from './components/Foo'
import Bar from './components/Bar'
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes // short for routes: routes
})
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './assets/js/router.js'
import './assets/css/cssreset.css'
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'
import axios from 'axios'
Vue.prototype.$http=axios;
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/data.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})

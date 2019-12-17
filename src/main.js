import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue  from 'bootstrap-vue'
import './styles/bootstrap/custom.scss'
import VueAgile from 'vue-agile'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshareWhatsApp from 'vue-goodshare/src/providers/WhatsApp.vue'

Vue.use(VueAgile)
Vue.use(BootstrapVue)
Vue.config.productionTip = true
Vue.component('loading', Loading)
Vue.component('vue-goodshare-facebook', VueGoodshareFacebook) 
Vue.component('vue-goodshare-twitter', VueGoodshareTwitter) 
Vue.component('vue-goodshare-whatsapp', VueGoodshareWhatsApp) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

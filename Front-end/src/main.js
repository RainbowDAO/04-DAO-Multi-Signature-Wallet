import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "./style/index.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import pageFooter from "@/components/pageFooter";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('pageFooter', pageFooter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

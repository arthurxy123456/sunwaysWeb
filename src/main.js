import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/route';
import VueRouter from 'vue-router'
import '@/style/style.css'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

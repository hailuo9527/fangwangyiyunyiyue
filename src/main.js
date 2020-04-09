import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import axios from '@/lib/axios'


Vue.use(ViewUI)

Vue.prototype.axios = axios;
// axios.defaults.baseURL = process.env.NODE_ENV == "production" ? "/" : 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.common['content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.withCredentials = true
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest' // 设置该请求头用于服务器判断是否Ajax请求
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

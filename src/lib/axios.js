import axios from "axios";
import qs from "qs";
import store from "../store/index";
// axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
// axios.defaults.headers.common['content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.baseUrl= "/api"
axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; // 设置该请求头用于服务器判断是否Ajax请求
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.baseUrl = "/api"
    const token = sessionStorage.getItem('token')
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit('setToken');
          router.replace({
            path: "login",
            query: { redirect: router.currentRoute.fullPath },
          });
      }
    }
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

export default axios;

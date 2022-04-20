// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

axios.defaults.baseURL = "http://rap2api.taobao.org/app/mock";
axios.defaults.timeout = 10000;

axios({
    method: 'get',
    url: '/275251/user/findAll'
}).then((result) => {
    console.log(result);
}).catch((err) => {

});
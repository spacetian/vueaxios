import axios from 'axios'
import { NavigationFailureType } from 'vue-router';

export function request(config, success, failure) {

    const instance = axios.create({
        baseURL: 'http://rap2api.taobao.org/app/mock',
        timeout: 5000
    })

    // 拦截器
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, err => {
        console.log(err);
    })


    instance.interceptors.request.eject(res => {
        console.log(res);
        return res;
    }, err => {
        console.log(err);
    })


    instance(config)
        .then(res => {
            console.log(res);
            success(res);
        })
        .catch(err => {
            console.log(err);
            failure(err);
        })



}
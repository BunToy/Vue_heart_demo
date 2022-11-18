import axios from 'axios'
import qs from 'qs'
import common from "../util/common.vue"
import {
  Loading,
  Message,
  MessageBox
} from 'element-ui'
import router from "../router";

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = common.url;   //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if(config.method  === 'post' || config.method  === 'get' || config.method === 'delete'){
    config.data = qs.stringify(config.data);
    let token =window.localStorage.getItem("accessToken");
    if(token!==null ){
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'accessToken': token,
        'APP_TOKEN':"App"
      }
    }else{
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'APP_TOKEN':"App"
      }
    }
  }
  return config;
},(error) =>{
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    if(res.data.code=="500"){ //异常
      /*MessageBox.alert('Identity information has expired, please re-login', 'Warn', {
        confirmButtonText: 'login',
        showConfirmButton: false,
        showClose: true,
        type: 'error',
        callback: action => {
        }
      });*/
      Message.error(res.data.message)
    }else if(res.data.code=="401"){
      Message.error("登录失效")
      router.replace({
        path: '/login',
      })
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("saveLogin");
    }else if(res.data.code=="203"){
      if (res.data.message.indexOf("无权限")!= -1){
        router.replace({
          path: '/',
        })
      }
      //Message.error(res.data.message)
    }else {
      return Promise.resolve(res);
    }
  }
  return res;
}, (error) => {
  console.log(error)
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

////返回一个Promise(发送del请求)
export function fetchDelete (url, param){
  return new Promise((resolve, reject) => {
    axios.delete(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

//返回一个Promise(发送post请求)
export function fetchUpload(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  fetchPost,
  fetchGet,
  fetchDelete,
}

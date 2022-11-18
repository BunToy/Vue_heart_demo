import Vue from 'vue'
import Router from 'vue-router'


import Main from "../page/home/home";
import Login from "../page/login/login";

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }


  ]
})


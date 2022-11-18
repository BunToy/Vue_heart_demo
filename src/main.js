// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/*import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);*/

// 引入公共样式表
import './assets/styles/variable.scss';
import './assets/styles/base.scss';
import './assets/styles/common.scss';
import "./assets/iconfont/iconfont.css"


/*引入PC端 分页js css*/
/*import './assets/styles/zpageNav.css';
import './util/zpageNav.js';*/

import './util/rem.js';

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

/*import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./assets/languages/zh.json'),
    'en': require('./assets/languages/en.json'),
    'jp': require('./assets/languages/jp.json')
  }
})*/
import {Message} from 'element-ui'

Vue.prototype.$message.warning = function (msg) {
  return Message.warning({
    message: msg,
    offset: 100,
    duration: 2000
  })
}

Vue.config.productionTip = false

/*import echarts from 'echarts'
Vue.prototype.$echarts = echarts*/

/*import 'vant/lib/index.css';
import Button from 'vant/lib/button';
import { Popup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Button);*/

//引用文件
import global_ from './util/common.vue'
Vue.prototype.WalletUtil = global_

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

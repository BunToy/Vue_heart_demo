/**
 * @Project Name: vue-admin
 * @Author: luichooy
 * @Date: 2017-11-20 10:19
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

//验证是否为数字
function isNumber(value) {
  var patrn = /^(-)?\d+(\.\d+)?$/;
  if (patrn.exec(value) == null || value == "") {
    return false
  } else {
    return true
  }
}

// 是否手机
function isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}

//判断是否为手机pc
function isMobileOrPC() {
  const str = navigator.userAgent
  var flag = false;
  const device = "phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|" +
    "BrowserNG|WebOS|Symbian|Windows Phone"
  const arr = device.split("|")
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) !== -1) {
      flag = true
      break;
    }
  }
  return flag
}


export default {
  isNumber,
  isMobileOrPC
}


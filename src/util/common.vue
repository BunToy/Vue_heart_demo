<script>
  import cookies from "vue-cookies"

  const url = "http://47.100.217.196/api";
  const token = window.localStorage.getItem("accessToken");

  export default {
    url,//网络请求地址
    token,// 登录token
  }
</script>

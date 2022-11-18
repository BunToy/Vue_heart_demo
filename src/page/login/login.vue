<template>
  <div class="load-main">

    <div style="height: 100%">
      <el-row :gutter="0" style="height: 100%">
        <el-col :span="10">
          <div style="display:flex;flex-direction:column;align-items:center;">

            <div style="width: 100%">
              <img src="../../assets/image/icon_logo_two.png" style="width:0.8rem;height:0.35rem;margin: 0.5rem"/>
            </div>


            <div style="width: 100%;margin-top: 0.6rem; margin-right: 0.5rem;position: relative;
                display:flex;flex-direction:row; justify-content: flex-end">
              <img style="width:3.5rem;height:0.8rem;position: absolute" :src="imgUrl"/>
              <div style="width: 3.5rem;height: 0.6rem; position: absolute;  display:flex;
                        flex-direction:column;justify-content:center;align-items:center; ">
                <p style=" font-size: 0.18rem;color:#6DB9C7;">
                  请输入设备编号以查看健康数据
                </p>
              </div>
            </div>

            <span style="font-size:0.6rem;font-weight:normal;margin-top: 1.0rem;margin-left: 0.5rem">欢迎回来</span>

            <input type="text" placeholder="设备编号" v-model="username" clearable
                   style="border: none; outline:none;background:transparent;font-size: 0.18rem;color:#000000;
                   width: 1.8rem;margin-top: 0.6rem;margin-left: 0.5rem;text-align: center"/>

            <div style="width: 3rem;height: 0.02rem;background: #E3E3E3;margin-left: 0.5rem"></div>

            <div style="width:3rem;height:0.5rem;margin-top: 0.4rem;margin-left: 0.5rem;cursor: pointer;
                  position: relative" @click="goLogin()">
              <img style="width:2.8rem;height:0.6rem;position: absolute" src="../../assets/image/icon_login_button.png"/>

              <div style="width: 2.8rem;height: 0.6rem; position: absolute;  display:flex;
                        flex-direction:row;justify-content:flex-start;align-items:center; ">
                <p style=" font-size: 0.18rem;color:white;margin-left: 30%">
                  确定
                </p>
              </div>
            </div>

          </div>
        </el-col>
        <el-col :span="14"  style="height: 100%">
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                      width: auto;height: 100%;">
            <img src="../../assets/image/login.png" :style="{width: picWidth, height: picHeight}" />
          </div>
        </el-col>
      </el-row>
    </div>


  </div>
</template>

<script>

import Cookies from "js-cookie";
import {goLogin} from '../../http/api.js'
import {Message} from 'element-ui';
import common from "../../util/common.vue"
import axios from 'axios'
import util from "../../util/utils";

export default {
  components: {},
  data() {
    return {
      imgUrl: require("../../assets/image/icon_login_msg.png"),
      username: "",
      picHeight: "80%",
      picWidth: "80%",
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.$nextTick(function () {

    });
  },
  methods: {
    initData() {
      console.log(navigator.userAgent);
      console.log("是否Mobile：" + util.isMobileOrPC());

      const width = window.screen.width;
      const height = window.screen.height;
      console.log(width +"  "+height);

      if (width >= 1200) {
        this.picWidth = "80%";
        this.picHeight = "80%";
      } else{
        this.picWidth = "80%";
        this.picHeight = "65%";
      }
      console.log(this.picHeight);
    },
    goLogin(){
      if(this.username==="" ){
        this.$message({
          message: "设备编号输入不能为空",
          type: 'warning',
          duration: 2000
        });
        return
      }
      goLogin(this.username).then(response => {
        if (response.data.code === 200) {
          Cookies.set('username', this.username);
          this.$router.push("/main");
        }else{
          this.$message({
            showClose: true,
            message: '设备编号输入有误',
            type: 'warning'
          });
        }
      }).catch(err => {
        console.log(err)
      })
    },

  },
  filters: {

  },
  destroyed() {
    //clearInterval(myTimer);
  },
};
</script>

<style lang="less">
@import "login.less";

.el-message--warning{
   font-size: 0.12rem;
}

/*wh250 ht50 button-bg color-white f20 mt-80 ml-170 c-point*/
.loginBtn {
  width: 2rem;
  height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  margin-top: 0.8rem;
  margin-left: 2rem;
}

.netLogin {
  width: 2rem;
  height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  margin-top: 0.4rem;
  margin-left: 2rem;
}

.appLogin {
  width: 2rem;
  height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
}

.code_bg {
  background-color: azure;
  width: 210px;
  height: 230px;
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  border-radius: 0.12rem;
  z-index: 99;
  box-shadow: black;
}


.line {
  width: 50%;
  height: 2px;
  background: rgba(105, 105, 105, 0.1);
  margin-top: 0.2rem;
  margin-left: 150px;
  margin-right: 120px;
}


.gameName {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  word-break: break-all;
  padding: 0rem 0.2rem;
  font-size: 0.16rem;
  color: white;
  line-height: 0.27rem;
}

.gameFoot {
}

.gamePrice {
  font-size: 0.38rem;
  padding-right: 0.2rem;
}

.gamePriceDis {
  color: white;
  font-size: 0.16rem;
  padding-right: 0.2rem;
  text-decoration: line-through;
}

.gameDiscount {
  width: 0.65rem;
  height: 0.24rem;
  background: #22ac38;
  color: white;
  text-align: center;
  line-height: 0.24rem;
  font-size: 0.14rem;
  border-radius: 0.04rem;
  margin-right: 0.2rem;
}

.banner {
  width: 100%;
  height: 500px;
  position: relative;
}


.banner-circle {
  position: absolute;
  top: 90%;
  left: 45%;
}


.selected {
  background: #00ffff;
}

/keep/ .ivu-input {
  height: 40px;
}
</style>

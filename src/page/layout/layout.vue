<template>
  <div class="layout">

    <!-- 左侧 导航栏-->
    <div class="siderbar-wrapper" :style="{width: '1rem'}">
      <div class="logo-wrapper">
        <div class="menu-collapse-wrapper" style="cursor:pointer">
          <img src="../../assets/image/icon_logo_one.png" style="width:0.66rem;height:0.27rem;vertical-align: middle;"/>

        </div>
      </div>

      <el-menu
        background-color="#129FD4"
        text-color="#fff"
        active-text-color="#65cea7"
        class="menu-wrapper"
        router
        unique-opened
        :collapse="isCollapsed"
        :default-active="$route.path">
        <template v-for="(item, index) in  sider_menu_data">
          <el-menu-item class="menu-item" v-if="!item.children" :index="item.path" :key="index">
            <img :src="item.icon" style="width:0.3rem;height:0.37rem;"/>
            <span class="menu-title" slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span style="margin-left: 35px" slot="title">{{item.title}}</span>
            </template>
            <el-menu-item class="menu-item" v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                          :key="sub_index">
              <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>

      </el-menu>
    </div>

    <!-- 顶部右侧导航栏-->
    <div class="topbar-wrapper" style="left: 1rem;display:none">
      <div class="menu-collapse-wrapper float-left">
        <!--<i class="el-icon-adm-menu" :style="{transform: 'rotateZ(' + (this.isCollapsed ? '90' : '0') + 'deg)'}"></i>-->
      </div>
      <div class="title float-left " style="cursor:pointer" ></div>
      <ul class="menu-list float-right">
        <li class="menu-item" style="padding: 0; margin-right: 1rem ">
          <el-dropdown
            :show-timeout="10"
            :hide-timeout="10"
            @command="handleCommand"
            style="padding: 0 15px;">
            <div class="dropdown-content el-dropdown-link">
              <span class="text">{{username}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="upwd" @click="goNewPwd">修改密码</el-dropdown-item>
              <el-dropdown-item command="en" @click="goOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>

        <li v-show="false" class="menu-item" @click="exit">
          <i class="icon iconfont el-icon-adm-exit"></i>
        </li>
<!--        <li class="menu-item">
          <el-dropdown
            :show-timeout="10"
            :hide-timeout="10"
            style="padding: 0 15px;">
            <div class="dropdown-content el-dropdown-link">
              <span class="address">{{addressETH}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>{{ethAddress}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="menu-item" @click="goToTest">
          <img class="icon_bell" src="../../assets/icon_email.png" style="position: relative"/>
          <div class="email_msg" v-show="false">2</div>
        </li>
        <li class="menu-item">
          <img class="icon_bell" src="../../assets/icon_bell.png" style="position: relative"/>
          <div class="bell_msg" v-show="false">3</div>
        </li>
        <li class="menu-item" >
          &lt;!&ndash;<img class="icon" v-show="isLogin" :src="avatar" height="35px" width="35px"/>&ndash;&gt;
          <el-avatar class="icon" :size="35"  v-show="isLogin" :src="avatar">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/></el-avatar>
          <button v-show="!isLogin" @click="openMask" class="begin-btn">{{$t("common.login")}}</button>
        </li>-->
      </ul>
    </div>

    <!-- 内容控制区-->
    <div class="content-wrapper" ref="content-wrapper" style="left: 1rem">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>

    <Dialog v-model="isDialog" type="danger" :title='$t("common.dialogTitle")' :content='$t("common.dialogContent")'
            v-on:cancel="clickCancel()"
            @danger="clickDanger()" @confirm="clickConfirm()" :dangerText='$t("common.dialogBtn")'
            :cancelText='$t("common.dialogBtnCancel")'></Dialog>

    <DialogLogin v-model="isLoginDialog" type="danger" :title='$t("common.dialogTitle")' :content='$t("common.content")'
                 v-on:cancel="cancelLogin()" :address="ethAddress"
                 @danger="clickLogin()" @confirm="clickConfirm()" :dangerText='$t("common.login")'
                 :cancelText='$t("common.dialogBtnCancel")'></DialogLogin>

    <DialogRegister v-model="loginDialog" type="danger" :title='$t("common.registerTitle")'
                    v-on:cancel="cancelRegister()"
                    @danger="clickSubmit()" @confirm="clickConfirm()" :dangerText='$t("common.submit")'
                    :cancelText='$t("common.dialogBtnCancel")' v-on:inputEmail="childEmail"
                    v-on:inputNickname="childNickname"></DialogRegister>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogEditUser"
      width="30%"  :modal-append-to-body='false'>
      <span>新密码：</span>
      <el-input v-model="updatePwd.newPass" placeholder="请输入新密码" style="margin-top: 10px"></el-input>
      <div style="height: 10px"></div>
      <div style="font-size: 15px;margin-top: 10px">邮箱</div>
      <el-input placeholder="邮箱" v-model="updatePwd.email" clearable style="margin-top: 10px"></el-input>

      <div style="font-size: 15px;margin-top: 10px">验证码</div>
      <div style="display: flex;flex-direction: row;align-items: center">
        <el-input placeholder="邮箱验证码" v-model="updatePwd.code" clearable style="margin-top: 10px"></el-input>
        <el-button type="primary"  style="width: 100px;height: 40px;font-size: 12px;margin-top: 10px;margin-left: 10px" @click="getCode">{{content}}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">

    <el-button @click="dialogEditUser = false">取 消</el-button>
    <el-button type="primary" @click="updateQuPwd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {sider_menu_zh, sider_menu_en, sider_menu_jp} from '../../assets/js/menuData';
  import Dialog from '../../components/dialog/dialog.vue'
  import DialogLogin from '../../components/dialog/dialogLogin.vue'
  import DialogRegister from '../../components/dialog/dialogRegist.vue'
  import {
    Notification,
    Loading,
    Message,
    MessageBox
  } from 'element-ui';
  import {register,  login, getQuit, postEditPwd, sendRestCode} from '../../http/api.js'
  let myTimer;
  export default {
    components: {
      'Dialog': Dialog,
      'DialogLogin': DialogLogin,
      'DialogRegister': DialogRegister,
    },
    created() {
      this.checkMenuLanguage();
      //console.log("当前token:"+this.$cookies.get("token"))
      if (this.$cookies.get("token") !== null) {
        this.avatar = this.$cookies.get("avatar")
        this.isLogin = true
      }
    },
    data() {
      return {
        sider_menu_data: [],
        isCollapsed: false,
        adminMenuShow: false,
        isLogin: false, //控制是否登录过
        isDialog: false, //控制弹框是否显示
        isMetaMask: false, //是否安装了MetaMask
        isMetaMaskLock: false, //是否未登录MetaMask
        ethAddress: "", //Eth 地址
        isMainNet: false, //是否主网
        isLoginDialog: false, //登录弹框显示
        loginDialog: false, //注册弹框显示
        email: "", //输入email
        nickname: "", //输入昵称
        avatar: "", //用户头像
        username:"",
        content:"获取验证码",
        count: 60,
        dialogEditUser:false,
        updatePwd:{
          email:"",
          code:"",
          oldPass:"",
          newPass:"",
        }
      }
    },
    computed: {
      //计算ETH地址属性
      addressETH: function () {
        if (this.ethAddress.length > 15) {
          const len = this.ethAddress.length
          return this.ethAddress.substring(0, 8) + "..." + this.ethAddress.substring(len - 8, len)
        }
        return this.ethAddress;
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      getCode(){
        if(this.updatePwd.email==="" ){
          this.$message({
            message: "邮箱输入不能为空",
            type: 'error'
          });
          return
        }
        sendRestCode(this.updatePwd.email).then(response => {
          if (response.data.code === 200) {
            this.$message({
              message: "发送邮箱验证码成功",
              type: 'success'
            });
            let self=this
            myTimer = setInterval(() => {
              self.count--;
              self.content= self.count;
              if(self.count===0){
                self.content= "获取验证码"
                clearInterval(myTimer);
                self.count=60
              }
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      updateQuPwd(){
        if(this.updatePwd.oldPass==="" ){
          this.$message({
            message: "旧密码输入不能为空",
            type: 'error'
          });
          return
        }
        if(this.updatePwd.newPass==="" ){
          this.$message({
            message: "新密码输入不能为空",
            type: 'error'
          });
          return
        }

        if(this.updatePwd.email==="" ){
          this.$message({
            message: "邮箱输入不能为空",
            type: 'error'
          });
          return
        }
        if(this.updatePwd.code==="" ){
          this.$message({
            message: "邮箱验证码输入不能为空",
            type: 'error'
          });
          return
        }
        postEditPwd(this.updatePwd.email,this.updatePwd.newPass,this.updatePwd.oldPass,this.updatePwd.code).then(response=> {
          if (response.data.code === 200) {
            this.dialogEditUser=false;
            this.updatePwd.email="";
            this.updatePwd.code="";
            this.updatePwd.newPass="";
            this.updatePwd.oldPass="";
            this.$message({
              message: "修改密码成功",
              type: 'success'
            });
          }
        })
      },
      goNewPwd(){
        this.dialogEditUser=true;
      },
      goOut(){
        getQuit().then(res => {
          if (res.data.code === 200) {
            window.localStorage.removeItem("username");
            window.localStorage.removeItem("accessToken");
            window.localStorage.removeItem("saveLogin");
            window.localStorage.removeItem("roles");
            this.$router.push("/");
          }else{
            Message.error(res.data.message)
          }
        }).catch(err => {
          console.log(err)
        })

      },
      initData(){
         this.username= window.localStorage.getItem("username");
      },
      goLoad(){
        this.$router.push("/");
      },

      //初始检测语言
      checkMenuLanguage() {
        //console.log(this.$cookies.get("language"), "检测语言初始")
        if(this.$cookies.get("language")!==null){
          this.$i18n.locale = this.$cookies.get("language")
        }else{
          this.$i18n.locale= "zh"
        }

        switch (this.$i18n.locale) {
          case "zh":
            this.sider_menu_data = sider_menu_zh
            break;
          case "en":
            this.sider_menu_data = sider_menu_en
            break;
          case "jp":
            this.sider_menu_data = sider_menu_jp
            break;
        }

      },
      checkAuth() {
        let token = this.$store.state.token || sessionStorage.getItem('token');
        if (!token) {
          this.$router.replace('/login');
        } else {
          this.getUser();
        }
      },
      getUser() {
        let User = {
          id: '7f859967-9b12-441c-badc-8a7d312f6da4',
          username: 'admin',
          name: 'luichooy',
          type: {
            code: 0,
            name: '超级管理员'
          }
        };

        this.$store.commit('SET_USER', User);
      },
      //改变语言
      handleCommand(command) {
        if (command=="upwd"){
          this.goNewPwd();
        }else{
          this.goOut();
        }

        //const lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
        //this.$i18n.locale = command
        //this.$cookies.set("language", command)
        //this.checkMenuLanguage()
        // this.goOut()
      },
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      },
      exit() {
        this.$confirm('即将退出系统登陆，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$store.commit('SET_TOKEN', '');
            this.$store.commit('SET_USER', null);
            this.$router.replace({path: '/login'});
          })
          .catch(() => {
            return false;
          })
      },
      goToTest() {
        this.$router.replace({path: '/user/index'});
      },
      openMask() {
        if (this.isMetaMask) { //检测是否安装MetaMask
          if (this.isMetaMaskLock) { //检测是否登录
            Notification.error({
              title: '错误',
              message: "请登录MetaMask", // 错误描述信息
              duration: 1000
            })
          } else {
            if (!this.isMainNet) {
              Notification.error({
                title: '错误',
                message: "当前为测试网络", // 错误描述信息
                duration: 1000
              })
            } else { //开始登录
              this.isLoginDialog = true
            }
          }
        } else {
          this.isDialog = true
        }
      },
      //安装MetaMask 确认
      clickDanger() {
        //跳转到一个新的窗口
        window.open("https://metamask.io/")
      },
      // 取消登录框
      cancelLogin() {
        this.isLoginDialog = false
      },
      // 登录按钮
      clickLogin() {
          isRegister(this.ethAddress).then(response => {
          const flag = response.data.data.flag
          if (flag) { //注册过

          } else {
            this.loginDialog = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      //开始登录
      login(data) {
        var self =this
        login(this.ethAddress, data).then(res => {
         if (res.data.code === 200) {
            this.$message({
              message: this.$t('common.success'),
              type: 'success'
            });
            self.avatar = res.data.data.data.userPicture
            self.$cookies.set("token", res.data.data.data.userPrivatekey)
            self.$cookies.set("avatar", res.data.data.data.userPicture)
            self.isLogin = true
            self.loginDialog = false
            self.checkMenuLanguage() //开始更改menu
          } else {
            this.$message({
              message: this.$t('common.error'),
              type: 'error'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      //取消注册
      cancelRegister() {
        this.loginDialog = false
      },
      //开始注册
      clickSubmit() {
        if (this.email === "" || this.nickname === "") {
          Notification.error({
            title: this.$t('common.error'),
            message: this.$t('common.emptyContent'),
            duration: 1000
          })
          this.loginDialog = true
          return
        }
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(this.email)) {
          Notification.error({
            title: this.$t('common.error'),
            message: this.$t('common.errorEmail'),
            duration: 1000
          })
          this.loginDialog = true
          return
        }
        if (this.nickname.length > 25) {
          Notification.error({
            title: this.$t('common.error'),
            message: this.$t('common.errorNickname'),
            duration: 1000
          })
          this.loginDialog = true
          return
        }


      },
      //监听Email
      childEmail: function (data) {
        this.email = data
      },
      //监听nickname
      childNickname: function (data) {
        this.nickname = data
      },
      //网络注册
      register(sign) {
        register(this.ethAddress, this.nickname, this.ethAddress, sign).then((res) => {
          if (res.data.code === 200) {
            Notification.success({
              title: "",
              message: this.$t('common.success'),
              duration: 1000
            })
            this.avatar = res.data.data.data.userPicture
            this.$cookies.set("token", res.data.data.data.userPrivatekey)
            this.$cookies.set("avatar", res.data.data.data.userPicture)
            this.isLogin = true
            this.loginDialog = false
          } else {
            Notification.error({
              message: this.$t('common.error'),
              duration: 1000
            })
          }
        }).catch(err => {
            console.log(err)
          }
        )
      }

    },
    destroyed() {
      clearInterval(myTimer);
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/variable';

  .siderbar-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $siderbarWidth;
    z-index: 11;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: $siderbarBackgroundColor;
    transition: all 0.3s ease-in-out;

    .logo-wrapper {
      height: 40px;
      padding: 0px 20px;
    }

    .menu-wrapper {
      position: absolute;
      top: 200px;
      bottom: 0;
      width: 100%;
      border-right: none;
      transition: all 0.01s ease-in-out; //0.3s

      &:not(.el-menu--collapse) {
        overflow-y: auto;
        overflow-x: hidden;
      }

      i {
        color: #FFFFFF;
      }

      .menu-item {
        display:flex;
        height: 80px;
        align-items:center;
        flex-direction: column;
        justify-content:center;
        img{
          margin-bottom:5px;
        }
        &:active{
          background-color: #0A83B0 !important;
          color: #0095E8 !important;

          i {
            color: #0095E8 !important;
          }
        }
        &.is-active, &:hover {
          background-color: #0A83B0 !important;
          color: #0095E8 !important;

          i {
            color: #0095E8 !important;
          }
        }

      }

      .el-submenu__title:hover {
        color: #0095E8 !important;

        i {
          color: #0095E8 !important;
        }
      }

      .el-submenu, .el-menu-item {
        width: 100%;
      }
    }
  }

  .topbar-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: 0;
    heihgt: $topbarHeight;
    line-height: $topbarHeight;
    padding: 0 24px 0 0;
    background-color: $topbarBackgroundColor;

    transition: all 0.3s ease-in-out;
    z-index: 12;

    .menu-collapse-wrapper {
      height: 100%;
      width: 48px;
      cursor: pointer;

      i {
        transition: all 0.3s ease-in-out;
      }
    }

    .title {
      height: 100%;
      font-weight: bold;
      color: white;
      margin-left: 30px;
    }

    .menu-list {
      .menu-item {
        position: relative;
        float: left;
        padding: 0 15px;
        height: 50px;
        text-align: center;

        &:hover {
          cursor: pointer;
        }

        .icon {
          vertical-align: middle;
          font-size: 24px;
          border-radius: 50%;
        }

        .text {
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          font-size: 16px;
          color: #BEBDBD;
        }

        .icon_bell {
          padding: 0 0px;
          vertical-align: middle;
        }

      }
    }
  }

  .item-email {
    width: 20px;
    height: 20px;
    top: 2px !important;
    right: 10px !important;
  }

  .address {
    font-size: 16px;
    line-height: 55px;
    color: #BEBDBD;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100px;
    height: 100%;
  }

  .email_msg {
    position: absolute;
    color: white;
    font-size: 8px;
    background-color: #FF4B4B;
    width: 15px;
    height: 15px;
    line-height: 15px;
    left: 50%;
    top: 10px;
    text-align: center;
    -webkit-border-radius: 24px;
    border-radius: 24px;
  }

  .bell-bg {
    background-color: blue;
    position: relative;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
  }

  .bell_msg {
    position: absolute;
    color: white;
    font-size: 8px;
    background-color: #0095E8;
    width: 15px;
    height: 15px;
    line-height: 15px;
    left: 50%;
    top: 10px;
    text-align: center;
    -webkit-border-radius: 24px;
    border-radius: 24px;
  }

  .menu-title {
    font-size: 10px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left: 5px;
  }

  /*$siderbarBackgroundColor*/
  .content-wrapper {
    background-color: #F3F6F9;
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: $topbarHeight;
    bottom: 0;
    padding: 16px;
    overflow: auto;
    transition: all 0.3s ease-in-out;

    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .begin-btn {
    background: transparent;
    font-size: 12px;
    color: white;
    text-align: center;
    height: 25px;
    width: 80px;
    outline: none;
    border: 1.5px solid #BEBDBD;
    border-radius: 5px;
  }
</style>

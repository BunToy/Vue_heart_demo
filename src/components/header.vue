<template>
  <div id="hero" class="header">
    <div class="index_head">
      <div class="index_top">
        <div class="index_top_wrap">
          <div class="logo_wrap">
          	<span>科创研究数据库</span>
          <!-- <img src="https://www.rqrlxx.com/r/cms/whrqxx/whrqxx/images/index_logo.png" alt="">  -->
          </div>
          <div class="search">
            <input placeholder="请输入搜索内容" class="search-input" v-model="searchContent" @keyup.enter="goSearch">
            <el-popover placement="top" width="330" v-model="visible" offset="300">
              <p style="margin-left: 20px">{{ message }}</p>
              <div v-for="(item ,index) in searchList" :key="index" style="margin-bottom:15px;" @click="goDataPage(index)" >
                <div style="margin-left: 20px;width: 100%;cursor: pointer">{{ item.fullName }}</div>
              </div>
              <img src="../assets/image/vds_search.png" slot="reference" style="position: absolute;right: 20px;width: 12px;height: 12px; cursor: pointer;top: 10px" @click="goSearch"/>
            </el-popover>
          </div>
        </div>
        <div class="login_wrap" @click="goLogin()">
          <i class="el-icon-user" style="font-size: 140%;"></i>
          <span style="line-height: 35px; font-size: 16px;margin-left: 10px;" v-if="loginInfo=='登录/注册'">{{loginInfo}}</span>
          <el-dropdown :hide-on-click="false" v-if="loginInfo!='登录/注册'" :show-timeout="10" @command="handleCommand" :hide-timeout="10">
            <div class="dropdown-content el-dropdown-link ">
              <span class="text" style="line-height: 35px; font-size: 18px;margin-left: 10px;color:#f07464">{{ loginInfo }}</span>
            </div>
            <el-dropdown-menu slot="dropdown" style="text-align: left;">
              <el-dropdown-item command="upwd" style="width: 60px;background: white;" @click="goNewPwd">修改密码
              </el-dropdown-item>
              <el-dropdown-item command="en" style="width: 60px;background: white;margin-top: 0px;margin-bottom: 0px" @click="goOut">退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="index_nav">
        <ul class="list">
          <li v-for="(item,index) in menuList" :key="index" @click="changeMenu(item)" :class="item.path==path?'activeSelect':''">{{item.name}}</li>
        </ul>
      </div>
    </div>

    <!-- 修改密码弹框 -->
    <el-dialog title="修改密码" :visible.sync="dialogEditUser"  width="30%" :modal-append-to-body='false'>
      <span>新密码：</span>
      <el-input v-model="updatePwd.newPass" placeholder="请输入新密码" style="margin-top: 10px"></el-input>
      <div style="height: 10px"></div>
      <div style="font-size: 15px;margin-top: 10px">邮箱</div>
      <el-input placeholder="邮箱" v-model="updatePwd.email" clearable style="margin-top: 10px"></el-input>
      <div style="font-size: 15px;margin-top: 10px">验证码</div>
      <div style="display: flex;flex-direction: row;align-items: center">
        <el-input placeholder="邮箱验证码" v-model="updatePwd.code" clearable style="margin-top: 10px"></el-input>
        <el-button type="primary" style="width: 100px;height: 40px;font-size: 12px;margin-top: 10px;margin-left: 10px"  @click="getCode">{{ content }}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogEditUser = false">取 消</el-button>
      <el-button type="primary" @click="updateQuPwd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {Message} from "element-ui";
import {organPage, getQuit, postEditPwd, sendRestCode} from "../http/api"
let myTimer;
export default {
  data() {
    return {
      menuList:[
        {name:"首页",path:"/"},
        {name:"政策资讯",path:"/more_news"},
        {name:"科创股",path:"/data_user"},
        {name:"风投信息",path:"/data_vcs"},
        // {name:"科研服务",path:"/c"},
      ],
      searchList: [], //搜索列表
      searchContent: "",
      search: {
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "registered_capital", // 默认排序字段
        order: "desc", // 默认排序方式
        fullName: "",
      },
      visible: false,
      message: "",
      loginInfo: "登录/注册",
      dialogEditUser: false,
      updatePwd: {
        email: "",
        code: "",
        oldPass: "",
        newPass: "",
      },
      content: "获取验证码",

    }
  },
  props:{
    path: {
      type: String,
      default: '/'
    },
  },
  created() {
    if (typeof window.localStorage.getItem("username") !== "undefined") {
      if (window.localStorage.getItem("username") != null) {
          this.loginInfo = window.localStorage.getItem("username")
      }
    }
  },
  methods: {

    changeMenu(item){
      this.$router.push(item.path)
    },
    goLoad() {
      console.log('route',this.$route)
      this.$router.push("/");
    },
		// 监听搜索列表点击
    goDataPage(index) {
			if(this.$route.path=='/dataInfo'){
				this.$emit('updateDateinfo',this.searchList[index].id)
				this.visible = false
		  	this.searchContent=''
				return
			}
      this.$router.push({
        path: 'dataInfo',
        name: 'dataInfo',
        query: {
          id: this.searchList[index].id,
        }
      })
    },
    handleCommand(command) {
      if (command == "upwd") {
        this.goNewPwd();
      } else {
        this.goOut();
      }
    },
    getCode() {
      if (this.updatePwd.email === "") {
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
          let self = this
          myTimer = setInterval(() => {
            self.count--;
            self.content = self.count;
            if (self.count === 0) {
              self.content = "获取验证码"
              clearInterval(myTimer);
              self.count = 60
            }
          }, 1000)
        }
      }).catch(err => {
        console.log(err)
      })
    },

		//监听搜索按钮
    goSearch() {
      if (this.searchContent === "") {
				this.searchList = []
        this.message = "搜索内容不能为空"
        return;
      }
			// 搜索列表
      organPage(this.search.pageSize, this.search.pageNumber, "create_time", "desc", this.searchContent, "").then(response => {
        if (response.data.code === 200) {
          this.searchList = response.data.result.records;
          if (this.searchList.length > 0) {
            this.message = ""
          } else {
            this.message = "暂无搜索记录"
          }
          this.visible = true
        } else if (response.data.code === 401) {
          window.localStorage.removeItem("username");
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("saveLogin");
          window.localStorage.removeItem("roles");
          this.$router.push("/");
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goLogin() {
      if (typeof window.localStorage.getItem("accessToken") !== "undefined") {
        if (window.localStorage.getItem("accessToken") != null) {
          if (window.localStorage.getItem("roles") == "1") {
            this.$router.push("/user/index");
          }
        } else {
          this.$router.push("/login");
        }
      } else {
        this.$router.push("/login");
      }
    },
    goOut() {
      getQuit().then(res => {
        if (res.data.code === 200) {
          window.localStorage.removeItem("username");
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("saveLogin");
          window.localStorage.removeItem("roles");
          this.$router.push("/");
        } else {
          Message.error(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goNewPwd() {
      this.dialogEditUser = true;
    },
    updateQuPwd() {
      if (this.updatePwd.newPass === "") {
        this.$message({
          message: "新密码输入不能为空",
          type: 'error'
        });
        return
      }
      if (this.updatePwd.email === "") {
        this.$message({
          message: "邮箱输入不能为空",
          type: 'error'
        });
        return
      }
      if (this.updatePwd.code === "") {
        this.$message({
          message: "邮箱验证码输入不能为空",
          type: 'error'
        });
        return
      }
      postEditPwd(this.updatePwd.email, this.updatePwd.newPass, this.updatePwd.oldPass, this.updatePwd.code).then(response => {
        console.log(response.data.code)
        if (response.data.code === 200) {
          this.dialogEditUser = false;
          this.updatePwd.email = "";
          this.updatePwd.code = "";
          this.updatePwd.newPass = "";
          this.updatePwd.oldPass = "";
          this.$message({
            message: "修改密码成功",
            type: 'success'
          });
        }
      })
    },

  },
  filters: {},
  destroyed() {
    clearInterval(myTimer);
  },
}
</script>

<style lang="less" scoped>
.header {
  background: #175aa1;
  color: #fff;
  .index_head {
    margin-left: 170px;
    margin-right: 170px;
    // width: 1440px;
    // margin: 0 auto;
    .index_top {
      height: 119px;
      border-bottom: 1px solid #FFFFFF;
      position: relative;
      .index_top_wrap{
        padding: 0 176px 0 83px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo_wrap {
          font-family: PingFangSC-Semibold;
          font-size: 38px;
          color: #FFFFFF;
          letter-spacing: 0;
          font-weight: 600;
        }
        .search {
          width: 189px;
          height: 29px;
          border: 1px solid #B0B0B0;
          box-sizing: border-box;
          border-radius: 38px;
          position: relative;
          .search-input {
            position: relative;
            background: transparent;
            outline: none;
            border: 0px;
            padding: 0;
            line-height: 26px;
            width: 85%;
            height: auto;
            // color: black;
            color: white;
            font-size: 15px;
            padding-left: 20px;
          }
          .search-input:-ms-input-placeholder,
            textarea:-ms-input-placeholder {
             font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
          }
          .search-input::-webkit-input-placeholder,
          textarea::-webkit-input-placeholder {
             font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
          }
          input::-webkit-input-placeholder {
             font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
          }
        }
      }
       .login_wrap {
        position:absolute;
        bottom: 0;
        right: 22px;
        cursor: pointer;
        &:hover {
          // color: #0c6eca;
        }
      }
    }
    .index_nav {
      height: 31px;
      padding-left: 176px;
      .list {
        display: flex;
        justify-content: space-between;
        width: 85%;
        line-height: 31px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: 400;
        .activeSelect{
          background: #FFFFFF;
          color: #3F3F3F;
        }
        li {
          cursor: pointer;
           width: 107px;
           text-align: center;
        }

        li:hover {
          // color: #0c6eca;
        }
      }
    }
  }
}
</style>

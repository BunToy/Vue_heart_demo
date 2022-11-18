<template>
  <div style="background: #CED5EF;height: 100vh;width: 100%;display: flex;flex-direction: row;
    justify-content: center;align-items: center">

    <div style="background: #DFE7F4;width: 90%;border-radius:0.2rem;
         box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
         display: flex;flex-direction: row;align-items: center" :style="{height: tableHeight}">

      <div style="width:100%;">
        <el-row :gutter="0">
          <el-col :span="6">
            <div
              style="display:flex;flex-direction:column;align-items:center;justify-content: center;padding-left: 0.3rem">
              <span style="font-size:0.5rem;font-weight:bolder;margin-top: 0rem">用户实时数据</span>

              <div style="width:90%;height:1.5rem;background:#ffffff;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display: flex;
                   flex-direction: row;justify-content: center;align-items: center;margin-top: 0.3rem">
                <div
                  style="display: flex;flex-direction: column;justify-content: center;align-items: center;width: 50%;">
                  <p style="font-size:0.3rem;">{{getWeek}}</p>
                  <p style="font-size:0.25rem;">{{year}}/{{month}}/{{day}}</p>
                </div>
                <div style="font-size:0.5rem;font-weight:bolder;width: 50%"> {{hh}}:{{mm}}</div>
              </div>

              <div style="width:90%;height:2.4rem;border-radius:0.2rem; outline:1px solid  #ffffff;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:column;align-items:center;margin-top: 0.3rem"
                   :style="{background:(bodyState==1? '#DDFBDF':'#FFF6DA')}">
                <div
                  style="width:100%;height: 1.7rem;display: flex;flex-direction: row;justify-content: center;align-items: center">
                  <div style="width: 50%;height:100%;display: flex;flex-direction: row;
                       justify-content: center;align-items: center">
                    <img src="../../assets/image/icon_avatar.png" style="width:1rem;height:1rem;"/>
                  </div>
                  <div style="width: 50%;height:100%;display: flex;flex-direction: column;justify-content: center">
                    <p style="font-size:0.18rem;">欢迎使用,</p>
                    <p style="font-size:0.2rem;font-weight:bolder;margin-top: 0.1rem">用户</p>
                    <p style="font-size:0.15rem;font-weight:bolder;margin-top: 0.1rem">{{username}}</p>
                  </div>
                </div>
                <div style="width:100%;height:0.7rem; background: #00C8FF; border-radius: 0 0 0.2rem 0.2rem;
                   display: flex;flex-direction: row;justify-content: center;align-items: center"
                     :style="{background:(bodyState==1? '#79CB77':'#E3BE44')}">
                  <img src="../../assets/image/icon_inbed.png" style="width:20px;height:20px">
                  <div style="margin-left:0.2rem;font-size:0.2rem;font-weight:bolder;color: white">{{bodyState==1?"在床":"离床"}}
                  </div>
                </div>
              </div>

              <div style="width:90%;height:2rem;background:#ffffff;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:row;align-items:center;margin-top:0.3rem;" @click="goDownload()">
                <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
                          style="height:100%;display:flex;justify-content:center;align-items:center">
                    <img src="../../assets/image/download.png" style="width:1.2rem;height:1.2rem;">
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="">
                    <div style="font-size:0.25rem;color:#000000;font-weight:bolder">导出历史数据</div>
                  </el-col>
                </el-row>
              </div>

            </div>
          </el-col>

          <el-col :span="9">
            <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;
                 align-items:center;">
              <div style="width:92%;height:100%;background: #ffffff;border-radius:0.2rem;
                 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                 flex-direction:column;justify-content:flex-start;align-items:center;margin-top: 0rem">
                <div style="width:90%;height:0.5rem;background:#E5F8FF;border-radius:0.1rem; display:flex;
                   flex-direction:row;justify-content:flex-start;align-items:center;margin-top: 0.2rem">
                  <img src="../../assets/image/icon_heart.png" style="width:0.32rem;height:0.3rem;margin-left: 0.3rem"/>
                  <p style="width:80%;font-size:0.22rem;color:#000000;font-weight:bolder;text-align: center">心跳状态</p>
                </div>
                <div style="height:3.4rem;width: 100%; ">
                  <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                    <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
                              style="height:100%;display:flex;justify-content:center;align-items:center">
                        <img src="../../assets/image/icon_xin_tiao.gif" style="width:1.6rem;height:1.6rem;"
                             v-if="heartRate>135">
                        <img src="../../assets/image/icon_xin_tiao.gif" style="width:1.6rem;height:1.6rem;"
                             v-else-if="heartRate<45 && heartRate>=1">
                        <img src="../../assets/image/icon_xin_tiao_none.png" style="width:1.6rem;height:1.6rem;"
                             v-else-if="heartRate<=135 && heartRate>=45">
                        <img src="../../assets/image/icon_xin_tiao_none.png" style="width:1.6rem;height:1.6rem;"
                             v-else="heartRate==0">
                      </el-col>
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="">
                        <div style="font-size:0.5rem;color:#BE2E3E;font-weight:bolder" v-if="heartRate>135">心跳过速</div>
                        <div style="font-size:0.5rem;color:#000000;font-weight:bolder" v-else-if="heartRate<=135 && heartRate>=45">心跳正常
                        </div>
                        <div style="font-size:0.5rem;color:#BE2E3E;font-weight:bolder" v-else-if="heartRate<45 && heartRate>=1">心跳过缓
                        </div>
                        <div style="font-size:0.5rem;color:#000000;font-weight:bolder" v-else="heartRate==0">无信号</div>
                      </el-col>
                    </el-row>
                  </el-row>
                </div>
                <div style="width:100%; height: 100%; display:flex;flex-direction:row;justify-content:center;">
                  <div style="width:85%;height:3rem;background:#F6F7F9;border-radius:0.1rem; display:flex;
                     flex-direction:column;margin-bottom: 0.35rem">
                    <div>
                      <div style="font-size:0.22rem;color:#000000;margin-left: 0.2rem;margin-top: 0.2rem">数据详情</div>
                      <div style="width: 90%;height: 0.01rem;background: #C2C6C7;margin-left: 0.2rem;
                           margin-right: 0.2rem;margin-top: 0.2rem">
                      </div>
                    </div>

                    <div style="display:flex;flex-direction:row;justify-content:center;">
                      <div style="width:30%;height:100%;text-align:right;">
                        <p style="font-size:0.4rem;color:#000;line-height:2.3rem">心率</p>
                      </div>
                      <div
                        style="display:flex;flex-direction:column;justify-content:center;width:70%;align-items: center">
                        <p style="font-size:1rem;font-weight:500">{{heartRate}}</p>
                        <p style="font-size:0.25rem;margin-top:0.05rem;color: #16A6D0">次/分钟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>

          <el-col :span="9">
            <div style="width:auto;height:100%;display:flex;flex-direction:column;justify-content:center;
                 align-items:center;padding-right: 0.1rem;">
              <div style="width:92%;height:100%;background: #ffffff;border-radius:0.2rem;
                 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                 flex-direction:column;justify-content:flex-start;align-items:center;margin-top: 0rem">
                <div style="width:90%;height:0.5rem;background:#E5F8FF;border-radius:0.1rem; display:flex;
                   flex-direction:row;justify-content:flex-start;align-items:center;margin-top: 0.2rem">
                  <img src="../../assets/image/icon_fei.png" style="width:0.32rem;height:0.3rem;margin-left: 0.3rem"/>
                  <p style="width:80%;font-size:0.22rem;color:#000000;font-weight:bolder;text-align: center">呼吸状态</p>
                </div>
                <div style="height:3.4rem;width: 100%; ">
                  <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
                            style="height:100%;display:flex;justify-content:center;align-items:center">
                      <img src="../../assets/image/icon_breating.gif" style="width:1.6rem;height:1.6rem;"
                           v-if="respiratoryRate>25">
                      <img src="../../assets/image/icon_breating.gif" style="width:1.6rem;height:1.6rem;"
                           v-else-if="respiratoryRate<10 && respiratoryRate>=1">
                      <img src="../../assets/image/icon_breating_none.png" style="width:1.6rem;height:1.6rem;"
                           v-else-if="respiratoryRate<=25 && respiratoryRate>=10">
                      <img src="../../assets/image/icon_breating_none.png" style="width:1.6rem;height:1.6rem;"
                           v-else="respiratoryRate==0">
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="">
                      <div style="font-size:0.5rem;color:#BE2E3E;font-weight:bolder" v-if="respiratoryRate>25">呼吸过速</div>
                      <div style="font-size:0.5rem;color:#000000;font-weight:bolder" v-else-if="respiratoryRate<=25 && respiratoryRate>=10">呼吸正常
                      </div>
                      <div style="font-size:0.5rem;color:#BE2E3E;font-weight:bolder" v-else-if="respiratoryRate<10 && respiratoryRate>=1">呼吸过缓
                      </div>
                      <div style="font-size:0.5rem;color:#000000;font-weight:bolder" v-else="respiratoryRate===0">无信号</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="width:100%; height: 100%; display:flex;flex-direction:row;justify-content:center;">
                  <div style="width:85%;height:3rem;background:#F6F7F9;border-radius:0.1rem; display:flex;
                     flex-direction:column;margin-bottom: 0.35rem">
                    <div>
                      <div style="font-size:0.22rem;color:#000000;margin-left: 0.2rem;margin-top: 0.2rem">数据详情</div>
                      <div style="width: 90%;height: 0.01rem;background: #C2C6C7;margin-left: 0.2rem;
                           margin-right: 0.2rem;margin-top: 0.2rem">
                      </div>
                    </div>

                    <div style="display:flex;flex-direction:row;justify-content:center;">
                      <div style="width:35%;height:100%;text-align:right;">
                        <p style="font-size:0.4rem;color:#000;line-height:2.3rem">呼吸率</p>
                      </div>
                      <div
                        style="display:flex;flex-direction:column;justify-content:center;width:65%;align-items: center">
                        <p style="font-size:1rem;font-weight:500">{{respiratoryRate}}</p>
                        <p style="font-size:0.25rem;margin-top:0.05rem;color: #16A6D0">次/分钟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>


    </div>
  </div>
</template>

<script>
  import {
    getInfo,
  } from "../../http/api";
  import Cookies from "js-cookie";
  import axios from "axios";
  import common from "../../util/common";
  import util from "../../util/utils";

  const echarts = require('echarts/lib/echarts')

  export default {
    name: "实时信息",
    created() {
    },
    data() {
      return {

        RespRate: 0,
        RespState: 0,  //RespState：1：呼吸状态正常；
        heartRate: 0, //HeartRate：64：心率为 64，单位为 bpm；  45-135
        bodyState: 0,  //PeopleState：1：当前有人
        respiratoryRate:0, //呼吸率

        nowDate: "", // 当前日期
        year: "",
        month: "",
        day: "",
        hh: "",
        mm: "",
        getWeek: "",
        timer: null,
        timer2: null,

        pageNum: 1,
        tableHeight: "90vh",
        username:"",

      }
    },
    created() {
      this.initData();
    },
    mounted() {
      this.$nextTick(function () {
        this.timeFormate(new Date());
        this.showTime(); // 1秒后执行
        this.loadData();
      });
    },
    methods: {
      initData() {
        console.log(navigator.userAgent);
        console.log("是否：" + util.isMobileOrPC());

        const width = window.screen.width;
        const height = window.screen.height;
        console.log(width);
        console.log(height);
        if (width >= 1900) {
          this.tableHeight = "90vh";
        } else if (width >= 1400) {
          this.tableHeight = "90vh";
        } else if(width >= 1200){
          this.tableHeight = "97vh";
        }
        console.log(this.tableHeight);
        this.username = Cookies.get("username");
      },
      loadData() {
        var that = this;
        that.timer2 = setInterval(() => {
          that.pageNum++;
          that.getData();
        }, 2000);
      },
      getData() {
        const id = Cookies.get("username");
        console.log("username:" + id);
        getInfo(this.pageNum, 1, id).then(response => {
          if (response.data.code === 200) {
            const result = response.data.result;
            const records = result.records[0];
            console.log(records);
            this.bodyState = records.state;  //RespRate：14：呼吸率为 14，单位为 bpm；
            this.heartRate = records.heart;  //RespState：1：呼吸状态正常；
            this.respiratoryRate= records.resp;
          }
        }).catch(err => {
          console.log(err)
        })
      },
      goDownload() {
        console.log("开始下载了");
        if (typeof Cookies.get("username") !== "undefined") {
          if (Cookies.get("username") == null) {
            this.$router.push("/");
            return;
          }
        } else {
          this.$router.push("/");
          return;
        }
        const instant = axios.create({
          withCredentials: true,
        });
        const id = Cookies.get("username");
        instant.get(common.url + "/tb01-std/updateLoad?equId="+id, {
          // headers: {
          //   'accessToken': window.localStorage.getItem("accessToken"),
          //   'APP_TOKEN': "App"
          // },
          responseType: 'blob', //二进制流
        }).then(response => {
          console.log(response.data)
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([response.data])
            window.navigator.msSaveOrOpenBlob(blob, new Date().getTime() + '.xlsx')
          } else {
            /* 火狐谷歌的文件下载方式 */
            var blob = new Blob([response.data])
            var downloadElement = document.createElement('a')
            var href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            downloadElement.download = new Date().getTime() + '.xlsx'
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement)
            window.URL.revokeObjectURL(href)
          }
        }, err => {
          console.log(err)
        }).catch((error) => {
          console.log(error)
        })
      },
      // 启动定时器
      showTime() {
        var that = this;
        that.timer = setInterval(() => {
          that.timeFormate(new Date());
        }, 1000);
      },
      // 销毁定时器
      clearTimer() {
        clearInterval(this.timer);
        clearInterval(this.timer2);
      },
      timeFormate(timeStamp) {
        this.year = new Date(timeStamp).getFullYear();
        this.month =
          new Date(timeStamp).getMonth() + 1 < 10
            ? '0' + (new Date(timeStamp).getMonth() + 1)
            : new Date(timeStamp).getMonth() + 1;
        this.day =
          new Date(timeStamp).getDate() < 10
            ? '0' + new Date(timeStamp).getDate()
            : new Date(timeStamp).getDate();
        this.hh =
          new Date(timeStamp).getHours() < 10
            ? '0' + new Date(timeStamp).getHours()
            : new Date(timeStamp).getHours();
        this.mm =
          new Date(timeStamp).getMinutes() < 10
            ? '0' + new Date(timeStamp).getMinutes()
            : new Date(timeStamp).getMinutes();
        let ss =
          new Date(timeStamp).getSeconds() < 10
            ? '0' + new Date(timeStamp).getSeconds()
            : new Date(timeStamp).getSeconds();
        let week = new Date(timeStamp).getDay();
        let weeks = ['日', '一', '二', '三', '四', '五', '六'];
        this.getWeek = '星期' + weeks[week];

        //console.log(this.year);
        //console.log(this.month);
        //console.log(this.day);
        //console.log(this.hh);
        //console.log(this.mm);
        //console.log(this.getWeek);
      }

    },
    destroyed() {
      this.clearTimer();
      this.pageNum=1;
    }
  }
</script>

<style lang="scss">
  .v-modal {
    opacity: .5;
    background: transparent;
  }

  .imgLast {
    position: absolute;
    top: 0px;
  }

  .avatar {
    width: 100%;
    height: 300px;
  }
</style>

<!--https://www.cnblogs.com/qisi007/p/10213886.html-->
<!--https://blog.csdn.net/qq_39251620/article/details/124065364-->

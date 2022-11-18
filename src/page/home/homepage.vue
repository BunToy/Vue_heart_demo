<template>
  <div style="padding-left:0.6rem;padding-right:0.6rem;">

    <div style="margin-top: 0.5rem">
      <el-row :gutter="20">
        <el-col :span="16">
          <div style="display:flex;flex-direction:row;align-items:center;">
            <span style="font-size:0.4rem;font-weight:bolder">用户实时数据</span>
            <div style="width:1.2rem;height:0.45rem;margin-left:0.3rem;border-radius:0.2rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:row;align-items:center;" :style="{background:(PeopleState==1? '#E8FFE5':'#FFF6DA')}">
              <div
                style="width:0.35rem;height:0.35rem;margin-left:0.1rem;border-radius:0.2rem;position: relative;"
                :style="{background:(PeopleState==1? '#6CC65E':'#E3BE44')}">
                <img src="../../assets/image/icon_inbed.png"
                     style="width:20px;height20px;position: absolute;top: 20%;left: 22%;">
              </div>
              <div style="margin-left:0.15rem;font-size:0.2rem;font-weight:bolder">{{PeopleState==1?"在床":"离床"}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div style="display:flex;flex-direction:row;align-items:center;justify-content:flex-end">
            <div style="width:1.5rem;height:0.7rem;background:#ffffff;margin-left:0.3rem;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);text-align:center">
              <div style="font-size:0.22rem;margin-top:0.1rem;font-weight:bolder"> {{hh}}:{{mm}}</div>
              <div style="font-size:0.15rem;">{{year}}/{{month}}/{{day}} {{getWeek}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style=" margin-top: 0.2rem">
      <el-row :gutter="30">
        <el-col :span="8">
          <div style="display:flex;flex-direction:column;justify-content:flex-start">

            <div style="width:100%;height:1.2rem;background:#ffffff;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:row;outline:1px solid  #119FD3; align-items:center;">

              <img src="../../assets/image/icon_avatar.png" style="width:0.8rem;height:0.8rem;margin-left:0.4rem"/>
              <div style="margin-left:0.4rem">
                <div style="font-size:0.2rem">姓名&nbsp;&nbsp; 王某某</div>
                <div style="margin-top:0.15rem;font-size:0.2rem">床位&nbsp;&nbsp; ~</div>
              </div>
              <div style="margin-left:0.5rem">
                <div style="font-size:0.2rem">性别&nbsp;&nbsp; ~</div>
                <div style="margin-top:0.15rem;font-size:0.2rem">年龄&nbsp;&nbsp; ~</div>
              </div>
            </div>

            <div style="width:100%;height:2rem;background:#ffffff;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:row;align-items:center;margin-top:0.3rem;">

              <div style="width:0.15rem;height:100%;background:#DDE2E8;border-radius:10px 0px 0px 10px"></div>

              <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
                        style="height:100%;display:flex;justify-content:center;align-items:center">
                  <img src="../../assets/image/icon_breating.gif" style="width:1.2rem;height:1.2rem;"
                       v-if="RespState==3">
                  <img src="../../assets/image/icon_breating.gif" style="width:1.2rem;height:1.2rem;"
                       v-else-if="RespState==2">
                  <img src="../../assets/image/icon_breating_none.png" style="width:1.2rem;height:1.2rem;"
                       v-else-if="RespState==1">
                  <img src="../../assets/image/icon_breating_none.png" style="width:1.2rem;height:1.2rem;" v-else>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="">
                  <div style="font-size:0.4rem;color:#BE2E3E;font-weight:bolder" v-if="RespState==3">呼吸暂停</div>
                  <div style="font-size:0.4rem;color:#BE2E3E;font-weight:bolder" v-else-if="RespState==2">呼吸急促</div>
                  <div style="font-size:0.4rem;color:#000000;font-weight:bolder" v-else-if="RespState==1">呼吸正常</div>
                  <div style="font-size:0.4rem;color:#000000;font-weight:bolder" v-else>无信号</div>
                </el-col>
              </el-row>
            </div>

          </div>
        </el-col>

        <el-col :span="16">
          <div style="width:100%;height:3.5rem;background:#ffffff;border-radius:10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
              ">

            <div style="height:0.5rem;position: relative;">
              <img src="../../assets/image/icon_top_one.png"
                   style="width:2.6rem;height:0.5rem;position: absolute;top: 0%;left: 0%;"/>
              <img src="../../assets/image/icon_fei.png"
                   style="width:0.4rem;height:0.3rem;position: absolute;top: 0.1rem;left: 0.3rem;"/>
              <span style="position: absolute;top: 0.1rem;left: 1rem;font-size:0.23rem;width:1.5rem">呼吸波形图</span>
            </div>

            <div style="width:100%;display:flex;margin-top:0rem;height:100%">

              <div style="width:80%;text-align:center;text-align:center;display:flex;flex-direction:column;">
                <div style="width:100%;" :style="{height:  tableHeight +'px'}" ref="firstchart">
                </div>
                <div style="font-size:0.12rem;color:gray;margin-bottom:0.1rem;width:100%;text-align:center">胸腔位移实时数据
                </div>
              </div>


              <div style="width:20%;">
                <div style="position: relative;height:100%;">
                  <img src="../../assets/image/icon_fei_bg.png"
                       style="width:2rem;height:2rem;position: absolute;top: 20%;left: 0%;"/>
                  <div style="width:2rem;height:2rem;position: absolute;top: 20%;left: 0%;display:flex;
                        flex-direction: column;align-items: center;justify-content: center">
                    <span style="font-size:0.2rem;color:#97D8E4">呼吸率</span>
                    <span style="font-size:0.5rem;color:#000">{{RespRate}}</span>
                    <span style="font-size:0.15rem;color:#000">次/分钟</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </el-col>
      </el-row>

      <!-- 第二部分 -->
      <div style=" margin-top: 0.3rem">
        <el-row :gutter="30">
          <el-col :span="8">
            <div style="width:100%;height:3.5rem;background:#ffffff;border-radius:0.1rem;
                   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);display:flex;
                   flex-direction:row;align-items:center;margin-top:0rem;">

              <div style="width:0.15rem;height:100%;background:#DDE2E8;border-radius:10px 0px 0px 10px"></div>

              <div style="width:100%;height:100%">
                <div style="height:2rem">
                  <el-row :gutter="5" style="width:100%;height:100%" type="flex" align="middle">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
                            style="height:100%;display:flex;justify-content:center;align-items:center">
                      <img src="../../assets/image/icon_xin_tiao.gif" style="width:1.2rem;height:1.2rem;"
                           v-if="HeartState==3">
                      <img src="../../assets/image/icon_xin_tiao.gif" style="width:1.2rem;height:1.2rem;"
                           v-else-if="HeartState==2">
                      <img src="../../assets/image/icon_xin_tiao_none.png" style="width:1.2rem;height:1.2rem;"
                           v-else-if="HeartState==1">
                      <img src="../../assets/image/icon_xin_tiao_none.png" style="width:1.2rem;height:1.2rem;"
                           v-else="HeartState==0">
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="">
                      <div style="font-size:0.4rem;color:#BE2E3E;font-weight:bolder" v-if="HeartState==3">心跳加速</div>
                      <div style="font-size:0.4rem;color:#BE2E3E;font-weight:bolder" v-else-if="HeartState==2">心跳过急
                      </div>
                      <div style="font-size:0.4rem;color:#000000;font-weight:bolder" v-else-if="HeartState==1">心跳正常
                      </div>
                      <div style="font-size:0.4rem;color:#000000;font-weight:bolder" v-else="HeartState==0">无信号</div>
                    </el-col>
                  </el-row>
                </div>


                <div style="width:100%;display:flex;flex-direction:row;justify-content:center;">
                  <div
                    style="width:80%;height:1.3rem;background:#FFF0F2;border-radius:0.1rem; display:flex;flex-direction:row;justify-content:center;align-items:center">
                    <div
                      style="display:flex;flex-direction:column;justify-content:center;width:50%;margin-left:0.3rem;">
                      <p style="font-size:0.25rem;font-weight:bolder">R-R间期</p>
                      <p style="font-size:0.15rem;margin-top:0.1rem">两次心跳间隔,用于判断心跳不齐</p>
                    </div>
                    <div style="width:50%;height:100%;text-align:center">
                      <p style="font-size:0.6rem;color:#BE2E3E;font-weight:bolder;line-height:1.3rem">0.9s</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </el-col>

          <el-col :span="16">
            <div style="width:100%;height:3.5rem;background:#ffffff;border-radius:10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
            ">

              <div style="height:0.5rem;position: relative;">
                <img src="../../assets/image/icon_top_two.png"
                     style="width:2.6rem;height:0.5rem;position: absolute;top: 0%;left: 0%;"/>
                <img src="../../assets/image/item_xinlv.png"
                     style="width:0.35rem;height:0.3rem;position: absolute;top: 0.1rem;left: 0.3rem;"/>
                <span style="position: absolute;top: 0.1rem;left: 1rem;font-size:0.23rem;width:1.5rem">心率波形图</span>
              </div>

              <div style="width:100%;display:flex;flex-direction:row;">
                <div style="width:80%;">
                  <div style="width:100%;" :style="{height:  tableHeight +'px'}" ref="chartTwo"></div>
                  <div style="font-size:0.12rem;color:gray;margin-bottom:0.1rem;width:100%;text-align:center">心跳实时数据
                  </div>
                </div>

                <div style="width:20%;">
                  <div style="position: relative;height:100%">
                    <img src="../../assets/image/icon_xinlv_bg.png"
                         style="width:2rem;height:2rem;position: absolute;top: 20%;left: 0%;"/>
                    <div style="width:2rem;height:2rem;position: absolute;top: 20%;left: 0%;display:flex;
                        flex-direction: column;align-items: center;justify-content: center">
                      <span style="font-size:0.2rem;color:#C175BD">呼吸率</span>
                      <span style="font-size:0.5rem;color:#000">{{HeartRate}}</span>
                      <span style="font-size:0.15rem;color:#000">次/分钟</span>
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
    getUser,
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
        path: "ws://127.0.0.1:8888/",
        socket: "",
        RespRate: 0,
        RespState: 0,  //RespState：1：呼吸状态正常；
        HeartRate: 0, //HeartRate：64：心率为 64，单位为 bpm；
        HeartState: 0, //HeartState：1：心跳状态正常；
        PeopleState: 0,  //PeopleState：1：当前有人
        RespWave: [],
        HeartWave: [], //RespWave&HeartWave：均为长度为 500 的一维矩阵，分别表示呼吸波形和心跳波形；

        nowDate: "", // 当前日期
        year: "",
        month: "",
        day: "",
        hh: "",
        mm: "",
        getWeek: "",
        timer: null,

        xAxisData: [],
        yAxisData: [],

        option: {

          grid: {
            show: false,
            left: "10%",
            right: "10%",
            top: "10",
            bottom: "10%",
            borderWidth: "0"
          },

          legend: {
            orient: 'vertical',
            bottom: 10,
            data: ['销量']
          },
          xAxis: {
            boundaryGap: false,
            show: true,
            data: ['', '', '', '', '', '']
          },
          yAxis: {
            boundaryGap: false,
            splitLine: {show: true},
            show: true,
            data: this.yAxisData
          },

          dataZoom: [
            {
              start: 0,
              end: 30,
              type: 'slider',
              show: false,
              handleSize: 35,
              textStyle: {
                show: false
              },
              backgroundColor: '#67C6D8',
              showDataShadow: true,
              showDetail: false,
              startValue: 3000,
              endValue: 5000
            }
          ],

          series: [
            {
              type: 'line',
              data: [500, 500, 500, 500, 500, 500],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#67C6D8'/*折线的颜色*/
                  },
                  color: "#67C6D8"/*图例(legend)的颜色,不是图例说明文字的颜色*/
                }
              },

              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#A9DFE9'},
                      /* {offset: 0.5, color: '#c4e1ff'},*/
                      {offset: 1, color: '#67C6D8'}
                    ]
                  )
                }
              },
              smooth: true//显示为平滑的曲线*/
            },

          ]
        },


        xAxisDataTwo: [],
        yAxisDataTwo: [],
        optionTwo: {

          grid: {
            show: false,
            left: "10%",
            right: "10%",
            top: "10",
            bottom: "10%",
            borderWidth: "0"
          },
          legend: {
            orient: 'vertical',
            bottom: 10,
            data: ['销量']
          },
          xAxis: {
            boundaryGap: false,
            show: true,
            data: ['1', '2', '', '', '', '']
          },
          yAxis: {
            boundaryGap: false,
            splitLine: {show: true},
            show: true,
            data: this.yAxisDataTwo
          },

          dataZoom: [
            {
              start: 0,
              end: 30,
              type: 'slider',
              show: false,
              handleSize: 35,
              textStyle: {
                show: false
              },
              backgroundColor: '#C073BC',
              showDataShadow: true,
              showDetail: false,
              startValue: 3000,
              endValue: 5000
            }
          ],

          series: [
            {
              type: 'line',
              data: [500, 500, 500, 500, 500, 500],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#C073BC'/*折线的颜色*/
                  },
                  color: "#C073BC"/*图例(legend)的颜色,不是图例说明文字的颜色*/
                }
              },

              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#DFB7DD'},
                      /* {offset: 0.5, color: '#c4e1ff'},*/
                      {offset: 1, color: '#C073BC'}
                    ]
                  )
                }
              },
              smooth: true//显示为平滑的曲线*/
            },

          ]
        },


        tableHeight: "270",

      }
    },
    created() {
      this.initData();
    },
    mounted() {
      this.$nextTick(function () {
        this.connectWebsocket();
        this.initFirstCharts();
        this.initTwoCharts();
        this.timeFormate(new Date());
        this.showTime(); // 1秒后执行
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
          this.tableHeight = "270";
        } else if (width >= 1400) {
          this.tableHeight = "200";
        }
        console.log(this.tableHeight);
      },

      initFirstCharts() {
        this.firstchart = echarts.init(this.$refs.firstchart);
        this.firstchart.setOption(this.option);
        //this.drawLine();
        for (var i = 50; i > 0; i--) {
          this.xAxisData.push("");
        }
        for (i = 1; i < 50; i++) {
          this.yAxisData.push(Math.round(0.01 * 1000));
        }
      },

      initTwoCharts() {
        this.chartTwo = echarts.init(this.$refs.chartTwo);
        this.chartTwo.setOption(this.optionTwo)
        //this.drawLineTwo();
        for (var i = 50; i > 0; i--) {
          this.xAxisDataTwo.push("");
        }
        for (i = 1; i < 50; i++) {
          this.yAxisDataTwo.push(Math.round(0.01 * 1000));
        }
      },

      drawLine() {
        for (var i = 100; i > 0; i--) {
          this.xAxisData.push("");
        }
        for (i = 1; i < 101; i++) {
          this.yAxisData.push(Math.round(Math.random() * 1000));
        }
        var data = [234, 234, 235, 12, 534, 23, 451, 1];
        console.log(this.yAxisData);
        var that = this;
        setInterval(function () {
          //that.yAxisData.push(Math.round(Math.random() * 1000));
          //that.yAxisData.shift();
          that.yAxisData.push(data);
          that.yAxisData.splice(0, 8);
          that.option.xAxis.data = that.xAxisData
          that.option.series[0].data = that.yAxisData
          that.firstchart.setOption(that.option, true) //这里要加true,不同数据同步

        }, 1000)
      },


      drawLineTwo() {
        for (var i = 100; i > 0; i--) {
          this.xAxisDataTwo.push("");
        }
        for (i = 1; i < 101; i++) {
          this.yAxisDataTwo.push(Math.round(Math.random() * 1000));
        }
        var that = this;
        setInterval(function () {
          that.yAxisDataTwo.push(Math.round(Math.random() * 1000));
          that.yAxisDataTwo.shift();
          that.optionTwo.xAxis.data = that.xAxisDataTwo
          that.optionTwo.series[0].data = that.yAxisDataTwo
          that.chartTwo.setOption(that.optionTwo, true)
        }, 1000)
      },


      connectWebsocket() {
        if (typeof(WebSocket) === "undefined") {
          alert("您的浏览器不支持socket")
        } else {
          // 实例化socket
          this.socket = new WebSocket(this.path);
          // 监听socket连接
          this.socket.onopen = this.open;
          // 监听socket错误信息
          this.socket.onerror = this.error;
          // 监听socket消息
          this.socket.onmessage = this.getMessage;
        }
      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        const data = msg.data;
        const result = JSON.parse(data);
        //console.log(JSON.parse(data));
        this.RespRate = result.RespRate;  //RespRate：14：呼吸率为 14，单位为 bpm；
        this.RespState = result.RespState;  //RespState：1：呼吸状态正常；
        this.HeartRate = result.HeartRate;  //HeartRate：64：心率为 64，单位为 bpm；
        this.HeartState = result.HeartState;  //HeartState：1：心跳状态正常；
        this.PeopleState = result.PeopleState;  //PeopleState：1：当前有人

        /*console.log(result.RespRate);
        console.log(result.RespState);
        console.log(result.HeartRate);
        console.log(result.HeartState);
        console.log(result.PeopleState);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");*/

        this.RespWave = result.RespWave;
        this.HeartWave = result.HeartWave; //RespWave&HeartWave：均为长度为 500 的一维矩阵，分别表示呼吸波形和心跳波形；

        //console.log(this.RespWave)
        const one = this.RespWave.substring(1, this.RespWave.length - 1);
        //console.log(one);
        const dataOne = one.split(',')
        //console.log(dataOne);
        //console.log(dataOne.length);
        for (var i = 0; i < dataOne.length; i++) {
          if (i == 3 || i == 5) {
            this.yAxisData.push(Math.round(Math.random() * 1000));
          } else {
            this.yAxisData.push(parseInt(dataOne[i]));
          }
        }
        console.log(this.yAxisData)
        //this.yAxisData.splice(0, 8);
        this.option.xAxis.data = this.xAxisData
        this.option.series[0].data = this.yAxisData
        this.firstchart.setOption(this.option, true) //这里要加true,不同数据同步
        this.yAxisData.splice(0, 500);

        const two = this.HeartWave.substring(1, this.HeartWave.length - 1);
        const dataTwo = two.split(',');
        for (var j = 0; j < dataTwo.length; j++) {
          if (j == 3 || j == 5) {
            this.yAxisDataTwo.push(Math.round(Math.random() * 1000));
          } else {
            this.yAxisDataTwo.push(parseInt(dataOne[j]));
          }
        }
        //this.yAxisDataTwo.splice(0, 8);
        this.optionTwo.xAxis.data = this.xAxisDataTwo;
        this.optionTwo.series[0].data = this.yAxisDataTwo;
        this.chartTwo.setOption(this.optionTwo, true);
        this.yAxisDataTwo.splice(0, 500);

      },
      send: function () {
        this.socket.send(params)
      },
      close: function () {
        console.log("socket已经关闭")
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
      // 销毁监听
      this.socket.onclose = this.close
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

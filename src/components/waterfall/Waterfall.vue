<template>
  <div class="container" >
    <el-row class="el-row" >
      <el-col :span="6" v-for="(item,index) in list" :key="index" style="margin-bottom:40px;text-align: center">
        <el-card :body-style="{ padding: '0px', height:'400px',}" shadow="hover" style="width: 350px;height: 400px;"
                 @click.native="goToGameInfo(item.gamePicture,item.dappsDetailId)">
          <div>
            <img :src="item.gamePicture" class="icon">
            <div class="cTitle">{{item.gameName}}</div>

            <div class="tag" >
              <div v-for="(items,index) in item.gameType.split(',')" :key="index">
                <div class="cTag">{{items}}</div>
              </div>

            </div>
            <div class="cInfo">
              <ul>Users:  {{item.creator | filtersValue}}</ul>
              <ul>By:  {{item.contractAddress | filtersValue}}</ul>
              <ul>No:  {{item.dappsDetailId}}</ul>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true
      },
      row: {
        type: Boolean,
        default: false
      },
      column: {
        type: Number,
        default: 4
      },
      height: {
        type: Number,
      }
    },
    data () {
      return {
        itemWidth: 0,
        columnData: []
      }
    },
    watch: {
    },
    computed: {
    },
    //过滤器
    filters: {
      filtersValue: function (data) {
        if (data.length > 15) {
          const len = data.length
          return data.substring(0, 12) + "..." + data.substring(len - 12, len)
        }
      },
    },
    mounted () {
    },
    methods: {
      goToGameInfo:function (url,id) {
        //this.$router.push('gameInfo')
        this.$router.push({
          path:'gameInfo',
          name:'gameInfo',
          query: {
            id: id,
            url: url,
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>

  .container {
    padding: 0 30px;
  }

  .title {
    color: white;
    font-size: 18px;
  }

  .grid-a-contentWidth {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 100px;
  }

  .el-row {
    margin-top: 35px;
  }

  .el-card, .el-message {
    border-radius: 8px;
    background: #403C4A;
    overflow: hidden;
    border: 0px solid #ffd04b !important;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  }

  .icon {
    width: 100%;
    height: 212px;
    border-radius: 8px 8px 0px 0px;
  }

  .cTitle {
    text-align: left;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin-left: 20px;
    margin-top: 16px;
  }

  .cTag {
    width: 60px;
    height: 16px;
    border: 1px solid #08C470;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 6px;
    line-height: 12px;
    text-align: center;
    color: #08C470;
    margin: 16px 0px 0px 5px;
  }

  .cInfo {
    font-size: 16px;
    line-height: 26px;
    color: #BEBDBD;
    margin-top: 16px;
    margin-left: 20px;
    text-align: left;
  }

  .tag{
    display: flex;
    flex-direction: row;
    padding-left: 15px;
  }

</style>

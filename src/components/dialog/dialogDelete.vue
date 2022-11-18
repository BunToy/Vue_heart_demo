<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dapp_title">
        <div class="dapp_info"/>
        <span class="dapp_content">{{title}}</span>
      </div>

      <img :src="pic" class="icon_upload">

      <div class="btns">
        <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
          {{dangerText}}
        </div>
        <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
          {{cancelText}}
        </div>
      </div>
      <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
    </div>

  </div>
</template>
<script>

  export default {
    props: {
      value: {},
      type: {
        type: String,
        default: 'default'
      },
      content: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      dangerText: {
        type: String,
        default: '删除'
      },
      confirmText: {
        type: String,
        default: '确认'
      },
      pic:{
        type: String,
        default: ''
      }
    },
    data() {
      return {
        showMask: false,
        name: "",
      }
    },
    methods: {
      closeMask() {
        this.showMask = false;
      },
      closeBtn() {
        this.$emit('cancel');
        this.closeMask();
      },
      dangerBtn() {
        this.$emit('danger');
        //this.closeMask();
      },
      confirmBtn() {
        this.$emit('confirm');
        //this.closeMask();
      },


    },
    mounted() {
      this.showMask = this.value;
    },
    watch: {
      value(newVal, oldVal) {
        this.showMask = newVal;
      },
      showMask(val) {
        this.$emit('input', val);
      },
    },
  }
</script>
<style lang="less" scoped>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    .dialog-container {
      width: 430px;
      height: 540px;
      background: #403C4A;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      position: relative;
      .dialog-title {
        width: 100%;
        height: 60px;
        font-size: 18px;
        color: #696969;
        font-weight: 600;
        padding: 16px 50px 0 20px;
        box-sizing: border-box;
      }
      .content {
        color: #ffffff;
        padding: 0 20px;
        box-sizing: border-box;
        margin-top: 20px;
        margin-left: 15px;
      }
      .inp {
        margin: 10px 0 0 20px;
        width: 200px;
        height: 40px;
        padding-left: 4px;
        border-radius: 4px;
        border: none;
        background: #efefef;
        outline: none;
        &:focus {
          border: 1px solid #509EE3;
        }
      }
      .btns {
        width: 100%;
        height: 60px;
        // line-height: 60px;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: left;
        padding: 0 30px;
        box-sizing: border-box;
        & > div {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          padding: 0 14px;
          color: #ffffff;
          background: #f1f1f1;
          border-radius: 8px;
          margin-right: 12px;
          cursor: pointer;
        }
        .default-btn {
          width: 100px;
          height: 40px;
          color: #0090C1;
          text-align: center;
          border: 1px solid #0090C1;
          border-radius: 5px;
          background: transparent;
          &:hover {
            color: #509EE3;
          }
        }
        .danger-btn {
          background: #0095E8;
          width: 100px;
          height: 40px;
          text-align: center;
          border-radius: 5px;
          &:hover {
            background: rgb(224, 135, 135);
          }
          &:active {
            background: #0095E8;
          }
        }
        .confirm-btn {
          width: 100px;
          height: 40px;
          color: #ffffff;
          background: #ffd04b;
          text-align: center;
          border-radius: 5px;
          &:hover {
            background: #6FB0EB;
          }
        }
      }
      .close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          font-weight: 600;
        }
      }
    }
  }

  .dapp_title {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
  }

  .dapp_info {
    width: 5px;
    height: 45px;
    background: #2AC5A9;
  }

  .dapp_content {
    line-height: 45px;
    margin-left: 30px;
    font-size: 20px;
    color: #FFFFFF;
  }

  .infoThree {
    margin-left: 35px;
    margin-top: 5px;
    color: #BEBDBD;
    font-size: 12px;
  }

  .infoTwo {
    margin-left: 35px;
    margin-top: 30px;
    color: white;
    font-size: 14px;
  }

  .inputOne {
    border: 1px solid rgba(190, 189, 189, 0.2);
    box-sizing: border-box;
    border-radius: 3px;
    margin-left: 35px;
    margin-right: 30px;
    margin-top: 10px;
    width: 90%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    color: white;
    background: transparent;
  }

  .avatar-uploader {
    width: 400px;
    height: 200px;
    margin: 10px 10px 10px 35px;
    border: 1px dashed #0095E8;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #0095E8;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }

  .icon_upload {
    width: 360px;
    height: 360px;
    margin: 20px 35px;
    border-radius: 6px;
  }

  .info {
    margin: 10px 0px 0px 140px;
    font-size: 18px;
    line-height: 29px;
    color: #0095E8;
  }

  .fileInput{
    position: absolute;
    top:0px;
    left: 0px;
    opacity:0;
    background: #00ffff;
    width: 100%;
    height: 100%;
  }

  .imgLast{
    position: absolute;
    top:0px;
  }
</style>

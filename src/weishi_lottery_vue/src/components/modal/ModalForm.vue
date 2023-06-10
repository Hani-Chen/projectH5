<template>
  <div class="modal" :class="{show:pageData.isShow}" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="content">
          <div class="from-title">
            <div class="title-head">
              <img src="~@/assets/img/portrait_5.jpg" alt="">
            </div>
            <div class="title-name">
              <p>Hi,{{dataList.full_name}}</p>
              <p>请完善以下领奖信息</p>
            </div>
          </div>
          <div class="input">
            <label class="input-box">
              <p class="input-name">姓名</p>
              <input class="input-text" v-model="inputName" type="text" placeholder="请输入您的姓名">
            </label>
            <label class="input-box">
              <p class="input-name">电话</p>
              <input class="input-text" v-model="inputPhone" type="text" placeholder="请输入您的电话">
            </label>
            <label class="input-box input-box-end">
              <p class="input-name">收货地址</p>
              <input class="input-text" type="text" v-model="indexSite" placeholder="请输入您的收货地址">
            </label>
          </div>
          <!-- 说明文字 -->
          <div class="info info-first">地址填写不完整小微发不了奖品哦~</div>
          <div v-if="dataList.is_black == 2" class="info">您的帐号存在异常，请填写您的<br>
            联系方式，我们会联系您核实情况</div>
          <div v-else class="info">我们将在7个工作日内为您寄出礼物<br>
            请您注意查收，如有问题<br>
            点击微视-我-右上角“...”反馈问题</div>

          <a href="javascript:void(0);" class="form-btn" @click="formBtn()"></a>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
    <!-- 组件 - 提示框 -->
    <BombTips v-bind.sync="showBombTips" :tipsContent="tipsContent"></BombTips>
  </div>
</template>

<script>
  import BombTips from '@/components/common/BombTips';
  /* 数据获取 - 表单提交 */
  import { getForm } from '@/http/getForm'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'

  export default {
    name: "ModalForm",
    data() {
      return {
        // 表单数据 - 姓名
        inputName: '',
        // 表单数据 - 电话
        inputPhone: '',
        // 表单数据 - 地址
        indexSite: '',
        // 表单数据 - 是否可以提交
        isSubmit: false,

        showBombTips: {
          visible: false
        },
        tipsContent: '',

      }
    },
    props: {
      pageData: {
        type: Object,
        default: function () {
          return false;
        }
      },
      productId: {
        type: String,
        default: function () {
          return '';
        }
      },

      dataList: {
        type: Object,
        default: function () {
          return [

          ];
        }
      }
    },
    methods: {
      // 关闭按钮
      close() {
        this.pageData.isShow = false

        // 关闭按钮 - 数据上报 - 统计点击次数
        MtaH5.clickStat("event25")
      },
      // 提交信息
      formBtn() {
        // 手机号正则表达式
        var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if(this.inputName == '') {
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "姓名不可为空";
          return
        }
        if(this.inputPhone == '') {
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "手机号码不可为空";
          return
        }
        if(!reg.test(this.inputPhone)) {
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "手机号码格式错误";
          return
        }
        if(this.indexSite == '') {
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "地址不能为空";
          return
        }
        
        /**
         * productId 商品id
         * name 用户姓名
         * phone 用户号码
         * address 用户地址
         * codeStr 随机码
         * 
         */
        // console.log(typeof this.productId,typeof this.inputName,typeof this.inputPhone,typeof this.indexSite,typeof '4556');
        // 获取校验码
        createToken().then(res => {
          var token = res.data.content.token
          getForm(this.productId,this.inputName,this.inputPhone,this.indexSite,Math.random(),token).then(res => {
            // console.log(res)
            // 提示框
            this.showBombTips = {
              visible: true
            };
            this.tipsContent = "信息提交成功";
            this.pageData.isShow = false

            // 信息提交成功 - 数据上报 - 统计点击次数
            MtaH5.clickStat("event24")
          })
        })

      },
    },
    components: {BombTips}
  }
</script>
<style scoped lang="scss">
  .modal-body {
    /*position: relative;*/
    width: 5.92rem;
    height: 8.66rem;
    left: 50%;
    margin-left: -2.96rem;
    margin-top: -4.33rem;
    animation: modalScale 0.5s linear;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 1.2rem;
    padding-left: .8rem;
    padding-right: 1.06rem;
    padding-bottom: .48rem;

    background: {
      image: url(~@/assets/img/modal_form_bg.png);
      size: 100%;
      position: top center;
      repeat: no-repeat;
    };
  }

  .from-title {
    display: flex;
    align-items: center;
    margin-bottom: .56rem;

    .title-head {
      position: relative;
      top: auto;
      left: auto;
      width: .78rem;
      height: .78rem;
      border-radius: 50%;
      overflow: hidden;
      font-size: 0;
      background-color: #fff6e9;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .title-name {
      flex: 1;
      padding-left: 0.4rem;
      font-size: .28rem;
      color: #763b20;
    }
  }

  .input {

    .input-box {
      width: 4.05rem;
      height: .7rem;
      border: 1px solid #763b20;
      border-radius: .1rem;
      display: flex;
      /*align-items: center;*/
      border-radius: .1rem;
      margin-bottom: .3rem;
    }
    .input-box-end {
      margin-bottom: 0;
    }
    .input-name {
      /*float: left;*/
      height: 100%;
      border-bottom-left-radius: .1rem;
      border-top-left-radius: .1rem;
      /*width: 1.3rem;*/
      flex: 0 0 1.3rem;
      line-height: .7rem;
      border-right: 1px solid #763b20;
      background: {
        color: #ffe0cc;
      };
      color: #763b20;
      font-size: .26rem;
      text-align: center;
    }

    .input-text {
      /*float: left;*/
      display: block;
      height: 100%;
      /*flex: 0 0 2.75rem;*/
      flex: 1;
      width: 100%;
      padding-left: 0.19rem;
      padding-right: .19rem;
      /*text-indent: 0.19rem;*/
      /*padding-right: 0.19rem;*/
      font-size: .24rem;
      color: #763b20;
    }
  }

  .info {
    font-size: .24rem;
    color: #763b20;
    text-align: center;
  }
  .info-first {
    margin-bottom: .3rem;
    text-align: left;
  }

  .form-btn {
    position: absolute;
    bottom: 0.6rem;
    left: 50%;
    display: block;
    width: 2.8rem;
    margin-left: -1.2rem;
    height: 0.8rem;
    background: {
      image: url(~@/assets/img/modal_success_btn.png);
      size: 100%;
      repeat: no-repeat;
      position: center center;
    }
  }

  .modal-close {
    left: auto;
    right: -0.2rem;
    bottom: auto;
    top: -0.6rem;
  }


</style>
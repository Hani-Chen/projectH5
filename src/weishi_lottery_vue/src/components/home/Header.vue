<template>
  <!-- 首页 - 头部模块 -->
  <div class="index-title-wrap">
    <!-- 头部 - 弹幕模块 -->
    <Dan></Dan>

    <!-- 头部 - 签到模块 -->
    <div class="signin">
      <!-- 装饰 - 金币1 -->
      <div class="ornament-gold1 signin-ornament1"></div>
      <!-- 装饰 - 树叶1 -->
      <div class="ornament-leaf1 signin-ornament2"></div>
      <!-- 装饰 - 树叶2 -->
      <div class="ornament-leaf2 signin-ornament3"></div>
      <!-- 签到 - 数据 -->
      <div class="signin-text">连续签到7天 最多可领70个夺宝币</div>
      <!-- 签到 - 进度条容器 -->
      <div class="signin-progress-wrap">
        <!-- 签到 - 进度条 -->
        <div class="signin-progress">

          <!-- 签到以一天圆点 -->
          <div class="round" :class="{round1 : signinDayNumber>1}"></div>
          <!-- 签到以二天圆点 -->
          <div class="round" :class="{round2 : signinDayNumber>2}"></div>
          <!-- 签到以三天圆点 -->
          <div class="round"  :class="{round3 : signinDayNumber>3}"></div>
          <!-- 签到以四天圆点 -->
          <div class="round"  :class="{round4 : signinDayNumber>4}"></div>
          <!-- 签到以五天圆点 -->
          <div class="round"  :class="{round5 : signinDayNumber>5}"></div>
          <!-- 签到以六天圆点 -->
          <div class="round"  :class="{round6 : signinDayNumber>6}"></div>
          <!-- 签到以七天圆点 -->
          <div class="round"  :class="{round7 : signinDayNumber>6}"></div>

          <div class="signin-progress-inner" 
          :class="signinDay">
            <span class="circle"></span>
          </div>
        </div>
        <!-- 签到 - 奖品 -->
        <div class="signin-prize"></div>
      </div>
      <!-- 签到 - 按钮 -->
      <button class="btn-signin" @click="signin()" v-if="isSignin != 1" :class="{broken:isPart == 1}"></button>
      <button class="btn-signin active" v-if="isSignin == 1" @click="share()"></button>
    </div>

    <signSucceed :signinSucceed="signinSucceed" :goldNumber="goldNumber"></signSucceed>
  </div>
</template>

<script>
  /* 组件引入 - 弹幕模块 */
  import Dan from './Dan'
  /* 组件引入 - 签到成功弹窗 */
  import signSucceed from '@/components/modal/ModalVideoDouble'

  /* 数据获取 - 签到接口引入 */
  import { getSign } from '@/http/sign'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'

  export default {
    name: "Header",
    data: function() {
      return {
        /**
         *  签到参数
         *  签到第一天  ==> one-days
         *  签到第二天  ==> two-days
         *  签到第三天  ==> three-days
         *  签到第四天  ==> four-days
         *  签到第五天  ==> five-days
         *  签到第六天  ==> six-days
         *  签到第七天  ==> seven-days
         */
        signinDay: '',
        // 签到天数
        signinDayNumber: '',
        // 是否签到成功
        signinSucceed: false,
        // 签到成功获取的夺宝币数量
        goldNumber: 12,
        isSignin: 2,
        isPart: 2

      }
    },
    // 获取用户信息
    props: {
      signinData: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    mounted: function() {
    },
    methods: {
      // 点击签到
      signin() {
        // 如果当天未签到
        if(this.isSignin == 2) {
          // 获取校验码
          createToken().then(res => {
            var token = res.data.content.token
            // console.log(token);
            // 点击签到 - 获取签到信息
            getSign(token).then(res => {
              var data = res.data.content
              // console.log(res);
              
              // 获取签到后获取的夺宝币数量
              this.goldNumber = data.num
              // 获取签到后的连续签到次数
              this.signinDayNumber = data.lx
              
              // 更改连续签到天数
              switch (this.signinDayNumber) {
                case 1: 
                  this.signinDay = 'one-days'; 
                  break;
                case 2: 
                  this.signinDay = 'two-days';
                  break;
                case 3: 
                  this.signinDay = 'three-days';
                  break;
                case 4: 
                  this.signinDay = 'four-days';
                  break;
                case 5: 
                  this.signinDay = 'five-days';
                  break;
                case 6: 
                  this.signinDay = 'six-days';
                  break;
                case 7: 
                  this.signinDay = 'seven-days';
              }
              // 点击签到 - 显示弹窗
              this.signinSucceed = true
              // 获取是否签到
              this.isSignin = 1
              // this.isPart = 2
              
              // 更新用户信息
              this.$parent.updateData()
              
              // 点击立即签到 - 数据上报 - 统计点击数量
              MtaH5.clickStat("event6")
            })
            
          })
        }
      },
      share() {
        // console.log(this.signinData.uid);
        
        this.shareFun(this.signinData.uid)
      }
    },
    watch: {
      // 监听用户信息
      signinData(newValue, oldValue) {
        this.isPart = newValue.part
        // 获取是否签到
        this.isSignin = newValue.is_sign
        // 获取签到天数s
        this.signinDayNumber = newValue.lx
        // 改变签到进度
        switch (this.signinDayNumber) {
          case '1': 
            this.signinDay = 'one-days'; 
            break;
          case '2': 
            this.signinDay = 'two-days';
            break;
          case '3': 
            this.signinDay = 'three-days';
            break;
          case '4': 
            this.signinDay = 'four-days';
            break;
          case '5': 
            this.signinDay = 'five-days';
            break;
          case '6': 
            this.signinDay = 'six-days';
            break;
          case '7': 
            this.signinDay = 'seven-days';
        }
      }
    },
    components: {
      Dan,
      signSucceed
    }
  }
</script>

<style scoped>
  .round {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate3d(0,-50%,0);
    width: 0.18rem;
    height: 0.18rem;
    background: #f46b34;
    border-radius: 50%;
    opacity: 0;
  }
  .round1 {
    left: 0.4rem;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
  .round2 {
    left: 1.25rem;
    opacity: 1;
    transition: opacity 0.4s linear;
  }
  .round3 {
    left: 2.1rem;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  .round4 {
    left: 3rem;
    opacity: 1;
    transition: opacity 0.6s linear;
  }
  .round5 {
    left: 3.9rem;
    opacity: 1;
    transition: opacity 0.7s linear;
  }
  .round6 {
    left: 4.8rem;
    opacity: 1;
    transition: opacity 0.8s linear;
  }
  .round7 {
    left: 5.7rem;
    opacity: 1;
    transition: opacity 0.8s linear;
  }
</style>
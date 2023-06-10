<template>
  <!-- 活动主页 -->
  <div class="page page-home">
    <div class="shade"  v-if="guide" @touchmove.prevent>
      <!-- 我知道按钮 -->
      <div class="btn btn-know" @click="know"></div>
    </div>
    <!-- title -->
    <div class="home-title">
      <!-- title - 背景图 -->
      <img class="bg" src="../assets/img/home_title_bg.jpg" />
      <!-- title - 内容 -->
      <div class="home-module title-content">
        <!-- 内容 - 优惠券 -->
        <div class="ticket-wrap">
          <!-- 优惠券 - 背景图 -->
          <img class="bg" src="../assets/img/home_ticket_bg.png" />
          <!-- 优惠券 - 金额 -->
          <div class="money">{{ticketMoney}}</div>
          <!-- 优惠券 - 文案 -->
          <div class="text-wrap">
            <!-- 标题 -->
            <div class="title">{{ticketTitle}}</div>
            <!-- 文案 -->
            <div class="text">{{ticketText}}</div>
          </div>
        </div>
        <!-- 内容 - 立即支付按钮 -->
        <button class="btn btn-payment" :class="[activeClass,{eventsnone:guide}]" v-on:click="payment" @touchstart="touchstart('btn-payment-active')" @touchend="touchend()">
          立即领取
          <img class="home_guide1"  v-if="guide" src="../assets/img/home_guide1.png" alt="">
        </button>
      </div>
    </div>
    <!-- lottery(抽奖模块) -->
    <div class="home-module home-lottery">
      <!-- 分享 - icon -->
      <!-- <img class="home_share" v-if="lotteryResult == 2" src="../assets/img/home_share.png" @click="lotteryShare" /> -->
      <!-- 装饰 - 两侧圈 -->
      <div class="circle-wrap">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div v-if="lotteryResult == 1">
        <img class="bg bg1" src="../assets/img/home_lottery_bg3.png" />
        <!-- 抽奖按钮 -->
        <button class="btn btn-lottery-same btn-lottery" :class="[activeClass,{eventsnone:guide}]" @touchstart="touchstart('btn-lottery-active')" @touchend="touchend()" @click="lottery">
          立赢免单
          <img class="bg-head" :class="{ani:attentionAnim}" src="../assets/img/home_hand.png" />
          <img class="home_guide2"  v-if="guide" src="../assets/img/home_guide2.png" alt="">
        </button>
      </div>
      <!-- 中奖 -->
      <div v-if="lotteryResult == 2">
        <img class="bg bg1" src="../assets/img/home_lottery_bg2.png" />
        <!-- 立即使用按钮 -->
        <button class="btn btn-lottery-same btn-employ" :class="activeClass" @touchstart="touchstart('btn-employ-active')" @touchend="touchend()">立即使用</button>
        <!-- 分享按钮 -->
        <button class="btn btn-lottery-same btn-share"  @click="lotteryShare" :class="activeClass" @touchstart="touchstart('btn-share-active')" @touchend="touchend()">喊好友沾喜气</button>
      </div>

      <!-- 未中奖  -->
      <div v-if="lotteryResult == 3">
        <img class="bg bg1" src="../assets/img/home_lottery_bg1.png" />
        <!-- 提醒我 -->
        <button class="btn btn-lottery-same btn-remind" :class="activeClass" @touchstart="touchstart('btn-remind-active')" @touchend="touchend()">提醒我明日赢免单</button>
        <!-- 分享按钮 -->
        <button class="btn btn-lottery-same btn-share" :class="activeClass" @touchstart="touchstart('btn-share-active')" @touchend="touchend()" @click="share">分享好友一起来</button>
      </div>

      <span class="text">每位用户每天可有一次赢取免单券的机会。单笔支付金额低于99元可立返所付全部金额。单比支付金额超过99元，即返99元</span>
      <img class="bg bg2" src="../assets/img/home_lottery_bg.png" />
    </div>
    <!-- subscribe(订阅模块) -->
    <div class="home-module home-subscribe">
      <div class="subscribe-item" v-for="(item,index) in subscribeList" :class="item.active" :key="index">
        <span>{{item.title}}</span>
        <img class="icon-more" src="../assets/img/home_icon_more.png" />
      </div>
    </div>
    <!-- rule(活动规则模块) -->
    <div class="home-module home-rule">
      <img class="title" src="../assets/img/home_rule_title.png" />
      <div class="rule-content">
        <span>1.活动时间：即日起截止2020年6月30日23: 59。</span>
        <span>2.适用范围：限广东省、山东省、福建省、吉林省、河北省部分城市已开通医保电子凭证支付的药店</span>
        <span>3.使用规则:</span>
        <span>(1)如您希望参与本活动，需要先点击“立即领取”以参与活动并申领“现金券"，券面金额为1元至99元不等;</span>
        <span>(2)领取成功后，可点击"立即使用”使用微信"医保电子凭证“在药店进行医保支付，支付成功且医保支付金额不小于5元，则可获得券面显示现金奖励，奖励将在24小时内直接发送到微信支付钱包;</span>
        <span>(3)如您在完成支付后又申请退款，将无法获得上述现金奖励</span>
        <span>4.活动须知</span>
      </div>
    </div>
    <!-- logo -->
    <img class="logo" src="../assets/img/logo.png" />
    <!-- 弹窗 -->
    <div class="modal" :class="saveImgShow?'show': ''"  @touchmove.prevent>
      <div class="modal-content">
        <div class="modal-bg" @click="close">
          <img class="share-hint" src="../assets/img/share_hint.png" alt="">
        </div>
        <div class="modal-body">
          <img class="share-img" :src="saveImg" />
          <button class="btn btn-save">长按保存成图片</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  data() {
    //这里存放数据
    return {
      // 优惠券金额
      ticketMoney: 30,
      // 优惠券标题
      ticketTitle: '药店返现券',
      ticketText:
        '满5元可用。即日起截止2020.06.30 23:59\n限广东、吉林、山东、福建、河北开通的药店使用；每名用户可领取3张现金券。',
      activeClass: false,
      // 抽奖结果 1 ==> 未抽奖; 2 ==> 中奖; 3 ==> 未中奖
      lotteryResult: 1,
      saveImgShow: false,
      attentionAnim: false,
      // 是否有指引
      guide: true,
      // 保存图片
      saveImg: require('../assets/img/save_img1.jpg'),
      subscribeList: [
        {
          id: 1,
          title: '插入卡包随时查找',
          active: 'special'
        },
        {
          id: 2,
          title: '查看可用的医院/药店'
        },
        {
          id: 3,
          title: '订阅用券提醒'
        },
        {
          id: 4,
          title: '订阅用券提醒'
        },
        {
          id: 5,
          title: '订阅用券提醒'
        }
      ]
    }
  },
  mounted () {
    this.guideFun()
  },
  methods: {
    // 点击立即支付
    payment() {
      console.log('点击了立即支付')
    },
    touchstart(active) {
      this.activeClass = active
    },
    touchend() {
      this.activeClass = ''
    },
    // 抽奖
    lottery() {
      // 获取随机数 - 后续直接改成指定值就好； 2 ==> 中奖; 3 ==> 未中奖
      let index = Math.floor(Math.random() * 2 + 2)
      this.lotteryResult= index
    },
    // 点击中奖后的分享
    lotteryShare() {
      this.saveImgShow = true
      this.saveImg= require('../assets/img/save_img1.jpg')
    },
    // 普通分享
    share() {
      this.saveImgShow = true
      this.saveImg= require('../assets/img/save_img2.jpg')
    },
    //点击中奖后的分享关闭
    close() {
      this.saveImgShow = false
    },
    know() {
      this.guide = false
      this.attentionAnim = true
    },
    guideFun() {
      // 新手指引判断 是否滚动
      if(this.guide){
        setTimeout(function() {
          window.scrollTo({ 
            top: 130, 
            behavior: "smooth" 
          });
        },300)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
@import url('./home.css');
</style>

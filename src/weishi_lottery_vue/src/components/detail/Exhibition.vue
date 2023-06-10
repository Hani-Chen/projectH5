<template>
  <div class="box">
    <div class="exhibition-wrap" :style="'z-index:' + index">
      <div class="exhibition-title">
        <!-- 时钟icon -->
        <div class="icon"></div>
        <div class="text">倒计时：</div>
        <div class="text2">
          <span class="number">{{pageHrDecade}}</span><span class="number">{{pageHrUnit}}</span>时<span class="number">{{pageMinDecade}}</span><span class="number">{{pageMinUnit}}</span>分<span class="number">{{pageSecDecade}}</span><span class="number">{{pageSecUnit}}</span>秒后开奖
        </div>
      </div>
      <!-- 展示区 -->
      <div class="exhibition-content">
        <div class="data">
          <!-- 产品图 -->
          <div class="data-img-wrap">
            <img :src="itemData.img" alt />
          </div>
          <!-- 文案 -->
          <div class="data-text-wrap">
            <div class="data-det" v-if="itemData.user_coin <= 0">投满 <span>{{itemData.coin}}夺宝币</span> 投满开奖</div>
            <div class="data-det" v-else>您已下注<span>{{itemData.user_coin}}夺宝币</span></div>

            <div class="data-probability" v-if="itemData.user_coin > 0">中奖概率是
              <span>{{itemData.chance}}%</span>
            </div>
            <div class="data-text">{{itemData.title}}</div>

            <div class="data-number">
              <div class="data-portrait">
                <div class="portrait-item"  v-for="(item,index) in itemData.join_avatar" :key="index">
                  <img class="portrait" :src="itemData.join_avatar[index]" alt />
                </div>
              </div>
              <div class="data-text2">
                已有<span>{{itemData.join_num}}</span>人下注
              </div>
            </div>
          </div>
        </div>
      <!-- 
          bgcolor ==> 进度条背景颜色色值
          progress ==> 进度
          surplus ==> 还需要多少夺宝币投满
          det  ==> 用户已投注多少夺宝币
          price ==> 商品总价格
        -->
        <Progress class="exhibition-progress" 
        :bgcolor="'#ffe0cc'" 
        :progress="itemData.join_coin / itemData.coin * 100"
        :surplus="itemData.coin - itemData.join_coin"
        :det="itemData.user_coin"
        :coin="itemData.coin"
        >
        </Progress>
        <!-- 下注按钮 && 加注按钮 -->
        <div class="exhibition-btn-bet" @click="betBtn()" :class="{'exhibition-btn-plus':itemData.user_coin > 0}" v-if="itemData.coin != itemData.join_coin"></div>
        <!-- 禁止加注按钮 -->
        <div class="exhibition-btn-bet exhibition-btn-forbid" v-else></div>
        <!-- 明日开抢按钮 -->
        <div class="exhibition-btn-bet exhibition-btn-tomorrow" v-show="itemData.isMr == 1"></div>
      </div>
    </div>
    <!-- 下注弹窗 -->
    <ModalBet :metabolic="metabolic"></ModalBet>
    <!-- 下注成功弹窗 -->
    <!-- <ModalSuccess :isShow="ModalIsShow" :numberList="numberList"></ModalSuccess> -->
    <ModalSuccess :ModalIsShow="ModalIsShow"></ModalSuccess>
  </div>
</template>

<script>
// 进度条
import Progress from '@/components/common/Progress'

// 下注弹窗
import ModalBet from '@/components/modal/ModalBet'

// 下注成功弹窗
import ModalSuccess from '@/components/modal/ModalSuccess'


// 倒计时
import { overTimeFun } from '@/components/common/OverTime'

export default {
  // props: ['itemData'],
  props: {
    itemData: {
      type: Object,
      default: function () {
        return {};
      }
    },
    userInfo: {
      type: Object,
      default: function () {
        return {};
      }
    }
    
  },
  data() {
    return {
      index: 5,
      overTime: null,  // 定时器名称
      /**
       * 组件 - 进度条变量
       * bgcolor ==> 进度条背景颜色色值
       * progress ==> 进度
       * surplus ==> 还需要多少夺宝币投满
       * det  ==> 用户已投注多少夺宝币
       * price ==> 商品总价格
       */
      dataList:{
        bgcolor: '#ffe0cc',
        progress: 20,
        surplus: 110,
        det: 40,
        price: 150
      },
      // 倒计时 - 小时 - 十位
      pageHrDecade: 0,
      // 倒计时 - 小时 - 个位
      pageHrUnit: 0,
      // 倒计时 - 分钟 - 十位
      pageMinDecade: 0,
      // 倒计时 - 分钟 - 个位
      pageMinUnit: 0,
      // 倒计时 - 秒 - 十位
      pageSecDecade: 0,
      // 倒计时 - 秒 - 个位
      pageSecUnit: 0,
      // 下注信息
      metabolic: {
        // 商品id
        productId: 0,
        // 数据变量 - 当前用户余额
        allMoney: 0,
        // 数据变量 - 当前商品价格
        price: 0,
        // 数据变量 - 剩余可投注价格
        betPrice: 0,
        // 数据变量 - 当前商品已投注数
        alreadyBetNumber: 0,
        isShow: false
      },
      ModalIsShow: {
        isShow: false
      }
      
    }
  },
  mounted: function () {
    this.countdown()
  },
  methods: {
    // 倒计时
    countdown() {
      var _this = this
      
        // var time = overTimeFun(_this.itemData.open_time)
      this.overTime = setInterval(function () {
        var time = overTimeFun(_this.itemData.open_time)
        // console.log(_this.itemData.open_time);
        _this.pageHrDecade = time.pageHrDecade
        _this.pageHrUnit = time.pageHrUnit
        _this.pageMinDecade = time.pageMinDecade
        _this.pageMinUnit = time.pageMinUnit
        _this.pageSecDecade = time.pageSecDecade
        _this.pageSecUnit = time.pageSecUnit
      }, 1000)
      this.$once('hook:beforeDestroy', function() {            
        clearInterval(this.overTime);                                    
      })
    },
    // 点击下注
    betBtn() {
      
      this.metabolic.productId = this.itemData.id
      // 当前用户余额
      this.metabolic.allMoney = parseInt(this.userInfo.coin)
      // 当前商品价格
      this.metabolic.price = parseInt(this.itemData.coin)
      // 剩余可投注价格
      this.metabolic.betPrice = parseInt(this.itemData.coin) - parseInt(this.itemData.join_coin)
      // 当前商品已投注数
      this.metabolic.alreadyBetNumber = parseInt(this.itemData.user_coin)
      // 弹窗是否显示
      this.metabolic.isShow = true

      // 点击下注 - 数据上报 - 上报产品id
      MtaH5.clickStat('event26',{'productid':this.metabolic.productId})

      
    },
    dataBet() {
      // 调用详情页方法数据
      this.$parent.itemData()
    }
  },
  watch: {
    'metabolic.isShow' (newValue, oldValue) {
      // console.log(newValue);
      
      // 更改层级
      if(newValue == true) {
        this.index = 20
      }else {
        this.index = 5
      }
      
    }
  },
  components: { Progress,ModalBet,ModalSuccess }
}
</script>

<style scoped lang="scss">
.exhibition {
  &-wrap {
    position: relative;
    margin-top: -0.15rem;
    width: 100%;
    height: 7.42rem;
    background: {
      image: url('~@/assets/img/detail_item_bg.png');
      size: 100% auto;
      position: 0 0;
      repeat: no-repeat;
    }
    z-index: 5;
  }
  // 标题
  &-title {
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 100%;
    height: 1.12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    // background: rgba($color: #000000, $alpha: 0.25);

    font-size: 0.32rem;
    font-weight: bold;
    color: #fff;
    .icon {
      display: inline-block;
      width: 0.47rem;
      height: 0.45rem;
      margin-right: 0.19rem;
      background: {
        image: url('~@/assets/img/detail_icon_clock.png');
        size: 100% auto;
        position: 0 0;
        repeat: no-repeat;
      }
    }
    .text {
      font-size: 0.32rem;
      font-weight: bold;
      color: #fff;
    }
    .number {
      display: inline-block;
      width: 0.31rem;
      height: 0.5rem;
      margin: 0 0.05rem;
      background: #fefefe;
      border-radius: 0.04rem;
      line-height: 0.5rem;
      text-align: center;
      color: #ec2825;
    }

    .number:first-child {
      margin-left: 0;
    }
  }
  &-content {
    .data {
      position: absolute;
      top: 2.32rem;
      left: 50%;
      width: 5.885rem;
      display: flex;
      align-items: center;
      margin-left: -2.88rem;
      &-img-wrap {
        width: 2rem;
        height: 2.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        margin-right: 0.49rem;
        border-radius: 0.1rem;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
      &-text-wrap {
        line-height: 1.2;
        // height: 2rem;
      }
      // 已下注
      &-det {
        font-size: 0.25rem;
        color: #763b20;
        margin-bottom: 0.15rem;
        span {
          font-size: 0.3rem;
          color: #ec2825;
          font-weight: bold;
        }
      }
      // 中奖率
      &-probability {
        font-size: 0.28rem;
        color: #763b20;
        margin-bottom: 0.2rem;
        span {
          font-size: 0.32rem;
          color: #ec2825;
          font-weight: bold;
        }
      }
      &-text {
        font-size: 0.24rem;
        color: #763b20;
      }
      // 参入人数
      &-number {
        display: flex;
        margin-top: 0.2rem;
      }
      // 头像
      &-portrait {
        display: flex;
        margin-right: 0.05rem;
        .portrait-item {
          width: 0.3rem;
          height: 0.3rem;
          margin-left: -0.08rem;
          border-radius: 50%;
          border: 1px solid #fff;
          overflow: hidden;
        }
        .portrait-item:first-child {
          margin-left: 0;
        }
        .portrait {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      // 参与人数文案
      &-text2 {
        font-size: 0.2rem;
        color: #763b20;
        span {
          font-size: 0.24rem;
          color: #ec2825;
        }
      }
    }
  }
  // 进度条
  &-progress {
    bottom: 1.8rem;
  }
  // 按钮
  &-btn-bet {
    position: absolute;
    left: 50%;
    bottom: 0.45rem;
    width: 5.6rem;
    height: 1.2rem;
    margin-left: -2.8rem;
    background: {
      image: url('~@/assets/img/detail_btn_bet.png');
      size: 5.6rem 4.8rem;
      position: 0 0;
      repeat: no-repeat;
    }
  }
  &-btn-plus {
    background-position: 0 -1.2rem;
  }
  &-btn-forbid {
    background-position: 0 -2.4rem;
  }
  &-btn-tomorrow{
    background-position: 0 -3.6rem;
  }
}
</style>

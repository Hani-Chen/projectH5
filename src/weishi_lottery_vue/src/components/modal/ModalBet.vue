<!-- 组件 - 下注弹窗 -->
<template>
  <div class="box" >
    <!-- 弹窗 - 下注弹窗 -->
    <div class="modal modal-bet" :class="{show:metabolic.isShow}" id="modalBet" @touchmove.prevent>
      <div class="modal-content">
        <div class="modal-bg" @click="close()"></div>
        <div class="modal-body">
          <div class="modal-inner">
            <div class="close" @click="close()"></div>
            <!-- 下注弹窗 - 标题 -->
            <div class="titel font-hyykh">我要夺宝</div>
            <!-- 下注弹窗 - 提示文案 -->
            <div class="text">
              1<span>夺宝币</span>可兑换1个<span>幸运号</span>，目前已获得{{metabolic.alreadyBetNumber}}个<span>幸运号</span>
            </div>
            <!-- 下注弹窗 - 中奖率 -->
            <div class="probability font-hyykh">
              中奖率
              <span class="bet-percent">{{percentage}}%</span>
            </div>
            <!-- 下注弹窗 - 下注 -->
            <div class="bet-wrap">
              <!-- 减 -->
              <div class="btn-bet btn-subtract" :class="{active:isSubtract}" @click="decrease()"></div>
              <input class="bet-number" value="0" id="betNumber" type="number" pattern="\d*" v-model="betNumber" @change="betNumberChange()" :style="'width:' + widthNumber + '.17rem'" />
              <!-- 加 -->
              <div class="btn-bet btn-puls" :class="{active:isAugment}" @click="augment()"></div>
            </div>
            <!-- 下注弹窗 - 提示文案2 -->
            <div class="text2">
              你有夺宝币
              <span class="bet-balances">{{metabolic.allMoney}}</span>个，
              <span class="bet-all" @click="betAll()">全部投注</span>
            </div>
            <button class="btn-affirmbet" @click="affirmbet()" :class="{active:metabolic.alreadyBetNumber >0}"></button>
          </div>
        </div>
      </div>
    </div>
    <ModalSuccess :ModalIsShow="ModalIsShow" :numberList="numberList"></ModalSuccess>
    <BombTips v-bind.sync="showBombTips" :tipsContent="tipsContent"></BombTips>
    <!-- 下注指引 -->
    <BetGuide :guideShow="guideShow"></BetGuide>
<!--  -->
  </div>
</template>

<script>

  /* 组件引入 - 下注成功弹窗 */
  import ModalSuccess from '@/components/modal/ModalSuccess'

  import BombTips from "@/components/common/BombTips";

  /* 数据获取 - 下注列表数据引入 */
  import { productBet } from '@/http/bet'
  /* 数据获取 - 首页指引 */
  import BetGuide from "@/components/detail/BetGuide";
  /* 数据获取 - 指引页数据 */
  import { guideStatus } from '@/http/guide'
  /* 数据获取 - 用户信息 */
  import { getUserInfo } from '@/http/getUserInfo'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'

export default {
  //import引入的组件需要注入到对象中才能使用
  props: ['metabolic'],
  data() {
    return {
      pageData: 0,
      widthNumber: 1,
      // 页面变量 - 当前下注数
      betNumber: 0,
      // 页面变量 - 百分比
      percentage: 0,
      // 页面变量 - 是否可以减注
      isSubtract: false,
      // 页面变量 - 是否可以加注
      isAugment: true,
      ModalIsShow: {
        isShow: false
      },
      numberList: [],

      showBombTips: {
        visible: false
      },
      tipsContent: "",
      guideShow: {
        isShow: false
      }
    }
  },
  methods: {
    /**
     * 下注 - 加注
     */
    augment() {
      if (this.isAugment) {
        // console.log(this.metabolic.betPrice * 0.05);
        
        // 如果用户没有夺宝币
        if (this.metabolic.allMoney <= 0) {
          
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "你没有夺宝币";
          return
        }
        // 是否可以减注
        this.isSubtract = true
        this.betNumber++
        // 如果投注数量大于当前用户余额
        if (this.betNumber >= this.metabolic.allMoney) {
          this.betNumber = this.metabolic.allMoney
          // 是否可以加注
          this.isAugment = false
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "夺宝币不足";
        } else if (this.betNumber >= this.metabolic.betPrice) {
          // 如果投注数量大于当前商品总价
          this.betNumber = this.metabolic.betPrice

          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "达到商品可投注最大值";
          // 是否可以加注
          this.isAugment = false
        }
        // 计算中奖率
        this.percentage = (((this.metabolic.alreadyBetNumber + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
      }
    },
    /**
     * 下注 - 减注
     */
    decrease() {
      if (this.isSubtract) {
        // 是否可以加注
        this.isAugment = true
        this.betNumber--
        // 如果下注数量小于0
        if (this.betNumber <= 0) {
          // 是否可以减注
          this.isSubtract = false
          this.betNumber = 0
          
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "下注不能小于0";
        }
        // 计算中奖率
        this.percentage = (((this.metabolic.alreadyBetNumber + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
      }
    },
    /**
     * 下注 - 手动输入
     */
    betNumberChange() {
      // console.log(this.betNumber)
      // 如果用户没有夺宝币
      if (this.metabolic.allMoney <= 0) {
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "你没有夺宝币";
        this.betNumber = 0
        return
      }
      // 是否可以减注
      this.isSubtract = true
      // 是否可以加注
      this.isAugment = true
      // 如果投注数量大于当前用户余额
      if (this.betNumber >= this.metabolic.allMoney) {
        this.betNumber = 0
        // 是否可以减注
        this.isSubtract = false
        // return
      } else if (this.betNumber == '') {
        this.betNumber = 0
        // 是否可以减注
        this.isSubtract = false
      } else if (this.betNumber >= this.metabolic.betPrice){
        // 如果投注数量大于当前商品总价
        this.betNumber = this.metabolic.betPrice
        // 提示框
        this.showBombTips = {
          visible: true
        };
        this.tipsContent = "达到商品可投注最大值";
        // 是否可以加注
        // this.isAugment = false
      }
      // 计算中奖率
      this.percentage = (((Number(this.metabolic.alreadyBetNumber) + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
      
      
    },
    /**
     * 下注 - 全投
     */
    betAll() {
      // 是否可以减注
      this.isSubtract = true
      // 是否可以加注
      this.isAugment = false
      // 如果投注数量大于当前用户余额
      if (this.metabolic.betPrice >= this.metabolic.allMoney) {
        this.betNumber = this.metabolic.allMoney
          // 提示框
          this.showBombTips = {
            visible: true
          };
          this.tipsContent = "夺宝币不足";
      } else if (this.metabolic.betPrice <= this.metabolic.allMoney) {
        // 如果余额大于当前商品可投注总价格
        this.betNumber = this.metabolic.betPrice
        // 提示框
        this.showBombTips = {
          visible: true
        };
        this.tipsContent = "达到商品可投注最大值";
      }
      // 计算中奖率
      this.percentage = (((this.metabolic.alreadyBetNumber + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
      // 点击全投 - 数据上报 -  数据+1
      // console.log('点击全投 - 数据上报 -  数据+1');
      MtaH5.clickStat('event18')
      
    },
    /**
     * 下注 - 确认下注
     */
    affirmbet() {
      var _this = this
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        // 是否可以减注
        _this.isSubtract = false
        // 扣除余额
        _this.metabolic.allMoney = _this.metabolic.allMoney - _this.betNumber
        // 扣除可投注数
        _this.metabolic.betPrice = _this.metabolic.betPrice - _this.betNumber
        // 改变当前商品已投注数
        _this.metabolic.alreadyBetNumber = _this.metabolic.alreadyBetNumber + _this.betNumber
        // console.log(_this.metabolic.productId,typeof String(Date.parse(new Date())),String(_this.betNumber))

        // 调用下注接口
        productBet(_this.metabolic.productId,String(Date.parse(new Date())),String(_this.betNumber),token).then(res => {
          
          // 确认下注 - 数据上报 -  参数获取下注数量 - (*参数明细隔天计算)
          MtaH5.clickStat('event17',{'btnnumber':_this.betNumber})
            
          var data = res.data.content
          // 关闭下注弹窗
          _this.metabolic.isShow = false

          if(res.data.message == '下注成功') {
            _this.ModalIsShow.isShow = true
            _this.numberList = data.codeSn
            _this.numberList.map(function (val) {
              // console.log(val )
              return val + '';
            })
          }else {
            // 提示框
            _this.showBombTips = {
              visible: true
            };
            _this.tipsContent = res.data.message;
          }


          for(var i = 0; i < _this.numberList.lenght; i++){
            _this.numberList[i] = _this.numberList[i] + '';
          }
          
          // 调用下注模块方法
          _this.$parent.dataBet()
        })
        // 恢复输入框值
        _this.betNumber = 0
      })

    },
    /**
     * 下注 - 关闭
     */
    close() {
      this.metabolic.isShow = false
      // 恢复输入框值
      this.betNumber = 0
      // 计算中奖率
      this.percentage = (((this.metabolic.alreadyBetNumber + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
      // 页面变量 - 是否可以减注
      this.isSubtract= false,
      // 是否可以加注
      this.isAugment = true
      
    },

    pageDataFun() {
      guideStatus().then(res => {
        this.pageData = res.data.content.guide_xztc
      })
    }
  },
  mounted() {
    this.pageDataFun()
    
  },
  computed: {
    numberStringList: function () {
      var arr = this.numberList;
      for(var i = 0; i < arr.lenght; i++){
        arr[i] = arr[i] + '';
      }

      return arr;
    }
  },
  watch: {
    'metabolic.alreadyBetNumber'(newValue, oldValue) {
      this.percentage = (((this.metabolic.alreadyBetNumber + Number(this.betNumber)) / this.metabolic.price) * 100).toFixed(1)
    },
    betNumber (newValue, oldValue) {
      // console.log(newValue);
      if (String(newValue).split('').length <= 2) {
        this.widthNumber = 1
      } else if (String(newValue).split('').length == 3) {
        // console.log(3);
        this.widthNumber = 2
      } else{
        // console.log(3);
        this.widthNumber = 3
      }
      
    },
    'metabolic.isShow' (newValue, oldValue) {
      this.pageDataFun()
      // console.log(this.pageData);

      if(this.pageData ==1 && this.metabolic.isShow){
        this.guideShow.isShow = true
      }
      // 更改层级
      if(newValue == true) {
        this.index = 20
      }else {
        this.index = 5
      }
      
    }
  },
  components: {BombTips,BetGuide,ModalSuccess}
}
</script>
<style lang='scss' scoped>
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 下注弹窗
  &-bet {
    .modal-body {
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      width: 100%;
      height: 5.5rem;
      margin-top: 0;
    }
    .modal-inner {
      height: 100%;
      @extend .bg-item;
      background-image: url('~@/assets/img/modal_bet_bg.jpg');
      text-align: center;
      animation: riseDown 0.5s linear;
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.6rem;
      height: 0.6rem;
      z-index: 3;
    }
    // 标题
    .titel {
      position: absolute;
      left: 0;
      top: 0.35rem;
      width: 100%;
      font-size: 0.46rem;
      line-height: 0.59rem;
      color: #ec2825;
    }
    // 提示文案
    .text {
      position: absolute;
      left: 0;
      top: 1.05rem;
      width: 100%;
      font-size: 0.24rem;
      color: #763b20;
      span {
        font-size: 0.28rem;
      }
    }
    // 概率
    .probability {
      position: absolute;
      top: 1.72rem;
      left: 0;
      width: 100%;
      font-size: 0.32rem;
      color: #000;
    }
    // 下注
    .bet-wrap {
      position: absolute;
      left: 0;
      top: 2.26rem;
      width: 100%;
      height: 1.24rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.8rem;
    }
    .btn-bet {
      width: 1.24rem;
      height: 1.24rem;
      background: {
        image: url('~@/assets/img/modal_btn_bet.png');
        size: 2.48rem;
        repeat: no-repeat;
      }
    }
    // 减
    .btn-subtract {
      &.active {
        background-position: -1.24rem 0;
      }
    }
    // .bet-number-wrap {
    //   min-width: 1.17rem;
    //   // width: 1.17rem;
    //   height: 1.17rem;
    //   border: 0.02rem solid #ffe6d4;
    //   line-height: 0.58rem;
    //   text-align: center;
    // }
    // 数量
    .bet-number {
      // min-width: 1.17rem;
      width: 1.17rem;
      height: 1.17rem;
      border: 0.02rem solid #ffe6d4;
      line-height: 0.58rem;
      text-align: center;
      font-size: 0.8rem;
    }
    // 加
    .btn-puls {
      background-position: -0 -1.24rem;
      &.active {
        background-position: -1.24rem -1.24rem;
      }
    }
    // 提示文案
    .text2 {
      position: absolute;
      left: 0;
      bottom: 1.4rem;
      width: 100%;
      font-size: 0.24rem;
      color: #763b20;
    }
    // 全部投注
    .bet-all {
      border-bottom: 1px solid #763b20;
    }
    .btn-affirmbet {
      position: absolute;
      left: 50%;
      bottom: 0.18rem;
      width: 5.8rem;
      height: 1rem;
      margin-left: -2.9rem;
      @extend .bg-item;
      background-image: url('~@/assets/img/modal_btn_affirmbet.png');
      &.active {
        background-image: url('~@/assets/img/modal_btn_affirmbet1.png');
      }
    }
  }
}
</style>
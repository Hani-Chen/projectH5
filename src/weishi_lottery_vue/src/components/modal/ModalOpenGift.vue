<!-- 组件 - 助力结束后 -->
<template>
   <!-- 弹窗 - 拆开礼包弹窗 -->
  <div class="modal modal-open-gift" :class="{show:openGiftIsShow.isShow}" id="modalOpenGift" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 查询中奖结果 - 标题文案 -->
          <div class="title font-hyykh">您已获得{{num}}个夺宝币快去夺宝吧！</div>
          <!-- 装饰 - 礼包 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-box"></div>
          <!-- 按钮 - 去夺宝 -->
          <div class="modal-btn modal-btn-join" @click="btnGoin()"></div>
          <!-- 关闭按钮 -->
          <div class="modal-close" @click="close()"></div>
        </div>
        <div class="base">
          <div class="base-products-list">

              <div class="base-products-item" v-for="(item,index) in list.slice(0,2)" :key="index" @click="detail(item.id)">
                <img class="item-img" :src="item.img" alt="">
                <div class="item-text-wrap">
                  <div class="item-price"><span>{{item.coin}}</span>夺宝币</div>
                  <div class="item-go"></div>
                </div>
              </div>
              <!-- <div class="base-products-item">
                <img class="item-img" src="~@/assets/img/ebay_bid3.jpg" alt="">
                <div class="item-text-wrap">
                  <div class="item-price"><span>22490</span>夺宝币</div>
                  <div class="item-go"></div>
                </div>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { firstCoin } from '@/http/firstcoin'
  /* 数据引入 - 下注产品列表 */
  import { drawListData } from '@/http/drawList'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      num: 1,
      list: [
        {
          id: 1,
          img: '',
          coin: ''
        },
        {
          id: 2,
          img: '',
          coin: ''
        }
      ]
    }
  },
  props: {
     openGiftIsShow: {
      type: Object,
      default: function () {
        return {};
      }
    }
  }, 
  methods: {
    
    // 点击马上拆开
    btnGoin() {
      this.openGiftIsShow.isShow = false
      // 点击去夺宝按钮 - 埋点统计点击次数
      MtaH5.clickStat("event1")
      this.$parent.updateData()
    },
    // 点击关闭
    close() {
      this.openGiftIsShow.isShow = false
      this.$parent.updateData()
      
    },
    // 点击单个推荐
    detail(index) {
      // 拆红包弹窗下方礼物N-去夺宝按钮 - 数据上报 - 上报产品id
      MtaH5.clickStat('event2',{'productid':index})

      this.$router.push({
        name: 'detail',
        params: {goodsId:index}
      })
      // console.log(index);
      this.$parent.updateData()
      
    }
  },
  
  mounted() {
    
    // window.addEventListener('scroll', this.guide);
    drawListData().then(res => {
      var data = res.data.content.list
      this.list = data
    })
  },
  watch: {
    'openGiftIsShow.isShow'(){ // 监听父组件的变化
      
      // this.childrenData = this.openGiftIsShow.isShow
      if(this.openGiftIsShow.isShow) {
        // 如果父组件有传值过来
        if(this.openGiftIsShow.num != 0) {
          this.num = this.openGiftIsShow.num
        }else {
          // 获取校验码
          createToken().then(res => {
            var token = res.data.content.token
            
              firstCoin(token).then(res => {
                // console.log(token);
                var data = res.data.content
                this.num = data.num
                // console.log('新用户来了',data.num);
              })
          })
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // &-body {
  // }
  // 拆红包弹窗 
  &-open-gift{
    // 弹窗主内容
    .modal-inner {
      height: 8.62rem;
      background-position: 0 0;
      animation: modalScale 0.5s linear;
    }
     // 标题文案
    .title {
      width: 5.04rem;
      margin-left: -2.53rem;
      font-size: 0.58rem;
      line-height: 0.8rem;
    }
    // 按钮 - 去夺宝
    .modal-btn-join {
      background-position: -3rem -1.1rem;
      bottom: 2.46rem;
    }
    .modal-close {
      bottom: 0.92rem;
    }
    .base {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.95rem;
      @extend .bg-item;
      background-image: url('~@/assets/img/modal_base_bg.jpg');
      animation: riseDown 0.5s linear;
    }
    .base-products {
      &-list {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.42rem 0.25rem;
      }
      &-item {
        width: 3.1rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
          // 产品图
          &-img {
            width: 1rem;
            height: auto;
          }
          // 产品文案
          &-text-wrap {
            width: 1.9rem;
            height: 100%;
            padding-top: 0.15rem;
          }
          // 价格
          &-price {
            font-size: 0.24rem;
            color: #763b20;
            line-height: 0.3rem;
          }
          // 去看看按钮
          &-go {
            width: 1.13rem;
            height: 0.45rem;
            margin-top: 0.05rem;
            @extend .bg-item;
            background-image: url('~@/assets/img/modal_products_go.png');
          }
        }
      }
    }
  }
}
</style>
<!-- 组件 - 夺宝礼包弹窗 -->
<template>
  <!-- 弹窗 - 夺宝礼包弹窗 -->
  <div class="modal modal-gift" :class="{show:userInfo.cs_coin == 1 || isShow}" id="modalGift" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg" @click="close()"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 夺宝礼包 - 标题文案 -->
          <div class="title font-hyykh">恭喜你已获得一个夺宝礼包</div>
          <!-- 装饰 - 宝箱 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-box"></div>
          <div class="ornament-material"></div>
          <!-- 按钮 - 马上拆开 -->
          <div class="modal-btn modal-btn-immediately" @click="immediately()"></div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isShow: false
    }
  },
  props: {
    userInfo: {
      type: Object,
      default: function() {
        return {}
      }
    },
    openGiftIsShow: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    start() {
      this.userInfo.cs_coin == 1 ? (this.isShow = true) : (this.isShow = false)
    },
    // 点击马上拆开
    immediately() {
      this.isShow = false
      this.openGiftIsShow.isShow = true
      this.$emit('input', !this.value)
      this.userInfo.cs_coin = 2
    },
    // 点击关闭
    close() {
      this.isShow = false
      this.userInfo.cs_coin = 2
    }
  },
  mounted() {
    this.start()
  }
}
</script>
<style lang='scss' scoped>
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  &-body {
    animation: modalScale 0.5s linear;
  }
  &-inner {
    background: {
      image: url(~@/assets/img/modal_bg1.png);
      position: -0.15rem 0.17rem;
    }
  }
  // 弹窗 - 礼品
  &-gift {
    // 标题文案
    .title {
      width: 4.2rem;
      margin-left: -2.1rem;
      font-size: 0.7rem;
      line-height: 0.9rem;
    }
    // 按钮 - 马上拆开
    .modal-btn-immediately {
      background-position: -6rem -1.1rem;
    }
  }
}
// .ornament-material {
//   position: absolute;
//   left: 0;
//   top: 2.88rem;
//   width: 100%;
//   height: 1.88rem;
//   background: {
//     image: url(~@/assets/img/modal_ornament2.png);
//     position: 0 0;
//     size: 100% auto;
//     repeat: no-repeat;
//   }
// }
</style>
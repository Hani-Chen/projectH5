<!-- 组件 - 查询中奖结果弹窗 -->
<template>
  <!-- 弹窗 - 查询中奖结果弹窗 -->
  <div class="modal modal-inquire"  :class="{show:popInquire.isShow}" id="modalInquire" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg" @click="close()"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 查询中奖结果 - 标题文案 -->
          <div class="title font-hyykh">你参与的夺宝活动开奖了快去看看你中奖了吗</div>
          <!-- 装饰 - 礼包 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-gift"></div>
          <!-- 按钮 - 马上查询 -->
          <div class="modal-btn modal-btn-inquire" @click="inquire()"></div>
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
    return {}
  },
  props: {
    popInquire: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  methods: {
    // 点击关闭按钮 - 关闭查询弹窗 - 
    close() {
      this.popInquire.isShow = false
      
    },
    // 点击去查询
    inquire() {
      // 点击跳转
      this.$router.push({
        path: "/Profile"
      });

      // 点击去查询 - 数据上报 - 数据+1
      MtaH5.clickStat("event20")
    }
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
  // 查询中奖结果；
  &-inquire {
    // 标题文案
    .title {
      width: 5.1rem;
      margin-left: -2.55rem;
      font-size: 0.46rem;
      line-height: 0.7rem;
    }
    // 按钮 - 马上查询
    .modal-btn-inquire {
      background-position: 0 0;
    }
  }
}
</style>
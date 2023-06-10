<!-- 组件 - 助力成功弹窗 -->
<template>
  <!-- 弹窗 - 助力成功弹窗 - 客户要求助力成功后的余额直接滚动展示在吸底的余额中不需要弹窗 -->
  <div class="modal modal-gift" id="modalGift" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 夺宝礼包 - 标题文案 -->
          <div class="title font-hyykh">恭喜你已获得一个夺宝礼包</div>
          <!-- 装饰 - 宝箱 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-box"></div>
          <!-- 按钮 - 马上拆开 -->
          <div class="modal-btn modal-btn-immediately"></div>
        </div>
        <div class="modal-close"></div>
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
  }
}
</script>
<style lang='scss' scoped>
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 弹窗 - 助力成功
  &-help-success {
    // 标题文案
    .title {
      width: 5rem;
      margin-left: -2.5rem;
      font-size: 0.51rem;
      line-height: 0.68rem;
    }
    // 按钮 - 马上拆开
    .modal-btn-helpsuccess {
      background-position: -6rem -2.2rem;
    }
  }
}
</style>
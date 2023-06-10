<!-- 组件 - 提示分享弹窗 -->
<template>
    <!-- 弹窗 - 提示分享弹窗 -->
  <div class="modal modal-share" id="modalShare" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 提示分享 - 标题文案 -->
          <div class="title font-hyykh">继续分享好友获得夺宝币</div>
          <!-- 装饰 - 礼包 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-gift"></div>
          <!-- 按钮 - 去分享 -->
          <div class="modal-btn modal-btn-share"></div>
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
  // 提示分享
  &-share {
    // 标题文案
    .title {
      width: 4rem;
      margin-left: -2rem;
      font-size: 0.66rem;
      line-height: 0.9rem;
    }
    // 按钮 - 分享
    .modal-btn-share {
      background-position: 0 -1.1rem;
    }
  }
}
</style>
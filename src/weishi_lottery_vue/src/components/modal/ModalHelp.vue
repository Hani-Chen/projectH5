<!-- 组件 - 提示助力弹窗 -->
<template>
  <!-- 弹窗 - 提示助力弹窗 -->
  <div class="modal modal-help" id="modalHelp" @touchmove.prevent  :class="{show:ModalHelp.isShow}">
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 提示助力 - 标题文案 -->
          <div class="title font-hyykh">好友就差你的助力啦助力好友赢红包哦</div>
          <!-- 装饰 - 宝箱 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-box"></div>
          <!-- 按钮 - 去助力 -->
          <div class="modal-btn modal-btn-help" @click="help()"></div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    ModalHelp: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  methods: {
    help() {
      this.$parent.startHelpFun()
    },
    // 关闭按钮
    close() {
      this.ModalHelp.isShow = false
    },
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 提示助力
  &-help {
    // 标题文案
    .title {
      width: 4.9rem;
      margin-left: -2.45rem;
      font-size: 0.54rem;
      line-height: 0.76rem;
    }
    // 按钮 - 助力
    .modal-btn-help {
      background-position: -6rem 0rem;
    }
  }
}
</style>
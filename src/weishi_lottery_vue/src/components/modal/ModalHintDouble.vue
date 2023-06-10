<!-- 组件 - 视频翻倍弹窗 -->
<template>
  <!-- 弹窗 - 翻倍成功弹窗 -->
  <div class="modal modal-hint-double" id="modalHintDouble" :class="{show:modalHintDouble.isShow}" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 翻倍成功 - 标题文案 -->
          <div class="title font-hyykh">恭喜你，你的夺宝币翻倍啦</div>
          <!-- 装饰 - 翻倍 -->
          <div class="ornament"></div>
          <!-- 按钮 - 去拆开 -->
          <div class="modal-btn modal-btn-toopen" @click="HintDouble()"></div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalHintDouble'],
  data() {
    return {
    }
  },
  methods: {
    close() {
      // 点击关闭 - 关闭弹窗
      this.modalHintDouble.isShow = false
      // 执行父组件 翻倍成功后函数
      this.$parent.signDoubleFun()
    },
    // 翻倍成功弹窗 - 点击去拆开 - 显示拆开礼包弹窗
    HintDouble() {
      // console.log('点击去拆开 - 数据上报 - 点击数量+1');
      // 点击去拆开 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event8")
      // 点击去拆开 - 关闭弹窗
      this.modalHintDouble.isShow = false
      // 执行父组件 翻倍成功后函数
      this.$parent.signDoubleFun()

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 弹窗 - 提示翻倍成功
  &-hint-double {
    // 标题文案
    .title {
      width: 3.9rem;
      margin-left: -1.95rem;
      font-size: 0.64rem;
      line-height: 0.9rem;
    }
    // 按钮 - 去拆开
    .modal-btn-toopen {
      background-position: -6rem -2.2rem;
    }
  }
}
</style>

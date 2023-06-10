<template>
  <div class="page-bg">
    <!-- 内容背景 - 固定背景 -->
    <div class="bg-fixation"></div>
    <!-- 内容背景 - 延伸背景 -->
    <div class="bg-extend"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.page-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // 固定背景
  .bg-fixation {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 9rem;
    @extend .bg-item;
    background-image: url('~@/assets/img/detail_bg_fixation.png');
    z-index: 2;
  }
  // 延伸背景
  .bg-extend {
    position: absolute;
    left: 0;
    top: 9rem;
    width: 100%;
    height: 100%;
    background: {
      image: url('~@/assets/img/detail_bg_extend.jpg');
      repeat: repeat-y;
      size: 100% auto;
      position: 0 0;
    }
  }
}
</style>

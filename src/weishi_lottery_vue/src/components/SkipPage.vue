<template>
  <div class="skip-box">
    <!-- 头部 - 进入个人中心按钮 -->
    <!-- <div class="btn-my" v-if="isSkipMy"></div> -->
    <!-- 公共组件 - 头部活动规则按钮 -->
    <router-link to="/Profile"  class="btn-my" v-if="isSkipMy"></router-link>
    <!-- 公共组件 - 头部活动规则按钮 -->
    <router-link to="/Rule"  class="btn-rule" v-if="isSkipRule"></router-link>
    <!-- <div></div> -->
  </div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
  props: ['isSkipMy','isSkipRule'],
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
// 公共样式 - 页面顶部活动规则按钮
.skip-box {
  position: relative;
  z-index: 20;
}
.btn-rule {
  position: absolute;
  top: 0.21rem;
  right: 0;
  width: 1.3rem;
  height: 0.42rem;
  background: {
    image: url('~@/assets/img/btn_rule.png');
    size: 100% auto;
    repeat: no-repeat;
    position: center;
  }
}
// 头部 - 进入个人中心按钮
.btn-my {
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
  width: 0.7rem;
  height: 0.7rem;
  background: {
    image: url('~@/assets/img/index_btn_my.png');
    size: 100% auto;
    repeat: no-repeat;
    position: center;
  }
}
</style>

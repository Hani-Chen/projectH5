<template>
  <div class="skip-box">
    <!-- 头部 - 进入个人中心按钮 -->
    <div class="btn-my" @click="skip()"></div>
  </div>
</template>

<script>
  export default {
    name: "MineBtn",

    methods: {
      skip() {
        // alert(123)
        this.$router.push({
          path: "/Profile"
        });
        // 点击我的 - 数据上报 - 统计点击数量
        MtaH5.clickStat("event5")
      }
    }
  }
</script>

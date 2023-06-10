<template>
  <div class="skip-box">
    <!-- 公共组件 - 头部活动规则按钮 -->
    <div  class="btn-rule" @click="skip()"></div>
  </div>
</template>

<script>
  export default {
    name: "RuleBtn",

    methods: {
      skip() {
        // alert(123)
        this.$router.push({
          path: "/Rule"
        });
        // 点击活动规则 - 数据上报 - 统计点击数量
        MtaH5.clickStat("event4")
      }
    }
  }
</script>

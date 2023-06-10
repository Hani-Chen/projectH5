<template>
  <!-- 活动规则 -->
  <div class="page page-rule-wrap show">
     <!-- 装饰 - 金币1 -->
      <div class="ornament-gold2"></div>
      <!-- 装饰 - 树叶2 -->
      <div class="ornament-leaf2"></div>
    <!-- 活动规则 - 页面背景 -->
    <div class="bg"></div>
    <div class="bg-title"></div>
    <div class="rule-content"></div>
    <RuleContent></RuleContent>
  </div>
</template>

<script>
  // content
  import RuleContent from '@/components/rule/RuleContent';
export default {
  data() {
    return {}
  },
  components: {RuleContent}
}
</script>

<style scoped lang="scss">

</style>

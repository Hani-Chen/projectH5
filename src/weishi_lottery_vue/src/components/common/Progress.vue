<template>
  <!-- 单个商品 - 底部 -->
  <div class="item-base">
    <!-- 底部 - 进度条容器 -->
    <div class="item-progress-wrap" :style="'background:' + bgcolor">
      <!-- 进度条 -->
      <div class="item-progress"  :style="'width:' + progress+'%'">
        <span class="item-progress-text">还需{{surplus}}夺宝币</span>
      </div>
    </div>
    <!-- 底部 - 文案 -->
    <div class="item-base-text">
      你已投注 <span>{{det}}</span>币，总共<span>{{coin}}</span>币
    </div>
  </div>
</template>

<script>
export default {
  /**
   * bgcolor ==> 进度条背景颜色色值
   * progress ==> 进度
   * surplus ==> 还需要多少夺宝币投满
   * det  ==> 用户已投注多少夺宝币
   * coin ==> 商品总价格
   */
  props: ['bgcolor','progress','surplus','det','coin'],
  // props: {
  //     dataList: {
  //       type: Object,
  //       default: function () {
  //         return {};
  //       }
  //     },
      
  //   },
  // data() {
  //   return {}
  // },
  components: {}
}
</script>

<style scoped lang="scss">
.item {
  // 底部
  &-base {
    position: absolute;
    left: 0;
    bottom: 0.25rem;
    width: 100%;
  }
  // 进度框
  &-progress-wrap {
    position: relative;
    width: 5.75rem;
    height: 0.3rem;
    margin: 0 auto 0.15rem;
    background: #fff6e9;
    border-radius: 0.15rem;
    overflow: hidden;
  }
  // 进度
  &-progress {
    width: 90%;
    height: 100%;
    background: #f46b34;
    border-radius:0 0.15rem 0.15rem 0;
    // 提示文案
    &-text {
      position: absolute;
      top: 0;
      right: 0.2rem;
      height: 100%;
      font-size: 0.2rem;
      color: #8a583e;
      text-shadow: 0 0 0 #8a583e;
    }
  }
  // 底部 - 文案
  &-base-text {
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    color: #763b20;
    span {
      font-size: 0.24rem;
      color: #ec2825;
    }
  }
}
</style>

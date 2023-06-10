<!-- 组件 - 未完成观看视频弹窗 -->
<template>
  <!-- 弹窗 - 未完成观看视频弹窗 -->
  <div class="modal modal-unfinished" id="modalUnfinished" :class="{show:ModalUnfinished.isShow}" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 未完成观看视频 - 标题文案 -->
          <div class="title font-hyykh">你还需要看{{ModalUnfinished.time}}秒视频才可翻倍</div>
          <!-- 装饰 - 翻倍 -->
          <div class="ornament"></div>
          <!-- 按钮 - 容器 -->
          <div class="btn-wrap">
            <!-- 按钮 - 继续 观看 -->
            <div class="modal-btn btn-continue" @click="keep()"></div>
            <!-- 按钮 - 去寻宝 -->
            <div class="modal-btn btn-hunt" @click="hunt()"></div>
          </div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['ModalUnfinished'],
  data() {
    return {
    }
  },
  methods: {
    close() {
      // 点击关闭 - 关闭弹窗
      this.ModalUnfinished.isShow = false

      // 执行父组件 放弃翻倍函数
      this.$parent.abandonDoubleFun()
      // console.log('点击去夺宝 - 数据上报 - 点击数量+1');
      // 签到翻倍失败去夺宝按钮 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event10")
    },
    // 翻倍失败弹窗 - 点击继续观看 - 跳转外链继续播放
    keep() {
      // console.log('点击继续观看 - 数据上报 - 点击数量+1');
      // 点击继续观看 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event9")
      // 点击继续观看 - 关闭弹窗
      this.ModalUnfinished.isShow = false

      // 执行父组件 继续翻倍函数
      this.$parent.goonDoubleFun()
    },
    // 翻倍失败弹窗 - 点击去夺宝 - 回到页面
    hunt() {
      // console.log('点击去夺宝 - 数据上报 - 点击数量+1');
      // 签到翻倍失败去夺宝按钮 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event10")
      // 点击继续观看 - 关闭弹窗
      this.ModalUnfinished.isShow = false

      // 执行父组件 放弃翻倍函数
      this.$parent.abandonDoubleFun()
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 弹窗 - 未完成观看视频
  &-unfinished {
    // 标题文案
    .title {
      width: 5rem;
      margin-left: -2.5rem;
      font-size: 0.57rem;
      line-height: 0.86rem;
    }
    // 按钮容器
    .btn-wrap {
      position: absolute;
      left: 50%;
      bottom: 0.1rem;
      width: 5.62rem;
      margin-left: -2.81rem;
    }
    // 按钮 - 继续观看
    .btn-continue {
      bottom: 0;
      left: -0.15rem;
      margin-left: 0;
      background-position: -3rem -2.2rem;
    }
    .btn-hunt {
      bottom: 0;
      left: auto;
      right: -0.1rem;
      margin-left: 0;
      background-position: 0 -2.2rem;
    }
  }
}
</style>

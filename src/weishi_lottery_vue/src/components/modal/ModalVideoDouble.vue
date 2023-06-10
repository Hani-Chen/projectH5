<!-- 组件 - 视频翻倍弹窗 -->
<template>
  <!-- 弹窗 - 视频翻倍弹窗 -->
  <div class="modal modal-video-double" id="modalVideoDouble" :class="{show:signinSucceed}" @touchmove.prevent>
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 视频翻倍弹窗 - 标题文案 -->
          <div class="title font-hyykh">你已获得{{goldNumber}}个夺宝币看60秒视频翻倍哦</div>
          <!-- 装饰 - 翻倍 -->
          <div class="ornament"></div>
          <!-- 按钮 - 去翻倍 -->
          <div class="modal-btn modal-btn-double" @click="double()"></div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>
<script>
// 开始翻倍计时 接口引入
import { editVtime } from '@/http/editVtime'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'
export default {
  props: ['signinSucceed','goldNumber'],
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.signinSucceed = false
    },
    // 签到成功弹窗 - 点击去翻倍 - 跳转外链
    double() {
      // console.log('点击去翻倍 - 数据上报 - 点击数量+1');
      // 点击去翻倍 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event7")
      // weishi://feed?feed_id=6XfL5C0eo1HAHQVdi
      
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        // 请求翻倍计时接口 - 后期可写在跳转微视成功的回调内
        editVtime('1',token).then(res => {
          // console.log('请求翻倍计时接口',res);
          // alert('请求翻倍计时接口')
          this.signinSucceed = false
          // 点击去翻倍 - 跳转外链
          window.location.href = 'weishi://main?goto=recommend'
        })
      })
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
  // 弹窗 - 看视频翻倍
  &-video-double {
    // 标题文案
    .title {
      width: 4.9rem;
      margin-left: -2.4rem;
      font-size: 0.52rem;
      line-height: 0.8rem;
    }
    // 按钮 - 去翻倍
    .modal-btn-double {
      width: 2.94rem;
      height: 1.13rem;
      margin-left: -1.47rem;
      background-image: url('~@/assets/img/modal_btn_double.png');
      background-size: 100% auto;
    }
  }
}
</style>

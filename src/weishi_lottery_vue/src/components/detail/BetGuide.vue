<template>
  <div class="guide-wrap" :class="{show:guideShow.isShow}" @touchmove.prevent>
    <div class="guide-inner">
      <div class="guide-btn" @click="affirm()"></div>
    </div>
  </div>
</template>

<script>
  /* 数据获取 - 首页指引页数据 */
  import { guideStatus } from '@/http/guide'
  /* 数据获取 - 首页指引页关闭数据 */
  import { endguide } from '@/http/endguide'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'
export default {
  data() {
    return {
      // guideShow: false
    }
  },
  props: {
     guideShow: {
      type: Object,
      default: function () {
        return {};
      }
    }
  }, 
  methods: {
    affirm() {
      this.guideShow.isShow = false
      
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        endguide('3',token).then(res => {
          // console.log(res)
        })
      })
    }
  },
  mounted() {
    guideStatus().then(res => {
      if(res.data.content.guide_xztc == 1){
        this.guideShow.isShow = false
      }
    })
  },
  components: {}
}
</script>

<style scoped lang="scss">
.guide {
  &-wrap {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // background: rgba($color: #000000, $alpha: 0.7);
    z-index: 999;
    &.show {
      display: block;
    }
  }
  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    background: {
      image: url('~@/assets/img/get_guide.png');
      size: 100% auto;
      position: bottom 0.02rem left 0,
    }
  }
  &-btn {
    position: absolute;
    left: 50%;
    bottom: 0.6rem;
    width: 3.4rem;
    height: 0.9rem;
    margin-left: -1.7rem;
    // background: rgba($color: #f00, $alpha: 0.7);
    background: {
      image: url('~@/assets/img/btn_see.png');
      size: 100% auto;
    }
  }
}
</style>

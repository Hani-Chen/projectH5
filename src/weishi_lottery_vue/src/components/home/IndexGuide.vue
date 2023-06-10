<template>
  <div class="guide-wrap " :class="{show:guideShow}" @touchmove.prevent>
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
      guideShow: false
    }
  },
  
  methods: {
      affirm() {
        this.guideShow = false
        
        // 获取校验码
        createToken().then(res => {
          var token = res.data.content.token
          endguide('1',token).then(res => {
            // console.log(res)
          })
        })
        
        // 点击我知道了 - 数据上报 - 统计点击数量
        MtaH5.clickStat("event3")
      }
  },
  mounted() {
    guideStatus().then(res => {
      if(res.data.content.guide_xzlb ==1){
        this.guideShow = true
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
    z-index: 99;
    &.show {
      display: block;
    }
  }
  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    background: {
      image: url('~@/assets/img/index_guide.png');
      size: 100% auto;
    }
  }
  &-btn {
    position: absolute;
    left: 50%;
    top: 10rem;
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

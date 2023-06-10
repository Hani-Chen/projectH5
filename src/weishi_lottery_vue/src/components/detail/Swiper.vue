<template>
  <div class="detail-swiper-wrap">
    <swiper :options="swiperOption" ref="mySwiper" class="detail-swiper">
      <!-- slides -->
      <swiper-slide class="detail-swiper-item" v-for="(item,index) in list" :key="index">
        <img class="detail-swiper-img" :src="item.vimg" alt />
        <a :href="item.vlink" class="black-shade" v-show="item.vlink !=''"></a>
      </swiper-slide>
      <!-- <swiper-slide class="detail-swiper-item">
        <img class="detail-swiper-img" src="~@/assets/img/ebay_bid2.jpg" alt />
      </swiper-slide> -->
    </swiper>
    <!-- 提示文案 -->
    <div class="detail-swiper-text">本礼物由腾讯微视提供</div>
  </div>
</template>

<script>
/* swiper 引入 S */
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
/* swiper 引入 E */
export default {
  props: ['list'],
  data() {
    return {
      swiperOption: {
        // loop: true
        // 所有的參數同 swiper 官方 api 參數
        // ...
      },
      
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    
  },
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="scss">
.detail {
  &-swiper-wrap {
    position: relative;
  }
  // 轮播
  &-swiper {
    width: 100%;
    height: 4.25rem;
    .black-shade {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: {
        image: url("~@/assets/img/swiper_paly.png");
        size: 0.76rem 0.76rem;
        position: center;
        repeat: no-repeat;
      }
    }
    // 单个轮播
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-top: 0.2rem;
        height: 90%;
        width: auto;
      }
    }
    // 文案
    &-text {
      position: absolute;
      left: 50%;
      bottom: -0.03rem;
      width: 2.48rem;
      height: 0.37rem;
      margin-left: -1.24rem;
      border-radius: 0.18rem;
      background: rgba($color: #000000, $alpha: 0.3);
      color: #fff;
      font-size: 0.2rem;
      line-height: 0.4rem;
      text-align: center;
      z-index: 20;
    }
  }
}
</style>

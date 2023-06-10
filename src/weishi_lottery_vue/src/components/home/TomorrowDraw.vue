<template>
  <!-- 页面 - 底部模块 -->
  <div class="index-base-wrap" >
    <!-- 装饰 - 树叶3 -->
    <div class="ornament-leaf3"></div>
    <!-- 装饰 - 金币2 -->
    <div class="ornament-gold2"></div>
    <div class="index-base-inner">

      <div class="item-wrap" v-for="(item,index) in list.slice(0,2)" :key="index">
        <div class="item-img-wrap">
          <img :src="item.img" alt />
        </div>
        <div class="item-details">
          <div class="item-price">{{item.coin}}夺宝币</div>
          <!-- <div class="item-btn-look"></div> -->
          <router-link tag="button" :to="'/detail/' + item.id" class="item-btn-look"></router-link>
          <!-- <div class="item-btn-look"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // 用户信息接口引入
  import { getTomorrow } from '@/http/tomorrow'

  export default {
    name: "TomorrowDraw",
    data() {
      return {
        // 明日开抢数据
        list: []
      }
    },
    mounted: function() {
      getTomorrow().then(res => {
        var data = res.data.content.list
        this.list = data
        // console.log('明日开抢',data);
      })
    },
  }
</script>

<style scoped>

</style>
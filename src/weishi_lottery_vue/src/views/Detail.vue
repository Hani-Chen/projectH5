<template>
  <div class="page page-detail-wrap show">
    <!-- 详情页 - 头部 -->
    <div>
      <!-- 组件引入 - 活动规则 & 个人中心 -->
      <skipPage :isSkipMy="false" :isSkipRule="true"></skipPage>
      <!-- 组件引入 - 头部轮播 -->
      <SwiperPage :list="swiperList">
      </SwiperPage>
    </div>
    <Info :isShow="parseInt(incomingData.join_num)"></Info>
    <!-- 详情页 - 内容 -->
    <div class="detail-content-wrap">
      <!-- 内容背景 - 背景 -->
      <PageBg></PageBg>
      <!-- 内容 - 单个奖品信息展示模块 -->
      <Exhibition :itemData="incomingData" :userInfo="userInfo"></Exhibition>
      <HelpList :helpList="helpList"></HelpList>
      <!-- 推荐 - 列表 -->
      <DrawList :slidePage="slidePage">
        <!-- 装饰 - 树叶3 -->
        <div class="ornament-leaf3"></div>
        <!-- 装饰 - 树叶1-->
        <div class="ornament-leaf1"></div>
      </DrawList>
    </div>
    <!-- 组件 - 吸底 -->
   <MyGoldCoins :userInfo="userInfo"></MyGoldCoins>

   <DetailGuide></DetailGuide>

  </div>
</template>

<script>
/* 第三方插件引入 - swiper */
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/* 组件引入 - 背景 */
import PageBg from '@/components/detail/PageBg.vue'
/* 组件引入 - 活动规则 & 个人中心 */
import skipPage from '@/components/SkipPage.vue'
/* 组件引入 - 头部轮播 */
import SwiperPage from '@/components/detail/Swiper.vue'
/* 组件引入 - 头部轮播假数据弹幕 */
import Info from '@/components/detail/Info'
/* 组件引入 - 单个物品信息展示 */
import Exhibition from '@/components/detail/Exhibition.vue'
/* 组件引入 - 助力模块 */
import HelpList from '@/components/detail/HelpList.vue'
/* 组件引入 - 内容列表 */
import DrawList from '@/components/home/DrawList'
/* 组件引入 - 吸底 */
import MyGoldCoins from '@/components/common/MyGoldCoins.vue'
/* 组件引入 - 详情页指引 */
import DetailGuide from "@/components/detail/DetailGuide";

/* 数据引入 - 产品列表数据 */
import { detailInfo } from '@/http/detail'
/* 数据引入 - 指引页数据 */
import { guideStatus } from '@/http/guide'

export default {
  name: 'Detail',
  data() {
    return {
      swiperOption: {
        // loop: true
        // 所有的參數同 swiper 官方 api 參數
        // ...
      },
      guideShow: false,

      incomingData:{},
      // 传进来的id
      pageId: 1,
      swiperList: [],
      helpList:[],
      userData:{},
      isSlide: false,
      // 监听页面滚动数据
      slidePage: {
        scrollTop: 0,
        windowHeight: 0,
        scrollHeight: 0
      },
      loading: true
    }
  },
  props: {
    userInfo: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    guide (){
      this.pageId = this.$route.params.goodsId 
    },
    // 下拉加载
    downLoad() {
      var _this = this
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      _this.slidePage.scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
      //变量windowHeight是可视区的高度
      _this.slidePage.windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      _this.slidePage.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    },
    itemData() {
      // 重新获取用户信息
      this.$parent.getData()
      // 获取页面信息
      detailInfo(this.pageId).then(res => {
        // this.loading = false

        var data = res.data.content
        this.incomingData = data.productInfo
        // 获取轮播列表
        this.swiperList = data.productInfo.video
        // 获取助力列表
        this.helpList = data.helpRank
      })
    },
    init(){
      this.guide()
      this.itemData()

      // 监听页面滚动
      window.addEventListener('scroll',this.downLoad,true)
      // 获取是否有新手指引
      guideStatus().then(res => {
        if(res.data.content.guide_xzxq == 1){
          // 页面是否需要滚动
          this.isSlide = true
        }else {
          window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
          });
        }
      })
    }
  },
  mounted: function() {
    this.init()
  },
  updated() {
    this.guide()
  },
  watch: {
    '$route':function(to,from){
      this.init()
    },
    isSlide() {
      if(this.isSlide) {
        window.scrollTo({ 
            top: 150, 
            behavior: "smooth" 
        });
      }else {
        window.scrollTo({ 
          top: 0, 
          behavior: "smooth" 
        });
      }
    }
  },
  components: {
    PageBg,
    MyGoldCoins, 
    skipPage,
    SwiperPage,
    Exhibition,
    HelpList,
    DrawList,
    DetailGuide,
    Info
  }
}
</script>

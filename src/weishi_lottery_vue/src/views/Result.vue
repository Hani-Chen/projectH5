<template>
<div class="page page-detail-wrap show">
  <div class="header">
    <Swiper :list="swiperList"></Swiper>
  </div>

  <div class="content">
    <!-- 背景 -->
    <div class="content-bg1"></div>
    <div class="content-bg2"></div>

    <!-- 装饰元素 -->
    <div class="content-decoration-1"></div>
    <div class="content-decoration-2"></div>
    <div class="content-decoration-3"></div>
    <!-- 中奖结果 -->
    <div class="result">
      <div class="result-content">
        <!-- 参与人数 -->
        <div class="people-number">已参与人数 <span>{{detailsData.join_num}}</span></div>

        <!-- 中奖商品 -->
        <div class="goods">
          <!-- 商品图片 -->
          <div class="goods-pic">
            <img :src="detailsData.img" alt="">
          </div>
          <!-- 商品信息 -->
          <div class="goods-info">
            <p class="info-title">投满 <span>{{detailsData.coin}}夺宝币</span> 即可开奖</p>
            <p class="info-subtitle">{{detailsData.title}}</p>
            <p class="info-your">你已下注<span>{{detailsData.user_coin}}夺宝币</span>，中奖概率是<span>{{detailsData.chance}}%</span></p>
          </div>
        </div>

        <!-- 中奖奖券 -->
        <div class="ticket" :class="{active : winData.is_lucky  == 1}">
          <p class="ticket-text">本宝贝由 {{winData.lucky_user}} 获得</p>
        </div>
      </div>
    </div>

    <!-- 中奖幸运号 -->
    <div class="luck">
      <!-- 装饰 - 树叶1 -->
      <div class="ornament-leaf1"></div>
      <div class="luck-content">
        <!-- v-if 是解决 数据绑定时报变量undefined -->
        <div class="luck-content-wrap" v-if="winData.userSn != undefined">
          <div class="luck-abs-bg"></div>
          <div class="luck-abs-bottom"></div>
          <div class="luck-win">
            <div class="luck-title">中奖幸运号</div>
            <div class="luck-num success">
              <span v-for="(num,index) in (winData.lucky_sn + '')" :key="index">{{num}}</span>
            </div>
          </div>

          <div class="luck-your">
            <div class="luck-title">您的幸运号</div>

            <div :class="isShow ? 'luck-num-box' : ''" >
              <div v-for="(item, index) in winData.userSn" :key="index"
                class="luck-num"
                :class="(index == 0 && winData.is_lucky  == 1) ? 'success' : ''" 
                v-show="!(index > 1) || isShow" >
                <span v-for="(num,index) in (item + '')" :key="index">{{num}}</span>
              </div>
            </div>
          </div>

          <!-- 展开按钮 -->
          <!-- 用户投注数据量大于 2 才显示 -->
          <div
            v-show="winData.userSn.length > 2"
            class="luck-show"
            @click="switchTicket"
          ></div>
        </div>

        <div class="luck-btn">
          
          <!-- 去夺宝 -->
          <a v-if="winData.is_lucky  == 2" class="luck-btn-go" href="javascript:void(0);" @click="home()"></a>
          <!-- 点击领奖 -->
          <a v-else class="luck-btn-receive" href="javascript:void(0);" @click="from()"></a>
          <!-- 去夺宝 -->
          <!-- <router-view to="/" :userInfo="userInfo"  v-if="winData.is_lucky  == 2" class="luck-btn-go"></router-view>
          <router-view to="/" v-else class="luck-btn-receive" @click="from()"></router-view> -->
        </div>
      </div>
    </div>

    <DrawList :slidePage="slidePage"></DrawList>

    <!-- 组件 - 信息填写弹窗 -->
    <ModalForm :pageData="pageData" :dataList="dataList" :productId="pageId"></ModalForm>
    <!-- 组件 - 吸底 -->
    <MyGoldCoins :userInfo="userInfo"></MyGoldCoins>

  </div>
</div>
</template>

<script>
  // header swiper
  import Swiper from "@/components/detail/Swiper";

  import DrawList from "@/components/home/DrawList";

  import MyGoldCoins from '@/components/common/MyGoldCoins';

  // 列表数据引入
  import { detailInfo } from '@/http/detail'

  import ModalForm from '@/components/modal/ModalForm'

  export default {
    name: 'Result',
    data () {
      return {
        // 当前商品详情
        detailsData: {},
        // 当前商品获奖数据
        winData: {},
        // 幸运号是否展开
        isShow: false,
        pageId: '',
        // 轮播组件资源列表
        swiperList: [],
        // 弹窗是否显示
        pageData: {
          isShow: false
        },
        dataList: {},
        // 监听页面滚动数据
        slidePage: {
          scrollTop: 0,
          windowHeight: 0,
          scrollHeight: 0
        }
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
    methods: {
      switchTicket () {
        this.isShow = !this.isShow;
      },
      // 如果中奖 - 点击领奖
      from() {
        this.pageData.isShow = true

        // 如果中奖 - 数据上报 - 中奖上报状态等于2
        MtaH5.clickStat('event23',{'staus': '2'})
      },
      // 如果没中奖
      home() {
        this.$router.push({
          name: 'home'
        })
        // 如果未中奖 - 数据上报 - 未中奖上报状态等于1
        MtaH5.clickStat('event23',{'staus': '1'})
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
    },
    mounted: function() {
      // console.log(this.$route.params.goodsId);
      this.pageId = this.$route.params.goodsId

      // console.log(this.pageId);

      detailInfo(this.pageId).then(res => {
        var data = res.data.content
        // 当前商品详细数据
        this.detailsData = data.productInfo
        // 当前商品获奖信息
        this.winData = data.prizeInfo
        // 获取轮播列表
        this.swiperList = data.productInfo.video
        
        // 获取中奖信息
        this.dataList = this.winData

        var staus 
        data.productInfo.is_lucky == 1 ? staus = 1 : staus = 0
        // 数据获取完毕后 - 数据上报 - 物品id & 中奖状态
        MtaH5.clickStat("event22",{'staus': staus},{'productid': data.productInfo.id})``
        // 数据获取完毕后 - 数据上报 -中奖状态
        // MtaH5.clickStat("event22",{'productid': data.productInfo.id})

      })
      
      // 监听页面滚动
      window.addEventListener('scroll',this.downLoad,true)
    },
    components: {
      Swiper,
      DrawList,
      MyGoldCoins,
      ModalForm
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/result/result";
</style>
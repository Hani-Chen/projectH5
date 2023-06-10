<template>
  <!-- 展示列表 - 单个商品 -->
  <div class="item">
    <!-- 单个商品 - 标题 -->
    <div class="item-title">
      <!-- 标题 - 时间 -->
      <div class="item-time">
        <span class="hour">{{pageHr}}</span>时
        <span class="minute">{{pageMin}}</span>分
        <span class="secs">{{pageSec}}</span>秒后开奖
      </div>
      <!-- 标题 - 人数 -->
      <div class="item-number">
        已参与人数
        <span class="number">{{drawData.join_num}}</span>
      </div>
    </div>
    <!-- 单个商品 - 内容 -->
    <div class="item-content">
      <!-- 内容 - 产品图 -->
      <div class="item-img-wrap">
        <img class="item-img" :src="drawData.img" alt />
        <div class="item-name">{{drawData.title}}</div>
      </div>
      <!-- 内容 - 详情数据 -->
      <div class="item-details">
        <div class="item-details-title" v-if="drawData.user_coin <= 0">
          投满
          <span>{{drawData.coin}}夺宝币</span> 投满开奖
        </div>
        <div class="item-details-title" v-else>
          您已下注
          <span>{{drawData.user_coin}}夺宝币</span>
        </div>

        <div class="item-percentage" v-if="drawData.user_coin > 0">
          中奖概率是
          <span>{{drawData.chance}}%</span>
        </div>
        <div class="item-details-number">
          <div class="item-details-portrait">
            <div class="portrait-item" v-for="(item,index) in drawData.join_avatar" :key="index">
              <img class="portrait" :src="drawData.join_avatar[index]" alt />
            </div>
          </div>
          <div class="item-text">
            已有
            <span>{{drawData.join_num}}</span>人下注
          </div>
        </div>
        <!-- <router-link tag="button" :to="'/detail/' + drawData.id" class="item-btn-bet" :class="{plus:drawData.user_coin > 0}" v-if="Math.floor(drawData.coin * 0.05) > drawData.user_coin"></router-link>
        <router-link tag="button" to="" class="item-btn-bet forbid" v-else></router-link>-->
        <button @click="detail()" class="item-btn-bet" :class="{plus:drawData.user_coin > 0}"></button>
        <!-- <button class="item-btn-bet forbid" v-else></button> -->
      </div>
    </div>
    <!-- 
        bgcolor ==> 进度条背景颜色色值
        progress ==> 进度
        surplus ==> 还需要多少夺宝币投满
        det  ==> 用户已投注多少夺宝币
        price ==> 商品总价格
    -->
    <Progress
      class="exhibition-progress"
      :bgcolor="'#fff6e9'"
      :progress="drawData.join_coin / drawData.coin * 100"
      :surplus="drawData.coin - drawData.join_coin"
      :det="drawData.user_coin"
      :coin="drawData.coin"
    ></Progress>
  </div>
</template>

<script>
// 进度条
import Progress from '@/components/common/Progress'

// 倒计时
import { overTimeFun } from '@/components/common/OverTime'

export default {
  name: 'DrawItem',
  data: function() {
    return {
      guideShow: true,
      pageHr: 0,
      pageMin: 0,
      pageSec: 0,
      overTime: null // 定时器名称
    }
  },
  props: {
    drawData: {
      type: Object,
      default: function() {
        return {}
      }
    }
    // // 倒计时数据
    // timeData: {
    //   type: Object,
    //   default: function () {
    //     return {};
    //   }
    // }
  },
  mounted: function() {
    this.countdown()
  },
  methods: {
    // 点击下注传商品id
    detail() {
    
      
      // MtaH5.clickStat("1")
      let id = this.drawData.id

      console.log(window.location.href.split("detail/")[1] == this.drawData.id)
      
      if(window.location.href.split("detail/")[1] == this.drawData.id) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }
      // 数据上报产品id, 被点击(*参数明细隔天计算)
      MtaH5.clickStat('event16', { productid: id })

      // console.log(this.$route.name);
      if (this.$route.name != 'detail') {
        // console.log('其他页点击')
        this.$router.push({
          name: 'detail',
          params: { goodsId: this.drawData.id }
        })

        // this.$router.push({
        //   path: `/detail/${this.drawData.id}`,
        // })
      } else {
        // console.log('详情页点击2',this.drawData.id)
        // this.$router.replace({
        //   name: 'detail',
        //   params: { goodsId: this.drawData.id }
        // })
        // this.$router.go(0)
        // location.reload()
        // setTimeout(function(){
        //   const u = navigator.userAgent
        //   const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        //   if (isiOS) {
        //     window.scrollTo({
        //       top: 0,
        //       behavior: 'smooth'
        //     })
        //   }

        // },1000)
        this.$router.push({
          name: 'detail',
          params: { goodsId: this.drawData.id }
        })
      }
    },
    countdown() {
      var _this = this
      // console.log(this.$route.name);

      // if(this.$route.name == 'detail' || this.$route.name == 'home') {
      this.overTime = setInterval(function() {
        var time = overTimeFun(_this.drawData.open_time)
        _this.pageHr = time.pageHr
        _this.pageMin = time.pageMin
        _this.pageSec = time.pageSec
        // console.log('开始定时器');
      }, 1000)
      // }else {
      // clearInterval(overTime)
      // }
      this.$once('hook:beforeDestroy', function() {
        clearInterval(this.overTime)
      })
    },
    // ;
    // }
    beforeDestroy() {
      // console.log(12314156)
      clearInterval(this.overTime)
      this.overTime = null
    }
  },
  // updated() {
  //   this.goTop()
  // },
  components: { Progress }
}
</script>

<style scoped>
</style>
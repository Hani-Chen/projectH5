<template>
  <!-- 页面 - 吸底 -->
  <!-- 页面公共组件 - 吸底组件 -->
  <div class="suctionbase">
    <div class="suctionbase-content">
      <div class="suctionbase-portrait">
        <img :src="userInfo.avatar" alt />
      </div>
      <div class="suctionbase-text">
        <div class="text" @click="skip()">我的夺宝币:<span>{{userInfo.coin}}</span></div>
        <!-- <span class="text">
          我的夺宝币:<span>99999</span>
        </span> -->
      </div>
      <div class="suctionbase-btn-share" @click="share()"></div>
      <!-- <a href="https://test-isee.weishi.qq.com/iseev2/1/fzC_dCk3/index.html?_wwv=4096">{{userInfo.uid}}</a> -->
    </div>
  </div>
</template>

<script>
// 用户信息接口引入
// import { getUserInfo } from '@/http/getUserInfo'

// 创建csrf校验值
// import { createToken } from '@/http/createToken'
// 微信自定义分享
import { wxshare } from '@/http/wxshare'

// import { shareFun } from '@/components/common/share'
export default {
  data() {
    return {
      // 用户头像
      portrait: '~@/assets/img/portrait_5.jpg',
      // 用户余额
      balance: 999999,
      pageName: ''
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
    getData() {
      this.userInfo = this.userInfo
      // console.log(this.userInfo)

    },
    // 点击吸底 - 跳转个人中心页
    skip() {
      // 点击跳转 - 获取当前页面名称
      this.pageName = this.$route.name
      // 点击跳转
      this.$router.push({
        path: "/Profile"
      });

      // 点击吸底 -数据上报 - 统计点击数量 - (*参数明细隔天计算)
      MtaH5.clickStat('event11',{'pagename':this.pageName})
    },
    // 点击吸底 - 分享按钮
    share() {
      
      // var _this = this
      // function share(type) {
      //   var linkUrl = ''
      //   var baseUrl = 'https://test-isee.weishi.qq.com/iseev2/1/fYg8ZMNM/index.html?_wwv=4096&ext_info='
      //   var qury = encodeURIComponentFun('suid=' + _this.userInfo.uid)
      //   linkUrl = baseUrl + qury 
        
      //   console.log('linkUrl',encodeURIComponentFun(linkUrl));
      //   const shareInfo= {
      //     type: 'link' /**link| base64*/,
      //     link: encodeURIComponentFun(linkUrl)  /** reuqired ,url link*/,
      //     title: '没钱买米怎么办，来微视免费抢！戳~',
      //     imgUrl: encodeURIComponentFun('http://project.perpower.cn/share_1.jpg'),
      //     desc:  '柴米油盐全都有，全场样样免费抢',
      //     // zzconfig: {id:1,flag:1},// 可找产品获取对应的中中配置
      //     shareConfig: { 
      //       // 配置分享按钮
      //       qq: true, 
      //       qz: true,
      //       wx: true,
      //       timeLine: true,
      //       weibo: false
      //     }
            
            
      //   }
      //   // // 跳转链接可接受参数有shareZZ（中中配置{id:1,flag:1}），shareInfoUrl（分享信息获取链接，get方式）
      //   window.open(`https://test-isee.weishi.qq.com/ws/ugjihai/externalTool/index.html?share=true&shareInfo=${JSON.stringify(shareInfo)}`)
      // }
      // share(3)
      // console.log(shareFun(this.userInfo.uid));
      
      this.shareFun(this.userInfo.uid)
      // 点击分享 - 获取当前页面名称
      this.pageName = this.$route.name
      // 点击吸底 -数据上报 - 统计点击数量 - (*参数明细隔天计算)
      MtaH5.clickStat('event12',{'pagename':this.pageName})

      
    }
  },
  mounted: function() {
    this.getData()
  //   getUserInfo().then(res => {
  //     // console.log(res.data.content)
  //     var data = res.data.content
  //     this.portrait = data.avatar
  //     this.balance = data.coin
  //   })
  },
  updated() {
    this.getData()
  },
  components: {}
}
</script>

<style scoped lang="scss">
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
// 公共样式 - 吸底
.suctionbase {
  position: fixed;
  left: 0;
  bottom: -0.02rem;
  width: 100%;
  height: 1.86rem;
  @extend .bg-item;
  background-image: url('~@/assets/img/suction_base_bg.png');
  z-index: 10;
  &-content {
    position: absolute;
    left: 50%;
    bottom: 0.18rem;
    width: 6.7rem;
    height: 1.17rem;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    margin-left: -3.35rem;
    padding-left: 0.4rem;
    padding-right: 0.1rem;
    // background-color: rgba($color: #000000, $alpha: 0.25);
  }
  &-portrait {
    position: absolute;
    left: 0.3rem;
    top: 50%;
    width: 0.96rem;
    height: 0.96rem;
    margin-top: -0.48rem;
    border-radius: 50%;
    overflow: hidden;
    background: #ed6930;
    img {
      width: 100%;
      height: 100%;
      background: #ed6930;
    }
  }
  &-text {
    position: absolute;
    left: 1.2rem;
    top: 0.35rem;
    width: 4.3rem;
    margin-left: 0.34rem;
    line-height: 0.35rem;
    color: #fff;
    .text {
      display: inline-block;
      height: 0.45rem;
      font-size: 0.32rem;
      color: #fff;
      border-bottom: 0.02rem solid #fff;
      text-decoration:none;
    }
    span {
      font-size: 0.52rem;
    }
  }
  &-btn-share {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1.27rem;
    height: 1.43rem;
    margin-top: -0.715rem;
    @extend .bg-item;
    background-image: url('~@/assets/img/suctionbase_share.png');
    animation: btnScale 1s infinite;
  }
}
</style>

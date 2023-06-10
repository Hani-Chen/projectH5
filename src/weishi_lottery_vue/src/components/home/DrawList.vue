<template>
  <!-- 首页 - 内容模块 -->
  <div class="index-content-wrap">
    <div class="index-content-inner">
      <!-- 标题组件 -->
      <slot>
      </slot>
      <!-- 内容模块 - 展示列表 -->
      <div class="list">
        <!-- 展示列表 - 单个商品 -->
        <DrawItem v-for="item in drawList" :drawData="item" :key="item.id"></DrawItem>
      </div>
    </div>
  </div>
</template>

<script>
  import DrawItem from "./DrawItem";

  // 列表数据引入
  import { drawListData } from '@/http/drawList'

  // 倒计时
  import { overTimeFun } from '@/components/common/OverTime'

  export default {
    name: "DrawList",
    props: {
      slidePage: {
        type: Object,
        default () {
          return {};
        }
      },
    },
    data() {
      return {
        drawList: [
          {id:0}
        ],
        page: 1,
        // // 倒计时数据
        // timeData: {
        //   pageHr: 0, 
        //   pageMin: 0, 
        //   pageSec: 0,
        // },
        overTimeSet: null  // 定时器名称
       
      }
    },
    methods: {
      // countdown(overTime) {
      //   var _this = this
      //   this.overTimeSet = setInterval(function () {
      //     var time = overTimeFun(overTime)
      //     _this.timeData.pageHr = time.pageHr
      //     _this.timeData.pageMin = time.pageMin
      //     _this.timeData.pageSec = time.pageSec
      //   }, 1000)
      //   this.$once('hook:beforeDestroy', function() {            
      //     clearInterval(this.overTimeSet);                                    
      //   })
      // },
    },
    mounted() {
      drawListData().then(res => {
        var data = res.data.content.list
        this.drawList = data
        // console.log(this.drawList);
        // this.countdown(data[0].open_time)
      })
    },
    watch: {
      // 监听页面滚动
      'slidePage.scrollTop'(newValue) {
        var _this = this
        if (this.slidePage.scrollTop + this.slidePage.windowHeight == this.slidePage.scrollHeight) {
          _this.page += 1 
          drawListData(_this.page).then(res => {
            var data = res.data.content.list
            if(data != '') {
              _this.drawList = _this.drawList.concat(data)
            }
          })
        }
      }
    },
    components: {
      DrawItem
    }
  }
</script>

<style  scoped lang="scss">
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.index {
  // 首页 - 内容模块
  &-content {
    &-wrap {
      position: relative;
      margin-top: -0.3rem;
      border-style: solid;
      border-left-width: 0.46rem;
      border-top-width: 0.54rem;
      border-right-width: 0.46rem;
      border-bottom-width: 0.65rem;
      border-image-source: url('~@/assets/img/index_content_bg.png');
      border-image-slice: 54 46 65 46 fill;
    }
    &-inner {
      width: 6.35rem;
      margin: 0.2rem auto 0;

      .title {
        width: 100%;
        height: 2.42rem;
        @extend .bg-item;
        margin-bottom: -1.48rem;

        background-image: url('~@/assets/img/index_content_title.png');
      }
      .list {
        /*width: 100%;*/
        // height: 2rem;
        // margin-top: -1.48rem;
        // background: rgba($color: #941500, $alpha: 0.48);
      }
      .item {
        position: relative;
        width: 100%;
        height: 4.7rem;
        margin-top: 0.29rem;
        @extend .bg-item;
        background-image: url('~@/assets/img/index_participate_bg.png');
        // 数据信息
        &-title {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 0.4rem;
          text-align: center;
          color: #763b20;
          line-height: 0.4rem;
        }
        // 时间
        &-time {
          width: 2.8rem;
          height: 100%;
          font-size: 0.28rem;
          span {
            color: #ec2925;
            font-weight: 600;
          }
        }
        // 人数
        &-number {
          width: 1.82rem;
          height: 100%;
          font-size: 0.2rem;
          span {
            font-size: 0.24rem;
            color: #ec2825;
          }
        }
        // 单个竞拍物品图片
        &-content {
          position: absolute;
          left: 0;
          top: 0.79rem;
          width: 100%;
          height: 2.6rem;
          display: flex;
          justify-content: space-between;
          padding: 0 0.3rem;
        }
        // 下注奖品图片容器
        &-img-wrap {
          position: relative;
          width: 2.45rem;
          height: 2.6rem;
          background: #fff;
          border-radius: 0.1rem;
        }
        // 下注奖品图片
        &-img {
          @extend .ab-item;
          top: 0.15rem;
          width: 1.8rem;
          height: auto;
          margin-left: -0.9rem;
        }
        // 下注奖品名称
        &-name {
          position: absolute;
          left: 0;
          bottom: 0.1rem;
          width: 100%;
          // display: flex;
          // align-items: center;
          // justify-content: space-between;
          // height: 0.52rem;
          text-align: center;
          font-size: 0.24rem;
          color: #763b20;
          line-height: 0.3rem;
          white-space: pre-line;
        }
        // 下注奖品数据
        &-details {
          position: relative;
          min-width: 2.92rem;
          margin-top: 0.48rem;
          // 标题
          &-title {
            font-size: 0.22rem;
            color: #763b20;
            span {
              font-size: 0.28rem;
              color: #ec2825;
            }
          }
          // 参入人数
          &-number {
            display: flex;
            margin-top: 0.2rem;
          }
          // 头像
          &-portrait {
            display: flex;
            margin-right: 0.05rem;
            .portrait-item {
              width: 0.3rem;
              height: 0.3rem;
              margin-left: -0.08rem;
              border-radius: 50%;
              border: 1px solid #fff;
              overflow: hidden;
            }
            .portrait-item:first-child {
              margin-left: 0;
            }
            .portrait {
              display: block;
              width: 100%;
              height: auto;
            }
          }
        }
        // 参与人数文案
        &-text {
          font-size: 0.2rem;
          color: #763b20;
          span {
            font-size: 0.24rem;
            color: #ec2825;
          }
        }
        // 按钮
        &-btn-bet {
          position: absolute;
          left: -0.1rem;
          bottom: 0.25rem;
          width: 2.2rem;
          height: 0.9rem;
          background: {
            image: url('~@/assets/img/index_btn_bet.png');
            size: 2.2rem 2.7rem;
            position: 0 0;
            repeat: no-repeat;
          }
          &.active {
            background-position: 0 -0.9rem ;
          }
        }
        // 底部
        &-base {
          position: absolute;
          left: 0;
          bottom: 0.25rem;
          width: 100%;
        }
        // 进度框
        &-progress-wrap {
          position: relative;
          width: 5.75rem;
          height: 0.3rem;
          margin: 0 auto 0.15rem;
          background: #fff6e9;
          border-radius: 0.15rem;
        }
        // 进度
        &-progress {
          width: 90%;
          height: 100%;
          background: #f46b34;
          border-radius: 0.15rem;
          // 提示文案
          &-text {
            position: absolute;
            top: 0;
            right: 0.2rem;
            height: 100%;
            font-size: 0.2rem;
            color: #8a583e;
            text-shadow: 0 0 0 #8a583e;
            
          }
        }
        // 底部 - 文案
        &-base-text {
          width: 100%;
          text-align: center;
          font-size: 0.2rem;
          color: #763b20;
          span {
            font-size: 0.24rem;
            color: #ec2825;
          }
        }
      }
      .item:first-child {
        margin-top: 0;
      }
    }
  }

}
</style>
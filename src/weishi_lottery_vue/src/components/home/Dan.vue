<template>
  <div class="dan" v-show="text.length >= 1">
    <!-- 广播图标 -->
    <div class="dan-icon"></div>
    <!-- 滚动文字 -->
    <div class="dan-main">
      <div
              ref="danList"
              class="dan-list"
              :style="'width:' + ((boxWidth * 2) + 5) + 'px;animation-duration:' + time + 's;'"
      >
        <div class="dan-box dan-box-1">
          <p
                  v-for="(item, index) in text"
                  class="dan-text"
          >{{ item }}</p>
        </div>

        <div class="dan-box dan-box-2">
          <p
                  v-for="(item, index) in text"
                  class="dan-text"
          >{{ item }}</p>
        </div>
      </div>
      <div class="dan-list">
        <p
                v-for="(item, index) in text"
                class="dan-text"
        >{{ index + 1 }}{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  /* 数据引入 - 下注产品列表 */
  import { prizeList } from '@/http/prizeList'
  export default {
    name: "Dan",
    data: function () {
      return {
        // 列表容器宽度，单位 px
        boxWidth: 10000,
        // 调整动画参数,每秒移动多少像素px
        speed: 46,
        // 数据源
        text: [
          '恭喜陈志展2019.11.18获得XX奖品'
        ]
        
      }
    },
    computed: {
      /**
       * 根据不同宽度计算时间
       *
       */
      time: function () {
        // 根据弹幕数量长度来计算动画速度
        // 每秒多少像素
        // speed  = width / time
        return this.boxWidth / this.speed;
      }
    },
    methods: {
      
      /**
       * 计算出弹幕的宽度，复制给弹幕盒子和弹幕动画
       * 计算出单位 px
       *
      */
      computerWidth() {
        // 单行弹幕的宽度，需要将弹幕内容每个宽度相加计算出总的宽度

        let ele = this.$refs.danList;

        let eleText = ele.getElementsByClassName('dan-box-1')[0].getElementsByTagName('p');
          let len = 0;
          for(let i = 0; i < eleText.length; i++) {
            len += eleText[i].offsetWidth;
          }

          this.boxWidth = len;
      },

    },

    mounted() {
        // _this.$parent.checkVtimeFun()
      prizeList().then(res => {
        
        var _this = this
        // console.log('123',res);
        var list = res.data.content.list
        console.log('list',list);
        
        // console.log(typeof list);
        _this.text = []
        // _this.text.push(1);
        for(var i=0; i<list.length; i++){
          // console.log(_this.text1[i].name);
          // var 
        // console.log('恭喜' + _this.text1[i].name + _this.text1[i].time + '获得' + _this.text1[i].n + '奖品');
        var text = '恭喜' + list[i].nickname + list[i].addTime + '获得' + list[i].productName + '奖品'
        // console.log(text);
        _this.text.push(text);
        
          
        }
      })

      // 计算单行但目的宽度
      // 计算两行弹幕的宽度
        this.computerWidth();

      var style = document.createElement('style');
      style.type = 'text/css';
      var keyFrames = `
        @-webkit-keyframes danMove {
          0% {
            transform: translate3d(0,0,0);
          }
          100% {
            transform: translate3d(-${this.boxWidth}px,0,0);
          }
        }
        @-moz-keyframes danMove {
          0% {
            transform: translate3d(0,0,0);
          }
          100% {
            transform: translate3d(-${this.boxWidth}px,0,0);
          }
        }
        @keyframes danMove {
          0% {
            transform: translate3d(0,0,0);
          }
          100% {
            transform: translate3d(-${this.boxWidth}px,0,0);
          }
        }
      `;
      style.innerHTML = keyFrames;
      document.getElementsByTagName('head')[0].appendChild(style);
      document.getElementsByClassName('dan-list')[0].classList.add('dan-list-ani')
    },

  }
</script>

<style lang="scss" scoped>
  .dan {
    position: absolute;
    width: 5.48rem;
    height: .4rem;
    line-height: .4rem;
    left: 50%;
    margin-left: -2.74rem;
    top: 2.1rem;
    border-radius: .2rem;
    color: #fff;
    padding-left: 0.53rem;
    padding-right: .2rem;
    font-size: .24rem;
    overflow: hidden;
    background: {
      color: rgba(148, 21, 0, 0.48);
    }
  }

  // 弹幕容器
  .dan-main {
    position: relative;
    overflow: hidden;
  }

  .dan-list {
    position: relative;
    &.dan-list-ani {
      animation: danMove infinite linear;
    }

    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .dan-box {
    float: left;

    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .dan-text {
    float: left;
    padding-right: .2rem;
  }

  // 2019-01-08 Edit 添加公告icon S
  .dan-icon {
    position: absolute;
    top: 50%;
    left: 0.15rem;
    width: 0.23rem;
    height: 0.24rem;
    margin-top: -0.115rem;
    background: {
      image: url('~@/assets/img/icon_horn.png');
      size: 100% auto;
      repeat: no-repeat;
      position: center;
    }
  }
  // 2019-01-08 Edit 添加公告icon E

</style>
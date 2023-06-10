<template>
  <!-- 组件 - 弹幕 -->
  <div class="barrage" v-if="isShow > 1">
    <!-- 弹幕 - 外层容器 -->
   <div class="barrage-content">
     <!-- 弹幕 - 内部容器 -->
     <div class="barrage-inner" id="barrageInner">
       <!-- 弹幕 - 单个弹幕 -->
       <div class="barrage-item"></div>
       <div class="barrage-item"></div>
     </div>
   </div>
  </div> 	
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Info',
  data() {
    return {
      barrageList: [
        {
          img: 'https://source.unsplash.com/user/erondu/200x200',
          text: 'H**i刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/210x210',
          text: '陈**展刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/220x220',
          text: '催**雪刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/230x230',
          text: '毛**立刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/240x240',
          text: '小**猪刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/250x250',
          text: '吴**超刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/260x260',
          text: '丁**茹刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/270x270',
          text: '葛**义刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/280x280',
          text: '郭**祺刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/180x180',
          text: '李**毅刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/40x40',
          text: '王**雪刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/50x50',
          text: '程**明刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/60x60',
          text: '陈**洁刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/70x70',
          text: '王**可刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        },
        {
          img: 'https://source.unsplash.com/user/erondu/80x80',
          text: '王**欣刚刚投注了' + Math.ceil(Math.random()*10 + 1)  +'注'
        }
      ],
      barrageTime: null
    }
  },
  props: {
    isShow: {
      type: Number,
      default: function () {
        return 0;
      }
    }
  },
  methods: {
    get(list,index) {
      if(list != '' && this.isShow > 1) {
        // 创建单个弹幕
        var barrageItem = document.createElement('div')
        barrageItem.setAttribute('class','barrage-item ' + index)
        // barrageItem.setAttribute('class','barrage-item'+ index)
        barrageItem.innerHTML= '<div class="inner" style="opacity:1">'
        + '<div class="img-wrap"><img src="' + list.img + '" alt=""></div>'
        + '<p>' + list.text + '</p>'
        + '</div>'
        // 获取单个弹幕父容器
        var barrageInner = document.querySelector('#barrageInner');
        var barrageitem = document.querySelector('.barrage-item');
        barrageInner.appendChild(barrageItem)
      }
    },
    
    createFloat() {
      var i = 0
      var _this = this
      this.barrageTime = setInterval(function() {
        if( i == _this.barrageList.length) {
          i = 0
        }
        
        // console.log(_this.barrageList[i],i);
        _this.get(_this.barrageList[i],i)
          var barrageInner =document.querySelector('#barrageInner'); 
        if(barrageInner.childElementCount > 3) {
          // console.log('该执行l');
          barrageInner.firstChild.setAttribute('class','barrage-item anime')
          setTimeout(function(){
            barrageInner.removeChild(barrageInner.firstChild);
          },800)
        }
        // if(barrageInner.childElementCount > 3) {
        //   barrageInner.removeChild(barrageInner.firstChild);
        // }
        i++

      }, 1000)
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once('hook:beforeDestroy', () => {   
          clearInterval(this.barrageTime);                                    
      })
    },
    
  },
  mounted() {
    // setInterval(function() {
        // this.get()
    // }, 1000)
    
    if(this.isShow >= 30) {
      this.createFloat()
    }
  },
  watch: {
    isShow(newValue, oldValue) {
      // console.log('我是弹幕组件 - 打印当前商品下注人数：',this.isShow); 
      if(this.barrageTime) {
        clearInterval(this.barrageTime); 
      }
      if(this.isShow >= 30) {
        this.createFloat()
      }
    },
  },
  comments: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
@keyframes floatUp {
  0% {
    opacity: 0;
    
    transform: scale(0);
    transform-origin: 0 50%  0;
  }

  100% {
    transform: scale(1);
  transform-origin: 0 50%  0;
    opacity: 1;
  }
}

.barrage {
  position: absolute;
  left: 0;
  top: 2rem;
  // height: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // background: {
  //   color: rgba(22, 22, 22, 0.2);
  // }
  z-index: 99;
  &-item {
    width: auto;
    display: flex;
    height: .58rem;
    color: #fff;
    font-size: .2rem;
    overflow: hidden;
    opacity: 1;
    transform: scale(1);
    transform-origin: 0 0 0;
    animation: floatUp 1s ;

    &.anime {
      transition: all 1s; 
      opacity: 0;
      height: 0;
      transform: scale(0);
    }
    .inner {
      display: flex;
      align-items: center;
      height: .32rem;
      background: #ff7831;
      margin-bottom: 0.28rem;
      border-radius: 0.25rem;
      padding-right: 0.1rem;
    }
    .img-wrap {
      width: .32rem;
      height: .32rem;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-right: .1rem;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

}
</style>
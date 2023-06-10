<!-- 组件 - 助力列表 -->
<template>
  <div class="help-wrap">
    <div class="ornament-leaf2"></div>
    <div class="ornament-gold2"></div>
    <!-- 助力列表 - 背景 -->
    <div class="bg"></div>
    <!-- 助力列表 - 标题 -->
    <div class="help-title"></div>
    <!-- 助力列表 - 列表容器 -->
    <div class="help-list-wrap">
      <!-- 列表 - 背景  -->
      <div class="bg"></div>
      <!-- 列表 - 无人助力 -->
      <div class="help-list-null" v-if="helpList.length <= 0"></div>
      <!-- 列表 - 一人助力 -->
      <div class="help-list-one" v-else-if="helpList.length == 1">
        <!-- 单个助力 -->
        <div class="item-wrap" v-for="(item,index) in helpList" :key="index">
          <div class="item-left">
            <div class="item-left-portrait">
              <img :src="item.avatar" alt />
            </div>
            <div class="item-left-name">{{item.nickname}}</div>
          </div>
          <!-- 助力数量 -->
          <div class="item-right">
            助力<span>{{item.num}}</span>个夺宝币
          </div>
        </div>
      </div>
      <!-- 列表 - 多人助力 -->
      <div class="help-list-much" v-else-if="helpList.length > 1">
        <div class="bg"></div>
        <div class="help-list-inner" :class="{show:listShow}">
          <!-- 单个助力 -->
          <div class="item-wrap" v-for="(item,index) in listShow ? helpList : helpList.slice(0,2) || list" :key="index">
           <div class="item-left">
            <div class="item-left-portrait">
              <img :src="item.avatar" alt />
            </div>
            <div class="item-left-name">{{item.nickname}}</div>
          </div>
          <!-- 助力数量 -->
          <div class="item-right">
            助力<span>{{item.num}}</span>个夺宝币
          </div>
          </div>
          <!-- 箭头 -->
          <div class="arrows" @click="arrows()"></div>
        </div>
      </div>

      <div class="help-list-text">快叫上好友助力，单个好友每天最高可助力10个夺宝币哦！</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['helpList'],
  data() {
    return {
      listShow: false,
      list: []
    }
  },
  methods: {
    arrows () {
      // console.log(this.helpList.length);
      if(this.helpList.length > 2) {
        this.listShow ? this.listShow = false : this.listShow = true
      }
    }
    
  },
  mounted() {
    this.list = this.helpList.slice(0,2)
  },
  watch: {
    listShow(newValue){
      if(!this.listShow) {
        this.list = this.helpList.slice(0,2)
      }
    }
  },
  components: {}
  
}
</script>

<style scoped lang="scss">
.help {
  // 助力列表 - 容器
  &-wrap {
    position: relative;
    width: 100%;
    > .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-style: solid;
      border-left-width: 0;
      border-top-width: 0.6rem;
      border-right-width: 0;
      border-bottom-width: 0.6rem;
      border-image-source: url('~@/assets/img/index_signin_bg.png');
      border-image-slice: 60 0 60 0 fill;
      z-index: 2;
    }
    .ornament-leaf2 {
      z-index: 10;
      left: -0.4rem;
      top: -0.05rem;
    }
    .ornament-gold2 {
      z-index: 10;
      right: -0.4rem;
      top: -0.4rem;
    }
  }
  // 助力列表 - 标题
  &-title {
    position: relative;
    width: 100%;
    height: 1.2rem;
    background: {
      image: url('~@/assets/img/detail_helplist_title.png');
      size: 4.92rem auto;
      position: center bottom;
      repeat: no-repeat;
    }
    z-index: 2;
  }
  // 助力列表 - 列表容器
  &-list {
    &-wrap {
      position: relative;
      z-index: 2;
    }
    // 无人助力
    &-null {
      width: 100%;
      height: 4.83rem;
      background: {
        image: url('~@/assets/img/detail_list_bg1.png');
        size: 5.98rem auto;
        position: center top 0.3rem;
        repeat: no-repeat;
      }
    }
    // 一人助力
    &-one,&-much {
      width: 100%;
      height: 3.4rem;
      padding-top: 0.75rem;
      padding-bottom: 2rem;
      background: {
        image: url('~@/assets/img/detail_list_bg2.png');
        size: 5.98rem auto;
        position: center top 0.3rem;
        repeat: no-repeat;
      }
      .item {
        &-wrap {
          position: relative;
          width: 5.21rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.2rem auto 0;
          z-index: 20;
        }
        &-left {
          display: flex;
          align-items: center;
          // 头像
          &-portrait {
            position: relative;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            overflow: hidden;
            // border: 1px solid #ffae65;
            img {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
            }
          }
          // 昵称
          &-name {
           max-width: 1.8rem;
            margin-left: 0.25rem;
            font-size: 0.22rem;
            color: #370000;
            font-weight: bold;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        &-right {
          font-size: 0.24rem;
          color: #370000;
          font-weight: bold;
          line-height: 0.36rem;
          margin-top: -0.02rem;
          span {
            font-size: 0.36rem;
            color: #ec2825;
          }
        }
      }
    }
    &-much {
      width: 100%;
      // height: 3rem;
      height: auto;
      // background-image: url('');
      // height: auto;
      .bg {
        position: absolute;
        left: 50%;
        top: 0.3rem;
        width: 5.98rem;
        height: calc(100% - 1.43rem);
        margin-left: -2.99rem;
        border-style: solid;
        border-left-width: 0;
        border-top-width: 1.57rem;
        border-right-width: 0;
        border-bottom-width: 0.4rem;
        border-image-source: url('~@/assets/img/detail_list_bg3.png');
        border-image-slice: 157 0 30 0 fill;
      }
      .arrows {
        position: absolute;
        left: 50%;
        bottom: 1.4rem;
        width: 0.5rem;
        height: 0.5rem;
        margin-left: -0.25rem;
        background: {
        image: url('~@/assets/img/detail_arrows.png');
        size: 0.24rem auto;
        position: center;
        repeat: no-repeat;
      }
      }
    }
    &-inner {
      width: 100%;
      height: 2.1rem;
      overflow: hidden;
      &.show {
        height: 5rem;
        overflow-y: auto;
      }
    }
    &-text {
      position: absolute;
      left: 0;
      bottom: 0.6rem;
      width: 100%;
      text-align: center;
      font-size: 0.24rem;
      color: #370000;
      font-weight: bold;
      text-indent: 0.1rem;
    }
  }
}
</style>

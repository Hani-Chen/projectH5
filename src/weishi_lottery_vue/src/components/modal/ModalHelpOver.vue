<!-- 组件 - 拆开礼包弹窗 -->
<template>
  <!-- 弹窗 - 助力结束后 -->
  <div class="modal modal-help-over" id="modalHelpOver" @touchmove.prevent :class="{show:HelpOver.isShow}">
    <div class="modal-content">
      <div class="modal-bg"></div>
      <div class="modal-body">
        <div class="modal-inner pulse">
          <!-- 查询中奖结果 - 标题文案 -->
          <div class="title font-hyykh">已为好友助力{{HelpOver.helpNum}}个币奖励你{{HelpOver.num}}个夺宝币哦</div>
          <!-- 装饰 - 礼包 类 * ornament-gift 为礼盒 ornament-box 为宝箱 默认为翻倍牌 -->
          <div class="ornament ornament-gift"></div>
          <!-- 按钮 - 去夺宝 -->
          <div class="modal-btn modal-btn-join" @click="hunt()"></div>
          <!-- 关闭按钮 -->
          <div class="modal-close" @click="close()"></div>
        </div>
        <div class="base">
          <div class="base-products-list">
              
              <div class="base-products-item" v-for="(item,index) in list.slice(0,2)" :key="index" @click="detail(item.id)">
                <img class="item-img" :src="item.img" alt="">
                <div class="item-text-wrap">
                  <div class="item-price"><span>{{item.coin}}</span>夺宝币</div>
                  <div class="item-go"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* 数据引入 - 下注产品列表 */
  import { drawListData } from '@/http/drawList'
export default {
  data() {
    //这里存放数据
    return {
      list: [
        {
          id: 1,
          img: '',
          coin: ''
        },
        {
          id: 2,
          img: '',
          coin: ''
        }
      ]
    }
  },
  props: {
    HelpOver: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  methods: {
    // help() {
    //   this.$parent.helpFun()
    // },
    // 关闭按钮
    close() {
      this.HelpOver.isShow = false
    },
    // 点击去夺宝 - 回到页面
    hunt() {
      this.HelpOver.isShow = false
      // console.log(this.HelpOver.isShow);
      
    },
    // 点击单个推荐
    detail(index) {
      this.$router.push({
        name: 'detail',
        params: {goodsId:index}
      })
      // console.log(index);
      this.$parent.updateData()
    }
  },
  mounted() {
    
    // window.addEventListener('scroll', this.guide);
    drawListData().then(res => {
      var data = res.data.content.list
      this.list = data
    })
  },
}
</script>
<style lang='scss' scoped>
// 公共样式 - 页面公共类
@import '~@/assets/scss/class';
.modal {
  // 拆红包弹窗 
  &-help-over{
    // 标题文案
    .title {
      width: 5rem;
      margin-left: -2.5rem;
      font-size: 0.51rem;
      line-height: 0.8rem;
    }
    // 弹窗主内容
    .modal-inner {
      height: 8.62rem;
      background-position: 0 0;
    }
    // 按钮 - 去夺宝
    .modal-btn-join {
      background-position: -3rem -1.1rem;
      bottom: 2.46rem;
    }
    .modal-close {
      bottom: 0.92rem;
    }
    .base {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.95rem;
      @extend .bg-item;
      background-image: url('~@/assets/img/modal_base_bg.jpg');
    }
    .base-products {
      &-list {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.42rem 0.25rem;
      }
      &-item {
        width: 3.1rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
          // 产品图
          &-img {
            width: 1rem;
            height: auto;
          }
          // 产品文案
          &-text-wrap {
            width: 1.9rem;
            height: 100%;
            padding-top: 0.15rem;
          }
          // 价格
          &-price {
            font-size: 0.24rem;
            color: #763b20;
            line-height: 0.3rem;
          }
          // 去看看按钮
          &-go {
            width: 1.13rem;
            height: 0.45rem;
            margin-top: 0.05rem;
            @extend .bg-item;
            background-image: url('~@/assets/img/modal_products_go.png');
          }
        }
      }
    }
  }
}
</style>
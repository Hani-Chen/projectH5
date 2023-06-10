<template>
  <!-- 页面 - 个人详情 -->
  <div class="page page-profile-wrap show">
    <!-- 个人详情 - 页面背景 -->
    <div class="bg"></div>
    <div class="bg-title"></div>
    <div class="page-profile-inner" :class="{'overflow-auto':list.length > 0}">
      <!-- 装饰 - 金币1 -->
      <div class="ornament-gold2"></div>
      <!-- 装饰 - 树叶2 -->
      <div class="ornament-leaf2"></div>
      <!-- 个人详情 - 内容 -->
      <div class="profile-content" :class="{heightAll:list.length <= 0}">
        <!-- 内容 - 头像 -->
        <div class="profile-portrait">
          <img :src="userInfo.avatar" alt />
        </div>
        <!-- 内容 - 标题 -->
        <div class="profile-title font-hyykh">我的夺宝币: {{userInfo.coin}}</div>
        <!-- 内容 - 列表 -->
        <div class="profile-list">
          <div class="item-null" v-if="list.length <= 0"></div>
          <!-- 列表 - 单个奖品 -->
          <div class="item" v-for="(item,index) in list" :key="index" else @click="itemCheck(index)">
            <div class="item-img-wrap">
              <img :src="item.img" alt />
              <!-- 获奖状态  shade-get 已获奖  shade-notstarted 未开奖  shade-nothing 未中奖 shade-return 已返还-->
              <div class="shade" :class="{'shade-notstarted':item.status == 1 , 'shade-get':item.status == 2, 'shade-nothing':item.status == 3, 'shade-return':item.status == 4}"></div>
            </div>
            <!-- 单个奖品 - 详情 -->
            <div class="item-detail">
              <!-- 详情 - 下注的夺宝币 -->
              <div class="item-det">
                你已下注
                <span>{{item.user_coin}}夺宝币</span>
              </div>
              <!-- 详情 - 中奖率 -->
              <div class="item-percentage">
                中奖概率是
                <span>{{item.chance}}%</span>
              </div>
              <!-- 详情 - 价格 -->
              <div class="item-price">
                <span class="item-price-name">{{item.title}}</span><span> {{item.coin}}夺宝币</span>
              </div>
              <!-- 详情 - 开奖时间 -->
              <div class="item-time">{{item.open_time}} 公布夺宝结果</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- 组件 - 吸底 -->
      <MyGoldCoins :userInfo="userInfo"></MyGoldCoins>
      <!-- 组件 - 提示框 -->
      <BombTips v-bind.sync="showBombTips" :tipsContent="tipsContent"></BombTips>
  </div>
</template>

<script>
/* 组件引入 - 吸底 */
import MyGoldCoins from '@/components/common/MyGoldCoins.vue'

/* 数据引入 - 产品列表数据 */
import { myjoin } from '@/http/myjoin'
  /* 组件引入 - 提示框 */
  import BombTips from '@/components/common/BombTips';



export default {
  name: 'profile',
  data: function() {
    return {
      list: [],
      status: 'shade-notstarted',
      page: 1,
      // 提示框数据
      showBombTips: {
        visible: false
      },
      tipsContent: '',
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
    personage() {
      // console.log('获取中奖信息');
      
      //     console.log(this.list.status);
      // // 改变签到进度
      // switch (this.list.status) {
      //   case 1: 
      //     this.status = 'shade-notstarted'; 
      //     break;
      //   case 2: 
      //     this.status = 'shade-get';
      //     break;
      //   case 3: 
      //     this.status = 'shade-nothing';
      //     console.log(this.status);
          
      // }
    },
    itemCheck(index) {  

      // console.log(this.list[index].status);
      if(this.list[index].status == 2 || this.list[index].status == 3) {

        this.$router.push({
          name: 'result',
          params: {goodsId:this.list[index].id}
        })
      }else if(this.list[index].status == 4){
        // 提示框
        this.showBombTips = {
          visible: true
        };
        this.tipsContent = "人数未满，夺宝币已退还";
      }else {
        this.$router.push({
          name: 'detail',
          params: {goodsId:this.list[index].id}
        })
      }
      
      console.log('staus==',this.list[index].status,'id ==',this.list[index].id);
      
      
        // 数据获取完毕后 - 数据上报 - 中奖状态
        // 数据获取完毕后 - 数据上报 -物品id
        // MtaH5.clickStat("event21",{'staus': staus},{'productid': data.productInfo.id})
        MtaH5.clickStat("event21",{'staus': this.list[index].status},{'productid': this.list[index].id})
        // MtaH5.clickStat("event21",{'staus': '2222','productid': this.list[index].id})
        // MtaH5.clickStat("event21",{'productid': data.productInfo.id})

    },
    
    // 下拉加载
    downLoad() {
      if(this.list.length >= 10) {
        var _this = this
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        //滚动条到底部的条件
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (scrollTop + windowHeight == scrollHeight) {
          _this.page += 1 
          // console.log( "距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight );
          myjoin(_this.page).then(res => {
            var data = res.data.content.list
            if(data != '') {
              _this.list = _this.list.concat(data)
            }
          })
        }
      }
    }
  },
  
  mounted() {
    
    myjoin().then(res => {
      var data = res.data.content.list
      this.list = data
    })
    this.personage()
    // 监听页面滚动
    window.addEventListener('scroll',this.downLoad,true)
  },
  components: {MyGoldCoins,BombTips}
}
</script>
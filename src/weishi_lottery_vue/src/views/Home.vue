<template>
  <!-- 页面 - 首页 -->
  <div class="page page-index-wrap show">
    <!-- 首页背景 -->
    <div class="bg"></div>
    <!-- 首页 - 内容 -->
    <div class="page-index-inner">
      <!-- 组件 - 导航栏 - 我的 -->
      <MineBtn></MineBtn>
      <!-- 组件 - 导航栏 - 活动规则 -->
      <RuleBtn></RuleBtn>
      <!-- 组件 - 首页 - 头部 -->
      <Header :signinData="signinData"></Header>
      <!-- 组件 - 首页 - 内容 - 下注商品列表 -->
      <DrawList :slidePage="slidePage">
        <!-- 内容 - 下注商品列表 - 标题 -->
        <div class="title" ref="box"></div>
      </DrawList>
      <!-- 组件 - 首页 - 底部 - 明日开抢 -->
      <TomorrowDraw></TomorrowDraw>
      <!-- 组件 - 个人信息吸底 -->
      <MyGoldCoins :userInfo="userInfo"  ref="MyGoldCoins"></MyGoldCoins>
      <!-- 组件 - 首页 - 指引弹窗 - 未点击确认一直出现 -->
      <Guide></Guide>
      <!-- 组件 - 红包弹窗 - 用户第一次访问h5弹出 -->
      <ModalGift :userInfo="userInfo" v-model="openGiftIsShow.isShow" ></ModalGift>
      <!-- 组件 - 红包领取成功弹窗 - 点击红包弹窗的领取出现 -->
      <ModalOpenGift :openGiftIsShow="openGiftIsShow"></ModalOpenGift>
      <!-- 组件 - 查询弹窗 - 过了十二点如果有下注的商品开奖则显示 -->
      <ModalInquire :popInquire="popInquire"></ModalInquire>
      <!-- 组件 - 视频翻倍 - 签到成功后显示是否看视频翻倍 -->
      <ModalVideoDouble></ModalVideoDouble>
      <!-- 组件 - 视频翻倍 - 视频翻倍成功 -->
      <ModalHintDouble :modalHintDouble="modalHintDouble"></ModalHintDouble>
      <!-- 组件 - 视频翻倍 - 视频翻倍失败 -->
      <ModalUnfinished :ModalUnfinished="ModalUnfinished"></ModalUnfinished>
      <!-- 组件 - 提示助力弹窗 -->
      <ModalHelp :ModalHelp="ModalHelpIsshow"></ModalHelp>
      <!-- 组件 - 助力成功弹窗 -->
      <ModalHelpOver :HelpOver="HelpOverIsshow"></ModalHelpOver>
      <!-- 组件 - 提示框 -->
      <BombTips v-bind.sync="showBombTips" :tipsContent="tipsContent"></BombTips>
    </div>
  </div>
</template>

<script>
  /* 组件引入 - 头部组件 */
  import Header from '@/components/home/Header';
  /* 组件引入 - 头部我的 */
  import MineBtn from "@/components/common/MineBtn";
  /* 组件引入 - 头部活动规则 */
  import RuleBtn from "@/components/common/RuleBtn";
  /* 组件引入 - 内容 */
  import DrawList from '@/components/home/DrawList'
  /* 组件引入 - 底部明日开枪 */
  import TomorrowDraw  from "@/components/home/TomorrowDraw";
  /* 组件引入 - 吸低&我的夺宝币&数量和分享 */
  import MyGoldCoins from '@/components/common/MyGoldCoins';
  /* 组件引入 - 首页指引页 */
  import Guide from "@/components/home/IndexGuide";
  /* 组件引入 - 首次进入h5提示领取红包弹窗 */
  import ModalGift from '@/components/modal/ModalGift'
  /* 组件引入 - 红包领取弹窗 */
  import ModalOpenGift from '@/components/modal/ModalOpenGift'
  /* 组件引入 - 查询弹窗 */
  import ModalInquire from '@/components/modal/ModalInquire'
  /* 组件引入 - 翻倍弹窗 */
  import ModalVideoDouble from '@/components/modal/ModalVideoDouble'
  /* 组件引入 - 翻倍成功弹窗 */
  import ModalHintDouble from '@/components/modal/ModalHintDouble'
  /* 组件引入 - 翻倍失败弹窗 */
  import ModalUnfinished from '@/components/modal/ModalUnfinished'
  /* 组件引入 - 提示助力弹窗 */
  import ModalHelp from '@/components/modal/ModalHelp'
  /* 组件引入 - 助力成功 */
  import ModalHelpOver from '@/components/modal/ModalHelpOver'
  /* 组件引入 - 提示框 */
  import BombTips from '@/components/common/BombTips';
  
  /* 数据引入 - 下注产品列表 */
  import { drawListData } from '@/http/drawList'
  /* 数据获取 - 是否显示指引页 */
  import { guideStatus } from '@/http/guide'
  /* 数据获取 - 查询是否有参与夺宝的产品开奖 */
  import { inpuire } from '@/http/inpuire'
  /* 数据获取 - 开始翻倍计时 接口引入 */
  import { editVtime } from '@/http/editVtime'
  /* 数据获取 - 查询翻倍计时 接口引入 */
  import { checkVtime } from '@/http/checkVtime'
  /* 数据获取 - 翻倍成功 */
  import { signDouble } from '@/http/signDouble'
  /* 数据获取 - 创建csrf校验值 */
  import { createToken } from '@/http/createToken'
  /* 数据获取 - 微信自定义分享 */
  import { wxshare } from '@/http/wxshare'
  /* 数据获取 - 助力接口 */
  import { help } from '@/http/help'
  /* 数据获取 - 助力查询接口 */
  import { helpCheck } from '@/http/helpCheck'

export default {
  name: 'Home',
  data: function() {
    return {
      signinData: {},
      // 下注商品列表 - 测试数据
      list: [
        {
          id: 1,
          img: require('@/assets/img/ebay_bid1.jpg'),
          text: '苹果 AirPods\n蓝牙耳机'
        }
      ],
      // 新手领取红包弹窗数据 - 显示判断 & 获取夺宝币数量
      openGiftIsShow: {
        isShow: false,
        num: 0
      },
      // 查询弹窗数据 - 显示判断
      popInquire: {
        isShow: false
      },
      // 翻倍成功弹窗数据 - 显示判断
      modalHintDouble: {
        isShow: false
      },
      // 翻倍失败弹窗数据 - 显示判断 & 时间差数据秒
      ModalUnfinished: {
        isShow: false,
        time: 30,
      },
      // 监听页面滚动数据
      slidePage: {
        scrollTop: 0,
        windowHeight: 0,
        scrollHeight: 0
      },
      // 提示助力弹窗数据 - 显示判断
      ModalHelpIsshow: {
        isShow: false
      },
      // 助力成功弹窗数据 - 显示判断
      HelpOverIsshow: {
        isShow: false,
        helpNum: 0,
        num: 0
      },
      // 提示框数据
      showBombTips: {
        visible: false
      },
      tipsContent: '',
      // 当前用户suid
      userSuid: '',
      // 当前需要助力的用户suid
      helpSuid: ''
    }
  },
  // 获取用户信息
  props: {
    userInfo: {
      type: Object,
      default: function () {
        return {};
      }
    },
    gobackto: {
      type: Boolean,
      default: function () {
        return false;
      }
    }
  },
  created() {
    this.guide()
  },
  methods: {
    // 查询是否翻倍
    checkVtimeFun() {
      // 定义指向
      var _this = this
      // console.log('查询是否翻倍');
      // 查询看视频时间
      checkVtime().then(res => {
        // 获取当前翻倍跳转后的时间
        var data = res.data.content.l_time
        // console.log('111',res);
        
        if(data > 0) {
          var overTime = 30
          // 看视频超过30秒
          if(data >= overTime) {
            // 显示翻倍成功弹窗
            _this.modalHintDouble.isShow = true
          }else {
            // 显示翻倍失败弹窗
            _this.ModalUnfinished.isShow = true
            // 更换弹窗显示还需观看时间
            _this.ModalUnfinished.time = overTime - data
          }
        }else {
          // 没有请求过翻倍 ==> 不执行
          // console.log('没有请求过翻倍 ==> 不执行');
          
        }
      })
    },
    guide (){
      // console.log(window.location);
      
      // 定义指向
      var _this = this
       /**
       * 
       * 获取页面link参数
       * @param variable 需要获取参数名称
       */
      function getQueryVariable(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
        }
        return(false);
      }
      // console.log(getQueryVariable('sUid'));
      
      this.helpSuid = getQueryVariable('sUid')
      

      // 解析参数
      // if(getQueryVariable('sUid') != false) {
      //   var length = getQueryVariable('uid').length-1;
      //   this.helpSuid = getQueryVariable('uid').substr(0,length)
      // }

      // 执行 - 查询是否翻倍
      _this.checkVtimeFun()

      // 页面不见状态判断
      document.addEventListener('visibilitychange', function() {
        // 页面不见状态判断 - 执行 - 查询是否翻倍
        document.hidden ? '' : _this.checkVtimeFun()
        
      // console.log('123');
      
      // this.$parent.getData()
      });

      // 监听网络状态
      // navigator.onLine ?  : alert('离线')
      if(!navigator.onLine) {
        this.showBombTips = {
          visible: true
        };
        this.tipsContent = "你的网络开小差喽，请稍后再试";
      }

      // 判断是否有新手指引
      guideStatus().then(res => {
        // 判断是否有新手指引 - 从而判断页面是否需要滚动
        if(res.data.content.guide_xzlb == 1){
          window.scrollTo({ 
            top: 230, 
            behavior: "smooth" 
          });
        }
      })
    },
    
    
    /**
     * 
     * 助力函数
     * @param uid 当前用户uid
     */
    helpFun(uid) {
      // var k = 0
      // console.log('当前用户suid',uid);
      // console.log('当前需要助力的用户suid',this.helpSuid);
      
     
      // 如果需要助力的uid 等于 当前用户的uid 直接不执行助力函数
      if(this.helpSuid == uid) {
        // console.log('this.helpSuid == uid');
        return
      }else if(this.helpSuid != '') {
        // console.log('this.helpSuid != ""');
        // 如果用户id不为空
        // createToken().then(res => {
          // var token = res.data.content.token
          // var token = 'I_yEyaM6gHqPR3pZHivDhX3gH2QRktMez7oIaZMRM91Vjs2imlbpSed0EDJcX5awLpp7JkH94Xi1zX5R9H1-rQ=='
          // console.log('开始校验',token);
          
          // 调用助力接口
          helpCheck(this.helpSuid).then(res => {
            // console.log('调用助力接口',res);
            var status = res.data.content.status  
            // console.log(status);
            
            if(status == 1) {
              // 未助力 - 显示助力弹窗
              this.ModalHelpIsshow.isShow = true
            }else if(status == 2) {
              
              // console.log('// 已助力 - 提示');
              // 已助力 - 提示
              this.showBombTips = {
                visible: true
              };
              this.tipsContent = "今日已为当前好友助力了哦，先去夺宝吧～";
            }if(status == 3) {
              // console.log('// 助力上限 - 提示');
              // 助力上限 - 提示
              this.showBombTips = {
                visible: true
              };
              this.tipsContent = "今日助力已经达到上限了哦，先去夺宝吧～";
            }
          })
        // })
      }
    },
    // getChildrenStatus(data) {
    //   this.openGiftIsShow = data
    // },
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
    // 更新个人信息
    updateData() {
      // 调用父元素获取用户信息函数
      this.$parent.getData()
    },
    // 翻倍成功后 点击去拆开
    signDoubleFun() {

      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        // 请求翻倍成功接口
        signDouble(token).then(res => {
          // 显示领取成功弹窗
          this.openGiftIsShow.isShow = true
          // 给领取成功弹窗赋值
          this.openGiftIsShow.num = res.data.content.num
          // 重新获取用户信息
          this.updateData()
        })
      })
    },
    // 放弃翻倍
    abandonDoubleFun() {
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        // 请求翻倍计时接口 - 参数2 放弃翻倍
        editVtime('2',token).then(res => {
        })
      })
    },
    // 时间不足继续翻倍
    goonDoubleFun() {
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        // 请求翻倍计时接口 - 后期可写在跳转微视成功的回调内
        editVtime('1',token).then(res => {
          // console.log(res);
          // 隐藏翻倍失败弹窗
          this.ModalUnfinished.isShow = false
          // 跳转外链
          window.location.href = 'weishi://main?goto=recommend'
        })
      })
    },
    // 如果用户点击了助力
    startHelpFun() {
      var _this = this
      // 获取校验码
      createToken().then(res => {
        var token = res.data.content.token
        help(_this.helpSuid,token).then(res => {
          var helpData = res.data.content
          // 提示助力弹窗隐藏
          _this.ModalHelpIsshow.isShow = false
          // 助力成功弹窗显示
          _this.HelpOverIsshow.isShow = true
          _this.HelpOverIsshow.helpNum = helpData.sNum
          _this.HelpOverIsshow.num = helpData.hNum
          // 重新获取用户信息
          this.updateData()
        })
        
      })
    },
  

  },  
  mounted: function() {
    // 获取商品列表数据
    drawListData().then(res => {
      var data = res.data.content.list
      this.list = data
    }),
    // 查询是否有参与夺宝的产品开奖
    inpuire().then(res => {
      // 获取状态 1=无已开奖产品，2=有已开奖产品 返回值number
      var data = res.data.content.status
      // 如果有已经开奖产品
      if(data == 2) {
        this.popInquire.isShow = true
      }
    })
    window.addEventListener('scroll',this.downLoad,true)
    this.checkVtimeFun()
    var _this = this
    window.onpageshow =  function (e) {
      // console.log('e.persisted', e.persisted) false true
      // console.log('onpageshow')
      // console.log('document.refferrer',document.refferrer) undefined undefined
      // console.log('window.performance.navigation.type', window.performance.navigation.type) 0 2
      //  如果是苹果设配
      // window.location.reload();
      if(e.persisted == true) {
        
        // 执行查询签到翻倍函数
        _this.checkVtimeFun()
      }
    }
  },
  updated() {
    this.guide()
  },
  
    // beforeRouteEnter (to, from, next) {
    //   // console.log('beforeRouteEnter');
    //   next(vm => {
    //     console.log('vm')
    //     // window.alert('vm')
    //   })
    // },
    // beforeRouteUpdate (to, from, next) {
    //   console.log('beforeRouteUpdate');
    // },
    // beforeRouteLeave (to, from, next) {
    //   console.log('beforeRouteLeave');
    //   // window.alert('leave page ');
    // },
  
  watch: {
    // 监听用户信息
    userInfo(newValue, oldValue) {
      // this.share()
      // if()
      this.signinData = newValue
      if(this.gobackto == true) {
        this.signinData = newValue
        return
      }
      this.userSuid = this.signinData.uid
      // console.log('监听用户信息');
    },
    // 监听uid
    userSuid(newValue, oldValue) {
      // console.log('uid变化了',newValue);
      
      this.helpFun(this.userSuid)
    },
// },
  },
  components: {
    Header,
    MineBtn,
    RuleBtn,
    DrawList,
    TomorrowDraw,
    Guide,
    MyGoldCoins,
    ModalGift,
    ModalOpenGift,
    ModalInquire,
    ModalVideoDouble,
    ModalHintDouble,
    ModalUnfinished,
    ModalHelp,
    ModalHelpOver,
    BombTips
  },
  
}
</script>

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './mock/index';

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app');


export const Domain = 'h5.weishi.qq.com';
export const MiddleLoginPageUrl = `//${Domain}/weishi/account/login?r_url=https://isee.weishi.qq.com/weishi_h5/weshi_dream/index.html`;
// alert(MiddleLoginPageUrl);

var x = document.cookie;


Vue.prototype.shareFun = function (uid){
  // console.log('调用分享',uid);
  
  // var _this = this
  // function share(type) {
  var linkUrl = ''
  var baseUrl =
    'https://test-isee.weishi.qq.com/iseev2/1/fYg8ZMNM/index.html?_wwv=4096&ext_info='
  var qury = encodeURIComponentFun('suid=' + uid)
  linkUrl = baseUrl + qury

  // console.log('linkUrl', encodeURIComponentFun(linkUrl))
  const shareInfo = {
    type: 'link' /**link| base64*/,
    link: encodeURIComponentFun(linkUrl) /** reuqired ,url link*/,
    title: '没钱买米怎么办，来微视免费抢！戳~',
    imgUrl: encodeURIComponentFun('http://project.perpower.cn/share_1.jpg'),
    desc: '柴米油盐全都有，全场样样免费抢',
    // zzconfig: {id:1,flag:1},// 可找产品获取对应的中中配置
    shareConfig: {
      // 配置分享按钮
      qq: true,
      qz: true,
      wx: true,
      timeLine: true,
      weibo: false,
    },
  }
  // // 跳转链接可接受参数有shareZZ（中中配置{id:1,flag:1}），shareInfoUrl（分享信息获取链接，get方式）
  window.open(
    `https://test-isee.weishi.qq.com/ws/ugjihai/externalTool/index.html?share=true&shareInfo=${JSON.stringify(
      shareInfo
    )}`
  )
}
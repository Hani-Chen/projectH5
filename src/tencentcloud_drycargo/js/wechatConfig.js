var isWechat = /micromessenger/i.test(navigator.userAgent)

// 获取页面参数
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}
// 获取页面绝对路径
function getAbsoluteURL(relativePath) {
  var loc = window.location
  var arr = loc.pathname.split('/')
  arr.pop()
  return loc.protocol + '//' + loc.hostname + arr.join('/') + relativePath
}

// 初始化微信sdk
function wechatConfig() {
  // console.log('初始化微信sdk')
  $.post(
    './accessToken/signPackage.php',
    { docuUrl: encodeURIComponent(location.href.split('#')[0]) },
    function (res) {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
          'getNetWorkType',
          'onMenuShareAppMessage',
          'onMenuShareTimeline',
          'onMenuShareQQ',
          'onMenuShareQZone',
          'onMenuShareWeibo',
          'updateAppMessageShareData',
          'updateTimelineShareData',
        ],
      })
      // 微信分享
      wx.ready(function () {
        var shareData64 = {
          title: '云上直播间独家干货',
          desc: '九大行业领军者全方位洞见助力企业转危为机，追回生意！',
          imgUrl: getAbsoluteURL('/img/share.jpg'),
          link: getAbsoluteURL('/index.html'),
          success: function () {
            // console.log(111)
          },
          cancel: function () {
            // console.log(222)
          },
        }
        wx.onMenuShareTimeline(shareData64)
        wx.onMenuShareAppMessage(shareData64)
      })
    },
    'json'
  )
}

if (isWechat) {
  wechatConfig()
}

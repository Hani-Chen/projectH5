/*global jQuery */
(function($) {
  'use strict'
  var definer = $(
      '<div dir="rtl" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: -1000px; overflow: scroll">ABCD</div>'
    ).appendTo('body')[0],
    type = 'reverse'

  if (definer.scrollLeft > 0) {
    type = 'default'
  } else {
    definer.scrollLeft = 1
    if (definer.scrollLeft === 0) {
      type = 'negative'
    }
  }

  $(definer).remove()
  $.support.rtlScrollType = type
})(jQuery)

window.windowwidth = $(window).width()

$('.teamup').scroll(function(event) {
  
  // 已经滚过的区域
  var offsetTop = $('.teamup-tabbar-wrapper').offset().top
  if(offsetTop<=0){
    $('.teamup-tabbar-affix').addClass('affixed').css('background-position-y',offsetTop-adaptive.remToPx(0.75)+'px')
  } else {
    $('.teamup-tabbar-affix').removeClass('affixed')
  }
})

// 設置tabbar滾動效果
function setScrollItem(index) {
  var isAr = $('body').is('.ar')

  var target = $('.tab-item')[index]
  $('.tab-item').removeClass('active')
  $(target).addClass('active')
  var offsetWidth = target.offsetLeft - adaptive.remToPx(0.24)
  // 阿語滾動方向相反，需要單獨處理
  if (isAr) {
    var offsetLeft = target.offsetLeft
    if (jQuery.support.rtlScrollType == 'default') {
      offsetWidth =
        $('.tabbar')[0].scrollWidth -
        window.innerWidth * 2 +
        target.offsetWidth +
        offsetLeft +
        adaptive.remToPx(0.24)
    } else {
      offsetWidth =
        target.offsetLeft +
        adaptive.remToPx(0.24) -
        window.innerWidth +
        target.offsetWidth
    }
  }
  $('.tabbar').animate({ scrollLeft: offsetWidth + 'px' }, 300)
}
$('.tab-item').click(function() {
  var index = $(this).index()
  pageSwiper.slideTo(index)
  setScrollItem(index)
})

var pageSwiper = new Swiper('#page', {
  resistanceRatio: 0.7,
  autoHeight: true,
  on: {
    transitionStart: function() {
      setScrollItem(this.activeIndex)
      // 滑动时去除tab动画
      $('.vfx').removeClass('vfx')
    }
  }
})

function isScrollEvent(bl) {
  if (bl) {
    // 放開滾動事件
    $('.teamup').removeClass('overflow')
  } else {
    // 禁止滾動事件
    $('.teamup').addClass('overflow')
  }
}

// 阻止冒泡事件
function bubble($element) {
  $element.click(function(e) {
    e.stopPropagation()
  })
}
// 活动规则弹窗
$('.teamup-rules').click(function() {
  $('[data-rule]').addClass('show')
  isScrollEvent(false)

  // 活动规则打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_action_rule'
  })
})

// 点击点赞
$('.rank-btn').click(function() {
  // 如果有选票 显示 投票成功
  $('[data-like]').addClass('show')
  isScrollEvent(false)

  // // 如果没有选票 显示 选票不足弹窗
  // $('[data-none]').addClass('show')
  //  isScrollEvent(false)

  
  // // 活动结束弹窗
  // $('[ data-over]').addClass('show')
  // isScrollEvent(false)

  // // 操作错误弹窗
  // $('[ data-err]').addClass('show')
  // isScrollEvent(false)


  // 投票打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_vote_click'
  })

})

// 点击继续投票
$('[data-continue]').click(function() {
  // 关闭弹窗 所有弹窗 回到页面
  $(this)
    .parents('.pop')
    .removeClass('show')

  isScrollEvent(true)
  // 投票打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_continue'
  })
})
// 点击分享
$('[data-shareplay]').click(function() {
  $(this)
    .parents('.pop')
    .removeClass('show')
  $('[data-share]').addClass('show')
  isScrollEvent(false)
})

// 点击头像
$('.rank-img').click(function() {
  // 显示详情弹窗
  $('[data-introduce]').addClass('show')
  isScrollEvent(false)

  // 选手详情打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_details'
  })
})

// 弹窗关闭
$('[data-shut]').click(function() {
  $(this)
    .parents('.pop')
    .removeClass('show')
  isScrollEvent(true)


  // 弹窗关闭打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_shut_icon'
  })
})

// 弹窗关闭
$('.pop').click(function() {
  $(this).removeClass('show')
  isScrollEvent(true)

  // 点击空白区域 - 关闭 - 打点
  gtag('event', 'x_click', {
    event_category: '20190617teamup',
    event_label: 'm_pop_shut'
  })
})

$(window).scroll(function(event) {
  $('.list-box').removeClass('show')
  $('.list-item-arrow').removeClass('rotate')
  $('.list-secondary').removeClass('show')
})

// 头部轮播
var swiperHeader = new Swiper('.swiper-header', {
  loop: true, // 循环模式选项
  // 自动轮播
  autoplay: {
    disableOnInteraction: false
  }
})
// 判断轮播图为一张时销毁自动轮播
if (swiperHeader.slides.length <= 3) {
  swiperHeader.destroy()
}

// 阻止弹窗冒泡
bubble($('.pop-rule-content'))
bubble($('.pop-share-content'))
bubble($('.pop-like-content'))
bubble($('.pop-introduce-content'))
bubble($('.pop-none-content'))
bubble($('.secondary-item'))


$('.rule-list').on('touchmove',function(e){
  e.stopPropagation()
})
$('.pop').on('touchmove',function(e){
  e.stopPropagation()
  e.preventDefault()
})


// 下载按钮判断 是安卓机 还是 ios
let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
if(isIOS){
  $('body').addClass('ios')
  $('html').addClass('ios')
}else if(isAndroid){
  $('body').removeClass('ios')
  $('html').removeClass('ios')
}


//监听屏幕尺寸变化
window.onresize=function(){
  // pageSwiper.updateAutoHeight(0);
  setTimeout(function(){
    pageSwiper.updateSize()
    pageSwiper.updateAutoHeight(0);
    setScrollItem(pageSwiper.realIndex)
  },1000);
}


//动态插入数据后调入此函数
function insertBox(){
  var length = $('.rank-content-box').children().length;
  console.log(length)
  if((length % 3) != 0){
    $('<div class="rank-item"></div>').appendTo('.rank-content-box');
  }
}

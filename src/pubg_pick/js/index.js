// 分享按钮事件
$('.hd-share').click(function() {
  console.log('你点击了分享按钮')
})

var arr = [0, 1, 2, 3, 4] //按这个下标依次旋转
var ms = 0, // 定时器时间
  status = 0, // 按钮状态
  num = 0 //定义初识下标
// 抽奖按钮事件
$('.prize-lottery').click(function() {
  // 点击改变按钮状态
  console.log('你点击了抽奖按钮')
  // 判断按是否可点击 如果可点击
  if (status == 0) {
    // 改变状态 为不可点击
    status = 1
    function lottery() {
      ms += 10
      // 移除全部中奖高亮
      $('.prize-item').removeClass('prize')
      num++
      num > 4 ? (num = 0) : ''
      // 给当前元素高亮
      $('.prize-item:eq( ' + num + ' )').addClass('prize')
      if (ms <= 250) {
        setTimeout(lottery, ms)
      } else {
        // 当定时器结束时 改变状态 可点击
        status = 0
        // 定时器清零
        ms = 0
      }
    }
    setTimeout(lottery, 10)
  }
})

// 抽奖次数领取
$('.task-btn').click(function() {
  !$(this).hasClass('task-btn-pending')
    ? $(this).addClass('task-btn-pending') && $(this).text('已领取')
    : ''
})

// 点击选手视频播放时
$('.player-play').click(function() {
  // 如果是暂停状态
  if ($(this).hasClass('player-stop')) {
    // 移除蒙层
    $(this).removeClass('player-stop')
    // 播放视频
    $(this)
      .siblings()[0]
      .play()
    // 添加控件
    $(this).siblings()[0].controls = true
  }
})
for (let i = 0; i < $('.player-video').length; i++) {
  // 如果视频暂停
  $('.player-video')[i].addEventListener('pause', function() {
    // 添加蒙层
    $(this)
      .siblings('.player-play')
      .addClass('player-stop')
    // 移除控件
    $(this)[0].controls = false
  })
  // 如果视频结束
  $('.player-video')[i].addEventListener('ended', function() {
    // 添加蒙层
    $(this)
      .siblings('.player-play')
      .addClass('player-stop')
    // 移除控件
    $(this)[0].controls = false
  })
}

// 点击选手 查看更多
$('.player-more').click(function() {
  console.log(
    '点击了第',
    $(this)
      .parents('.player-item')
      .index(),
    '个查看更多'
  )
})

var deg = 0
// 点击刷新表单
$('.at-refresh').click(function() {
  deg += 360
  // 旋转icon
  $('.icon-refresh').css({ transform: 'rotate(' + deg + 'deg)' })
  deg > 3600 ? (deg = 0) : ''
})

// 点击选手 查看更多
$('.player-collection').click(function() {
  console.log(
    '点击了第',
    $(this)
      .parents('.player-item')
      .index(),
    '互动领福利'
  )
})

// 点击 主播榜 打榜
$('.rk-support').click(function() {
  console.log(
    '点击了第',
    $(this)
      .parents('.rk-item')
      .index(),
    '打榜'
  )
})

// 点击 主播榜 关注
$('.rk-attention').click(function() {
  $(this).text() == '关注' ? $(this).text('已关注') : $(this).text('关注')
  console.log(
    '点击了第',
    $(this)
      .parents('.rk-item')
      .index(),
    '关注'
  )
})

// 视频轮播
var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'my-bullet-active',
    clickable: true
  },
  on: {
    // 滑动视频轮播时
    slideChangeTransitionStart: function() {
      for (let i = 0; i < $('.at-video').length; i++) {
        const element = $('.at-video')[i]
        // 暂停视频
        element.pause()
        // 添加蒙层
        $('.at-play').addClass('at-stop')
        // 关闭控件
        element.controls = false
      }
    }
  }
})
// 判断如果只有一个视频时 销毁自动轮播
if (mySwiper.slides.length <= 1) {
  // 停止自动轮播
  mySwiper.autoplay.stop()
}

// 当旋转屏幕时 更新size值
window.adaptive.setRemCallback = function() {
  mySwiper.updateSize()
  mySwiper.update(true)
}

// 更多视频
$('.at-play').click(function() {
  // 停止自动轮播
  mySwiper.autoplay.stop()
  // 如果不是暂停状态
  if ($(this).hasClass('at-stop')) {
    // 移除蒙层
    $(this).removeClass('at-stop')
    // 播放视频
    $(this)
      .siblings()[0]
      .play()
    // 视频控件显示
    $(this).siblings()[0].controls = true
  }
})

for (let i = 0; i < $('.at-video').length; i++) {
  // 视频暂停时
  $('.at-video')[i].addEventListener('pause', function() {
    // 添加蒙层
    $(this)
      .siblings('.at-play')
      .addClass('at-stop')
    // 关闭控件
    $(this)[0].controls = false
  })
  // 视频结束时
  $('.at-video')[i].addEventListener('ended', function() {
    // 添加蒙层
    $(this)
      .siblings('.at-play')
      .addClass('at-stop')
    // 关闭控件
    $(this)[0].controls = false
  })
}

// 阻止冒泡事件
function bubble($element) {
  $element.click(function(e) {
    e.stopPropagation()
  })
}

// 活动规则弹窗
$('.at-rule').click(function() {
  $('.pop').addClass('show')
  $('video').css({
    display: "none"
  })
    
})

// 关闭按钮
$('.pop-shut').click(function() {
  $('.pop').removeClass('show')
  $('video').css({
    display: "block "
  })
})

// 弹窗以外
$('.pop').click(function() {
  $(this).removeClass('show')
  $('video').css({
    display: "block "
  })
})

// 阻止弹窗冒泡
bubble($('.pop-rule'))

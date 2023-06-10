// 滚动函数
const ScrollTop = (number = 0, time) => {
  if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = number;
      return number;
  }
  const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime; // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
          spacingInex--;
          ScrollTop(nowTop += everTop);
      } else {
          clearInterval(scrollTimer); // 清除计时器
      }
  }, spacingTime);
};

// 添加动画函数
function animation($this) {
  $this.addClass('animation')
}

// 按钮切换 & 页面跳转
/**
 *
 * @param {*} $this 当前调用函数的this
 * @param {*} $hidden 需要隐藏的元素类
 * @param {*} $show 需要显示的元素类
 * @param {*} $ban 需要禁止点击的按钮
 */
function show($this, $hidden, $show, $ban) {
  // 改变按钮状态
  $this.addClass('active')
  // 禁止按钮点击
  if ($ban) {
    $ban.unbind()
  } else {
    $this.unbind()
  }
  // 延迟页面跳转 时间为200毫秒
  setTimeout(function() {
    // 当前页面隐藏
    $hidden.removeClass('show')
    // 下一个页面显示
    $show.addClass('show')
  }, 400)
}


// 点击 loading 页接听按钮
$('.answer_box').click(function() {
  $('.wrap_loading').removeClass('show')
  $('.wrap_index').addClass('show')
  //   给首页标题添加动画
  animation($('.title_box'))
  //   给首页按钮添加动画
  animation($('.ibtn_box'))
})

// 点击首页准备好了按钮
$('.ibtn_ok').click(function() {
  // 隐藏当前页面 & 显示问题1页面
  show($(this), $('.wrap_index'), $('.wrap_question1'))
  //   问题一 磁带动画
  animation($('.wrap_question1 .tape'))
  //   问题一 按钮动画
  animation($('.wrap_question1 .qbtn_1'))
  animation($('.wrap_question1 .qbtn_2'))
  animation($('.wrap_question1 .qbtn_3'))
  animation($('.wrap_question1 .qbtn_4'))
})

// 点击首页我自己了解
$('.ibtn_discovery').click(function() {
  $(this).addClass('active')
  // 隐藏当前页面 & 显示活动主页
  show($(this), $('.wrap_index'), $('.wrap_home'))
})

// 点击问题页1 答案按钮
$('.wrap_question1 .qbtn').click(function() {
  // 隐藏当前页面 & 显示问题2页面
  show($(this), $('.wrap'), $('.wrap_question2'), $('.wrap_question1 .qbtn'))
  //   问题二 磁带动画
  animation($('.wrap_question2 .tape'))
  //   问题二 按钮动画
  animation($('.wrap_question2 .qbtn_1'))
  animation($('.wrap_question2 .qbtn_2'))
  animation($('.wrap_question2 .qbtn_3'))
  animation($('.wrap_question2 .qbtn_4'))
})

// 点击问题页2 答案按钮
$('.wrap_question2 .qbtn').click(function() {
  // 隐藏当前页面 & 显示问题3页面
  show($(this), $('.wrap'), $('.wrap_question3'), $('.wrap_question2 .qbtn'))
  //   问题三 磁带动画
  animation($('.wrap_question3 .tape'))
  //   问题三 按钮动画
  animation($('.wrap_question3 .qbtn_1'))
  animation($('.wrap_question3 .qbtn_2'))
  animation($('.wrap_question3 .qbtn_3'))
  animation($('.wrap_question3 .qbtn_4'))
})

// 点击问题页3 答案按钮
$('.wrap_question3 .qbtn').click(function(e) {
  // 办卡页弹窗动画
  animation($('.handle_pop'))
  // 办卡页按钮动画
  animation($('.hbtn'))
  let index = $(this).index()
  if (index == 0) {
    // 隐藏当前页面 & 显示办卡页面
    $('.handle_center')
      .children('.handle_pop')
      .addClass('pop1')
    show($(this), $('.wrap'), $('.wrap_handle'), $('.wrap_question3 .qbtn'))
    $('.wrap_handle').removeClass('active')
  } else if (index == 1) {
    // 隐藏当前页面 & 显示办卡页面
    $('.handle_center')
      .children('.handle_pop')
      .addClass('pop2')
    show($(this), $('.wrap'), $('.wrap_handle'), $('.wrap_question3 .qbtn'))
    $('.wrap_handle').addClass('active')
  }
})

$('.wrap_handle')
  // 点击立即办卡
  .on('click', '.hbtn', function() {
    $(this).addClass('active')
    // 隐藏当前页面 & 显示活动主页
    show($(this), $('.wrap_handle'), $('.wrap_home'))
  })
  // 点击活动规则
  .on('click', '.rule', function() {
    console.log('你点击了活动规则')
  })

$('.home_btn')
  // 点击立即办卡
  .on('click', '.btn_manage', function() {
    // 当前高亮
    $(this).addClass('btn_manage_active')
    //   移除分享得vip高亮
    $('.btn_share').removeClass('btn_share_active')
    let top = $('.activity1').offset().top - $('.home_btn').height()
    // 滚动页面
    ScrollTop(top, 200);
  })
  // 分享的vip
  .on('click', '.btn_share', function() {
    //   移除立即办卡高亮
    $('.btn_manage').removeClass('btn_manage_active')
    // 当前高亮
    $(this).addClass('btn_share_active')
    
    
    let top = $('.wrap_home ').height() - $(window).height()
    // 滚动页面
    ScrollTop(top, 200);
  })

$('.activity1')
  // 点击立即办卡
  .on('click', '.gift_btn', function() {
    console.log('你点击了立即办卡')
    $('.pop_item3')
      .parent('pop')
      .addClass('btn_share_active')
  })

$('.activity2')
  // 点击立即分享
  .on('click', '.gift_btn', function() {
    // // 情况1 - 未分享 - 分享后
    // $(this).text('立即领奖')
    // $('.activity2 .gift_text1').text('')

    // 情况2 有抽奖机会后 - 中奖了显示中奖弹窗
    $('.pop_item2')
      .parent('.pop')
      .addClass('show')

    // 情况3 - 有抽奖机会后 - 没中奖显示手慢弹窗
    // $('.pop_item3').parent('.pop').addClass('show')
  })

// 点击查看我的奖品
$('.gift_text3').click(function() {
  // 显示获奖记录弹窗
  $('.pop_item4')
    .parent('.pop')
    .addClass('show')
    console.log(123)
})

// 弹窗以外点击关闭弹窗
$('.pop').click(function() {
  $(this).removeClass('show')
})

// 阻止冒泡事件
function bubble($element) {
  $element.click(function(e) {
    e.stopPropagation()
  })
}

// 阻止弹窗冒泡
bubble($('.pop_item2'))
bubble($('.pop_item3'))
bubble($('.pop_item4'))


// 预加载函数
/**
 *  预加载图片资源
 * @param {Array} names 图片名数组
 * @param {Function} cb 加载回调
 * @param {String} prefix 图片路径配置
 */
function preloadImage(names, cb, prefix, onProgress) {
  var n = 0,
    img,
    imgs = {}
  names.forEach(function(name) {
    img = new Image()
    img.onload = (function(name, img) {
      return function() {
        imgs[name] = img
        n++
        onProgress(n, names.length)
        n === names.length && cb && cb(imgs)
      }
    })(name, img)
    img.src = (prefix || '') + name
  })
}
// 预加载
$(document).ready(function() {
  // 静态资源配置
  var imgs = [
    'album.png',
    'award.png',
    'bg_activity.png',
    'bg_bottom.png',
    'bg_circular_bead.png',
    'bg_header.png',
    'bg_page1.jpg',
    'bg_page2.jpg',
    'bg_page3.jpg',
    'bg_page4.jpg',
    'bg_page5.jpg',
    'bg_page6.jpg',
    'bg_pop.jpg',
    'bg_pop1.png',
    'bg_pop2.png',
    'bg_tape.png',
    'bottom_tape.png',
    'btn.png',
    'btn_color.png',
    'btn_constellation.png',
    'btn_manage.png',
    'btn_manage1.png',
    'btn_share.png',
    'btn_share1.png',
    'gift.png',
    'icon_answer.png',
    'logo.png',
    'logo1.png',
    'logo2.png',
    'membership.png',
    'qq_logo.png',
    'serial1.png',
    'serial2.png',
    'serial3.png',
    'tickets.png'
  ]
  // 预加载静态资源
  preloadImage(
    imgs,
    function() {
      setTimeout(function() {
        $('.wrap_preload').removeClass('show')
        $('.wrap_loading').addClass('show')
        animation($('.loading_answer'))
      }, 500)
    },
    './img/',
    function(n, total) {
      var progress = (100 * n) / total
      $('#preloadPercent').text(Math.floor(progress))
      $('#preloadProgress').css('width', progress + '%')
    }
  )
})

// 页面滚动时
$(window).scroll(function(e) {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  // 导航固定
  let top = $('.home_btn').offset().top - scrollTop
  if (top <= 0) {
    $('.btn_box').addClass('fixed')

    // 当前高亮
    $('.btn_manage').addClass('btn_manage_active')
    //   移除分享得vip高亮
    $('.btn_share').removeClass('btn_share_active')

  } else {
    $('.btn_box').removeClass('fixed')
  }

  
  // 导航固定
  let activity1Top = $('.activity1').offset().top - scrollTop
  // 离开活动卡片
  if(activity1Top >= 160){
    $('.btn_manage').removeClass('btn_manage_active')
    //   移除分享得vip高亮
    $('.btn_share').removeClass('btn_share_active')
  }
  // 接近活动二卡片
  if (activity1Top <= -20){
    $('.btn_manage').removeClass('btn_manage_active')
    //   移除分享得vip高亮
    $('.btn_share').addClass('btn_share_active')
  }
})

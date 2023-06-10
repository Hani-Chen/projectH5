// 全局资源缓存组
var imageCollect

/* 2019-12-13 Edit S */
// 判断播放组件是否存在
var playerExist = false
/* 2019-12-13 Edit E */

/* 2019-12-14 Edit - 初始化js时如果有音乐直接暂停 S */
if(playerExist) {
  player.pause()
}
/* 2019-12-14 Edit - 初始化js时如果有音乐直接暂停 E */

var $currentSection = ''
var $backSection = ''


/**
 * 统计事件 - 目前暂用百度统计
 * @param {object} event
 * @param {string} event.type  类型
 * @param {string} event.action  操作
 * @param {string} event.label  标签描述
 */
function tarEvent(event) {
  
  // console.log(event)
  _hmt.push(['_trackEvent', event.type, event.action, event.label])
}


function musicReady(cb) {
  if (!window.WebViewJavascriptBridge) {
      document.addEventListener("WebViewJavascriptBridgeReady", cb);
  } else {
      cb();
  }
}
// 页面显示函数
function showSection($section) {
  if ($currentSection) {
    $currentSection.removeClass('show')
    $backSection = $currentSection
  }
  $section.addClass('show')
  $currentSection = $section
}
function backSection() {
  showSection($backSection)
}

/**
 * 获取指定url参数
 * @param {string} variable 参数名
 */
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
var enter_type = getQueryVariable('enter_type')
if (enter_type == 'form') {
  // 如果页面参数为form，默认进入留资表单页
  $('.wrap').addClass('show')
  showSection($('.survey_wrap'))
} else {
  // 显示loading页面
  showSection($('.loading_wrap'))
  $(document).ready(function() {
    setLoading()
  })
}

/**
 *  预加载图片资源
 * @param {Array} names 图片名数组
 * @param {Function} cb 加载回调
 * @param {String} prefix 图片路径配置
 */
function preloadImage(names, cb, prefix, onProgress) {
  var n = 0,
    imgs = {}
  names.forEach(function(name) {
    var img = new Image()
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

function showStart() {
  setTimeout(function() {
    showSection($('.start_wrap'))
    $('.wrap').addClass('show')
  }, 500)
}

function setLoading() {
  // $(document).ready(function() {
  var n = 2000,
    loadFlag = false,
    loadTimeFlag = false
  var loadTimer = setInterval(function() {
    n -= 100
    $('.loading_alpha_channels').css('opacity', (n / 2000) * 0.7)
    $('.loading_percent').text(Math.floor((2000 - n) / 20) + '%')
    if (n <= 0) {
      clearInterval(loadTimer)
      loadTimeFlag = true
      if (loadFlag) {
        showStart()
      }
    }
  }, 100)
  // 需要加载的静态资源的数组
  var imgs = [
    'page_bg.png',
    'page_window.png',
    'btn_lucky.png',
    'btn_return.png',
    'icon_bg_play.png',
    'icon_cellphone.png',
    'icon_frame.png',
    'icon_frame1.png',
    'icon_frame2.png',
    'icon_niolife.png',
    'icon_play.png',
    'icon_play1.png',
    'icon_pulldown.png',
    'icon_up.png',
    'logo.png',
    'share.jpg',
    'logo_qqmusic.png',
    'luckybag_prize.png',
    'make_bg.jpg',
    'member_bg.png',
    'pop_arrows.png',
    'pop_close.png',
    'pop_member.png',
    'prize_bag.png',
    'prize_car.png',
    'prize_car2.png',
    'prize_cup.png',
    'prize_trunk.png',
    'reality_bg.png',
    'select_prev.png',
    'select_sky1.jpg',
    'select_sky2.jpg',
    'select_sky3.jpg',
    'select_sky4.jpg',
    'select_sky5.jpg',
    'select_sky6.jpg',
    'songlist_title_bg.jpg',
    'start_hand.png',
    'start_ripple1.png',
    'start_ripple2.png',
    'start_ripple3.png',
    'survey_carmode1_active.png',
    'survey_carmodel1.png',
    'survey_carmodel1_active.png',
    'survey_carmodel2.png',
    'survey_carmodel2_active.png',
    'survey_carmodel3.png',
    'survey_carmodel3_active.png',
    'survey_title_bg.jpg',
    'base_qrcode.png',
    'base.png'
  ]
  preloadImage(
    imgs,
    function(imgs) {
      imageCollect = imgs
      loadFlag = true
      if (loadTimeFlag) {
        showStart()
      }
    },
    './img/',
    function(n, total) {}
  )
  // })
}

// 点击背景音乐icon
$('.icon_play').on('click', function() {
  $(this).toggleClass('paused')
  if ($(this).hasClass('paused')) {
    $('.video_wrap').hasClass('show') ? (mvVideo.muted = true) : ''
    // player.pause()
  } else {
    $('.video_wrap').hasClass('show') ? (mvVideo.muted = false) : ''
  }
})

var browser = {
  versions: (function() {
    var u = navigator.userAgent,
    app = navigator.appVersion
    return {
      //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      hw: u.indexOf('HUAWEI')>-1 ||  u.indexOf('HONOR')>-1,
      qqmusic: u.indexOf('QQMUSIC')>-1 ||  u.indexOf('HONOR')>-1, // 是否是qq音乐内部
      webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    }
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

// 点击启动页
$('.start_bg').on('click', function() {
  
  tarEvent({
    type:'button',
    action: 'click',
    label: '首页点击'
  })
  $('.start_content').addClass('show')
  $('.start_content1').removeClass('show')
  if (browser.versions.mobile) {
    //判断是否是移动设备打开。browser代码在下面
    mvVideo.muted = true
    mvVideo.play()
    mvVideo.pause()
  }

  /* 19-12-13 Edit - 修复重力问题 S */
  if (window.DeviceOrientationEvent) {
    if (typeof window.DeviceOrientationEvent.requestPermission !== 'function') {
      // 没有获取权限
      gravity()
    } else {
      // ios 13 beta 需要请求重力感应权限才能播放
      window.DeviceOrientationEvent.requestPermission()
        .then(function(result) {
          if (result == 'granted') {
            // 拿到权限，启动重力感应时间
            gravity()
          } else {
            // 不给权限
            playVideo()
          }
        })
        .catch(function() {
          // 获取权限异常
          playVideo()
        })
    }
  } else {
    // 不支持重力感应也直接播放视频
    playVideo()
  }
  /* 19-12-13 Edit - 修复重力问题 E */
})

var isVideoTrigger = false
var mvVideo = $('#mvVideo')[0]

// 播放视频页视频
function playVideo() {
  showSection($('.video_wrap'))
  mvVideo.play()
  mvVideo.muted = false
  isVideoTrigger = true

  /* 19-12-15 Edit - 安卓版退出视频全屏等于跳过视频 S */
  
  // 视频退出全屏
  mvVideo.addEventListener('x5videoexitfullscreen', function() {
    mvVideo.pause()
    showSection($('.make_wrap'))
  })
  /* 19-12-15 Edit - 安卓版退出视频全屏等于跳过视频 E */

}
// 陀螺仪事件
function gravity() {
  window.addEventListener(
    'deviceorientation',
    function(event) {
      if (isVideoTrigger) {
        return
      }
      var beta = event.beta
      if (beta >= 120) {
        tarEvent({
          type:'deviceorientation',
          action: 'up',
          label: '抬起手机'
        })
        playVideo()
      }
    },
    true
  )
}

// 视频播放结束
$('#mvVideo').on('ended', function() {
  showSection($('.make_wrap'))
})

/**
 * toast信息工具函数
 */
function showToast(str) {
  var $toast = $('<div class="toast-item">' + str + '</div>')
  $('.wrap').append($toast)
  setTimeout(function() {
    $toast.animate({ opacity: 0 }, 300, null, function() {
      $toast.remove()
    })
  }, 1500)
}

// 点击页面中解锁福袋
$('.btn_lucky').on('click', function() {
  showSection($('.survey_wrap'))
})

// 留资页面 - 返回按钮 - 返回触发显示留资页面的上个页面
$('.survey_return').click(function() {
  if (enter_type == 'form') {
    enter_type = ''
    $('.wrap').removeClass('show')
    showSection($('.loading_wrap'))
    setLoading()
  } else {
    backSection()
  }
  $('.survey_title_video')[0].pause()
  $('.survey_title_mark').show()
})

// 制作海报页面 - 返回按钮 - 返回视频页 - 重新播放视频
$('.make_wrap .page_return').on('click', function() {
  showSection($('.video_wrap'))
  mvVideo.play()
})

var selectStep = 1
// 选择天空页面 - 返回按钮
$('.select_wrap .page_return').on('click', function() {
  console.log(1234, selectStep)

  if (selectStep == 1) {
    // 返回制作海报页面
    showSection($('.make_wrap'))
  } else if (selectStep == 2) {
    // 返回选择天空环节
    selectStep = 1

    $('.btn_next').addClass('show')
    $('.btn_create').removeClass('show')

    $('.select_content2').removeClass('show')
    $('.select_content1').addClass('show')
    mySwiper.allowTouchMove = true
    player.pause()
  }
})

// 保存图片页面 - 返回按钮
$('.create_save .page_return').on('click', function() {
  showSection($('.select_wrap'))
  
})

// 动态歌词海报 - 歌单页 - 返回海报制作页
$('.songlist_wrap .page_return').on('click', function() {
  showSection($('.make_wrap'))
  player.pause()
})

// 点击按钮 - 仰望天空新姿势
$('.btn_select').on('click', function() {
  tarEvent({
    type:'button',
    action: 'click',
    label: '仰望天空新姿势'
  })
  showSection($('.survey_wrap'))
  // $('.icon_play').removeClass('show')
})

// 点击按钮 - 动态海报
$('.btn_dynamic').on('click', function() {
  tarEvent({
    type:'button',
    action: 'click',
    label: '动态海报制作'
  })  
  showSection($('.songlist_wrap'))
  // $('.icon_play').removeClass('show')
})

var mySwiper, mySwiperOwn
// 点击静态
$('.make_wrap .btn_static').on('click', function() {
  tarEvent({
    type:'button',
    action: 'click',
    label: '静态海报制作'
  })
  showSection($('.select_wrap'))
  // 判断是否已经生成swiper实例对象
  if (!mySwiperOwn) {
    mySwiperOwn = true
    mySwiper = new Swiper('.swiper-container', {
      // loop: true, // 循环模式选项
      speed: 500,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my_bullet', //需设置.my-bullet样式
        bulletActiveClass: 'active'
      }
    })

    $('.btn_switch1').click(function() {
      mySwiper.slidePrev()
    })
    $('.btn_switch2').click(function() {
      mySwiper.slideNext()
    })
  }
})

var activeImg
// 点击下一步
$('.select_base .btn_next').on('click', function() {
  tarEvent({
    type:'button',
    action: 'click',
    label: '下一步'
  })
  // 轮播禁止切换
  mySwiper.allowTouchMove = false
  selectStep = 2
  $(this).removeClass('show')
  $('.btn_create').addClass('show')
  $('.select_content').removeClass('show')
  $('.select_content2').addClass('show')
  // 获取选择中的图
  activeImg = $('.swiper-slide-active img').attr('src')
})

/* 2019-12-13 Edit S */
var bgName = '',
  bgText = '',
  player,
  _this
// 生成你的歌词海报页面 - 背景音乐播放 & 事件监听
function bgmusicPlay() {
  // 播放歌曲
  player.play(_this.data('url'))
  $('.select_bgmusic_list .item').removeClass('active')
  _this.addClass('active')
  bgName = _this.data('name')
  bgText = _this.data('text')
}
// 选择背景音乐
$('.select_bgmusic_list .item').on('click', function() {
  _this = $(this)
  if (playerExist == false) {
    // 初始化播放组件
    player = new QMplayer()
    playerExist = true
    bgmusicPlay()
  } else {
    bgmusicPlay()
  }
})
/* 2019-12-13 Edit E */

// 点击生成你的歌词海报
$('.btn_create').on('click', function() {
  tarEvent({
    type:'button',
    action: 'click',
    label: '点击生成你的歌词海报'
  })
  // 显示落地页
  if (bgName == '' || bgText == '') {
    showToast('请选择背景音乐')
    return
  } else {
    showSection($('.create_save'))
    player.pause()
  $('.select_bgmusic_list .item').removeClass('active')
    var bgImg = activeImg.slice(6)
    // 生成图片
    drawCanvas(bgImg, bgName, bgText)
  }
})
/* 2019-12-13 Edit S */
// canvas 生成落地页
// 文案
function drawCanvas(bgImg, bgName, bgText) {

  tarEvent({
    type:'result',
    action: 'draw',
    label: '生成你的歌词海报'
  })
  var imgs = imageCollect
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  canvas.width = 750
  canvas.height = 1334
  // 背景图
  ctx.drawImage(imgs[bgImg], 0, 196)
  // 车窗
  ctx.drawImage(imgs['page_window.png'], 0, 0)
  // logo
  ctx.drawImage(imgs['logo.png'], 171.5, 107)
  // 文字装饰框
  ctx.drawImage(imgs['icon_frame1.png'], 90, 390)
  ctx.drawImage(imgs['icon_frame2.png'], 635, 614)

  // 绘制标题
  ctx.save()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillStyle = '#fff'
  ctx.font = '49px BlueSkyNotoR'
  bgText.split(/[(\r\n)\r\n]+/).forEach(function(v, i) {
    if (bgText.split(/[(\r\n)\r\n]+/).length == 2) {
      ctx.fillText(v, 375, 455 + i * 74)
    } else if (bgText.split(/[(\r\n)\r\n]+/).length == 3) {
      console.log(i, 'i2')
      ctx.fillText(v, 375, 417 + i * 74)
    }
  })
  ctx.restore()

  // 绘制歌名
  ctx.save()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillStyle = '#fff'
  ctx.font = '25px BlueSkyNotoR'
  ctx.fillText(bgName.replace(/-/g, ' · '), 375, 653)
  ctx.restore()

  
  // 绘制底部文案
  ctx.drawImage(imgs['base.png'], 0, 776)

  // // 绘制歌名
  // ctx.save()
  // ctx.textAlign = 'center'
  // ctx.textBaseline = 'top'
  // ctx.fillStyle = '#fff'
  // ctx.font = '30px BlueSkyNotoL'
  // ctx.fillText('仰望最美天空', 375, 774)
  // ctx.restore()

  // // 绘制歌名线段装饰1
  // ctx.save()
  // ctx.beginPath()
  // ctx.strokeStyle = '#fff'
  // ctx.lineWidth = 2
  // ctx.moveTo(206, 792)
  // ctx.lineTo(265, 792)
  // ctx.stroke()
  // ctx.restore()

  // // 绘制歌名线段装饰2
  // ctx.save()
  // ctx.beginPath()
  // ctx.strokeStyle = '#fff'
  // ctx.lineWidth = 2
  // ctx.moveTo(475, 792)
  // ctx.lineTo(527, 792)
  // ctx.stroke()
  // ctx.restore()

  // // 绘制歌名
  // ctx.save()
  // ctx.textAlign = 'center'
  // ctx.textBaseline = 'top'
  // ctx.fillStyle = '#fff'
  // ctx.font = '24px BlueSkyNotoB'
  // ctx.fillText('蔚来第三款量产车', 375, 813)
  // ctx.restore()

  // // 绘制歌名
  // ctx.save()
  // ctx.textAlign = 'center'
  // ctx.textBaseline = 'top'
  // ctx.fillStyle = '#fff'
  // ctx.font = '24px BlueSkyNotoB'
  // ctx.fillText('2019.12.28 NIO Day全球首秀', 375, 844)
  // ctx.restore()
  // 生成图片 渲染到页面
  $('#saveImg')[0].src = canvas.toDataURL()

  // 二维码
  ctx.drawImage(imgs['base_qrcode.png'], 115, 1141)

  // 生成图片 渲染到页面
  $('#saveImage')[0].src = canvas.toDataURL()
}
/* 2019-12-13 Edit E */
/**
 * 按ID显示弹窗
 */
function showModal(id) {
  $('#' + id).addClass('show')
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show')
}

// 点击关闭弹窗
$('.modal_close').on('click', function() {
  $('.modal').removeClass('show')
})

/* 19-12-13 Edit - 点击蒙层关闭 S */
// 点击蒙层 - 关闭弹窗
$('.modal_bg').on('click', function() {
  $('.modal').removeClass('show')
})
/* 19-12-13 Edit - 点击蒙层关闭 S */

// 实物奖品弹窗信息列表
var prizeList = [
  {
    id: 0,
    text: '蔚来ES8 1个月使用权 ',
    prizeUrl: './img/prize_car.png',
    btnText: '填写中奖联系方式'
  },
  {
    id: 1,
    text: '蔚蓝天空咖啡杯套装',
    prizeUrl: './img/prize_cup.png'
  },
  {
    id: 2,
    text: '蔚来ES8 1:18车模',
    prizeUrl: './img/prize_car2.png'
  },
  {
    id: 3,
    text: '可乐瓶双肩包',
    prizeUrl: './img/prize_bag.png'
  },
  {
    id: 4,
    text: '可乐瓶系列20寸行李箱 ',
    prizeUrl: './img/prize_trunk.png'
  }
]

/**
 * 中奖弹窗显示
 * 0 ==> 蔚来ES8 一个月使用权
 * 1 ==> 蔚蓝天空咖啡杯套装
 * 2 ==> 蔚来ES8 1:18车模
 * 3 ==> 可乐瓶双肩包
 * 4 ==> 可乐瓶系列20寸行李箱
 * 5 ==> 一个月豪华绿钻
 * 6 ==> 未中奖
 * @param {number} index
 */
function winning(index) {
  if (index == 0) {
    showModal('popReality')
    $('.goods_wrap .icon').hide()
    $('.goods_wrap .text').text(prizeList[index].text)
    $('.goods_wrap img').attr('src', prizeList[index].prizeUrl)
    $('.goods_wrap .get').text(prizeList[index].btnText)
  } else if (index >= 1 && index <= 4) {
    showModal('popReality')
    $('.goods_wrap .icon').show()
    $('.goods_wrap .text').text(prizeList[index].text)
    $('.goods_wrap img').attr('src', prizeList[index].prizeUrl)
  } else if (index == 5) {
    showModal('popMember')
  } else {
    showModal('popRegret')
  }
}

// 汽车型号
var carmodel = ''
// 点击选择汽车型号
$('.survey_carmodel_list .item').on('click', function() {
  $('.survey_carmodel_list .item').removeClass('active')
  $(this).addClass('active')
  $('.survey_carmodel_list input').attr('value', $(this).data('name'))
})

// 手机号正则表达式
var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
// 表单提交事件
$('.survey_fillout').on('submit', function(e) {
  console.log(this.carmodel.value.trim())
  e.preventDefault()
  var carmodel = this.carmodel.value.trim()
  var username = this.username.value.trim()
  var phone = this.phone.value.trim()
  var region = this.region.value.trim()
  if (!carmodel) {
    showToast('请选择汽车型号')
    return
  }
  if (!username) {
    showToast('请填写姓名')
    return
  }
  if (!region) {
    showToast('请选择地区')
    return
  }
  if (!phone) {
    showToast('请填写手机号码')
    return
  }
  console.log(phone.length)
  if (!reg.test(phone)) {
    showToast('请填写正确的手机号码')
    return
  }
})

  /* 2019-12-14 edit - 输入发唤醒时页面弹起 S */
$('.survey_submit_btn').on('click', function() {
  $('.survey_fillout').submit()
})


var carmodelVal, nameVal, regionVal, phoneVal
// 19-12-11 Edit - 当生成页输入框失去焦点时
/**
 * 判断表单按钮是否激活态
 */
function isActive(){
  carmodel = $('.survey_fillout #carmodel').val()
  name = $('.survey_fillout #name').val()
  region = $('.survey_fillout #region').val()
  phone = $('.survey_fillout #phone').val()
  if (carmodel != '' && name != '' && region != '' && phone != '' && reg.test(phone)) {
    $('.survey_submit_btn').addClass('active')
  }
}

// 获取到焦点元素滚动到可视区
function activeElementScrollIntoView(activeElement, delay) {
  var editable = activeElement.getAttribute('contenteditable')

  // 输入框、textarea或富文本获取焦点后没有将该元素滚动到可视区
  if (activeElement.tagName == 'INPUT' || activeElement.tagName == 'TEXTAREA' || editable === '' || editable) {
    setTimeout(function () {
      activeElement.scrollIntoView();
    }, delay)
  }
}


// 屏幕原始高度
var originHeight = document.documentElement.clientHeight || document.body.clientHeight;

// 焦点输入框
var inputFocus = false
// 是否有高度resize触发
var hasResize = true
$(window).on('resize',function(){
  var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if(browser.versions.android ){
    // 为安卓机型时
    if(resizeHeight<originHeight){
      // 高度变小，判断为键盘弹出
      hasResize = true
      if(inputFocus){
        activeElementScrollIntoView(inputFocus,200)
      }
    } else {
      if(inputFocus && !hasResize){
        // 判断为键盘弹出，但未改变过高度，为表单增加400px的屏幕高度
        $('.survey_wrap').css('padding-bottom','400px')
        activeElementScrollIntoView(inputFocus,200)
      } else {
        // 判断为键盘收起
        $('.survey_wrap').css('padding-bottom','0')
      }
    }
  }
})
$('.survey_fillout input')
  .on('blur', function() {
    $(window).resize()
    window.scrollTo(0, 0)
    
    // 清除增加的高度
    $('.survey_wrap').css('padding-bottom',0)

    isActive()

    // 清除焦点元素
    inputFocus = false
  })
  // 当生成页输入框获取焦点时
  .on('focus', function() {
    // 设置为焦点元素
    inputFocus = this
    $('.survey_wrap>.survey_inner').height(originHeight)

    
  })
  // 当生成页输入框改变状态时
  .on('change', function() {
    $(window).resize()
    window.scrollTo(0, 0)

    isActive()
  })







  /* 19-12-13 Edit - 当生成页选择城市失去焦点时 S */
  $('.survey_fillout select')
    .on('blur', function() {

      $(window).resize()
      window.scrollTo(0, 0)

      // 清除高度
      $('.survey_wrap').css('padding-bottom',0)

      isActive()

    })
    // 当生成页输入框获取焦点时
    .on('focus', function() {
      // 清除高度
      $('.survey_wrap').css('padding-bottom',0)
    })
    // 当生成页输入框改变状态时
    .on('change', function() {
      $(window).resize()
      window.scrollTo(0, 0)
      // 清除增加的高度
      $('.survey_wrap').css('padding-bottom',0)

      isActive()
      
    })
  /* 19-12-13 Edit - 当生成页选择城市失去焦点时 E */

  /* 2019-12-14 edit - 输入发唤醒时页面弹起 E */
// 点击福袋
$('.luckybag_content .prize').on('click', function() {
  hideModal('popLuckybag')
  var index = Math.floor(Math.random() * 7)
  winning(index)
})

// 省份信息
var data = [
  {
    reg: {
      name: '直辖市',
      value: 'zhixiashi'
    },
    city: [
      { name: '北京', value: 'beijing' },
      { name: '天津', value: 'tianjin' },
      { name: '上海', value: 'shanghai' },
      { name: '重庆', value: 'zhongqing' }
    ]
  },
  {
    reg: {
      name: '安徽省',
      value: 'anhuisheng'
    },

    city: [
      { name: '合肥', value: 'hefei' },
      { name: '宿州', value: 'suzhou' },
      { name: '淮北', value: 'huaibei' },
      { name: '阜阳', value: 'fuyang' },
      { name: '蚌埠', value: 'bangbu' },
      { name: '淮南', value: 'huainan' },
      { name: '滁州', value: 'chuzhou' },
      { name: '马鞍山', value: 'maanshan' },
      { name: '芜湖', value: 'wuhu' },
      { name: '铜陵', value: 'tongling' },
      { name: '安庆', value: 'anqing' },
      { name: '黄山', value: 'huangshan' },
      { name: '六安', value: 'liuan' },
      { name: '池州', value: 'chizhou' },
      { name: '宣城', value: 'xuancheng' },
      { name: '亳州', value: 'bozhou' },
      { name: '界首', value: 'jieshou' },
      { name: '明光', value: 'mingguang' },
      { name: '天长', value: 'tianchang' },
      { name: '桐城', value: 'tongcheng' },
      { name: '宁国', value: 'ningguo' },
      { name: '巢湖', value: 'chaohu' }
    ]
  },
  {
    reg: {
      name: '福建省',
      value: 'fujiansheng'
    },
    city: [
      { name: '厦门', value: 'xiamen' },
      { name: '福州', value: 'fuzhou' },
      { name: '南平', value: 'nanping' },
      { name: '三明', value: 'sanming' },
      { name: '莆田', value: 'putian' },
      { name: '泉州', value: 'quanzhou' },
      { name: '漳州', value: 'zhangzhou' },
      { name: '龙岩', value: 'longyan' },
      { name: '宁德', value: 'ningde' },
      { name: '福清', value: 'fuqing' },
      { name: '长乐', value: 'changle' },
      { name: '邵武', value: 'shaowu' },
      { name: '武夷山', value: 'wuyishan' },
      { name: '建瓯', value: 'jianou' },
      { name: '建阳', value: 'jianyang' },
      { name: '永安', value: 'yongan' },
      { name: '石狮', value: 'shishi' },
      { name: '晋江', value: 'jinjiang' },
      { name: '南安', value: 'nanan' },
      { name: '龙海', value: 'longhai' },
      { name: '漳平', value: 'zhangping' },
      { name: '福安', value: 'fuan' },
      { name: '福鼎', value: 'fuding' }
    ]
  },
  {
    reg: {
      name: '甘肃省',
      value: 'gansusheng'
    },
    city: [
      { name: '兰州', value: 'lanzhou' },
      { name: '嘉峪关', value: 'jiayuguan' },
      { name: '金昌', value: 'jinchang' },
      { name: '白银', value: 'baiyin' },
      { name: '天水', value: 'tianshui' },
      { name: '酒泉', value: 'jiuquan' },
      { name: '张掖', value: 'zhangye' },
      { name: '武威', value: 'wuwei' },
      { name: '庆阳', value: 'qingyang' },
      { name: '平凉', value: 'pingliang' },
      { name: '定西', value: 'dingxi' },
      { name: '陇南', value: 'longnan' },
      { name: '玉门', value: 'yumen' },
      { name: '敦煌', value: 'dunhuang' },
      { name: '临夏', value: 'linxia' },
      { name: '合作', value: 'hezuo' }
    ]
  },
  {
    reg: {
      name: '广东省',
      value: 'guangdongsheng'
    },
    city: [
      { name: '广州', value: 'guangzhou' },
      { name: '深圳', value: 'shenchou' },
      { name: '清远', value: 'qingyuan' },
      { name: '韶关', value: 'shaoguan' },
      { name: '河源', value: 'heyuan' },
      { name: '梅州', value: 'meizhou' },
      { name: '潮州', value: 'chaozhou' },
      { name: '汕头', value: 'shantou' },
      { name: '揭阳', value: 'jieyang' },
      { name: '汕尾', value: 'shanwei' },
      { name: '惠州', value: 'huizhou' },
      { name: '东莞', value: 'dongguan' },
      { name: '珠海', value: 'zhuhai' },
      { name: '中山', value: 'zhongshan' },
      { name: '江门', value: 'jiangmen' },
      { name: '佛山', value: 'fushan' },
      { name: '肇庆', value: 'zhaoqing' },
      { name: '云浮', value: 'yunfu' },
      { name: '阳江', value: 'yangjiang' },
      { name: '茂名', value: 'maoming' },
      { name: '湛江', value: 'zhanjiang' },
      { name: '从化', value: 'conghua' },
      { name: '增城', value: 'zengcheng' },
      { name: '英德', value: 'yingde' },
      { name: '连州', value: 'lianzhou' },
      { name: '乐昌', value: 'lechang' },
      { name: '南雄', value: 'nanxiong' },
      { name: '兴宁', value: 'xingning' },
      { name: '普宁', value: 'puning' },
      { name: '陆丰', value: 'lufeng' },
      { name: '恩平', value: 'enping' },
      { name: '台山', value: 'taishan' },
      { name: '开平', value: 'kaiping' },
      { name: '鹤山', value: 'heshan' },
      { name: '高要', value: 'gaoyao' },
      { name: '四会', value: 'sihui' },
      { name: '罗定', value: 'luoding' },
      { name: '阳春', value: 'yangchun' },
      { name: '化州', value: 'huazhou' },
      { name: '信宜', value: 'xinyi' },
      { name: '高州', value: 'gaozhou' },
      { name: '吴川', value: 'wuchuan' },
      { name: '廉江', value: 'lianjiang' },
      { name: '雷州', value: 'leizhou' }
    ]
  },
  {
    reg: {
      name: '贵州省',
      value: 'guizhousheng'
    },
    city: [
      { name: '贵阳', value: 'guiyang' },
      { name: '六盘水', value: 'liupanshui' },
      { name: '遵义', value: 'zunyi' },
      { name: '安顺', value: 'anshun' },
      { name: '毕节', value: 'bijie' },
      { name: '铜仁', value: 'tongren' },
      { name: '清镇', value: 'qingzhen' },
      { name: '赤水', value: 'chishui' },
      { name: '仁怀', value: 'renhuai' },
      { name: '凯里', value: 'kaili' },
      { name: '都匀', value: 'duyun' },
      { name: '兴义', value: 'xingyi' },
      { name: '福泉', value: 'fuquan' }
    ]
  },
  {
    reg: {
      name: '河北省',
      value: 'hebeisheng'
    },
    city: [
      { name: '石家庄', value: 'shijiazhuang' },
      { name: '邯郸', value: 'handan' },
      { name: '唐山', value: 'tangshan' },
      { name: '保定', value: 'baoding' },
      { name: '秦皇岛', value: 'qinhuangdao' },
      { name: '邢台', value: 'xingtai' },
      { name: '张家口', value: 'zhangjiakou' },
      { name: '承德', value: 'chengde' },
      { name: '沧州', value: 'cangzhou' },
      { name: '廊坊', value: 'langfang' },
      { name: '衡水', value: 'hengshui' },
      { name: '辛集', value: 'xinji' },
      { name: '藁城', value: 'gaocheng' },
      { name: '晋州', value: 'jinzhou' },
      { name: '新乐', value: 'xinle' },
      { name: '鹿泉', value: 'luquan' },
      { name: '遵化', value: 'zunhua' },
      { name: '迁安', value: 'qianan' },
      { name: '霸州', value: 'bazhou' },
      { name: '三河', value: 'sanhe' },
      { name: '定州', value: 'dingzhou' },
      { name: '涿州', value: 'zhuozhou' },
      { name: '安国', value: 'anguo' },
      { name: '高碑店', value: 'gaobeidian' },
      { name: '泊头', value: 'botou' },
      { name: '任丘', value: 'renqiu' },
      { name: '黄骅', value: 'huanghua' },
      { name: '河间', value: 'hejian' },
      { name: '冀州', value: 'jizhou' },
      { name: '深州', value: 'shenzhou' },
      { name: '南宫', value: 'nangong' },
      { name: '沙河', value: 'shahe' },
      { name: '武安', value: 'wuan' }
    ]
  },
  {
    reg: {
      name: '黑龙江省',
      value: 'heilongjiangsheng'
    },
    city: [
      { name: '哈尔滨', value: 'haerbin' },
      { name: '齐齐哈尔', value: 'qiqihaer' },
      { name: '黑河', value: 'heihe' },
      { name: '大庆', value: 'daqing' },
      { name: '伊春', value: 'yichun' },
      { name: '鹤岗', value: 'hegang' },
      { name: '佳木斯', value: 'jiamusi' },
      { name: '双鸭山', value: 'shuangyashan' },
      { name: '七台河', value: 'qitaihe' },
      { name: '鸡西', value: 'jixi' },
      { name: '牡丹江', value: 'mudanjiang' },
      { name: '绥化', value: 'suihua' },
      { name: '双城', value: 'shuangcheng' },
      { name: '尚志', value: 'shangzhi' },
      { name: '五常', value: 'wuchang' },
      { name: '阿城', value: 'acheng' },
      { name: '讷河', value: 'nehe' },
      { name: '北安', value: 'beian' },
      { name: '五大连池', value: 'wudalianchi' },
      { name: '铁力', value: 'tieli' },
      { name: '同江', value: 'tongjiang' },
      { name: '富锦', value: 'fujin' },
      { name: '虎林', value: 'hulin' },
      { name: '密山', value: 'mishan' },
      { name: '绥芬河', value: 'suifenhe' },
      { name: '海林', value: 'hailin' },
      { name: '宁安', value: 'ningan' },
      { name: '安达', value: 'anda' },
      { name: '肇东', value: 'zhaodong' },
      { name: '海伦', value: 'hailun' }
    ]
  },
  {
    reg: {
      name: '河南省',
      value: 'henansheng'
    },
    city: [
      { name: '郑州', value: 'zhengzhou' },
      { name: '开封', value: 'kaifeng' },
      { name: '洛阳', value: 'luoyang' },
      { name: '平顶山', value: 'pingdingshan' },
      { name: '安阳', value: 'anyang' },
      { name: '鹤壁', value: 'hebi' },
      { name: '新乡', value: 'xinxiang' },
      { name: '焦作', value: 'jiaozuo' },
      { name: '濮阳', value: 'puyang' },
      { name: '许昌', value: 'xuchang' },
      { name: '漯河', value: 'leihe' },
      { name: '三门峡', value: 'sanmenxia' },
      { name: '南阳', value: 'nanyang' },
      { name: '商丘', value: 'shangqiu' },
      { name: '周口', value: 'zhoukou' },
      { name: '驻马店', value: 'zhumadian' },
      { name: '信阳', value: 'xinyang' },
      { name: '济源', value: 'jiyuan' },
      { name: '巩义', value: 'gongyi' },
      { name: '邓州', value: 'dengzhou' },
      { name: '永城', value: 'yongcheng' },
      { name: '汝州', value: 'ruzhou' },
      { name: '荥阳', value: 'xingyang' },
      { name: '新郑', value: 'xinzheng' },
      { name: '登封', value: 'dengfeng' },
      { name: '新密', value: 'xinmi' },
      { name: '偃师', value: 'yanshi' },
      { name: '孟州', value: 'mengzhou' },
      { name: '沁阳', value: 'qinyang' },
      { name: '卫辉', value: 'weihui' },
      { name: '辉县', value: 'huixian' },
      { name: '林州', value: 'linzhou' },
      { name: '禹州', value: 'yuzhou' },
      { name: '长葛', value: 'changge' },
      { name: '舞钢', value: 'wugang' },
      { name: '义马', value: 'yima' },
      { name: '灵宝', value: 'lingbao' },
      { name: '项城', value: 'xiangcheng' }
    ]
  },
  {
    reg: {
      name: '湖北省',
      value: 'hubeisheng'
    },

    city: [
      { name: '武汉', value: 'wuhan' },
      { name: '十堰', value: 'shiyan' },
      { name: '襄樊', value: 'xiangfan' },
      { name: '荆门', value: 'jingmen' },
      { name: '孝感', value: 'xiaogan' },
      { name: '黄冈', value: 'huanggang' },
      { name: '鄂州', value: 'ezhou' },
      { name: '黄石', value: 'huangshi' },
      { name: '咸宁', value: 'xianning' },
      { name: '荆州', value: 'jingzhou' },
      { name: '宜昌', value: 'yichang' },
      { name: '随州', value: 'suizhou' },
      { name: '仙桃', value: 'xiantao' },
      { name: '天门', value: 'tianmen' },
      { name: '潜江', value: 'qianjiang' },
      { name: '丹江口', value: 'danjiangkou' },
      { name: '老河口', value: 'laohekou' },
      { name: '枣阳', value: 'zaoyang' },
      { name: '宜城', value: 'yicheng' },
      { name: '钟祥', value: 'zhongxiang' },
      { name: '汉川', value: 'hanchuan' },
      { name: '应城', value: 'yingcheng' },
      { name: '安陆', value: 'anlu' },
      { name: '广水', value: 'guangshui' },
      { name: '麻城', value: 'macheng' },
      { name: '武穴', value: 'wuxue' },
      { name: '大冶', value: 'daye' },
      { name: '赤壁', value: 'chibi' },
      { name: '石首', value: 'shishou' },
      { name: '洪湖', value: 'honghu' },
      { name: '松滋', value: 'songzi' },
      { name: '宜都', value: 'yidu' },
      { name: '枝江', value: 'zhijiang' },
      { name: '当阳', value: 'dangyang' },
      { name: '恩施', value: 'enshi' },
      { name: '利川', value: 'lichuan' }
    ]
  },
  {
    reg: {
      name: '湖南省',
      value: 'hunansheng'
    },

    city: [
      { name: '长沙', value: 'changsha' },
      { name: '衡阳', value: 'hengyang' },
      { name: '张家界', value: 'zhangjiajie' },
      { name: '常德', value: 'changde' },
      { name: '益阳', value: 'yiyang' },
      { name: '岳阳', value: 'yueyang' },
      { name: '株洲', value: 'zhuzhou' },
      { name: '湘潭', value: 'xiangtan' },
      { name: '郴州', value: 'chenzhou' },
      { name: '永州', value: 'yongzhou' },
      { name: '邵阳', value: 'shaoyang' },
      { name: '怀化', value: 'huaihua' },
      { name: '娄底', value: 'loudi' },
      { name: '耒阳', value: 'leiyang' },
      { name: '常宁', value: 'changning' },
      { name: '浏阳', value: 'liuyang' },
      { name: '津市', value: 'jinshi' },
      { name: '沅江', value: 'yuanjiang' },
      { name: '汨罗', value: 'miluo' },
      { name: '临湘', value: 'linxiang' },
      { name: '醴陵', value: 'liling' },
      { name: '湘乡', value: 'xiangxiang' },
      { name: '韶山', value: 'shaoshan' },
      { name: '资兴', value: 'zixing' },
      { name: '武冈', value: 'wugang' },
      { name: '洪江', value: 'hongjiang' },
      { name: '冷水江', value: 'lingshuijiang' },
      { name: '涟源', value: 'lianyuan' },
      { name: '吉首', value: 'jishou' }
    ]
  },
  {
    reg: {
      name: '吉林省',
      value: 'jilinsheng'
    },
    city: [
      { name: '长春', value: 'changchun' },
      { name: '吉林市', value: 'jilinshi' },
      { name: '白城', value: 'baicheng' },
      { name: '松原', value: 'songyuan' },
      { name: '四平', value: 'siping' },
      { name: '辽源', value: 'liaoyuan' },
      { name: '通化', value: 'tonghua' },
      { name: '白山', value: 'baishan' },
      { name: '德惠', value: 'dehui' },
      { name: '九台', value: 'jiutai' },
      { name: '榆树', value: 'yushu' },
      { name: '磐石', value: 'panshi' },
      { name: '蛟河', value: 'jiaohe' },
      { name: '桦甸', value: 'huadian' },
      { name: '舒兰', value: 'shulan' },
      { name: '洮南', value: 'daonan' },
      { name: '大安', value: 'daan' },
      { name: '双辽', value: 'shuangliao' },
      { name: '公主岭', value: 'gongzhuling' },
      { name: '梅河口', value: 'meihekou' },
      { name: '集安', value: 'jian' },
      { name: '临江', value: 'linjiang' },
      { name: '延吉', value: 'yanji' },
      { name: '图们', value: 'tumen' },
      { name: '敦化', value: 'dunhua' },
      { name: '珲春', value: 'huichun' },
      { name: '龙井', value: 'longjing' },
      { name: '和龙', value: 'helong' }
    ]
  },
  {
    reg: {
      name: '江西省',
      value: 'jiangxisheng'
    },
    city: [
      { name: '南昌', value: 'nanchang' },
      { name: '九江', value: 'jiujiang' },
      { name: '景德镇', value: 'jingdezhen' },
      { name: '鹰潭', value: 'yingtan' },
      { name: '新余', value: 'xinyu' },
      { name: '萍乡', value: 'pingxiang' },
      { name: '赣州', value: 'ganzhou' },
      { name: '上饶', value: 'shangrao' },
      { name: '抚州', value: 'fuzhou' },
      { name: '宜春', value: 'yichun' },
      { name: '吉安', value: 'jian' },
      { name: '瑞昌', value: 'ruichang' },
      { name: '乐平', value: 'leping' },
      { name: '瑞金', value: 'ruijin' },
      { name: '南康', value: 'nankang' },
      { name: '德兴', value: 'dexing' },
      { name: '丰城', value: 'fengcheng' },
      { name: '樟树', value: 'zhangshu' },
      { name: '高安', value: 'gaoan' },
      { name: '井冈山', value: 'jinggangshan' },
      { name: '贵溪', value: 'guixi' }
    ]
  },
  {
    reg: {
      name: '江苏省',
      value: 'jiangsusheng'
    },
    city: [
      { name: '南京', value: 'nanjing' },
      { name: '徐州', value: 'xuzhou' },
      { name: '连云港', value: 'lianyungang' },
      { name: '宿迁', value: 'suqian' },
      { name: '淮安', value: 'huaian' },
      { name: '盐城', value: 'yancheng' },
      { name: '扬州', value: 'yangzhou' },
      { name: '泰州', value: 'taizhou' },
      { name: '南通', value: 'nantong' },
      { name: '镇江', value: 'zhenjiang' },
      { name: '常州', value: 'changzhou' },
      { name: '无锡', value: 'wuxi' },
      { name: '苏州', value: 'suzhou' },
      { name: '江阴', value: 'jiangyin' },
      { name: '宜兴', value: 'yixing' },
      { name: '邳州', value: 'pizhou' },
      { name: '新沂', value: 'xinyi' },
      { name: '金坛', value: 'jintan' },
      { name: '溧阳', value: 'liyang' },
      { name: '常熟', value: 'changshu' },
      { name: '张家港', value: 'zhangjiagang' },
      { name: '太仓', value: 'taicang' },
      { name: '昆山', value: 'kunshan' },
      { name: '吴江', value: 'wujiang' },
      { name: '如皋', value: 'rugao' },
      { name: '海门', value: 'haimen' },
      { name: '启东', value: 'qidong' },
      { name: '大丰', value: 'dafeng' },
      { name: '东台', value: 'dongtai' },
      { name: '高邮', value: 'gaoyou' },
      { name: '仪征', value: 'yizheng' },
      { name: '扬中', value: 'yangzhong' },
      { name: '句容', value: 'jurong' },
      { name: '丹阳', value: 'danyang' },
      { name: '兴化', value: 'xinghua' },
      { name: '姜堰', value: 'jiangyan' },
      { name: '泰兴', value: 'taixing' },
      { name: '靖江', value: 'jingjiang' }
    ]
  },
  {
    reg: {
      name: '辽宁省',
      value: 'liaoninsheng'
    },
    city: [
      { name: '沈阳', value: 'shenyang' },
      { name: '大连', value: 'dalian' },
      { name: '朝阳', value: 'chaoyang' },
      { name: '阜新', value: 'fuxin' },
      { name: '铁岭', value: 'tieling' },
      { name: '抚顺', value: 'fushun' },
      { name: '本溪', value: 'benxi' },
      { name: '辽阳', value: 'liaoyang' },
      { name: '鞍山', value: 'anshan' },
      { name: '丹东', value: 'dandong' },
      { name: '营口', value: 'yingkou' },
      { name: '盘锦', value: 'panjin' },
      { name: '锦州', value: 'jinzhou' },
      { name: '葫芦岛', value: 'huludao' },
      { name: '新民', value: 'xinmin' },
      { name: '瓦房店', value: 'wafangdian' },
      { name: '普兰店', value: 'pulandian' },
      { name: '庄河', value: 'zhuanghe' },
      { name: '北票', value: 'beipiao' },
      { name: '凌源', value: 'lingyuan' },
      { name: '调兵山', value: 'diaobingshan' },
      { name: '开原', value: 'kaiyuan' },
      { name: '灯塔', value: 'dengta' },
      { name: '海城', value: 'haicheng' },
      { name: '凤城', value: 'fengcheng' },
      { name: '东港', value: 'donggang' },
      { name: '大石桥', value: 'dashiqiao' },
      { name: '盖州', value: 'gaizhou' },
      { name: '凌海', value: 'linghai' },
      { name: '北宁', value: 'beining' },
      { name: '兴城', value: 'xingcheng' }
    ]
  },
  {
    reg: {
      name: '山东省',
      value: 'shandongsheng'
    },
    city: [
      { name: '济南', value: 'jinan' },
      { name: '青岛', value: 'qingdao' },
      { name: '聊城', value: 'liaocheng' },
      { name: '德州', value: 'dezhou' },
      { name: '东营', value: 'dongying' },
      { name: '淄博', value: 'zibo' },
      { name: '潍坊', value: 'weifang' },
      { name: '烟台', value: 'yantai' },
      { name: '威海', value: 'weihai' },
      { name: '日照', value: 'rizhao' },
      { name: '临沂', value: 'linyi' },
      { name: '枣庄', value: 'zaozhuang' },
      { name: '济宁', value: 'jining' },
      { name: '泰安', value: 'taian' },
      { name: '莱芜', value: 'laiwu' },
      { name: '滨州', value: 'binzhou' },
      { name: '菏泽', value: 'heze' },
      { name: '章丘', value: 'zhangqiu' },
      { name: '胶州', value: 'jiaozhou' },
      { name: '胶南', value: 'jiaonan' },
      { name: '即墨', value: 'jimo' },
      { name: '平度', value: 'pingdu' },
      { name: '莱西', value: 'laixi' },
      { name: '临清', value: 'linqing' },
      { name: '乐陵', value: 'leling' },
      { name: '禹城', value: 'yucheng' },
      { name: '安丘', value: 'anqiu' },
      { name: '昌邑', value: 'changyi' },
      { name: '高密', value: 'gaomi' },
      { name: '青州', value: 'qingzhou' },
      { name: '诸城', value: 'zhucheng' },
      { name: '寿光', value: 'shouguang' },
      { name: '栖霞', value: 'qixia' },
      { name: '海阳', value: 'haiyang' },
      { name: '龙口', value: 'longkou' },
      { name: '莱阳', value: 'laiyang' },
      { name: '莱州', value: 'laizhou' },
      { name: '蓬莱', value: 'penglai' },
      { name: '招远', value: 'zhaoyuan' },
      { name: '文登', value: 'wendeng' },
      { name: '荣成', value: 'rongcheng' },
      { name: '乳山', value: 'rushan' },
      { name: '滕州', value: 'tengzhou' },
      { name: '曲阜', value: 'qufu' },
      { name: '兖州', value: 'yanzhou' },
      { name: '邹城', value: 'zoucheng' },
      { name: '新泰', value: 'xintai' },
      { name: '肥城', value: 'feicheng' }
    ]
  },
  {
    reg: {
      name: '陕西省',
      value: 'shanxi'
    },
    city: [
      { name: '西安', value: 'xian' },
      { name: '延安', value: 'yanan' },
      { name: '铜川', value: 'tongchuan' },
      { name: '渭南', value: 'weinan' },
      { name: '咸阳', value: 'xianyang' },
      { name: '宝鸡', value: 'baoji' },
      { name: '汉中', value: 'hanzhong' },
      { name: '榆林', value: 'yulin' },
      { name: '商洛', value: 'shangluo' },
      { name: '安康', value: 'ankang' },
      { name: '韩城', value: 'hancheng' },
      { name: '华阴', value: 'huayin' },
      { name: '兴平', value: 'xingping' }
    ]
  },
  {
    reg: {
      name: '山西省',
      value: 'shanxisheng'
    },
    city: [
      { name: '太原', value: 'taiyuan' },
      { name: '大同', value: 'datong' },
      { name: '朔州', value: 'shuozhou' },
      { name: '阳泉', value: 'yangquan' },
      { name: '长治', value: 'changzhi' },
      { name: '晋城', value: 'jincheng' },
      { name: '忻州', value: 'xinzhou' },
      { name: '吕梁', value: 'lvliang' },
      { name: '晋中', value: 'jinzhong' },
      { name: '临汾', value: 'linfen' },
      { name: '运城', value: 'yuncheng' },
      { name: '古交', value: 'gujiao' },
      { name: '潞城', value: 'lucheng' },
      { name: '高平', value: 'gaoping' },
      { name: '原平', value: 'yuanping' },
      { name: '孝义', value: 'xiaoyi' },
      { name: '汾阳', value: 'fenyang' },
      { name: '介休', value: 'jiexiu' },
      { name: '侯马', value: 'houma' },
      { name: '霍州', value: 'huozhou' },
      { name: '永济', value: 'yongji' },
      { name: '河津', value: 'hejin' }
    ]
  },
  {
    reg: {
      name: '四川省',
      value: 'sichuansheng'
    },
    city: [
      { name: '成都', value: 'chengdu' },
      { name: '广元', value: 'guangyuan' },
      { name: '绵阳', value: 'mianyang' },
      { name: '德阳', value: 'deyang' },
      { name: '南充', value: 'nanchong' },
      { name: '广安', value: 'guangan' },
      { name: '遂宁', value: 'suining' },
      { name: '内江', value: 'najiang' },
      { name: '乐山', value: 'leshan' },
      { name: '自贡', value: 'zigong' },
      { name: '泸州', value: 'luzhou' },
      { name: '宜宾', value: 'yibin' },
      { name: '攀枝花', value: 'panzhihua' },
      { name: '巴中', value: 'bazhong' },
      { name: '达州', value: 'dazhou' },
      { name: '资阳', value: 'ziyang' },
      { name: '眉山', value: 'meishan' },
      { name: '雅安', value: 'yaan' },
      { name: '崇州', value: 'chongzhou' },
      { name: '邛崃', value: 'qionglai' },
      { name: '都江堰', value: 'dujiangyan' },
      { name: '彭州', value: 'pengzhou' },
      { name: '江油', value: 'jiangyou' },
      { name: '什邡', value: 'shifang' },
      { name: '广汉', value: 'guanghan' },
      { name: '绵竹', value: 'mianzhu' },
      { name: '阆中', value: 'langzhong' },
      { name: '华蓥', value: 'huaning' },
      { name: '峨眉山', value: 'emeishan' },
      { name: '万源', value: 'wanyuan' },
      { name: '简阳', value: 'jianyang' },
      { name: '西昌', value: 'xichang' }
    ]
  },
  {
    reg: {
      name: '云南省',
      value: 'yunnansheng'
    },
    city: [
      { name: '昆明', value: 'kunming' },
      { name: '曲靖', value: 'qujing' },
      { name: '玉溪', value: 'yuxi' },
      { name: '丽江', value: 'lijiang' },
      { name: '昭通', value: 'zhaotong' },
      { name: '思茅', value: 'simao' },
      { name: '临沧', value: 'lincang' },
      { name: '保山', value: 'baoshan' },
      { name: '安宁', value: 'anning' },
      { name: '宣威', value: 'xuanwei' },
      { name: '芒市', value: 'mangshi' },
      { name: '瑞丽', value: 'ruili' },
      { name: '大理', value: 'dali' },
      { name: '楚雄', value: 'chuxiong' },
      { name: '个旧', value: 'gejiu' },
      { name: '开远', value: 'kaiyuan' },
      { name: '景洪', value: 'jinghong' }
    ]
  },
  {
    reg: {
      name: '浙江省',
      value: 'zhejiangsheng'
    },
    city: [
      { name: '杭州', value: 'hangzhou' },
      { name: '宁波', value: 'ningbo' },
      { name: '湖州', value: 'huzhou' },
      { name: '嘉兴', value: 'jiaxing' },
      { name: '舟山', value: 'zhoushan' },
      { name: '绍兴', value: 'shaoxing' },
      { name: '衢州', value: 'quzhou' },
      { name: '金华', value: 'jinhua' },
      { name: '台州', value: 'taizhou' },
      { name: '温州', value: 'wenzhou' },
      { name: '丽水', value: 'lishui' },
      { name: '临安', value: 'linan' },
      { name: '富阳', value: 'fuyang' },
      { name: '建德', value: 'jiande' },
      { name: '慈溪', value: 'cixi' },
      { name: '余姚', value: 'yuyao' },
      { name: '奉化', value: 'fenghua' },
      { name: '平湖', value: 'pinghu' },
      { name: '海宁', value: 'haining' },
      { name: '桐乡', value: 'tongxiang' },
      { name: '诸暨', value: 'zhuji' },
      { name: '上虞', value: 'shangyu' },
      { name: '嵊州', value: 'chengzhou' },
      { name: '江山', value: 'jiangshan' },
      { name: '兰溪', value: 'lanxi' },
      { name: '永康', value: 'yongkang' },
      { name: '义乌', value: 'yiwu' },
      { name: '东阳', value: 'dongyang' },
      { name: '临海', value: 'linhai' },
      { name: '温岭', value: 'wenling' },
      { name: '瑞安', value: 'ruian' },
      { name: '乐清', value: 'leqing' },
      { name: '龙泉', value: 'longquan' }
    ]
  },
  {
    reg: {
      name: '青海省',
      value: 'qinghaisheng'
    },
    city: [
      { name: '西宁', value: 'xining' },
      { name: '格尔木', value: 'geermu' },
      { name: '德令哈', value: 'delingha' }
    ]
  },
  {
    reg: {
      name: '海南省',
      value: 'hainansheng'
    },
    city: [
      { name: '海口市', value: 'haikoushi' },
      { name: '三亚市', value: 'sanyashi' },
      { name: '文昌市', value: 'wenchangshi' },
      { name: '琼海市', value: 'qionghaishi' },
      { name: '万宁市', value: 'wanningshi' },
      { name: '东方市', value: 'dongfangshi' },
      { name: '儋州市', value: 'danzhoushi' },
      { name: '五指山市', value: 'wuzhishanshi' }
    ]
  },
  {
    reg: {
      name: '广西壮族自治区',
      value: 'guangxizhuangzu'
    },
    city: [
      { name: '南宁', value: 'nanning' },
      { name: '桂林', value: 'guilin' },
      { name: '柳州', value: 'liuzhou' },
      { name: '梧州', value: 'wuzhou' },
      { name: '贵港', value: 'guigang' },
      { name: '玉林', value: 'yulin' },
      { name: '钦州', value: 'qinzhou' },
      { name: '北海', value: 'beihai' },
      { name: '防城港', value: 'fangchenggang' },
      { name: '崇左', value: 'chongzuo' },
      { name: '百色', value: 'baise' },
      { name: '河池', value: 'hechi' },
      { name: '来宾', value: 'laibin' },
      { name: '贺州', value: 'hezhou' },
      { name: '岑溪', value: 'cenxi' },
      { name: '桂平', value: 'guiping' },
      { name: '北流', value: 'beiliu' },
      { name: '东兴', value: 'dongxing' },
      { name: '凭祥', value: 'pingxiang' },
      { name: '宜州', value: 'yizhou' },
      { name: '合山', value: 'heshan' }
    ]
  },
  {
    reg: {
      name: '内蒙古',
      value: 'neimenggu'
    },
    city: [
      { name: '呼和浩特', value: 'huhehaote' },
      { name: '包头', value: 'baotou' },
      { name: '乌海', value: 'wuhai' },
      { name: '赤峰', value: 'chifeng' },
      { name: '呼伦贝尔', value: 'hulunbeier' },
      { name: '通辽', value: 'tongliao' },
      { name: '乌兰察布', value: 'wulanchabu' },
      { name: '鄂尔多斯', value: 'eerduosi' },
      { name: '巴彦淖尔', value: 'bayanneer' },
      { name: '满洲里', value: 'manzhouli' },
      { name: '扎兰屯', value: 'zhalantun' },
      { name: '牙克石', value: 'yakeshi' },
      { name: '根河', value: 'genhe' },
      { name: '额尔古纳', value: 'eerguna' },
      { name: '乌兰浩特', value: 'wulanhaote' },
      { name: '阿尔山', value: 'aershan' },
      { name: '霍林郭勒', value: 'huolinguole' },
      { name: '锡林浩特', value: 'xilinhaote' },
      { name: '二连浩特', value: 'erlianhaote' },
      { name: '丰镇', value: 'fengzhen' }
    ]
  },
  {
    reg: {
      name: '宁夏回族自治区',
      value: 'ningxiahuizu'
    },
    city: [
      { name: '银川', value: 'yinchuan' },
      { name: '石嘴山', value: 'shizuishan' },
      { name: '吴忠', value: 'wuzhong' },
      { name: '中卫', value: 'zhongwei' },
      { name: '固原', value: 'guyuan' },
      { name: '灵武', value: 'lingwu' },
      { name: '青铜峡', value: 'qingtongxia' }
    ]
  },
  {
    reg: {
      name: '西藏自治区',
      value: 'xizang'
    },
    city: [
      { name: '拉萨', value: 'lasa' },
      { name: '日喀则', value: 'rikaze' }
    ]
  },
  {
    reg: {
      name: '新疆维吾尔族自治区',
      value: 'xingjiangweier'
    },
    city: [
      { name: '乌鲁木齐', value: 'wulumuqi' },
      { name: '克拉玛依', value: 'kelamayi' },
      { name: '石河子', value: 'shihezi' },
      { name: '阿拉尔', value: 'alaer' },
      { name: '图木舒克', value: 'tumushuke' },
      { name: '五家渠', value: 'wujiaqu' },
      { name: '北屯', value: 'beitun' },
      { name: '喀什', value: 'kashi' },
      { name: '阿克苏', value: 'akesu' },
      { name: '和田', value: 'hetian' },
      { name: '吐鲁番', value: 'tulufan' },
      { name: '哈密', value: 'hami' },
      { name: '阿图什', value: 'atushi' },
      { name: '博乐', value: 'bole' },
      { name: '昌吉', value: 'changji' },
      { name: '阜康', value: 'fukang' },
      { name: '米泉', value: 'miquan' },
      { name: '库尔勒', value: 'kuerle' },
      { name: '伊宁', value: 'yining' },
      { name: '奎屯', value: 'kuitun' },
      { name: '塔城', value: 'tacheng' },
      { name: '乌苏', value: 'wusu' },
      { name: '阿勒泰', value: 'aletai' }
    ]
  }
]

changeCity(data)

function changeCity(val) {
  //7.获取第二个下拉列表
  var c = document.getElementById('city')

  for (var i = 0; i < val.length; i++) {
    var temp = $(
      '<option value=' +
        data[i].reg.value +
        '>' +
        data[i].reg.name +
        '</option>'
    )
    $('#region').append(temp)
  }

  for (var j = 0; j < val[0].city.length; j++) {
    var temp = $(
      '<option value=' +
        data[0].city[j].value +
        '>' +
        data[0].city[j].name +
        '</option>'
    )
    $('#city').append(temp)
  }
}

$('#region').on('change', function(e) {
  console.log('change')
  // 判断当前修改到了第几个省份数据
  console.log(e)
  var value = $('#region')[0].value
  var valueIndex = 0
  for (var i = 0; i < data.length; i++) {
    if (value === data[i].reg.value) {
      valueIndex = i
      break
    }
  }

  // 清除城市数据
  $('#city').empty()

  // 增加新数据
  for (var j = 0; j < data[valueIndex].city.length; j++) {
    var temp = $(
      '<option value="' +
        data[valueIndex].city[j].value +
        '">' +
        data[valueIndex].city[j].name +
        '</option>'
    )
    $('#city').append(temp)
  }
})

/* 2019-12-13 Edit S */
function songListPlay() {
  $('.songlist_create a').attr('href', _this.data('url'))
  $('.songlist_box .item_icon').addClass('paused')
  _this.children('.item_icon').removeClass('paused')
  $('.songlist_box .item').removeClass('active')
  _this.addClass('active')
  // 播放歌曲
  player.play(_this.data('songid'))
}
// 点击按钮 - 动态歌单 - 单首歌
$('.songlist_box .item').on('click', function() {
  _this = $(this)
  if (playerExist == false) {
    // 初始化播放组件
    player = new QMplayer()
    playerExist = true
    songListPlay()
  } else {
    songListPlay()
  }
})
/* 2019-12-13 Edit E */

// 点击按钮 - 活动规则  - 出现活动规则弹窗
$('.btn_rule').on('click', function() {
  showModal('popRule')
})
/**
 * 获取绝对路径
 * @param {string} relativePath
 */
function getAbsoluteURL(relativePath) {
  var loc = window.location
  var arr = loc.pathname.split('/')
  arr.pop()
  return loc.protocol + '//' + loc.hostname + arr.join('/') + relativePath
}
/* 2019-12-14 Edit - 修改分享 S */
/**
 * @method setshare
 * @desc h5页面分享，客户端button
 */
function initShare() {
  var share_data = {
    title: '与蔚来一起仰望最美天空',
    wxtitle: '与蔚来一起仰望最美天空',
    link: location.href,
    desc: '蔚来最新轿跑SUV，12.28全球首秀',
    img: getAbsoluteURL('/img/share.jpg'),
  }
  M.share.init(share_data);
  if ($.browser.weixin) {
      // 对朋友圈做特殊处理
      M.weixinReady(function () {
          // 朋友圈
          WeixinJSBridge.on('menu:share:timeline', function (e) {
              WeixinJSBridge.invoke('shareTimeline', {
                  title: share_data.wxtitle,
                  link: share_data.link,
                  desc: share_data.desc,
                  img_width: '173',
                  img_height: '173',
                  img_url: share_data.img
              }, function (r) { })
          })
      })
  }
  if ($.browser.music) {
      M.client.open("ui", "setActionBtn", {
          type: 'icon',
          content: 'share'
      }, function (r) {
          if (r && r.code == 0) {
              M.client.open("other", "callShareWeb", {
                  imgUrl: share_data.img,
                  link: share_data.link,
                  title: share_data.title,
                  desc: share_data.desc,
                  wxTimelineTitle: share_data.wxtitle
              }, function(ret) {
                  var result = ret.code == 0 ? 'success' : 'fail';
              })
          }
      })
  }
}

// initShare()
/* 2019-12-14 Edit - 修改分享 E */

// 点击 - 视频留资页面 - 视频播放按钮
$('.survey_title_stop').on('click', function() {
  $('.survey_title_video')[0].play()
  $('.survey_title_mark').hide()
})
$('.survey_title_video').on('click', function() {
  $('.survey_title_video')[0].pause()
  $('.survey_title_mark').show()
})
// 视频播放结束
$('.survey_title_video').on('ended', function() {
  $('.survey_title_mark').show()
})
/* 2019-12-15 Edit - 视频添加跳过功能 S */
$('#mvVideoSkip').on('click',function(){
  tarEvent({
    type:'button',
    action: 'click',
    label: '视频跳过'
  })
  mvVideo.pause()
  showSection($('.make_wrap'))
})

/* 2019-12-15 Edit - 视频添加跳过功能 E */

$('.songlist_create').click(function(){
  tarEvent({
    type:'button',
    action: 'click',
    label: '跳转生成动态歌词海报'
  })
})
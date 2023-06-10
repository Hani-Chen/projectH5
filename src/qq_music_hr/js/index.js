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
$(document).ready(function() {
  // 需要加载的静态资源的数组
  var imgs = [
    'accompany_bg.png',
    'accompany_bottle.png',
    'accompany_bottle_active.png',
    'icon_play.png',
    'icon_previous.png',
    'index_border.png',
    'index_product.png',
    'index_tinfoil.png',
    'loadding_inner.png',
    'loading.png',
    'logo.png',
    'logo_black.png',
    'songlist_ornaments1.png',
    'songlist_ornaments2.png',
    'songlist_ornaments3.png',
    'songlist_pillar.png',
    'songlist_plate.png',
    'songlist_plate1.png',
    'songlist_streamer.png',
    'spokesman.png'
  ]
  preloadImage(
    imgs,
    function() {
      setTimeout(function() {
        $('.section_loading').removeClass('show')
        $('.index_wrap').addClass('show')
      }, 1000)
    },
    './img/',
    function(n, total) {
      var progress = (100 * n) / total
      $('.loading_percent').text(Math.floor(progress) + '%')
      $('.loading_progress_inner').css('width', progress + '%')
    }
  )
})

// 点击背景音乐icon
$('.icon_play').on('click', function() {
  $(this).toggleClass('paused')
})

// 点击瓶子
$('.index_product').click(function() {
  $('.index_wrap').removeClass('show')
  $('.songlist_wrap').addClass('show')

  // 页面滚动值
  var pageOffset = 0
  // 停顿时间
  var pauseTime = 2000
  // 内容高度
  var contentHeight = document.body.scrollHeight
  // 屏幕高度
  var bodyHeight = $('body').height()
  // 当前元素局顶部距离
  var deomTop = $('.often_wrap').offset().top
  // 当前元素局顶部距离
  var deom2Top = $('.songlist_topten').offset().top
  // 当准备滚屏的时候禁止滚动
  $('body').css('overflow', 'hidden')
  // 默认距底
  window.scrollTo(0, contentHeight)
  // 滚屏动画暂停判断 0 为默认先距底停留 
  var execute = 0

  // 滚屏动画
  function scrolllockoff() {
    var roll1 = null
    roll1 = setInterval(function() {
      console.log(execute)
      // 默认开始滑动
      if (execute == 0) {
        console.log(0)
        pageOffset += 20
        window.scrollTo(0, contentHeight - pageOffset - bodyHeight)
        if (contentHeight - bodyHeight - pageOffset <= deomTop) {
          execute = 1
        }
      }
      // 到达第二屏时
      if (execute == 1) {
        // 小圆圈动画
        $('.often_title .roundness').removeClass('stop')
        // 小圆圈动画
        $('.accompany_title .roundness').removeClass('stop')
        // 碟盘发光
        $('.often_plate1').removeClass('stop')
        setTimeout(function() {
          execute = 2
        }, pauseTime)
      }
      // 开始前往第三屏
      if (execute == 2) {
        pageOffset += 20
        window.scrollTo(0, contentHeight - pageOffset - bodyHeight)
        if (contentHeight - bodyHeight - pageOffset <= deom2Top) {
          // clearInterval(roll1)
          $('.songlist_first_title i').css({ 'font-size': '.96rem' })
          execute = 3
        }
      }
      // 到达第三屏时
      if (execute == 3) {
        setTimeout(function() {
          execute = 4
        }, pauseTime)
      }
      // 开始前往顶部
      if (execute == 4) {
        pageOffset += 20
        window.scrollTo(0, contentHeight - pageOffset - bodyHeight)
        // 小圆圈动画
        $('.songlist_title_2 .roundness').removeClass('stop')
        // 到达顶部后
        if (contentHeight - bodyHeight - pageOffset <= 0) {
          // 停止计时器
          clearInterval(roll1)
          $('.songlist_streamer').addClass('active')
          setTimeout(function() {
            $('.songlist_wrap').remove('show')
            $('.delegate_wrap').addClass('show')
            // $('.delegate_content').addClass('show')
            // $('.accompany_wrap .bottom_logo').addClass('active')
          }, 1000)
          setTimeout(function() {
            $('.delegate_content').addClass('show')
            $('.delegate_wrap .bottom_logo').addClass('show')
            // 显示代言人展示页函数
            delegate()
          }, 1500)
        }
      }
    }, 60)
  }
  setTimeout(function() {
    // 执行滚屏动画
    scrolllockoff()
  }, pauseTime)
})

// 生成随机数
function KeywordIndex() {
  return Math.floor(Math.random() * 5)
}

// 显示代言人展示页面
function delegate(){
  if($('.delegate_wrap .bottom_logo').hasClass('show')){
    setTimeout(function() {
      $('.delegate_wrap').removeClass('show')
      // $('.delegate_streamer').addClass('active')
      $('.spokesman_wrap').addClass('show')
    }, 2500)
  }
}


var keywordList = [
  { title: '至美力量', interpret: 'POWER\n\nBEAUTY',text: '笃信至美,自有力量' },
  { title: '闪耀绽放', interpret: 'GLOW',text: '自带光芒，就能无畏时光' },
  { title: '热忱不息', interpret: 'PASSION',text: '以赤诚之心，全情投入' },
  { title: '敢于逐梦', interpret: 'AMBITION',text: '渴望的、期待的,不完美也要精彩' },
  { title: '成就自我', interpret: 'SUCCESS',text: '尽情探索，尽情成就' }
]

// 点击代言人展示页面
$('.wrap').on('click','.spokesman_wrap',function(){
  $('.spokesman_wrap').removeClass('show')
  $('.promptly_wrap').addClass('show')
  $('.promptly_text').addClass('show')
  // 随机金愿
  keyword(KeywordIndex())
})


// 点击代言人展示页面
$('.wrap').on('click','.promptly_wrap ',function(){
  $(this).removeClass('show')
  $('.wall_wrap').addClass('show')
  
})

// 金愿
function keyword(i){
  $('.wall_wrap .antistop').text(keywordList[i].title)
  $('.wall_wrap .text2 span').text(keywordList[i].text)
  $('.wall_wrap .interpret').text(keywordList[i].interpret)
}


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

// 当弹出层显示时禁止滚动
document.body.addEventListener('touchmove', function (e) {
  if($('.modal').hasClass('show')){
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  }
}, {passive: false});


// 点击金愿锦鲤大奖
$('.btn_extraction').on('click', function() {
  // 中奖弹窗
  // showModal('modalWinning')
  // 未中奖弹窗
  showModal('modalLosing')
})

// 点击弹窗蒙层 - 关闭弹窗
$('.modal-close').on('click', function() {
  $('.modal').removeClass('show')
})


var state
// 勾选用户须知
$('.wrap').on('change', '#modalLosing .select', function () {
  $(this).checked ? state = true : state = false
});
// 勾选用户须知
$('.wrap').on('change', '#modalWinning .select', function () {
  $(this).checked ? state = true : state = false
});


// 点击返回按钮 - 关闭弹窗
$('.btn_return').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css({ overflow: '' })
})



// 点击提交
$('.btn_submit').on('click', function() {
  showModal('modalOk')
})


// 点击好的
$('.btn_ok').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css({ overflow: '' })
})


// 点击活动规则
$('.rule').on('click', function() {
  showModal('modalRule')
})
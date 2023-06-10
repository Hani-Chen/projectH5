// 滑屏组件初始化
var myslider = new iSlider({
  wrap: '.wrap',
  item: '.item',
  lastLocate: false,
  preventMove: false,
  onslide: function (index) {
    // 默认内容页全部隐藏
    $('.item').find('.box').removeClass('show')
    // 显示当前页面内容
    $('.play').find('.box').addClass('show')
    // 归零首页天数
    $('.data_item').css({ transform: 'translate3d(0, 0,0)' })
    // 解锁滚动限制
    myslider.lockNext = false,
      myslider.lockPrev = false
    if (index == 0) {
      // 回退到页面时判断
      $("#select").get(0).checked ? state = true : state = false
      // 用户未勾选时禁止滑动
      myslider.lockPrev = true
      myslider.lockNext = true
    } else if (index == 1) {
      // 执行天数滚动
      indexNumber()
    } else if (index == 5) {
      // 到达歌单页面 需要用户点击 跳转下一页
      // myslider.lockNext = true
    } else if (index == 6) {
      create()
      // 到达生成页 禁止用户切换页面
      myslider.lockPrev = true
      myslider.lockNext = true
    }
  }
})

/**
 * cover 对应表
 * 1 =》 cover_item_1 => 独行
 * 2 =》 cover_item_2 => 品味生活
 * 3 =》 cover_item_3 => 眼界
 * 4 =》 cover_item_4 => 共苦日
 */
var keywordList = [
  { name: '喜欢', cover: 2 },
  { name: '青春', cover: 4 },
  { name: '生命', cover: 1 },
  { name: '回忆', cover: 1 },
  { name: '人生', cover: 2 },
  { name: '眼泪', cover: 4 },
  { name: '梦想', cover: 1 },
  { name: '幸福', cover: 1 },
  { name: '生活', cover: 2 },
  { name: '温柔', cover: 4 },
  { name: '思念', cover: 1 },
  { name: '相信', cover: 3 },
  { name: '美丽', cover: 2 },
  { name: '曾经', cover: 4 },
  { name: '寂寞', cover: 1 },
  { name: '未来', cover: 3 },
  { name: '姑娘', cover: 4 },
  { name: '朋友', cover: 1 },
  { name: '时间', cover: 3 },
  { name: '希望', cover: 3 },
  { name: '永远', cover: 3 },
  { name: '快乐', cover: 2 },
  { name: '我们', cover: 1 },
  { name: '世界', cover: 3 },
  { name: '爱情', cover: 4 }
]

// 获取屏幕宽高
var windowWidth = $(window).width()
var windowHeight = $(window).height()
// 生成随机数
function getRandomKeywordIndex() {
  return Math.floor(Math.random() * 25)
}
var resultConfig = {
  keyword: 0,
  cover: 1,
  textInput: ''
}

// 显示生成页
function create() {
  // 显示加载页 内容
  $('.section_loading .box').addClass('show')
  // 显示加载页 内容
  $('.section_loading').addClass('show')
  // 显示下一页
  // myslider.next()

  // 定时出现动画
  setTimeout(function () {
    // 加载页餐车从左到右移动
    $('.animation_bg img').addClass('accomplish')
  }, 500)

  // 获取 0 - 24 随机数
  resultConfig.keyword = getRandomKeywordIndex()
  // 获取专辑对应下标
  resultConfig.cover = keywordList[resultConfig.keyword].cover

  // 改变为随机关键词
  $('.antistop_item').addClass('antistop_item_' + (resultConfig.keyword + 1))
  // 改变为随机关键词对应专辑
  $('.cover_item').addClass('cover_item_' + resultConfig.cover)

  // 2S 定时跳转
  setTimeout(function () {
    // 隐藏加载页
    $('.section_loading').removeClass('show')
    // 显示生成关键词页面
    $('.create_before').addClass('show')
  }, 2000)

}
$('.wrap')
  // 点击提交
  .on('click', '.create_bottom_btn', function () {

    $('.create_bottom_input').blur();
    // 获取用户输入文案
    var textareaVal = $('.create_bottom_input').val();
    // 赋值
    if (textareaVal.trim()) {
      resultConfig.textInput = textareaVal
    } else {
      alert('文本不能为空')
      return
    }

    // 隐藏生成页面 显示生成的图片
    $('.create_before').removeClass('show')
    $('.logo').hide()
    $('.icon_play').hide()

    // 生成图片
    drawResult()
  })
  // 当生成页输入框失去焦点时
  .on('blur', '.create_bottom_input', function () {
    $(window).resize()
    window.scrollTo(0, 0)
  })
  // 当生成页输入框获取焦点时
  .on('focus', '.create_bottom_input', function () {
    $('.item-create>.box').height(windowHeight)
  })
  // 当生成页输入框改变状态时
  .on('change', '.create_bottom_input', function () {
    $(window).resize()
    window.scrollTo(0, 0)
  })

// 预加载生成图片所需img
function loadImage(src, cb) {
  var img = new Image()
  img.onload = function () {
    cb(img)
  }
  img.src = src
}

// 头像地址变量
var avatarSrc = 'img/test.jpg'
// 用户昵称变量
var nickname = 'Q&Q'

/**
 *  预加载图片资源
 * @param {Array} names 图片名数组
 * @param {Function} cb 加载回调
 * @param {String} prefix 图片路径配置
 */
function preloadImage(names, cb, prefix) {
  var n = 0,
    img,
    imgs = {}
  names.forEach(function (name) {
    img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = (function (name, img) {
      return function () {
        imgs[name] = img
        ++n === names.length && cb && cb(imgs)
      }
    })(name, img)
    img.src = (prefix || '') + name
  })
}

function drawResult() {
  setAvatar(function (avatar) {
    preloadImage([
      'logo.png',
      'antistop.png',
      'cover1.png',
      'cover2.png',
      'cover3.png',
      'cover4.png',
      'bg_end_bottom.png',
      'QRtest.png',
    ], function (imgs) {
      drawCanvas(imgs, avatar, nickname)
    }, 'img/')
  })
}

/**
 * 设置头像变量
 * @param {function} cb 回调函数
 */
function setAvatar(cb) {
  var avatarImage = new Image()
  avatarImage.crossOrigin = "anonymous"
  avatarImage.onload = function () {
    cb(avatarImage)
  }

  avatarImage.src = avatarSrc
}
function circleImg(ctx, img, x, y, r) {
  ctx.save();
  var d = 2 * r;
  var cx = x + r;
  var cy = y + r;

  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(img, x, y, d, d);
  ctx.restore();
}

function drawCanvas(imgs, avatar, nickname) {
  // 获取屏幕宽高尺寸
  var width = windowWidth
  var height = windowHeight
  // 获取画布与屏幕宽度的比例，用于设置画布高度
  var scale = 750 / width
  // 画布高度，最小不能低于1334，即设计稿高度
  var sHeight = Math.max(height * scale, 1334)

  // 离屏的canvas，用于绘制结果页面内容，离屏绘制性能较佳
  var cacheCanvas = document.createElement('canvas')
  var cacheCtx = cacheCanvas.getContext('2d')

  // 设置canvas宽高尺寸
  cacheCanvas.width = 750
  cacheCanvas.height = sHeight

  // 绘制背景色
  cacheCtx.fillStyle = '#ffffff'
  cacheCtx.fillRect(0, 0, 750, sHeight)

  // 绘制logo
  cacheCtx.drawImage(imgs['logo.png'], 230, 30)

  // 绘制用户头像
  circleImg(cacheCtx, avatar, 323, Math.floor(sHeight / 2 - 528), 52)

  // 绘制用户昵称及初心关键词文本
  cacheCtx.save()
  cacheCtx.textAlign = 'center'
  cacheCtx.textBaseline = 'middle'
  cacheCtx.fillStyle = '#000000'
  cacheCtx.font = '36px Arial'
  cacheCtx.fillText(nickname, 375, Math.floor(sHeight / 2 - 405))
  cacheCtx.fillStyle = '#431d0d'
  cacheCtx.font = '40px font_hlw'
  cacheCtx.fillText('的初心关键词是', 375, Math.floor(sHeight / 2 - 362))
  cacheCtx.restore()

  // 根据结果页得到的关键词索引来绘制关键词雪碧图
  var sx = (resultConfig.keyword % 4) * 440
  var sy = Math.floor(resultConfig.keyword / 4) * 210
  cacheCtx.drawImage(imgs['antistop.png'], sx, sy, 440, 210, 150, Math.floor(sHeight / 2 - 370), 440, 210)

  // 根据得到的封面图索引来绘制封面图
  cacheCtx.drawImage(imgs['cover' + resultConfig.cover + '.png'], 106, Math.floor(sHeight / 2 - 212), 531, 648)

  // 绘制底部车子及音符素材
  cacheCtx.drawImage(imgs['bg_end_bottom.png'], 0, Math.floor(sHeight - 220))

  // 根据用户输入的文本来绘制海报底部文案
  cacheCtx.save()
  cacheCtx.textAlign = 'center'
  cacheCtx.textBaseline = 'top'

  cacheCtx.fillStyle = '#431d0d'
  // cacheCtx.font = 'italic bold 21px Airal'
  cacheCtx.font = 'italic bold 35px Airal'

  // var textStartY = sHeight - 168
  var textStartY = sHeight - 185
  var textStep = 40
  resultConfig.textInput.split(/[(\r\n)\r\n]+/).forEach(function (v, i) {
    cacheCtx.fillText(v, 494, textStartY + i * textStep)
  })

  

  // 生成图片 渲染到页面
  $('#saveImg').attr('src', cacheCanvas.toDataURL());
  $('.create_save').addClass('show')

  // 绘制二维码
  cacheCtx.drawImage(imgs['QRtest.png'], 630, Math.floor(sHeight - 100), 80, 80);

  
  // // 绘制二维码
  // cacheCtx.drawImage(imgs['QRtest.png'], 410, Math.floor(sHeight - 100), 80, 80);

  cacheCtx.restore()

  
  cacheCtx.save()
  cacheCtx.textAlign = 'left'
  cacheCtx.textBaseline = 'bottom'
  cacheCtx.fillStyle = '#703824'
  cacheCtx.font = '15px font_hlw'
  cacheCtx.fillText('扫一扫', 500, Math.floor(sHeight - 60))
  cacheCtx.fillText('打开你的初心专辑', 500, Math.floor(sHeight - 35))
  cacheCtx.restore()

  // cacheCtx.save()
  // cacheCtx.textAlign = 'left'
  // cacheCtx.textBaseline = 'bottom'
  // cacheCtx.fillStyle = '#703824'
  // cacheCtx.font = '15px font_hlw'
  // cacheCtx.fillText('扫一扫', 270 , Math.floor(sHeight - 60))
  // cacheCtx.fillText('打开你的初心专辑', 270, Math.floor(sHeight - 35))
  // cacheCtx.restore()
  
  // 生成图片 渲染到页面
  $('#saveImage').attr('src', cacheCanvas.toDataURL());
}

// 获取时间函数
function getFormatDate() {
  var acquireMydate, acquireMonth, acquireData, acquireHours, acquireGetMinutes
  // 获取当前时间
  acquireMydate = new Date()
  // 获取当前月份
  acquireMonth = acquireMydate.getMonth() + 1 < 10 ? "0" + (acquireMydate.getMonth() + 1) : acquireMydate.getMonth() + 1;
  // 获取当前日
  acquireData = acquireMydate.getDate() < 10 ? "0" + acquireMydate.getDate() : acquireMydate.getDate();
  // 获取当前小时数
  acquireHours = acquireMydate.getHours() < 10 ? "0" + acquireMydate.getHours() : acquireMydate.getHours();
  // 获取当前分钟数
  acquireGetMinutes = acquireMydate.getMinutes() < 10 ? "0" + acquireMydate.getMinutes() : acquireMydate.getMinutes();
  // 获取秒
  // var s = acquireMydate.getSeconds() < 10 ? "0" + acquireMydate.getSeconds() : acquireMydate.getSeconds();
  return acquireMonth + '月' + acquireData + '日 ' + acquireHours + '时' + acquireGetMinutes + '分'
}

// 计时器 一秒运行一次
setInterval(function () {
  // 获取时间
  var acquireGetTime = getFormatDate()
  $('.accompany_time').text(acquireGetTime)
}, 1000)

// 使用QQ音乐天数
var number = 268


// 生成随机数
function spanIndex() {
  return Math.floor(Math.random() * 10)
}

var arr = []
for (var i = 0; i < 40; i++) {
  arr.push(spanIndex())
  var index = spanIndex();
  $('.data_item span').text(arr[i])
}
arr.forEach(function (item, index, arr) {
  $('.data_item span').eq(index).text(item)
  if (index % 10 == 0) {
    $('.data_item span').eq(index).text(0)

  }
})

function indexNumber() {
  // 防止有小数点 四舍五入
  number = Math.round(number)
  // 如果大于999 则 显示999
  var individual = number % 10
  var ten = parseInt(number / 10)
  ten >= 10 ? ten = ten % 10 : ''
  var hundred = parseInt(number / 100)
  hundred >= 10 ? hundred = hundred % 10 : ''

  if (number > 999) {
    var thousand = parseInt(number / 1000)
    $('.data_item_wrap0').addClass('show')
  }
  function numberMove($dome, time, value) {
    setTimeout(function () {
      $($dome).css({ transform: 'translate3d(0, -' + 9 * 10 + '%, 0)' })
      $($dome + ' span').eq(9).text(value)
    }, time)

  }
  numberMove('.data_item0', 1500, thousand)
  numberMove('.data_item1', 1700, hundred)
  numberMove('.data_item2', 1900, ten)
  numberMove('.data_item3', 2100, individual)
}


// 点击背景音乐icon
$('.icon_play').on('click', function () {
  $(this).toggleClass('play')
})

var state = false
// 勾选用户须知
$('.wrap').on('change', '#select', function () {
  $("#select").get(0).checked ? state = true : state = false
});
// 点击开始播放
$('.wrap').on('click', '.home_play', function () {
  state ? myslider.next() : ''
})
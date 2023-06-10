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

    // 解锁滚动限制
    myslider.lockNext = false,
      myslider.lockPrev = false
    if (index == 0) {
      // 回退到页面时判断
      $("#select").get(0).checked ? state = true : state = false
      // 用户未勾选时禁止滑动
      myslider.lockPrev = true
      myslider.lockNext = true
    } else if (index == 4) {
      // 到达歌单页面 需要用户点击 跳转下一页
      // myslider.lockNext = true
    } else if (index == 5) {
      create()
      // 到达生成页 禁止用户切换页面
      myslider.lockPrev = true
      myslider.lockNext = true
    }else if (index == 6) {
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
    // 更改生成页
    $('.cover_item').attr('src','./img/cover'+ resultConfig.cover + '.png')
    $('.antistop').attr('src','./img/antistop_'+ (resultConfig.keyword + 1) + '.png')
  }, 2000)

}

$('.wrap')
  // 点击提交
  .on('click', '.create_bottom_btn', function () {
    $('.create_bottom_input').blur();
    // 获取用户输入文案
    var textareaVal = $('.create_bottom_input').val();
    console.log(textareaVal)
    $('.create_bottom_bg .text').text(textareaVal)
    $('.icon_play').hide()
    myslider.next()

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
/* global $, */

/**
 * 判断是否微视客户端
 * @return {Boolean} 返回true则为微视客户端
 */
function isWeishi() {
  return true
}

/**
 * 显示分页
 * @param {String} className class类名
 */
function showPage(className) {
  setTimeout(function() {
    $('.section')
      .not(className)
      .removeClass('show')
  }, 500)
  $(className).addClass('show')
}
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
  names.forEach(function(name) {
    img = new Image()
    img.onload = (function(name, img) {
      return function() {
        imgs[name] = img
        ++n === names.length && cb && cb(imgs)
      }
    })(name, img)
    img.src = (prefix || '') + name
  })
}

$(document).ready(function() {
  // 静态资源配置
  var imgs = [
    'attention.png',
    'avatar.png',
    'avatar1.png',
    'bg_border.png',
    'bg_list_bottom.jpg',
    // 'bg_list_top.jpg',
    'bg_result.jpg',
    'bg_title.jpg',
    'bottom.png',
    'btn_pic_1.gif',
    'btn_pic_2.png',
    'btn_pic_3.png',
    'btn_side.png',
    'icon_bgm_sprite.png',
    'icon_close.png',
    'icon_left.png',
    'icon_share.png',
    'index_right.png',
    'note.png',
    'pic_1.jpg',
    'pic_2.jpg',
    'pic_3.jpg',
    'pic_4.jpg',
    'rank.png',
    'se.png',
    'sex.png',
    'warn.png'
  ]
  // 预加载静态资源
  preloadImage(imgs, null, './img/')
  // 查看按钮音效
  var viewSound = new Howl({
    src: ['./audio/alert.mp3']
  })
  // 小丑整蛊结果页面音效
  var resultSound = new Howl({
    src: ['./audio/share.mp3']
  })

  if (isWeishi()) {
    // 当判断为微视客户端的情况下：
    // 显示微视告警窗口
    $('#weishiModal').addClass('show')
    // 隐藏结果页 查看更多整蛊视频 按钮
    $('#btnMoreLink').addClass('hide')
  } else {
    // 当判断为非微视客户端的情况下：
    // 显示微视解禁窗口
    $('#notWeishiModal').addClass('show')
    // 隐藏结果页 再玩一次 按钮
    $('#btnAgain').addClass('hide')
  }
  // 立即查看  按钮事件
  $('.modal-btn').click(function() {
    viewSound.play() // 播放音效
    showPage('.section-video')
  })

  // 视频播放器
  var player = document.querySelector('#videoPlayer')

  // 视频列表项点击事件
  $('.video-item').click(function() {
    // 对应视频链接
    var feed = $(this).data('feed')
    // 替换可配置的视频链接
    player.src = feed

    // 显示视频弹窗并播放视频
    $('.video-wrapper').addClass('show')
    player.play()
  })

  // 视频播放完成 事件
  $('#videoPlayer').on('ended', function() {
    // 显示整蛊结果页面
    showPage('.section-result')
    // 隐藏视频弹窗
    $('.video-wrapper').removeClass('show')
    resultSound.play() // 播放音效
  })

  // 视频弹窗关闭按钮 事件
  $('.video-close').click(function() {
    // 暂停视频播放
    player.pause()
    // 显示整蛊结果页面
    showPage('.section-result')
    // 隐藏视频弹窗
    $('.video-wrapper').removeClass('show')
    resultSound.play() // 播放音效
  })

  // 再玩一次 按钮事件
  $('#btnAgain').click(function() {
    $('.section').removeClass('show')
    $('.section-alert').addClass('show')
  })

  $('#btnShare').click(function() {
    alert('点击分享')
  })

  $('#musicBtn').click(function() {
    if ($(this).is('.stop')) {
      $(this).removeClass('stop')
      // 继续播放
    } else {
      $(this).addClass('stop')
      // 暂停播放
    }
  })
})

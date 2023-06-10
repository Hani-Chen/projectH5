/*
 * @Author: Gianni
 * @Date: 2021-09-08 19:25:10
 * @LastEditTime: 2021-09-11 21:28:17
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_huolala\js\index.js
 */
$(function () {
  /* Data: 2020-09; Edit: Gianni; Describe: 首页相关事件; Start */
  // 默认显示首页
  showSection('.page_home')
  // 点击首页立即测试
  $('.home_btn').on('click', function () {
    // 1. 执行 - 切换到视频页
    showSection('.page_video')
    // 2. 播放 - 视频页视频
    $('.video_item')[0].play()
  })
  /* Data: 2020-09; Edit: Gianni; Describe: 首页相关事件; End */

  /* Data: 2020-09; Edit: Gianni; Describe: 视频页相关事件; Start */
  /* 监听视频是否在播放 */
  let videoPlay = false
  /* 监听视频结束 */
  $('.video_item')[0].addEventListener('ended', function () {
    $('.video_item__shade').addClass('show')
    videoPlay = false
    // $('.video_item')[0].controls = false
    $('.video_item__icon').removeClass('play')
    console.log('视频结束')
  })
  /* 监听视频暂停 */
  $('.video_item')[0].addEventListener('pause', function () {
    $('.video_item__shade').addClass('show')
    videoPlay = false
    $('.video_item__icon').removeClass('play')
    console.log('视频暂停')
  })
  /* 监听视频播放 */
  $('.video_item')[0].addEventListener('play', function () {
    $('.video_item__shade').removeClass('show')
    videoPlay = true
    $('.video_item__icon').addClass('play')
    console.log('视频播放')
  })
  // 点击返回按钮
  $('.page_video').on('click', '.page_return', function () {
    // 1. 执行 - 切换到首页
    showSection('.page_home')
    // 2. 如果视频在播放 -暂停视频
    videoPlay && $('.video_item')[0].pause()
  })

  // 点击视频播放
  $('.video_item__icon').on('click', function () {
    if (videoPlay) {
      $('.video_item')[0].pause()
    } else {
      $('.video_item')[0].play()
    }
  })
  // 点击跳过
  $('.video_skip').on('click', function () {
    // 1. 执行 - 切换到演唱页
    showSection('.page_sing')
    // 2. 如果视频在播放 -暂停视频
    videoPlay && $('.video_item')[0].pause()
  })
  /* Data: 2020-09; Edit: Gianni; Describe: 视频页相关事件; end */

  /* Data: 2020-09; Edit: Gianni; Describe: 演唱页相关事件; start */
  /* 判断播放组件是否存在 */
  let playerExist = false
  /* 初始化播放器类 */
  let player
  /* 初始化js时如果有音乐直接暂停 */
  playerExist && player.pause()
  function PlayKernelSong(options) {
    // QQ音乐歌曲id
    this.songId = '' || options.songId
    this.init()
  }
  /* 播放器初始化 */
  PlayKernelSong.prototype.init = function () {
    /* 判断是否存在音乐播放器 */
    playerExist == false && (player = new QMplayer())
    /* 监听音视频播放 */
    player.on('play', function () {
      $('.sing_play .sing_icon').addClass('active')
    })
    /* 监听音视频暂停 */
    player.on('pause', function () {
      $('.sing_play .sing_icon').removeClass('active')
    })
    /* 监听音视频播放结束后暂停播放 */
    player.on('ended', function () {
      $('.sing_play .sing_icon').removeClass('active')
    })
  }
  /* 歌曲播放 */
  PlayKernelSong.prototype.play = function () {
    playerExist = true
    player.play(this.songId)
  }
  /* 歌曲暂停 */
  PlayKernelSong.prototype.stop = function () {
    playerExist = false
    player.pause()
  }

  // 当前演奏时间
  let totalTime = 0
  // 长按时执行的计时器
  let backwards
  // 长按演唱页麦克风录制音频事件
  $('.sing_microphone')[0].addEventListener('touchstart', function (e) {
    e.preventDefault();
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
    // 指定用户判断
    if (true) {
      $('.sing_circle').addClass('show')
      // 录制时暂停音乐
      audioDemo && audioDemo.stop()
    }

    // 长按执行定时器
    clearInterval(backwards)
    backwards = setInterval(function () {
      // 演唱时间增加
      totalTime++

      // 多久完成演奏 通过它跳转页面 【20s】
      let time = 20000
      // 如果倒计时结束
      if (totalTime * 10 > time) {
        // 解除计时器
        clearInterval(backwards)
        showSection('.page_over')
      }
      $('.sing_time').text(startConcert(totalTime))
    }, 10)
  })

  // 结束长按演唱页麦克风录制音频事件
  $('.sing_microphone')[0].addEventListener('touchend', function (e) {
    e.preventDefault();
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
    $('.sing_circle').removeClass('show')

    let gameTime = Math.floor((totalTime / 100) % 60)
    // 时间恢复默认值
    $('.sing_time').text('00:00.00')
    // 录制时间恢复默认值
    totalTime = 0

    // 解除计时器
    clearInterval(backwards)
    // 判断录制时长
    if (gameTime < 3) {
      showToast('至少录制三秒以上哦')
      return
    }
    showSection('.page_over')
  })
  // 点击收藏按钮
  $('.sing_like').on('click', function () {
    // 如果已经收藏
    if ($('.sing_like .sing_icon').hasClass('active')) {
      $('.sing_like .sing_icon').removeClass('active')
    } else {
      $('.sing_like .sing_icon').addClass('active')
    }
  })

  /* 点击听原唱 - 播放音乐 */
  let audioDemo
  $('.sing_play').on('click', function () {
    console.log('sdklfjdaskfjasdlk')
    audioDemo = new PlayKernelSong({
      songId: 310637306,
    })
    audioDemo.play()
  })

  // 点击返回按钮
  $('.page_sing').on('click', '.page_return', function () {
    // 1. 执行 - 切换到首页
    showSection('.page_video')
    // 2. 如果视频在播放 -暂停视频
    audioDemo && audioDemo.stop()
  })
  /* Data: 2020-09; Edit: Gianni; Describe: 演唱页相关事件; end */
  /* Data: 2020-09; Edit: Gianni; Describe: 结果页相关事件; start */
  // 点击返回按钮
  $('.page_over').on('click', '.page_return', function () {
    // 1. 执行 - 切换到首页
    showSection('.page_sing')
  })

  // 点击分享按钮
  $('.over_brn__share').on('click', function () {
    if ($(this).hasClass('active')) {
      // 点击领豪礼
      console.log('点击领豪礼');
    } else {
      // 点击分享
      $(this).addClass('active').removeClass('ani')
      console.log('点击分享');
    }
  })
  // 点击来听n种魔改版吧
  $('.over_brn__link').on('click', function () {
    console.log('点击来听n种魔改版吧');
    // window.open('http://www.baidu.com');
  })
  // 点击再来一次
  $('.over_brn__anew').on('click', function () {
    $('.over_brn__share').removeClass('active').addClass('ani')
    showSection('.page_sing')
  })
  /* Data: 2020-09; Edit: Gianni; Describe: 结果页相关事件; end */

})

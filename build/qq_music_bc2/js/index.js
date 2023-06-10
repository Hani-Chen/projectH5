$(function () {
  var slider = new iSlider({
    wrap: '.start-wrap',
    item: '.start-item',
    fullScr: false,
    isVertical: false
  })

  // 播放视频
  var video = $('.person-intro-video-el')[0]
  var videoStatus = false
  video.addEventListener('pause', function () { //暂停开始执行的函数
    videoStatus = false
    $('.person-intro-video-cover').show()
  });
  video.addEventListener('ended', function () { //暂停开始执行的函数
    videoStatus = false
    $('.person-intro-video-cover').show()
  });
  video.addEventListener('playing', function () { //播放中
    videoStatus = true
    $('.person-intro-video-cover').hide()
  });


  // 产看项目介绍
  $('.start-desc-btn-1').on('click', function () {
    // 介绍
    $('.page.project-intro').addClass('active')
  })

  // 介绍页，返回按钮
  $('.project-intro .intro-link').on('click', function () {
    $('.page.project-intro').removeClass('active')
  })


  // 打开人物介绍
  $('.start-person-link').on('click', function () {
    $('.intro-person-bg').hide()
    $('.page.person-intro').addClass('active')
    var className = $(this).attr('class')
    var index = className.slice(className.length - 1)
    $('.intro-person-bg-' + index).show()
  })

  // 人物介绍返回
  $('.person-intro .intro-link').on('click', function () {
    $('.page.person-intro').removeClass('active')
    video.pause()
  })

  // 挂件点击
  $('.start-fixed-icon-1').on('click', function () {
    $('.page.write').addClass('active')
  })

  // 人物介绍播放 video
  $('.person-intro-video').on('click', function () {
    if (videoStatus) {
      video.pause()
    } else {
      video.play()
    }
  })

  // 点击歌词助力
  $('.start-activity-btn-1').on('click', function () {
    $('.page.write').addClass('active')
  })

  // 歌词助力返回
  $('.write-btn-back').on('click', function () {
    $('.page.write').removeClass('active')
    $('.write-text').val('')
  })

  function uploadMusic() {
    console.log('上传音乐作品')
  }

  // 点击上传音乐作品
  $('.start-fixed-icon-2').on('click', function () {
    uploadMusic()
  })

  $('.start-activity-btn-2').on('click', function () {
    uploadMusic()
  })


  // 提交助力内容
  var writeText = ''

  $('.write-text').on('input', function (e) {
    var value = $('.write-text').val();

    // 判断是否有文字
    if (/[\S]/ig.test(value)) {
      $('.write-btns-submit.disable').removeClass('disable')
    } else {
      $('.write-btns-submit').addClass('disable')
    }

    var r = value.split(/[\n]/ig)
    var ruleLine = 0;

    for (var i = 0; i < r.length; i++) {
      ruleLine += Math.ceil(r[i].length / 12)
    }

    if (r.length >= 10) {
      $('.write-text').val(writeText)
      return;
    } else if (ruleLine > 9) {
      $('.write-text').val(writeText)
      return;
    } else {
      writeText = $('.write-text').val();
    }
  })

  $('.write-btns-submit').on('click', function () {
    if ($(this).hasClass('disable')) {
      return;
    }
    var value = $('.write-text').val();
    $('.result-text-content').html(value)
    $('.page.result').addClass('active')
  })

  // 结果页返回
  $('.result-btn-back').on('click', function () {
    $('.page.result').removeClass('active')
    $('.result-btn-green').addClass('share')
  })

  // 分享赢取绿钻
  $('.result-btn-green.share').on('click', function () {
    $(this).removeClass('share')
  })




  // 二期
  $('.start-activity2-btn2').on('click', function () {
    $('.page.write').addClass('active')
  })

  // 二期音乐列表滚动
  function scrollMusicList() {
    var width = $('.start-activity2-music-name').width()
    var innerList = $('.start-activity2-music-inner')

    for (var i = 0; i < innerList.length; i++) {
      (function (i) {
        var inner = innerList.eq(i)

        if (inner.width() > width) {
          var innerText = inner.text()
          inner.text(innerText + innerText)

          var left = 0;
          clearInterval(timer)
          var timer = setInterval(function () {
            inner.css({
              transform: 'translate3d(' + left + 'px,0,0)'
            })
            left = left - 1
            if (Math.abs(left) >= inner.width() / 2) {
              left = 0
            }
          }, 30)
        }
      })(i)

    }
  }

  scrollMusicList()

  // 三期 音乐列表
  function scrollMusicList2() {
    // 内容宽度
    // 名字宽度
    // 音乐最大可用宽度
    // 音乐名字实际宽度
    var musicList = $('.start-activity3-music-name')

    for (var i = 0; i < musicList.length; i++) {
      (function (i) {
        var outer = musicList.eq(i)
        var outerWidth = outer.width()

        let personName = outer.find('.start-activity3-music-name-sub').eq(0);
        var personWidth = personName.width()

        var maxWidth = outerWidth - personWidth - 2

        outer.find('.start-activity3-music-outer').eq(0).css({
          'maxWidth': maxWidth + 'px'
        })

        var realWidth = outer.find('.start-activity3-music-inner').eq(0).width()

        if (realWidth > maxWidth) {
          var songName = outer.find('.start-activity3-music-inner').eq(0)
          var text = songName.text()
          songName.text(text + text)
          var left = 0;
          clearInterval(timer)
          var timer = setInterval(function () {
            songName.css({
              transform: 'translate3d(' + left + 'px,0,0)'
            })
            left = left - 1
            if (Math.abs(left) >= songName.width() / 2) {
              left = 0
            }
          }, 30)

        }

      })(i)
    }
  }

  scrollMusicList2()

  // 三期精选作品，滚动
  function choiceScroll() {
    var list = $('.start-activity3-try-name')

    for (var i = 0; i < list.length; i++) {
      (function (i) {
        var outer = list.eq(i)
        var outerWidth = outer.width()
        var inner = outer.find('.start-activity3-try-inner').eq(0)
        innerWidth = inner.width()

        if (innerWidth > outerWidth) {
          var text = inner.text()
          inner.text(text + text)

          var left = 0;
          clearInterval(timer)
          var timer = setInterval(function () {
            inner.css({
              transform: 'translate3d(' + left + 'px,0,0)'
            })
            left = left - 1
            if (Math.abs(left) >= inner.width() / 2) {
              left = 0
            }
          }, 30)
        }
      })(i)
    }
  }

  choiceScroll()

  // 音乐播放
  var player = null
  // 保存被点击的播放按钮
  var playEle = null

  // 初始化音乐播放器
  function musicInit() {
    if (!player) {
      player = new QMplayer()
    }

    player.on('play', function () {
      if (playEle) {
        playEle.addClass('active')
      }
    })
    /* 监听音视频暂停 */
    player.on('pause', function () {
      playEle.removeClass('active')
    })
    /* 监听音视频播放结束后暂停播放 */
    player.on('ended', function () {
      playEle.removeClass('active')
    })
  }

  // 初始化音乐播放器
  musicInit()

  // 触发音乐播放
  $('.js-play').on('click', function () {
    playEle = $(this)
    var musicId = $(this).attr('data-music')
    $('.js-play').removeClass('active')
    player.play(musicId)
  })


  // 收藏音乐按钮切换
  $('.js-favorites').on('click', function () {
    $(this).toggleClass('active')
  })


})

/*
 * @Author: Gianni
 * @Date: 2021-10-17 10:21:45
 * @LastEditTime: 2021-10-20 16:36:49
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_zj\js\index.js
 */
$(function () {
  // 生成随机数函数 - 随机生成歌曲名和兜底页
  function getRandomNumberByRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
  }
  // 用户输入的昵称
  let userName = ''
  // 是否存在近期数据
  let userData = getRandomNumberByRange(0, 2)
  // 用户最喜欢歌曲名
  testList = ['感谢你曾经来过', '当想你成为习惯 (DJ R7)']
  // 文字滚动定时器
  let timer = null
  // 判断歌曲是否播放
  let isPlay = false
  // 判断音乐播放逻辑
  let noStop = false
  // 当前页面的索引下标
  let pageIndex = 0

  // 用户最近最喜欢的歌曲名称
  let userSongName = testList[getRandomNumberByRange(0, 2)]
  // 背景音乐songId
  let pageSongId = 1319248

  /**
   * toast信息工具函数 - 测试使用后期应该需要使用内部弹窗提示
   */
  function showToast(str) {
    var $toast = $(
      '<div class="toast_item"><span class="ani">' + str + '</span></div>'
    )
    $('.wrap').append($toast)
    setTimeout(function () {
      $toast.animate({ opacity: 0 }, 300, null, function () {
        $toast.remove()
      })
    }, 1500)
  }

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
      // 更改音乐播放状态
      isPlay = true
      // 歌曲播放更改icon状态 - 由于滚屏原因页面会被删减所以用函数方便页面展示时重新渲染
      songPlay()
    })
    /* 监听音视频暂停 */
    player.on('pause', function () {
      // 更改音乐播放状态
      isPlay = false
      // 歌曲暂停更改icon状态
      songPlay(false)
    })
    /* 监听音视频播放结束后暂停播放 */
    player.on('ended', function () {
      // 更改音乐播放状态
      isPlay = false
      // 歌曲暂停更改icon状态
      songPlay(false)
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
  function choiceScroll(index) {
    // 歌曲滚动 - 父元素
    let outer = null
    // 歌曲滚动子元素
    let inner = null
    // 歌曲滚动子元素位置
    let left = 0
    // 判断不同页面进入渲染不同歌词滚动
    if (index == 1) {
      outer = $('.data_songname')
      inner = $('.data_songname__inner')
    } else if (index == 6) {
      outer = $('.serp_songname')
      inner = $('.serp_songname__inner')
    }
    // 判断指定页面进入渲染歌词滚动
    if (index == 1 || index == 6) {
      let outerWidth = outer.width()
      let innerWidth = inner.width()
      if (innerWidth > outerWidth) {
        let text = inner.text()
        inner.text(text + text)
        left = 0
        clearInterval(timer)
        timer = setInterval(function () {
          inner.css({
            transform: 'translate3d(' + left + 'px,0,0)',
          })
          left = left - 1
          if (Math.abs(left) >= inner.width() / 2) {
            left = 0
          }
        }, 30)
      }
    }
  }
  // 更改页面icon状态函数
  function songPlay(isShow = true) {
    if (isShow) {
      $('.btn_play').addClass('play')
      $('.play_cd').addClass('play')
      $('.page_music').addClass('active')
    } else {
      $('.btn_play').removeClass('play')
      $('.play_cd').removeClass('play')
      $('.page_music').removeClass('active')
    }
  }

  // 进入页面初始化音乐播放 - 自动部分音乐部分
  audioDemo = new PlayKernelSong({
    songId: pageSongId,
  })
  audioDemo.play()

  // 滑屏组件初始化
  var homeSlide = new iSlider({
    wrap: '.wrap',
    item: '.item',
    lastLocate: false,
    onslide: function (index) {
      // 获取当前页面索引下标
      pageIndex = index
      // 更改用户名
      $('.user_name').text(userName)
      // 解锁滚动限制
      homeSlide.lockPrev = true
      homeSlide.lockNext = false
      // 指定页面可下滑
      if (index == 0 || index >= 3) {
        homeSlide.lockNext = true
      }
      // 指定页面自动暂停歌曲
      if (index == 2 || index == 3) {
        if (!noStop) {
          audioDemo.stop()
        }
      } else if (index == 4) {
        showScene()
      }
      // 移除定时器
      clearInterval(timer)
      // 执行文字滚动
      choiceScroll(index)
      // 由于页面会被删除 - 所以需要每次更改页面icon状态
      if (isPlay) {
        songPlay()
      }
      // 更改需要自动暂停音乐页面的播放状态
      noStop = false
    },
  })

  // 点击返回按钮
  $('.wrap').on('click', '.page_return', function () {
    // 到达指定页面更改需要自动暂停音乐页面的播放状态
    if (pageIndex == 4) {
      noStop = true
    }
    homeSlide.prev()
  })
  // 点击音乐icon
  $('.wrap').on('click', '.page_music', function () {
    if ($(this).hasClass('active')) {
      audioDemo.stop()
    } else {
      audioDemo = new PlayKernelSong({
        songId: pageSongId,
      })
      audioDemo.play()
    }
  })
  // 点击首页 - 追忆你的岁月
  $('.wrap').on('click', '.home_btn', function () {
    if ($('.home_input__item').val()) {
      // 暂停音乐
      audioDemo.stop()
      // 获取用户输入昵称
      userName = $('.home_input__item').val()
      $('.user_name').text(userName)
      // 切换下一页
      homeSlide.next()
      // 判断用户是否存在大数据
      !userData && $('.page_data').addClass('page_data__lose')
      $('.data_songname__inner').text(`《${userSongName}》`)
    } else {
      showToast('请输入昵称')
    }
  })

  // 实时获取首页用户输入的昵称
  $('.wrap').on('input', '#homeInputItem', function () {
    console.log('$(this).val()', $(this).val().length)
    $('.hint_text').text($(this).val().length)
  })

  // 点击播放页播放按钮
  $('.wrap').on('click', '.btn_play', function () {
    if (!$(this).hasClass('play')) {
      audioDemo = new PlayKernelSong({
        songId: pageSongId,
      })
      audioDemo.play()
    } else {
      // 暂停音乐
      audioDemo.stop()
    }
  })

  // 点击播放页收藏按钮
  $('.wrap').on('click', '.btn_like', function () {
    console.log(pageSongId)
    if (!$(this).hasClass('like')) {
      // 获取songId
      $(this).addClass('like')
    } else {
      $(this).removeClass('like')
    }
  })
  // 点击我要制作
  $('.wrap').on('click', '.execution_btn', function () {
    homeSlide.next()
  })

  // 初始化选择回忆场景轮播
  let myslider
  let sceneIndex = 0
  function showScene() {
    // 滑屏组件初始化
    myslider = new iSlider({
      wrap: '.scene_swiper',
      item: '.scene_swiper__item',
      lastLocate: false,
      isVertical: false,
      onslide: function (index) {
        $(`.pagination_item`).removeClass('active')
        $(`.pagination_item${index}`).addClass('active')
        sceneIndex = index
      },
    })
  }

  // 选择回忆场景轮播的tab切换
  let tabIndex = 0
  $('.wrap').on('click', '.scene_tab__item', function () {
    myslider.slideTo(0)
    $('.scene_tab__item').removeClass('active')
    $(this).addClass('active')
    $('.scene_swiper__wrap')
      .removeClass()
      .addClass(`scene_swiper__wrap${$(this).index() + 1} scene_swiper__wrap`)
    tabIndex = $(this).index()
  })

  // 点击选择回忆场景轮播页下一步
  $('.wrap').on('click', '.scene_btn', function () {
    homeSlide.next()
    showLyrics()
  })

  // 选择歌词页歌词数据 - 通过选择回忆场景轮播页选择不同渲染不同数据
  let lyricList = [
    // 爱情
    {
      lyric: [
        {
          text: '水云间醇香飘逸\n带我找到通往你心里的路',
        },
        {
          text: '世间多少平凡的憧憬\n但愿携手铺开风景',
        },
      ],
    },
    // 友情
    {
      lyric: [
        {
          text: '手捧无尽的梦想 珍诚无畏\n陪你追梦 一起并肩远方',
        },
        {
          text: '畅饮时代珍品\n让我们重温岁月的传奇',
        },
      ],
    },
    // 亲情
    {
      lyric: [
        {
          text: '听耳畔传来熟悉声音\n让我频频回望家的方向',
        },
        {
          text: '万家灯火把前路都照亮\n别担心我会一直都安好',
        },
      ],
    },
  ]

  // 显示歌词选择页
  function showLyrics() {
    let data = lyricList[tabIndex].lyric
    // 更改歌词选择页标题标签【爱情、友情、亲情】
    $('.lyric_content__title')
      .removeClass()
      .addClass(`lyric_content__title lyric_content__title${tabIndex + 1}`)
    $('.lyric_content__1').text(data[0].text)
    $('.lyric_content__2').text(data[1].text)
  }

  // 单个歌词选择
  let lyricIndex = 0
  $('.wrap').on('click', '.lyric_content__item', function () {
    $('.lyric_content__item').removeClass('check')
    $(this).addClass('check')
    lyricIndex = $(this).index()
  })

  // 点击选择歌词页生成珍情海报
  $('.wrap').on('click', '.lyric_btn', function () {
    if ($('.lyric_content__item').hasClass('check')) {
      homeSlide.next()
      $('.page_serp')
        .removeClass()
        .addClass(`item page_serp page_serp${tabIndex * 2 + (sceneIndex + 1)}`)
      $('.share__img').attr(
        'src',
        `./img/test_share_img${tabIndex * 2 + (sceneIndex + 1)}.jpg`
      )
      $('.serp_lyric__text').text(lyricList[tabIndex].lyric[lyricIndex].text)
      $('.serp_songname__inner').text(`《${userSongName}》`)
      // 判断用户是否存在大数据
      if (!userData) {
        $('.serp_text__wrap').removeClass('show')
        $('.serp_text__wrap.lose').addClass('show')
      } else {
        $('.serp_text__wrap').addClass('show')
        $('.serp_text__wrap.lose').removeClass('show')
      }
    } else {
      showToast('请选择走心歌词')
    }
  })

  // 点击海报页返回重新制作
  $('.wrap').on('click', '.serp_btn__left', function () {
    homeSlide.slideTo(4)
    lyricIndex = 0
    tabIndex = 0
    sceneIndex = 0
  })
})

$(function () {
  /*
   * @Author: Gianni
   * @Date: 2021-06-05 09:56:42
 * @LastEditors: Gianni
 * @LastEditTime: 2021-06-16 16:21:21
 * @FilePath: \H5-Project\src\qq_music_teapi\js\index.js
   * @Description: QQ音乐茶π
   */

  /**
   * 工具函数 - 显示元素
   * @param {*} section 需要显示的的元素类
   * 用法: showSection('.test') showSection('#test')
   *
   */
  var $prevSection
  function showSection(section) {
    if ($prevSection) {
      $prevSection.removeClass('show')
    }
    $prevSection = $(section)
    $prevSection.addClass('show')
  }

  /**
   * toast信息工具函数
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
  // 结果页标题
  let endTitle = [
    {
      title: '佛系毕业：',
      text: '不争也不抢，低调发着光',
      songId: '212973255',
    },
    {
      title: '摸鱼毕业：',
      text: '间接性努力，持续性划水',
      songId: '215087468',
    },
    {
      title: '基操毕业：',
      text: '来都来了，总得秀一秀',
      songId: '312112954',
    },
    {
      title: '热血毕业：',
      text: '真打卡狂魔，浪出新天地',
      songId: '263932240',
    },
    {
      title: '开挂毕业：',
      text: '不辜负美好，坐拥整个快乐星球',
      songId: '293695482',
    },
  ]
  /* 点击弹窗关闭按钮 - 隐藏弹窗 */
  $('.wrap').on('click', '.modal_close', function () {
    // 移除弹窗显示类
    $(this).parents('.modal').removeClass('show')
  })
  /* 判断播放组件是否存在 */
  var playerExist = false
  /* 初始化播放器类 */
  var player
  /* 初始化js时如果有音乐直接暂停 */
  playerExist && player.pause()

  function PlayKernelSong() {
    this.init()
  }
  /* 播放器初始化 */
  PlayKernelSong.prototype.init = function () {
    /* 判断是否存在音乐播放器 */
    playerExist == false && (player = new QMplayer())
    /* 监听音视频播放 */
    player.on('play', function () {
      console.log('播放')
      $('.iocn_song').removeClass('stop')
    })
    /* 监听音视频暂停 */
    player.on('pause', function () {
      console.log('暂停')
      $('.iocn_song').addClass('stop')
    })
    /* 监听音视频播放结束后暂停播放 */
    player.on('ended', function () {
      console.log('结束')
      $('.iocn_song').addClass('stop')
    })
  }
  /* 歌曲播放 */
  PlayKernelSong.prototype.play = function (songId) {
    playerExist = true
    player.play(songId)
  }
  /* 歌曲暂停 */
  PlayKernelSong.prototype.stop = function () {
    playerExist = false
    player.pause()
  }
  // 设置播放器歌曲链接
  let audioDemo = new PlayKernelSong()

  // 滑屏组件初始化
  var myslider = new iSlider({
    wrap: '.wrap',
    item: '.item',
    lastLocate: false,
    preventMove: false,
    onslide: function (index) {
      console.log('当前滑屏页面index: ', index)
      if (index === 0) {
        audioDemo.play('108963136')
      } else if (index === 1) {
        // audioDemo.play('244625442')
        // 添加滚动限制
        myslider.lockPrev = true
        myslider.lockNext = true
      } else if (index === 2) {
        loadingCanvas = new CanvasAni({
          canvas: 'canvasLoad',
          canvasData: loadData,
          imgSource: loadingPreloadQueue,
          autoPlay: false,
          onEnd: function () {
            setTimeout(function () {
              showEnd()
              myslider.next()
            }, 1500)
          },
        })
        if (loadingCanvas) {
          loadingCanvas.refreshCanvas()
          loadingCanvas.play()
        }
      } else if (index === 3) {
        audioDemo.play(endTitle[titleIndex].songId)
        /* Data: 20210616; Describe: 添加外链跳转按钮; Edit: Gianni; Start */
        let linkUrl = 'https://www.baidu.com/'
        $('.btn_linke').attr('href', linkUrl)
        /* Data: 20210616; Describe: 添加外链跳转按钮; Edit: Gianni; End */
      }
    },
  })

  /**
   * 点击播放icon
   */
  $('.wrap').on('click', '.iocn_song', function () {
    if ($(this).hasClass('stop')) {
      audioDemo.play()
    } else {
      audioDemo.stop()
    }
  })

  /**
   * 获取选中的清单
   */
  let interactiveList = []
  $('.wrap').on('click', '.interactive_item', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      let itemNumber = Number($(this).data('id'))
      for (var i = 0; i < interactiveList.length; i++) {
        if (interactiveList[i].id === itemNumber) {
          interactiveList.splice(i, 1)
        }
      }
    } else {
      $(this).addClass('active')
      console.log($(this).data('id'))
      interactiveList.push({
        id: $(this).data('id'),
        text: $(this).data('text'),
      })
    }
    console.log(interactiveList)
    if (interactiveList.length > 0) {
      $('.interactive_btn').addClass('active')
    } else {
      $('.interactive_btn').removeClass('active')
    }
    $('.progress').text(interactiveList.length)
  })

  /**
   * 点击我选好了按钮 - 执行显示输入昵称弹窗
   */
  $('.wrap').on('click', '.interactive_btn', function () {
    if (interactiveList.length >= 1) {
      showSection('#modalGetUser')
    } else {
      showToast('至少选择一项哦~')
    }
  })
  /**
   * 点击跳过 - 执行显示下一页
   */
  $('.wrap').on('click', '.btn_skip', function () {
    myslider.next()
    $(this).parents('.modal').removeClass('show')
  })

  let userName = ''
  $('.wrap').on('click', '.btn_get__user', function () {
    console.log($('.user_name').val())
    if ($('.user_name').val() != '') {
      userName = $('.user_name').val()
      myslider.next()
      $(this).parents('.modal').removeClass('show')
    } else {
      showToast('请输入昵称~')
    }
  })

  //   佛系毕业：不争也不抢，低调发着光
  // ➢ 判断标准：选项勾选0-20%
  // ➢ 歌曲：《问题出现我再告诉大家》
  // 摸鱼毕业：间接性努力，持续性划水
  // ➢ 判断标准：选项勾选20-40%
  // ➢ 歌曲：《卡路里》
  // 基操毕业：来都来了，总得秀一秀
  // ➢ 判断标准：选项勾选40-60%
  // ➢ 歌曲：《翱翔》
  // 热血毕业：真打卡狂魔，浪出新天地
  // ➢ 判断标准：选项勾选60-80%
  // ➢ 歌曲：《少年》
  // 开挂毕业：不辜负美好，坐拥整个快乐星球
  // ➢ 判断标准：选项勾选80-100%
  // ➢ 歌曲：《星辰大海》

  let titleIndex = 0
  function showEnd() {
    let dem = ''
    if ((interactiveList.length / 66) * 100 <= 20) {
      titleIndex = 0
    } else if ((interactiveList.length / 66) * 100 <= 40) {
      titleIndex = 1
    } else if ((interactiveList.length / 66) * 100 <= 60) {
      titleIndex = 2
    } else if ((interactiveList.length / 66) * 100 <= 80) {
      titleIndex = 3
    } else if ((interactiveList.length / 66) * 100 <= 100) {
      titleIndex = 4
    }
    if (userName) {
      $('.end_name__text').text(userName)
    } else {
      $('.end_name__text').text('Gianni')
    }
    $('.end_label_title').text(endTitle[titleIndex].title)
    $('.end_label_text').text(endTitle[titleIndex].text)
    console.log(endTitle[titleIndex].songId)
    // 结果页展示
    $('.end_num').text(interactiveList.length)
    for (let i = 0; i < interactiveList.length; i++) {
      const item = interactiveList[i]
      dem += `<div class="end_item">
      <div class="item_img__wrap interactive_icon__end interactive_icon__end${item.id}">
      </div>
      <div class="item_text">${item.text}</div>
    </div>`
    }
    if (4 - (interactiveList.length % 4) !== 4)
      for (let i = 0; i < 4 - (interactiveList.length % 4); i++) {
        dem += `<div class="end_item"></div>`
      }
    $('.end_list').html(dem)
  }
  // 活动分享
  $('.wrap').on('click', '.btn_share', function () {
    if (interactiveList.length <= 22) {
      $('.share_img').attr('src', './img/share_img_test.jpg')
    } else if (interactiveList.length <= 45) {
      $('.share_img').attr('src', './img/share_img_test2.jpg')
    } else if (interactiveList.length <= 57) {
      $('.share_img').attr('src', './img/share_img_test3.jpg')
    } else if (interactiveList.length <= 66) {
      $('.share_img').attr('src', './img/share_img_test4.jpg')
    }
    showSection('#modalLoad')
    setTimeout(function () {
      showSection('#modalGetShare')
    }, 1000)
  })
  // 重新选择
  $('.wrap').on('click', '.btn_return', function () {
    myslider.slideTo(1)
    interactiveList = []
    audioDemo.play('108963136')
  })
  $('.user_name').on('input', function () {
    $('.btn_get__user').removeClass('active')
    if($('.user_name').val()) {
      $('.btn_get__user').addClass('active')
    }
  })
})

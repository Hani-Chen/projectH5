/*
 * @Author: Gianni
 * @Date: 2021-08-07 12:20:13
 * @LastEditTime: 2021-08-19 15:43:34
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_johnnie_walker\js\index.js
 */
$(function () {
  /**
   * 工具函数 - 显示元素
   * @param {*} section 需要显示的的元素类
   * 用法: showSection('.test') showSection('#test')
   *
   */
  let $prevSection
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
    let $toast = $(
      '<div class="toast_item"><span class="ani">' + str + '</span></div>'
    )
    $('.wrap').append($toast)
    setTimeout(function () {
      $toast.animate({ opacity: 0 }, 300, null, function () {
        $toast.remove()
      })
    }, 1500)
  }
  function close() {
    // 这里编辑退出h5页面逻辑
  }
  // 存储用户操作数据
  let userData = {
    choicePerson: Number,
    choiceSong: Number,
    choiceLyrics: Number,
    name: '',
    wish: '',
    signature: '',
  }
  // 歌曲列表
  let songData = [
    {
      list: [
        {
          songName: '好久不见',
          name: '陈奕迅',
          songId: '1313993',
        },
        {
          songName: '被风吹过的夏天',
          name: '金莎/林俊杰',
          songId: '7242145',
        },
        {
          songName: '心蓝',
          name: '卢巧音',
          songId: '14053',
        },
        {
          songName: '蓝色的缘分',
          name: '古天乐',
          songId: '201342654',
        },
        {
          songName: '后来',
          name: '刘若英',
          songId: '4830150',
        },
        {
          songName: '蓝色',
          name: '叶蓓',
          songId: '212383588',
        },
        {
          songName: '气球',
          name: '许哲佩',
          songId: '141441',
        },
        {
          songName: '蓝雨',
          name: '张学友',
          songId: '1829696',
        },
        {
          songName: '蓝莲花',
          name: '许巍',
          songId: '125589322',
        },
        {
          songName: '蓝天',
          name: '张惠妹',
          songId: '166336',
        },
        {
          songName: '蓝月亮',
          name: '李克勤',
          songId: '1287610',
        },
        {
          songName: '听海',
          name: '张惠妹',
          songId: '5061209',
        },
        {
          songName: '笔记',
          name: '周笔畅',
          songId: '826292',
        },
        {
          songName: '蓝色土耳其',
          name: '周传雄',
          songId: '104701504',
        },
        {
          songName: 'BLUE',
          name: 'Troye Sivan/Alex Hope',
          songId: '104787697',
        },
        {
          songName: 'Hiding In The Blue',
          name: 'TheFatRat/Riell',
          songId: '311896024',
        },
        {
          songName: '干杯',
          name: '五月天',
          songId: '232577687',
        },
        {
          songName: '爱拼才会赢',
          name: '卓依婷/林正桦',
          songId: '7032515',
        },
      ],
    },
    {
      list: [
        {
          songName: '好久不见',
          name: '陈奕迅',
          songId: '1313993',
        },
        {
          songName: '蓝天',
          name: '张惠妹',
          songId: '166336',
        },
        {
          songName: '被风吹过的夏天',
          name: '金莎/林俊杰',
          songId: '7242145',
        },
        {
          songName: '心蓝',
          name: '卢巧音',
          songId: '14053',
        },
        {
          songName: '蓝色的缘分',
          name: '古天乐',
          songId: '201342654',
        },
        {
          songName: '蓝月亮',
          name: '李克勤',
          songId: '1287610',
        },
        {
          songName: '听海',
          name: '张惠妹',
          songId: '5061209',
        },
        {
          songName: '笔记',
          name: '周笔畅',
          songId: '826292',
        },
        {
          songName: '蓝色',
          name: '叶蓓',
          songId: '212383588',
        },
        {
          songName: '蓝色土耳其',
          name: '周传雄',
          songId: '104701504',
        },
        {
          songName: '气球',
          name: '许哲佩',
          songId: '141441',
        },
        {
          songName: '蓝雨',
          name: '张学友',
          songId: '1829696',
        },
        {
          songName: '蓝莲花',
          name: '许巍',
          songId: '125589322',
        },
        {
          songName: 'BLUE',
          name: 'Troye Sivan/Alex Hope',
          songId: '104787697',
        },
        {
          songName: 'Hiding In The Blue',
          name: 'TheFatRat/Riell',
          songId: '311896024',
        },
        {
          songName: '干杯',
          name: '五月天',
          songId: '232577687',
        },
        {
          songName: '爱拼才会赢',
          name: '卓依婷/林正桦',
          songId: '7032515',
        },
        {
          songName: '友情岁月',
          // name: '郑伊健/陈小春/谢天华/钱嘉乐/林晓峰',
          name: '群星',
          songId: '217127072',
        },
      ],
    },
    {
      list: [
        {
          songName: '好久不见',
          name: '陈奕迅',
          songId: '1313993',
        },
        {
          songName: '友情岁月',
          // name: '郑伊健/陈小春/谢天华/钱嘉乐/林晓峰',
          name: '群星',
          songId: '217127072',
        },
        {
          songName: '爱拼才会赢',
          name: '卓依婷/林正桦',
          songId: '7032515',
        },
        {
          songName: '干杯',
          name: '五月天',
          songId: '232577687',
        },
        {
          songName: '如果这都不算爱',
          name: '张学友',
          songId: '4900010',
        },
        {
          songName: 'Hiding In The Blue',
          name: 'TheFatRat/Riell',
          songId: '311896024',
        },
        {
          songName: 'BLUE',
          name: 'Troye Sivan/Alex Hope',
          songId: '104787697',
        },
        {
          songName: '蓝莲花',
          name: '许巍',
          songId: '125589322',
        },
        {
          songName: '蓝雨',
          name: '张学友',
          songId: '1829696',
        },
        {
          songName: '气球',
          name: '许哲佩',
          songId: '141441',
        },
        {
          songName: '蓝色土耳其',
          name: '周传雄',
          songId: '104701504',
        },
        {
          songName: '蓝色',
          name: '叶蓓',
          songId: '212383588',
        },
        {
          songName: '笔记',
          name: '周笔畅',
          songId: '826292',
        },
        {
          songName: '听海',
          name: '张惠妹',
          songId: '5061209',
        },
        {
          songName: '蓝月亮',
          name: '李克勤',
          songId: '1287610',
        },
        {
          songName: '爱一个人好难',
          name: '苏永康',
          songId: '102346735',
        },
        {
          songName: '后来',
          name: '刘若英',
          songId: '4830150',
        },
        {
          songName: '蓝色的缘分',
          name: '古天乐',
          songId: '201342654',
        },
        {
          songName: '心蓝',
          name: '卢巧音',
          songId: '14053',
        },
        {
          songName: '被风吹过的夏天',
          name: '金莎/林俊杰',
          songId: '7242145',
        },
        {
          songName: '蓝天',
          name: '张惠妹',
          songId: '166336',
        },
      ],
    },
  ]
  // 关键词数据
  let antistopData = [
    '陪伴',
    '待人寻味',
    '默契',
    '蓝的季节',
    '回忆酿的甜',
    '注定',
    '深藏BLUE',
    '心动',
    '那一年',
    '有缘再聚',
    '牵绊',
    '五彩斑蓝',
    '相知',
    '待团圆',
    '远走高飞',
    '舍不得',
    '情出于蓝',
    '盼归',
    '好久不见',
    '蓝色的思念',
  ]

  /* 判断播放组件是否存在 */
  let playerExist = false
  /* 初始化播放器类 */
  let player
  /* 初始化js时如果有音乐直接暂停 */
  playerExist && player.pause()

  function PlayKernelSong(options) {
    // 播放icon
    this.songPlayIcon = $('.choice_item').eq(options.index)

    // QQ音乐歌曲id
    this.songId = '' || options.songId
    this.init()
  }
  /* 播放器初始化 */
  PlayKernelSong.prototype.init = function () {
    /* 判断是否存在音乐播放器 */
    playerExist == false && (player = new QMplayer())
    let songPlayIcon = this.songPlayIcon
    /* 监听音视频播放 */
    player.on('play', function () {
      console.log('播放')
      $('.choice_item__icon').removeClass('active')
      songPlayIcon.find('.choice_item__icon').addClass('active')
    })
    /* 监听音视频暂停 */
    player.on('pause', function () {
      console.log('暂停')
      $('.choice_item__icon').removeClass('active')
    })
    /* 监听音视频播放结束后暂停播放 */
    player.on('ended', function () {
      console.log('结束')
      $('.choice_item__icon').removeClass('active')
      userData.choiceSong = Number
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

  /**
   * 默认显示询问年龄页面
   */
  showSection('.part_inquiry')

  // 点击询问年龄页是按钮 - 进入h5
  $('.wrap').on('click', '.inquiry_btn__yes', function () {
    console.log(`🔨 - 询问是否成年是按钮 - 进入h5`)
    showSection('.part_loading')
    loadingPlay()
  })

  // 点击询问年龄页否按钮 - 进入提示未成年页面
  $('.wrap').on('click', '.inquiry_btn__no', function () {
    console.log(`🔨 - 询问是否成年否按钮 - 进入提示未成年页面`)
    showSection('.part_quit')
  })
  // 点击提示未成年页面退出按钮 - 退出H5
  $('.wrap').on('click', '.quit_btn__quit', function () {
    close()
  })

  // 点击选择人物页面按钮 - 高亮当前
  $('.wrap').on('click', '.person_item', function () {
    $('.person_item').removeClass('active')
    $(this).addClass('active')
    userData.choicePerson = $(this).index()
  })
  // 点击选择人物页面决定好了按钮 - 提取选择的值跳转下一页
  $('.wrap').on('click', '.person_btn__ok', function () {
    if (userData.choicePerson === Number) {
      console.log('userData', userData)
      showToast('至少选择一项哦~')
    } else {
      showChoice(0)
    }
  })
  // 切换选择歌曲页面歌曲
  function setChoice(index) {
    userData.choiceSong = Number
    let showSongList = songData[userData.choicePerson].list.slice(
      0 + index * 3,
      3 + index * 3
    )
    let str = ''
    for (let i = 0; i < showSongList.length; i++) {
      const item = showSongList[i]
      str += `<div class="choice_item" data-songId="${item.songId}">
    <div class="choice_item__text">
      <div class="choice_item__songname">${item.songName}</div>
      <div class="choice_item__name">${item.name}</div>
      <div class="choice_item__icon"></div>
    </div>
  </div>`
    }
    $('.choice_list').html(str)
  }
  // 显示选择歌曲页面
  function showChoice() {
    // 移除选择人物页面
    $('.part_person ').removeClass('show')
    // 显示页面
    showSection('.part_choice')
    $(this).addClass('active')
    // 默认显示第一组歌曲 - 一组三首歌曲
    setChoice(0)
  }
  let audioDemo
  // 点击选择歌曲页面按钮 - 高亮当前
  $('.wrap').on('click', '.choice_item__icon', function () {
    if (!$(this).hasClass('active')) {
      $('.choice_item').removeClass('active')
      $('.choice_item__icon').removeClass('active')
      $(this).addClass('active')
      $(this).parents('.choice_item').addClass('active')
      userData.choiceSong = $(this).parents('.choice_item').index()
      // 设置播放器歌曲链接
      audioDemo = new PlayKernelSong({
        songId: $(this).parents('.choice_item').data('songid'),
        index: $(this).parents('.choice_item').index(),
      })
      audioDemo.play()
    } else {
      $('.choice_item__icon').removeClass('active')
      audioDemo.stop()
    }
  })
  // 点击选择歌曲页面按钮 - 高亮当前
  $('.wrap').on('click', '.choice_item', function () {
    if (!$(this).hasClass('active')) {
      $('.choice_item').removeClass('active')
      userData.choiceSong = $(this).index()
      console.log('$(this)', $(this).data('songid'))
      $(this).addClass('active')
      // 设置播放器歌曲链接
      audioDemo = new PlayKernelSong({
        songId: $(this).data('songid'),
        index: $(this).index(),
      })
      audioDemo.play()
    }
  })

  // 当前切换到第几组
  let songIndex = 0
  // 点击选择歌曲页面换一批按钮 - 切换歌单
  $('.wrap').on('click', '.choice_btn__cut', function () {
    // 获取当前歌曲列表可以有多少组歌曲 - 三首歌为一组
    let songLength = songData[userData.choicePerson].list.length
    // 判断当前切换到第几组 是否超出当前歌曲列表
    if (songIndex < songLength / 3 - 1) {
      songIndex++
    } else {
      songIndex = 0
    }
    console.log(songIndex)
    setChoice(songIndex)
    audioDemo.stop()
  })
  let myslider
  // 点击选择歌曲页面就选这首按钮 - 提取选择的值跳转下一页
  $('.wrap').on('click', '.choice_btn__ok', function () {
    if (userData.choiceSong === Number) {
      console.log('userData', userData)
      showToast('至少选择一项哦~')
    } else {
      let str = ''
      for (let i = 0; i < antistopData.length; i++) {
        const item = antistopData[i]
        str += `<div class="lyrics_item">
        <div class="lyrics_item__inner">${item}</div>
      </div>`
      }
      $('.lyrics_list').html(str)
      showSection('.part_lyrics')
      // 滑屏组件初始化
      myslider = new iSlider({
        wrap: '.lyrics_list',
        item: '.lyrics_item',
        lastLocate: false,
        preventMove: false,
        isVertical: false,
        onslide: function (index) {
          userData.choiceLyrics = index
          console.log('当前滑屏页面index: ', index)
        },
      })
      // 暂停
      audioDemo.stop()
    }
  })

  // 点击选择关键词页 - 上一个关键词
  $('.wrap').on('click', '.cut_prev', function () {
    myslider.prev()
  })
  // 点击选择关键词页 - 下一个关键词
  $('.wrap').on('click', '.cut_next', function () {
    myslider.next()
  })

  // 点击选择关键词页
  $('.wrap').on('click', '.lyrics_btn__ok', function () {
    if (userData.choiceLyrics === Number) {
      showToast('至少选择一项哦~')
    } else {
      $('.form_title').text(antistopData[userData.choiceLyrics])
      showSection('.part_form')
    }
  })

  // 点击表单页 - 生成情谊
  $('.wrap').on('click', '.form_btn__create', function () {
    console.log($('.form_input').val())
    if ($('.form_input').eq(0).val() === '') {
      showToast('请填写称呼~')
    } else if ($('.form_input').eq(1).val() === '') {
      showToast('请填写祝福~')
    } else if ($('.form_input').eq(2).val() === '') {
      showToast('请填写署名~')
    } else {
      userData.name = $('.form_input').eq(0).val()
      userData.wish = $('.form_input').eq(1).val()
      userData.signature = $('.form_input').eq(2).val()
      $('.part_form').addClass('form_forbid')
      $('.form_text.form_name').text(userData.name)
      $('.form_text.form_wish').text(userData.wish)
      $('.form_text.form_signature').text(userData.signature)
    }
  })
  // 点击表单页 - 返回
  $('.wrap').on('click', '.form_return', function () {
    $('.part_form').removeClass('form_forbid')
  })
  // 点击表单页 - 分享按钮
  $('.wrap').on('click', '.form_btn__saver', function () {
    let list = ['相思的亲人', '久违的朋友', '相知的TA']
    console.log('选择了哪个歌单', list[userData.choicePerson])
    console.log(
      '选择了哪首歌',
      songData[userData.choicePerson].list[userData.choiceSong]
    )
    console.log('选择了哪个关键词', antistopData[userData.choiceLyrics])
    console.log('所有数据·', userData)
  })
  // 点击表单页 - 去京东寻情义
  $('.wrap').on('click', '.form_btn__go', function () {
    console.log(`🔨 - 去京东寻情义 - 跳转外链`)
    // window.open('http://www.baidu.com');
  })

  $('#formWish').bind('input propertychange', function () {
    var length = $('#formWish').val().length
    $('#already').text(length)
  })
})

/*
 * @Author: Gianni
 * @Date: 2021-09-18 10:06:51
 * @LastEditTime: 2021-10-15 15:04:52
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_bentley\js\index.js
 */
$(function () {
  let selectSceneIndex = 0
  // 创建创建场景选择页轮播
  let selectScene = new Swiper('.select_swiper', {
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 轮播可循环切换
    loop: true,
    // 轮播分页器可点击切换
    paginationClickable: true,
  })

  // 场景选择页 - 点击确认场景按钮
  $('.select_gesture').on('click', function () {
    // 获取当前选中哪一辆车
    selectSceneIndex = selectScene.realIndex
    // 显示下一页
    showBodyPage(selectScene.realIndex)
  })
  // 场景选择页 - 点击上一个场景
  $('.select_operation__prev').click(function () {
    // 返回上一页
    selectScene.slidePrev()
  })
  // 场景选择页 - 点击下一个场景
  $('.select_operation__next').click(function () {
    selectScene.slideNext()
  })

  // 需要播放的原生音频
  let audioUrl = ''
  // 需要播放的songId
  let audioId = ''

  function showBodyPage(index) {
    audioUrl = './audio/test1.mp3'
    // 播放
    let audio1 = new OriginalAudio({ url: audioUrl, loop: true })
    audio1.play()
    $('.page_body')
      .removeClass()
      .addClass(`body_${Number(index) + 1} page_item page_body show`)
    showSection('.page_body')
  }
  // 恢复细节展示页内容
  function recoverBodyPage() {
    $('.body_inner').scrollLeft(0)
    $('.body_operation__hint').text('滑动探索')
  }

  $('.body_inner').scroll(function (event) {
    if ($('.body_gesture').offset().left === 0) {
      recoverBodyPage()
    } else if (
      $('.body_gesture').offset().left + $('.body_gesture').width() / 2 <
      380
    ) {
      $('.body_operation__hint').text('点击光圈继续探索')
    } else {
      $('.body_operation__hint').text('滑动探索')
    }
  })
  // 点击光圈
  $('.body_gesture').on('click', function () {
    recoverBodyPage()
    $('.page_cardoor')
      .removeClass()
      .addClass(
        `cardoor_${Number(selectSceneIndex) + 1} page_item page_cardoor show`
      )
    // 显示车门页
    showSection('.page_cardoor')

    audioUrl = ''
    // 播放
    new OriginalAudio({ url: audioUrl })
  })

  // 车门跳转按钮锁 - 防止多次触发
  let lockNext = false
  // 车门音效播放后跳转时间
  let openCarTime = 1200
  // 打开车门
  function openCar() {
    if (lockNext) {
      return
    } else {
      lockNext = true
      audioUrl = './audio/test2.mp3'
      // 播放
      let audio3 = new OriginalAudio({ url: audioUrl, isPlay: true })
      audioUrl = ''
      audio3.play()
      setTimeout(function () {
        showDetailPage()
      }, openCarTime)
    }
  }
  $('.cardoor_gesture').on('click', function () {
    $(this).addClass('hide')
    openCar()
  })
  $('.cardoor_hint').on('click', function () {
    openCar()
  })

  // 详情页数据
  let detailData = [
    {
      songId: 1703265,
      data: [
        {
          title: '独运匠心，智雅相融',
          text: '宾利三面翻转中控面板(Bentley Rotating Display)\n让超卓技艺与前沿科技缔造非凡格调',
        },
        {
          title: '私享天籁，聆听新境',
          text: 'Naim 倾力打造临场感音乐空间\n演绎听觉的饕餮盛宴',
        },
        {
          title: '华美格调，瞬息倾心',
          text: '5331块菱形切面交织而成的钻石滚花饰面\n于细节处雕琢精致肌理，尽显华美气韵',
        },
      ],
    },
    {
      songId: 125751527,
      data: [
        {
          title: '落座其中，惬意奢享',
          text: '立体放射式菱形格纹融合传统绗缝和刺绣工艺\n手工温情让典雅之美动人呈现',
        },
        {
          title: '灵感飞跃，风华夺目',
          text: '以宾利双翼元素为灵感的座舱设计\n收放自如的灵动线条优雅流淌，尽展华美风姿',
        },
        {
          title: '触启无垠，悦享前程',  
          text: '座舱后排配备触屏式遥控装置（Touch Screen Remote）\n诸多功能尽在掌握，从容优雅一路随行',
        },
      ],
    },
    {
      songId: 102385094,
      data: [
        {
          title: '游刃有余，尽在掌握',
          text: '可分屏式12.3英寸中央触摸屏\n驾乘信息一览无余，从容操控',
        },
        {
          title: '随心所驭，肆意驰骋',
          text: '三种驾驶模式任意切换\n为您提供澎湃卓然，静谧流畅的驾乘体验',
        },
        {
          title: '畅意互联，智享无限',
          text: '先进的My Bentley车联网服务功能\n让您无论身在何处，皆可运筹帷幄',
        },
      ],
    },
    {
      songId: 310637306,
      data: [
        {
          title: '臻美阔境，雅韵天成',
          text: 'Mulliner车型专属三色内饰配色彰显尊雅品味\n宽绰四座配置缔造从容阔境',
        },
        {
          title: '细节之悦，尊雅呈现',
          text: '惊艳的Mulliner 3D木饰车门嵌板\n感触独特技艺，缔造怡人之境',
        },
        {
          title: '触目所及，皆是吸引',
          text: '数字式仪表显示屏让驾驶信息一览无余\n高质感双色方向盘，让奢适触手即享',
        },
      ],
    },
  ]

  let audioDemo
  let isShowGesture = false
  let previewBody

  function showDetailPage() {
    $('.page_detail')
      .removeClass()
      .addClass(
        `detail_${Number(selectSceneIndex) + 1} page_item page_detail show`
      )
    showSection('.page_detail')
    const { data, songId } = detailData[selectSceneIndex]
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      $(`.detail_item${i + 1} .detail_operation__hint`).text(item.title)
      $(`.detail_item${i + 1} .detail_operation__btn`).text(item.text)
    }
    previewBody = new Swiper('.detail_swiper', {
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      loop: true,
      noSwiping: true,
      speed:1000,
      onSlideChangeEnd: function (swiper) {
        if (isShowGesture === true) {
          $('.detail_gesture').addClass('show')
        } else if (Number(swiper.realIndex) === 2) {
          isShowGesture = true
        }
        if (Number(swiper.realIndex) === 0 && isShowGesture === true) {
          $('.detail_swiper').removeClass('swiper-no-swiping')
          $('.detail_operation__cut').addClass('show')
        }
      },
    })
    audioId = songId
    audioDemo = new PlayKernelSong({
      songId: audioId,
      loop: true,
    })
    audioDemo.play()
    $('.cardoor_gesture').removeClass('hide')
  }

  // 恢复内饰页内容
  function recoverDetailPage() {
    $('.detail_gesture').removeClass('show')
    $('.detail_swiper').addClass('swiper-no-swiping')
    $('.detail_operation__cut').removeClass('show')
    isShowGesture = false
    previewBody.destroy(true)
  }
  // 内饰页 - 点击上一个
  $('.detail_operation__prev').click(function () {
    // 返回上一页
    previewBody.slidePrev()
  })
  // 内饰页 - 点击下一个
  $('.detail_operation__next').click(function () {
    previewBody.slideNext()
  })

  $('.page_icon__skip').on('click', function () {
    showSection('.page_station')
    $('.page_station')
      .removeClass()
      .addClass(
        `station_${Number(selectSceneIndex) + 1} page_item page_station show`
      )
  })
  $('.wrap').on('click', '.detail_gesture', function () {
    showSection('.page_station')
    $('.page_station')
      .removeClass()
      .addClass(
        `station_${Number(selectSceneIndex) + 1} page_item page_station show`
      )
  })

  $('.station_operation__btn1').on('click', function () {
    recoverDetailPage()
    audioDemo && audioDemo.stop()
    audioId = ''
    recoverBodyPage()
    showSection('.page_select')
    lockNext = false
    selectSceneIndex = 0
  })

  $('.station_operation__btn2').on('click', function () {
    audioDemo && audioDemo.stop()
    audioId = ''
    showSection('.page_form')
  })

  // 表单校验你
  function formVerify() {
    // 手机号正则 - 可根据需求自行替换
    let regex =
      /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/

    if (
      $('#formName').val() === '' ||
      $('#formAppellation').val() === '' ||
      $('#formPhone').val() === '' ||
      $('#formDealer').val() === ''
    ) {
      $('.modal_hint__text').text('请完整填写信息')
      $('#modalHint').addClass('show')
      return false
    } else if (!regex.test($('#formPhone').val())) {
      $('#modalHint').addClass('show')
      $('.modal_hint__text').text('请正确填写手机号')
    } else if (!$('.form_strategy__check').hasClass('show')) {
      $('#modalHint').addClass('show')
      $('.modal_hint__text').text('请阅读隐私声明并勾选')
    } else {
      return true
    }
  }
  // 点击弹窗确认按钮
  $('.modal_hint__btn').on('click', function () {
    $('#modalHint').removeClass('show')
  })
  // 点击预约品鉴生成海报
  $('.form_btn__subscribe').on('click', function () {
    $('#shareImg').attr(
      'src',
      `./img/share_img${Number(selectSceneIndex) + 1}.jpg`
    )
    formVerify() && showSection('.page_share')
  })
  // 点击直接生成海报按钮
  $('.form_btn__share').on('click', function () {
    $('#shareImg').attr(
      'src',
      `./img/share_img${Number(selectSceneIndex) + 1}.jpg`
    )
    showSection('.page_share')
  })
  // 点击返回上一页
  $('.page_icon__return').on('click', function () {
    recoverBodyPage()
    showSection('.page_select')
    lockNext = false
    audioUrl = ''
    new OriginalAudio({ url: audioUrl })
  })

  // 点击音频小喇叭
  $('.page_icon__voice').on('click', function () {
    // 判断是否存在可播放的音频
    if (audioUrl === '' && audioId === '') {
      return
    }
    palyVoice = !palyVoice
    if (palyVoice) {
      $('.page_icon__voice').removeClass('stop')
      if (audioUrl !== '') {
        console.log(audioUrl)
        let audio1 = new OriginalAudio({ url: audioUrl, loop: true })
        audio1.play()
      } else if (audioId !== '') {
        audioDemo.play()
      }
    } else {
      $('.page_icon__voice').addClass('stop')
      if (audioUrl !== '') {
        new OriginalAudio({ url: '' })
        console.log('暂停', audioUrl)
      } else if (audioId !== '') {
        audioDemo.stop()
      }
    }
  })

  // 点击表单页隐私政策
  $('.form_strategy').on('click', function () {
    console.log('点击表单页隐私政策')
  })
  // 点击表单页隐私政策
  $('.form_strategy__check ').on('click', function () {
    console.log('点击表单页隐私政策勾选')
    if ($('.form_strategy__check').hasClass('show')) {
      $('.form_strategy__check').removeClass('show')
    } else {
      $('.form_strategy__check').addClass('show')
    }
  })

  // 点击分享页返回
  $('.share_icon__left').on('click', function () {
    recoverDetailPage()
    recoverBodyPage()
    showSection('.page_select')
    lockNext = false
    selectSceneIndex = 0
  })
})

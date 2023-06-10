$(function () {
  // 歌曲列表
  let songList = [
    {
      // 列表图
      picture: './img/picture1.jpg',
      songName: '三昧真火',
      // 列表歌曲songId
      songId: 327994470,
      songText: '踏三昧真火步入崭新“斐”凡时刻',
      name: 'NEW 张艺兴/GALI·东',
      // 歌曲类型： 1 -> sq; 2 -> HiRes 
      type: 1,
    },
    {
      picture: './img/picture2.jpg',
      songName: '羊（SHEEP）',
      songId: 204174152,
      songText: '努力努力再努力\n一起做“斐”凡时尚领头SHEEP',
      name: '张艺兴·SHEEP',
      type: 1,
    },
    {
      picture: './img/picture3.jpg',
      songName: '因为你',
      songId: 102178126,
      songText: '因为纯粹而优雅，因为你而“兴”动',
      name: '张艺兴·因为你',
      type: 1,
    },
    {
      picture: './img/picture4.jpg',
      songName: '画卷',
      songId: 327994470,
      songText: '“兴”起国风，挥毫泼墨“斐”凡画卷',
      name: '张艺兴·画卷Remix合辑',
      type: 2,
    },
    {
      picture: './img/picture5.jpg',
      songName: '会好的',
      songId: 254197511,
      songText: '约好了，明天一起“斐”乐！',
      name: '张艺兴·会好的',
      type: 1,
    },
    {
      picture: './img/picture6.jpg',
      songName: '晚安',
      songId: 244926037,
      songText: '把“兴”动放进晚安，把故事留给漫长岁月',
      name: '张艺兴·晚安',
      type: 1,
    },
    {
      picture: './img/picture7.jpg',
      songName: 'BOOM',
      songId: 267341055,
      songText: '“斐”常灵感boom发\n举杯庆祝一场炙热狂欢',
      name: '张艺兴·莲',
      type: 1,
    },
  ]

  // 随机数函数 - 详情页随机展示
  function rand(min, max) {
    return min + Math.round(Math.random() * (max - min))
  }

  let songBox = ''
  for (let i = 0; i < songList.length; i++) {
    const item = songList[i]
    songBox += `
    <div class="home_list__item">
      <div class="item_serial">0${i + 1}</div>
      <div class="item_data">
        <div class="item_picture">
          <img
            class="item_picture__img"
            src="${item.picture}"
            alt=""
          />
        </div>
        <div class="item_song">
          <div class="item_song__title">${item.songName}</div>
          <div class="item_song__type${item.type} item_song__name">${
      item.name
    }</div>
        </div>
      </div>
      <div class="item_icon" data-song-id="${item.songId}"></div>
    </div>`
  }
  // 点击抓取按钮锁
  let lock = false
  $('.home_list__wrap').html(songBox)
  // 点击首页点击抓取音乐盲盒按钮 - 播放抓取动效&&播放序列帧动效
  $('.home_lottery__btn').on('click', function () {
    if (!lock) {
      lock = true
      $('.claw_item').addClass('active')
    }
  })
  // 动画结束 开启点击
  $('.claw_item')[0].addEventListener(
    'animationend',
    function () {
      $('.modal').addClass('show')
      handleLoadingComplete()
    },
    false
  )
  // 点击播放列表播放按钮 - 播放||暂停音乐
  let audioDemo = null
  $('.item_icon').on('click', function () {
    $('.item_icon').removeClass('play')
    console.log($(this).data('songId'))
    $(this).addClass('play')
    audioDemo = new PlayKernelSong({
      songId: $(this).data('song-id'),
    })
    audioDemo.play()
  })



  // 加载帧动画
  var loadingCanvas
  var loadingPreloadQueue = new createjs.LoadQueue()
  // 加载加载页动画素材
  loadingPreloadQueue.loadManifest([
    { id: 'box-0', src: './img/box-0.png' },
    { id: 'box-4', src: './img/box-4.png' },
    { id: 'box-8', src: './img/box-8.png' },
    { id: 'box-12', src: './img/box-12.png' },
    { id: 'box-16', src: './img/box-16.png' },
    { id: 'box-20', src: './img/box-20.png' },
    { id: 'box-24', src: './img/box-24.png' },
  ])

  
  // 随机获取详情页
  detailsId = rand(0, 6)
  // 执行帧动画播放
  function handleLoadingComplete() {
    loadingCanvas = new CanvasAni({
      canvas: 'canvasLoading',
      canvasData: loadData,
      imgSource: loadingPreloadQueue,
      autoPlay: true,
      onEnd: function () {
        // 帧动画停留0.5s再跳转详情页
        setTimeout(function () {
          detailsShow(detailsId)
        }, 500)
      },
    })
  }

  // 显示详情页
  function detailsShow(detailsId) {
    // 音乐播放器存在 ？ 暂停音乐
    if (audioDemo) {
      audioDemo.stop()
    }
    // 获取当前详情页id
    detailsId = detailsId
    // 移除首页显示状态
    $('.page_home').removeClass('show')
    // 显示详情页
    $('.page_details').addClass('show')
    // 隐藏弹窗
    $('.modal').removeClass('show')
    // 获取歌名
    $('.page_details__title').text(songList[detailsId].songName)
    // 获取介绍
    $('.page_details__text').text(songList[detailsId].songText)
    // 更改碟片
    $('.page_details__cd')
      .removeClass()
      .addClass(`page_details__cd${detailsId + 1} page_details__cd stop`)
  }
  // 点击详情页歌曲播放 - 播放音乐
  $('.page_details__icon').on('click', function () {
    audioDemo = new PlayKernelSong({
      songId: songList[detailsId].songId,
    })
    audioDemo.play()
  })
  // 点击详情页返回
  $('.page_details__return').on('click', function () {
    //无动画效果の滚动到顶部 也可解决ios调用键盘之后的空白问题
    $('.page_inner').scrollTop(0)
    $('.claw_item').removeClass('active')
    $('.page_home').addClass('show')
    $('.page_details').removeClass('show')
    lock = false
    if (audioDemo) {
      audioDemo.stop()
    }
  })

  //! 隐藏入口【测试专用 - 不需要可以移除】 - 点击首页歌曲列表头像进入对应详情页
  $('.home_list__wrap').on('click', '.item_picture__img', function () {
    console.log($(this).parents('.home_list__item').index())
    if (!lock) {
      lock = true
      $('.modal').addClass('show')
      handleLoadingComplete()
      detailsId = $(this).parents('.home_list__item').index()
    }
  })

})

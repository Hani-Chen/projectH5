$(function () {
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
   * 默认显示load页面
   */
  showSection('.pare_load')
  // 逻辑（判断是否支持自动播放的）
  var isPlay = false

  /**
   */
  $('.wrap').on('click', '.load_img', function () {
    loadVideoShow()
  })
  /**
   * 显示视频页
   */
  function loadVideoShow() {
    // 显示加载loading
    $('.load_gif').addClass('show')
    // 两秒后显示视频逻辑 - 正常应该是视频加载完成后执行
    setTimeout(function () {
      // 显示视频页
      showSection('.pare_video')
      // 播放视频
      $('.video_item')[0].play()
      // 是否支持自动播放 - 不支持两秒直接跳转 - 逻辑（判断是否支持自动播放的）
      setTimeout(function () {
        if (!isPlay) {
          console.log('不支持');
          showSection('.part_home')
          establish()
        }
      }, 3000)
    }, 2000)
  }
  // loading页 - 监听播放结束后 - 暂停播放
  $('.video_item')[0].addEventListener('ended', function () {
    showSection('.part_home')
    establish()
  })
  // loading页 - 监听播放 - 伪逻辑（判断是否支持自动播放的）
  $('.video_item')[0].addEventListener('play', function () {
    isPlay = true
  })
  /**
   * 工具函数 - 按ID显示弹窗
   * @param {*} id 需要显示的的元素id
   * 用法:  showSection('test')
   *
   */
  function showModal(id) {
    $('#' + id).addClass('show')
  }

  /**
   * 全局 - 点击活动规则 - 显示QQ音乐默认活动规则弹窗
   */
  $('.wrap').on('click', '.rule_btn', function () {
    console.log(`🔨 - 活动规则 - 显示QQ音乐默认活动规则弹窗`)
    showModal('modalShore')
  })
  /**
   * 全局 - 点击自己去购票 - 跳转外链
   */
  $('.wrap').on('click', '.btn_tickets__text', function () {
    console.log(`🔨 - 自己去购票 - 跳转外链`)
    // window.open('http://www.baidu.com');
  })

  /* 全局 - 点击弹窗关闭按钮 - 隐藏弹窗 */
  $('.modal_close').on('click', function () {
    // 移除弹窗显示类
    $(this).parents('.modal').removeClass('show')
  })
  var homeContentSlide
  function establish() {
    /**
     * 首页 - 创建底部轮播
     */
    homeContentSlide = new iSlider({
      wrap: '.site_content',
      item: '.site_content__item',
      lastLocate: false,
      isVertical: false,
      onslide: function (index) {
        // 切换单个站点高亮属性
        changeTab(index)
        console.log('当前滑屏页面index: ', index)
        for (let i = 0; i < $('.item_video').length; i++) {
          $('.item_video__shade').removeClass('hide')
          $('.item_video')[i].pause()
        }
      },
    })
    /**
     * 首页 - 创建底部轮播
     */
    var homeBaseSlide = new iSlider({
      wrap: '.base_banner',
      item: '.base_banner__item',
      lastLocate: false,
      isVertical: false,
    })
  }
  /**
   * 首页 - 改变单个站点当前选中的tab
   * @param {Number} index 当前tab的下标值
   */
  function changeTab(index) {
    // 统一移除tab高亮属性
    $('.site_tab__btn').removeClass('active')
    // 给当前选中的tab添加高亮属性
    $('.site_tab__item').eq(index).children('.site_tab__btn').addClass('active')
    if ($('.site_content__item.play .item_video')[0]) {
      $('.site_content__item.play .item_video')[0].addEventListener(
        'ended',
        function () {
          $('.item_video__shade').removeClass('hide')
        }
      )
      // 首页 - 监听视频暂停
      $('.site_content__item.play .item_video')[0].addEventListener(
        'pause',
        function () {
          $('.item_video__shade').removeClass('hide')
        }
      )
      // 首页 - 监听视频播放
      $('.site_content__item.play .item_video')[0].addEventListener(
        'play',
        function () {
          $('.item_video__shade').addClass('hide')
        }
      )
    }
  }
  /**
   * 首页 - 点击站点击单个tab - 切换站点内容
   */
  $('.wrap').on('click', '.site_tab__item', function () {
    console.log(`🔨 - 单个站点tab - 获取单个站点下标`, $(this).index())
    // 获取当前元素的按钮元素是否是置灰状态 - 如果是禁止执行后续逻辑
    if ($(this).children('.site_tab__btn').hasClass('gray')) return false
    // 恢复蒙层
    $('.item_video__shade').removeClass('hide')
    // 暂停视频
    $('.item_video')[0].pause()
    // 切换单个站点高亮属性
    changeTab($(this).index())
    homeContentSlide.slideTo($(this).index())
  })
  changeTab(0)

  /**
   * 首页 - 单个站点视频点击 - 播放视频
   */
  $('.wrap').on(
    'click',
    '.site_content__item.play .item_video__shade',
    function () {
      // 恢复蒙层
      $('.item_video__shade').removeClass('hide')
      $('.site_content__item.play .item_video__shade').addClass('hide')
      $('.site_content__item.play .item_video')[0].play()
    }
  )
  /**
   * 首页 - 底部轮播 - 跳转外链
   */
  $('.wrap').on('click', '.base_banner__item ', function () {
    console.log(`🔨 - 单个底部轮播 - 获取外链 - 跳转外链`, $(this).data('url'))
    // 跳转外链
    // window.open($(this).data('url'));
  })

  /**
   * 首页 - 单个站点预约观看 - 跳转详情页
   */
  $('.wrap').on('click', '.btn_look', function () {
    console.log(`🔨 - 单个站点预约观看 - 跳转详情页`, $(this).data('index'))
    // 暂停视频
    for (let i = 0; i < $('.item_video').length; i++) {
      $('.item_video')[i].pause()
      $('.item_video__shade').removeClass('hide')
    }
    // 如果已预约
    if ($(this).children('.item_btn').hasClass('.gray')) {
      // 显示详情页
      showSection('.part_details')
    } else {
      // 显示详情页
      showSection('.part_details')
    }
  })

  /**
   * 详情页 - 点击上一页 - 显示首页
   */
  $('.wrap').on('click', '.btn_return', function () {
    console.log(`🔨 - 单个详情页 - 返回首页`)
    // 暂停详情页视频
    $('.details_video')[0].pause()
    // 显示首页
    showSection('.part_home')
  })

  // 详情页 - 播放结束后暂停播放
  $('.details_video')[0].addEventListener('ended', function () {
    $('.details_video__shade').removeClass('hide')
  })
  // 详情页 - 监听视频暂停
  $('.details_video')[0].addEventListener('pause', function () {
    $('.details_video__shade').removeClass('hide')
  })
  // 详情页 - 监听视频播放
  $('.details_video')[0].addEventListener('play', function () {
    $('.details_video__shade').eq(0).addClass('hide')
  })

  /**
   * 详情页 - 单个站点视频点击 - 播放视频
   */
  $('.wrap').on('click', '.details_video__shade', function () {
    // 隐藏蒙层
    $('.details_video__shade').eq(0).addClass('hide')
    // 播放视频
    $('.details_video')[0].play()
  })
  /**
   * 详情页 - 抽取vip门票 - 跳转抽奖页
   */
  $('.wrap').on('click', '.btn_go__tickets', function () {
    /**
     * 显示抽奖页
     * 用法: showSection('.test') showSection('#test')
     */
    // showSection()
  })
})

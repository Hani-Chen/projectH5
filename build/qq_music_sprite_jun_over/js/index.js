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
  showSection('.part_home')
  establish()

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
  }
  /**
   * 首页 - 点击站点击单个tab - 切换站点内容
   */
  $('.wrap').on('click', '.site_tab__item', function () {
    console.log(`🔨 - 单个站点tab - 获取单个站点下标`, $(this).index())
    // 获取当前元素的按钮元素是否是置灰状态 - 如果是禁止执行后续逻辑
    if ($(this).children('.site_tab__btn').hasClass('gray')) return false
    // 切换单个站点高亮属性
    changeTab($(this).index())
    homeContentSlide.slideTo($(this).index())
  })
  changeTab(0)
  /**
   * 首页 - 单个站点点击回看
   */
  $('.wrap').on('click', '.btn_look', function () {
    console.log(`🔨 - 单个站点点击回放`, $(this).data('index'))
  })
  /**
   * 首页 - 底部轮播 - 跳转外链
   */
  $('.wrap').on('click', '.base_banner__item ', function () {
    console.log(`🔨 - 单个底部轮播 - 获取外链 - 跳转外链`, $(this).data('url'))
    // 跳转外链
    // window.open($(this).data('url'));
  })
})

/*
 * @Author: Gianni
 * @Date: 2021-08-31 16:00:56
 * @LastEditTime: 2021-09-14 21:03:26
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_brief\js\index.js
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
  // 默认显示页面
  showSection('.page_noe')

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

  let state = false
  // 勾选用户须知
  $('.wrap').on('change', '#pageProtocolSelect', function () {
    if ($('#pageProtocolSelect').get(0).checked) {
      state = true
      $('.page_protocol__circle').addClass('active')
    } else {
      state = false
      $('.page_protocol__circle').removeClass('active')
    }
  })
  // 点击立即领取按钮 - 判断是否勾选协议
  $('.wrap').on('click', '.page_protocol__btn', function () {
    if (!state) {
      showToast('请先阅读并同意协议')
    } else {
      // 已勾选协议
    }
  })
  $(`.page_item1`).addClass('ani')
  let timer = null
  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination',
    effect: 'fade',
    loop: false,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    autoplayStopOnLast: true,
    disableOnInteraction: false,
    paginationClickable: true,
    onTransitionEnd: function (swiper) {
      console.log('结束', `.page_item${Number(swiper.activeIndex) + 1}`)
      $('.page_item').removeClass('ani')
      $('.page_item3').removeClass('page_protocol')
      $(`.page_item${Number(swiper.activeIndex) + 1}`).addClass('ani')
      if (swiper.activeIndex == 2) {
        playPageAni()
      } else {
        // 显示轮播小圆点
        $('.swiper-pagination').show()
        $('.page_item2 .page_item__mobile').show()
        $('.page_item2 .page_item__adorn2').show()

        if (timer) {
          clearTimeout(timer)
        }
      }
      swiper.activeIndex >= 2 ? setSwiperLoop(false) : setSwiperLoop(true)
    },
  })

  function setSwiperLoop(loop) {
    if (loop) {
      mySwiper.startAutoplay()
    } else {
      mySwiper.stopAutoplay()
    }
  }
  function playPageAni() {
    // 第三页动画结束
    $('.page_item__title3')[0].addEventListener(
      'animationend',
      function () {
        timer = setTimeout(function () {
          $('.page_item2 .page_item__mobile').hide()
          $('.page_item2 .page_item__adorn2').hide()
          $('.page_item3').addClass('page_protocol')
          // 显示轮播小圆点
          $('.swiper-pagination').hide()
        }, 1000)
      },
      false
    )
  }

  // 点击立即领取按钮 - 判断是否勾选协议
  $('.wrap').on('click', '.page_rule', function () {
    console.log('点击了活动规则')
  })

  // 勾选用户须知
  $('.page_protocol__text').on('click', function (e) {
    console.log('12321')
    e.stopPropagation()
  })
})

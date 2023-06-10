$(function() {
  var headerSwiper = new Swiper('#headerSwiper', {
    loop: true, // 循环模式选项
    autoplay: {
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
      clickable: true
    }
  })
  $('.middle-more-text').click(function() {
    $('.middle-list').toggleClass('show')
    $('.middle-more-arrows').toggleClass('expand')
    if ($('.middle-list').hasClass('show')) {
      $('.middle-more-text span').text('收起')
    } else {
      $('.middle-more-text span').text('查看更多')
    }
  })

  // 当旋转屏幕时 更新size值
  window.adaptive.setRemCallback = function() {
    setTimeout(function() {
      console.log(123)
      // headerSwiper.updateSize()
      headerSwiper.update()
    }, 1000)
  }
  $('body').resize(function() {
    setTimeout(function() {
      console.log(123)
      // headerSwiper.updateSize()
      headerSwiper.update()
    }, 1000)
  })
})

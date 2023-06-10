$(function () {
  let swiperIndex = 1
  setInterval(function () {
    swiperIndex++
    $('.page-swiper-item').removeClass('show')
    $(`.page-swiper-item${swiperIndex}`).addClass('show')
    swiperIndex === 3 && (swiperIndex = 0)
  }, 4000)
  $('.go-linke').on('click', function () {
    window.open('http://www.comfortworkspace.com/?la=en')
  })

  function screenFuc() {
    var winWidth = $(window).width()
    console.log(winWidth);
    if (winWidth <= 750) {
      //屏幕小于768px
      $('.page-item10-img').removeClass('show')
      $('.page-item10-img1').addClass('show')
      $('.page-item8').addClass('hide-scrollbar')
    } else {
      $('.page-item8').removeClass('hide-scrollbar')
      $('.page-item10-img').removeClass('show')
      $('.page-item10-img2').addClass('show')
    }
  }
  ;(window.onresize = function () {
    screenFuc()
    console.log(123);
  })()
  screenFuc()
})

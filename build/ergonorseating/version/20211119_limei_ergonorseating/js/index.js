$(function () {
  let swiperIndex = 1
  setInterval(function () {
    swiperIndex++
    $('.page-swiper-item').removeClass('show')
    $(`.page-swiper-item${swiperIndex}`).addClass('show')
    swiperIndex === 3 && (swiperIndex = 0)
  }, 4000)
  $('.go-linke').on('click',function () {
    window.open('http://www.comfortworkspace.com/?la=en');
  })
})


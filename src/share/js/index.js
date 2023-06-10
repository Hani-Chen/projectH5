
// 视频轮播
var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'my-bullet-active',
    clickable: true
  }
})

$(window).resize(function(){
  setTimeout(function(){
    mySwiper.updateSize()
    mySwiper.update(true)
  },1000)
})
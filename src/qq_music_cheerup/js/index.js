// 点击更多展示更多内容
$('.content_text_more').on('click',function() {
  $('.content_text').toggleClass('show')
  if($('.content_text').hasClass('show')) {
    $('.more_text').text('点击收起更多')
  }else {
    $('.more_text').text('点击查看更多')
  }
})
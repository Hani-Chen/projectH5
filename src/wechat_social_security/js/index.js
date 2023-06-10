$(function() {
  // 自动跳转
  var timer = setTimeout(function() {
    $('.section-redenvelope').removeClass('show')
    $('.section-get').addClass('show')
  }, 5000)

  // 点击领取红包
  $('.section-redenvelope').click(function() {
    $(this).removeClass('show')
    $('.section-get').addClass('show')
    // 如果用户点击 清除自动跳转
    window.clearTimeout(timer)
  })
  // 点击我也要领
  $('.get-btn').click(function() {
    $('.section').removeClass('show')
    $('.section-main').addClass('show')
  })
  if ($('.help-wrap').hasClass('list-show')) {
    // 动态改变助力好友个数
    $('.help-title-number').text($('.help-list  li').length)
  }
  // 点击查看更多助力好友
  $('.help-more').click(function() {
    $('.help-list').toggleClass('help-list-show')
    if ($('.help-list').hasClass('help-list-show')) {
      $('.help-more span').text('点击收起更多')
    } else {
      $('.help-more span').text('点击展开更多')
    }
  })

  // 点击提现
  $('.receive-btn-withdraw').click(function() {
    /* 如果没有绑定社保卡 */
    // 绑定社保卡弹窗
    // $('#modalBinding').addClass('show')
    // $('.modal-binding-body').addClass('show')

    /* 如果有绑定社保卡 */
    // 提现成功按钮
    $(this).addClass('withdraw-yet')
    $('.receive-btn-withdraw span').text('已提现到零钱')
    $('.receive-pop').addClass('show')
  })

  // 点击我要领更多
  $('.receive-btn-get').click(function() {
    $('#modalShore').addClass('show')
    $('.receive-pop').removeClass('show')
  })
  // 点击提示分享框
  $('.receive-pop').click(function() {
    $('#modalShore').addClass('show')
    $(this).removeClass('show')
  })

  // 点击取消按钮事件
  $('#modalBindingBancelBtn').click(function() {
    $(this)
      .parents('.modal')
      .removeClass('show')
    $('.modal-binding-body').removeClass('show')
  })

  // 弹窗关闭按钮事件
  $('.modal-bg').click(function() {
    $(this)
      .parents('.modal')
      .removeClass('show')
    $('.modal-binding-body').removeClass('show')
  })

  // 监听滚动
  $(window).scroll(function() {
    $('#modalShore').removeClass('show')
    $('.receive-pop').removeClass('show')
  })
})

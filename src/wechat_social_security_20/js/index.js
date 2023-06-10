// 点击首页领取健康金
$('.envelope-btn').on('click', function() {
  // 情况一 - 未绑卡用户领取页面
  $('.index-content').removeClass('show')
  $('.get-content').addClass('show')
  $('.redpackets').addClass('show')

  // // 情况二 - 已绑卡用户领取页
  // $('.index-content').removeClass('show')
  // $('.get-content').addClass('show')
  // $('.examine').addClass('show')

  // // // 情况三 - 活动结束
  // $('.redpackets').removeClass('show')
  // $('.activityend').addClass('show')
})

// 点击未绑卡用户页面 - 提现到零钱
$('.redpackets-btn').on('click', function() {
  // // 情况一 - 显示绑定社保卡弹窗
  // $('#modalBinding').addClass('show')

  // 情况二 - 显示提现规则 规则1
  // $('#modalRules1').addClass('show')
  // $('body').css({'overflow':'hidden'})
  // 情况二 - 显示提现规则 规则2
  $('#modalRules2').addClass('show')
  $('body').css({ overflow: 'hidden' })

  // // 情况三 - 提现成功
  // $('#modalWithdraw').addClass('show')
  // $('body').css({'overflow':'hidden'})
  
})

// 当弹出层显示时禁止滚动
document.body.addEventListener('touchmove', function (e) {
  if($('.modal').hasClass('show')){
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  }
}, {passive: false});

// 点击确定按钮
$('.modal-confirm-btn').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css({ overflow: '' })
})

// 点击提现成功的确定按钮
$('#modalWithdraw .modal-confirm-btn').on('click', function() {
  $('.redpackets-btn').addClass('withdraw')
  $('.redpackets-btn').text('已提现')
  $('.redpackets-title').text('')
  $('.redpackets-text span').text('0.00')
})

// 点击活动结束绑卡按钮
$('.activityend-btn').on('click', function() {
  $('#modalBinding').addClass('show')
})


// 点击绑定社保卡
$('.modal-binding-btn').on('click', function() {
  alert('点击了绑定社保卡')
})

// 点击弹窗蒙层 - 关闭弹窗
$('.modal-bg').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css({ overflow: '' })
})

// 点击查看我的电子社保卡
$('.examine-btn').on('click', function() {
  alert('点击了查看我的电子社保卡')
})

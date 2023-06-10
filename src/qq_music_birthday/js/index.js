/**
 * 按ID显示弹窗
 */
function showModal(id) {
  $('#' + id).addClass('show')
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show')
}

/* 点击弹窗关闭按钮 - 隐藏弹窗 */
$('.modal_close').on('click', function () {
  // 移除弹窗显示类
  $(this).parents('.modal').removeClass('show')
})

$('.btn_invite').on('click', function() {
  showModal('modalInvite')
})

$('.btn_share').on('click', function() {
  showModal('modalShore')
})
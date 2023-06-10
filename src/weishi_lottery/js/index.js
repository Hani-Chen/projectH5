/* 2019-12-17 Edit - 弹窗显示逻辑编写 S */

/**
 *
 * @param {number} modalIndex
 * 0 - 提示翻倍弹窗
 * 1 - 翻倍成功弹窗
 * 2 - 未看完视频提示弹窗
 * 3 - 提示领取红包弹窗
 * 4 - 提示分享弹窗
 * 5 - 提示助力弹窗
 * 6 - 查询中奖结果弹窗
 * 7 - 拆开礼包弹窗
 * 8 - 助力结束后弹窗
 * 9 - 下注弹窗
 */
function showModal(modalIndex) {
  $('.modal').removeClass('show')
  $('.modal  .modal-inner').addClass('pulse')
  $('body').css('overflow', 'hidden')
  if (modalIndex == 0) {
    // 提示翻倍弹窗
    console.log('提示翻倍弹窗')
    $('#modalVideoDouble').addClass('show')
    $('#modalVideoDouble .modal-inner').removeClass('pulse')
  } else if (modalIndex == 1) {
    // 翻倍成功弹窗
    console.log('翻倍成功弹窗')
    $('#modalHintDouble').addClass('show')
    $('#modalHintDouble .modal-inner').removeClass('pulse')
  } else if (modalIndex == 2) {
    // 未看完视频提示弹窗
    console.log('未看完视频提示弹窗')
    $('#modalUnfinished').addClass('show')
    $('#modalUnfinished .modal-inner').removeClass('pulse')
  } else if (modalIndex == 3) {
    // 提示领取红包弹窗
    console.log('提示领取红包弹窗')
    $('#modalGift').addClass('show')
    $('#modalGift .modal-inner').removeClass('pulse')
  } else if (modalIndex == 4) {
    // 提示分享弹窗
    console.log('提示分享弹窗')
    $('#modalShare').addClass('show')
    $('#modalShare .modal-inner').removeClass('pulse')
  } else if (modalIndex == 5) {
    // 提示助力弹窗
    console.log('提示助力弹窗')
    $('#modalHelp').addClass('show')
    $('#modalHelp .modal-inner').removeClass('pulse')
  } else if (modalIndex == 6) {
    // 查询中奖结果弹窗
    console.log('查询中奖结果弹窗')
    $('#modalInquire').addClass('show')
    $('#modalInquire .modal-inner').removeClass('pulse')
  } else if (modalIndex == 7) {
    // 拆开礼包弹窗
    $('#modalOpenGift').addClass('show')
    $('#modalOpenGift .modal-inner').removeClass('pulse')
    console.log('modalOpenGift')
  } else if (modalIndex == 8) {
    // 助力结束后弹窗
    $('#modalHelpOver').addClass('show')
    $('#modalHelpOver .modal-inner').removeClass('pulse')
    console.log('modalHelpOver')
  } else if (modalIndex == 9) {
    // 下注弹窗
    $('#modalBet').addClass('show')
    $('#modalBet .modal-inner').removeClass('pulse')
    console.log('下注弹窗')
  }
}
showModal(9)
// 点击弹窗 - 关闭按钮 - 关闭弹窗
$('.modal-close').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css('overflow', 'auto')
})

// 点击弹窗 - 蒙层 - 关闭弹窗
$('.modal-bg').on('click', function() {
  $('.modal').removeClass('show')
  $('body').css('overflow', 'auto')
})
/* 19-12-17 Edit - 弹窗显示逻辑 E */

/* 19-12-18 Edit - 投注逻辑 S */

/**
 * toast信息工具函数
 */
function showToast(str) {
  var $toast = $('<div class="toast-item">' + str + '</div>')
  $('.page-wrap').append($toast)
  setTimeout(function() {
    $toast.animate({ opacity: 0 }, 300, null, function() {
      $toast.remove()
    })
  }, 1500)
}

// 抽奖模块
function Goods(){
  // 中奖率
  // this.xxx = 0;
  
}

Goods.prototype.init = function(opt) {
  this.id = 1;
  // 用户余额
  this.allMoney = opt.allMoney;
  // 当前需要下注商品价值
  this.price = opt.price;
}


function User(){}

User.prototype.init = function(opt){
  this.id = 1;

  // 用户余额
  this.allMoney = opt.allMoney;
  
}

var user = new User();




var goods  = new Lottery();

lottery.init({
  allMoney: 100,
  price: 20
})

console.log(lottery);



// 用户余额
var allMoney = 3
// 当前需要下注商品价值
var price = 20


bet(allMoney, price)
/**
 * 
 * @param {number} allMoney 用户余额
 * @param {number} price 当前下注商品总价格
 */
function bet(allMoney, price) {
  // 已经投注 - 押注数量
  var betNumber = parseInt($('#betNumber').val())
  // 当前下注的商品总价格
  $('.bet-price').text(price)
  // 当前用户余额
  $('.bet-balances').text(allMoney)

  /**
   * 下注 - 加注
   */
  function augment(dom) {
    // 下注减注按钮 - 添加高亮
    $('.btn-bet').addClass('active')
    betNumber++
    // 如果投注数量大于当前用户余额
    if (betNumber >= allMoney) {
      showToast('夺宝币不足')
      betNumber = allMoney
      $(dom).removeClass('active')
    } else if (betNumber >= price) {
      // 如果投注数量大于当前商品总价
      showToast('达到商品最高价了')
      betNumber = price
      $(dom).removeClass('active')
    }
    return betNumber
  }

  /**
   * 下注 - 减注
   */
  function decrease(dom) {
    // 下注减注按钮 - 添加高亮
    $('.btn-bet').addClass('active')
    betNumber--
    // 如果下注数量小于0
    if (betNumber <= 0) {
      showToast('下注不能小于0')
      betNumber = 0
      $(dom).removeClass('active')
    }
    return betNumber
  }

  /**
   * 下注 - 全投
   */
  function betAll() {
    $('.btn-bet').addClass('active')
    if (price >= allMoney) {
      showToast('夺宝币不足')
      betNumber = allMoney
      $('.btn-puls').removeClass('active')
    } else if (allMoney >= price) {
      showToast('达到商品最高价了')
      betNumber = price
      percentage(betNumber, price)
      $('.btn-puls').removeClass('active')
    } else {
      betNumber = price
    }
    return betNumber
  }

  /**
   * 下注 - 计算百分比
   * @param {Number} betNumber 当前下注数
   * @param {Number} price 商品总价
   */
  function percentage(betNumber, price) {
    return (betNumber / price) * 100
  }

  /**
   * 下注后改变百分比状态
   */
  function changeState(calculatedVal) {
    // 改变input 值
    $('#betNumber').val(calculatedVal)
    $('#betNumber')
    // 展示百分比
    $('.bet-percent').text(
      percentage(parseInt(calculatedVal), price).toFixed(1) + '%'
    )
  }

  // 点击加注
  $('.btn-puls').on('click', function() {
    // 调用加注函数 获取加注后数值
    var calculatedVal = augment('.btn-puls')
    // 改变百分比
    changeState(calculatedVal)
  })

  // 下注弹窗 - 点击减注
  $('.btn-subtract').on('click', function() {
    // 调用减注函数 获取减注后数值
    var calculatedVal = decrease('.btn-subtract')
    // 改变百分比
    changeState(calculatedVal)
  })

  // 下注弹窗 - 手动输入下注数量
  $('#betNumber').on('change', function() {
    $('.btn-bet').addClass('active')
    // 如果输入小于等于0
    if ($('#betNumber').val() <= 0) {
      showToast('下注不能小于0')
      $('#betNumber').val('0')
      $('.btn-subtract').removeClass('active')
    } else if ($('#betNumber').val() >= allMoney) {
      // 如果输入大于或等于所持金额
      showToast('夺宝币不足')
      $('#betNumber').val(allMoney)
      $('.btn-puls').removeClass('active')
    }

    // 如果输入大于商品总价格
    if ($('#betNumber').val() >= price) {
      $('#betNumber').val(price)
      $('.btn-puls').removeClass('active')
    }
    betNumber = $('#betNumber').val()
    changeState(betNumber)
  })

  // 下注弹窗 - 点击全部投注
  $('.bet-all').on('click', function() {
    changeState(betAll())
  })
}

/* 19-12-18 Edit - 投注逻辑 E */

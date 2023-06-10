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

/**
 * 点击关闭按钮隐藏弹窗
 */
$('.modal_close').on('click', function () {
  $(this).parents('.modal').removeClass('show')
})

/**
 * 抽奖次数
 */
var limit = 2

/**
 * 按钮可点击的状态
 * 0 ==> 可点击
 * 1 ==> 不可点击
 */
var status = 0

/**
 * 抽奖函数 
 * @param {Number} designated 指定的中奖数字
 * 传数字1 ==> 中满1000减200 (200的优惠券)
 * 传数字2 ==> 中两个月豪华绿钻
 * 传数字3 ==> 满20.1可用 (20的优惠券)
 * 传数字4 ==> 中两个月豪华绿钻
 * 传数字5 ==> 满249减50 (50的优惠券)
 * 传数字6 ==> 中两个月豪华绿钻
 * 传数字7 ==> 满10.01可用 (10的优惠券)
 * 传数字8 ==> 中两个月豪华绿钻
 * 奖品数字为按照抽奖转盘顺时针排序
 */
function lotteryFun(designated) {
  //   移除奖品弹窗的类
  $('.modal_prize_wrap').removeClass().addClass('modal_prize_wrap')
  // 如果传入指定中奖数值 和 按钮状态可点击时
  if (designated && status == 0) {
    // index ==> 抽奖奖品下标 numberTurns ==> 抽奖旋转圈数 speed ==> 抽奖旋转速度
    var index = 0; numberTurns = 0; speed = 0
    // 更改按钮点击状态
    status = 1

    function lottery() {
      speed++
      index++
      $('.lottery_item').removeClass('active')
      $('.lottery_item' + index).addClass('active')
      // 如果旋转到第十圈 并且 指定中奖数字  等于 当前抽奖奖品下标
      if (numberTurns > 10 && designated == index) {
        // 定时器清零
        speed = 0
        // 过500毫秒 显示中奖弹窗
        setTimeout(function () {
          // 恢复抽奖按钮动画
          $('.lottery_btn').addClass('animation')
          // 显示中奖弹窗
          prizeFun(designated)
          // 当定时器结束时 改变抽奖按钮状态 可点击
          status = 0
          // 抽奖圈数归零
          numberTurns = 0
        }, 500)
      } else {
        setTimeout(lottery, speed)
      }
      if (index == 8) {
        index = 0
        numberTurns++
      }
    }
    setTimeout(lottery, 10)
  }
}

/**
 *
 * @param {Number} prizeNumber 配合抽奖函数使用 显示 中奖弹窗
 */
function prizeFun(prizeNumber) {
  if (prizeNumber == 1) {
    $('.modal_prize_wrap').addClass('prize_3')
    showModal('modalPrize')
  } else if (prizeNumber == 3) {
    $('.modal_prize_wrap').addClass('prize_4')
    showModal('modalPrize')
  } else if (prizeNumber == 5) {
    $('.modal_prize_wrap').addClass('prize_2')
    showModal('modalPrize')
  } else if (prizeNumber == 7) {
    $('.modal_prize_wrap').addClass('prize_1')
    showModal('modalPrize')
  } else if (
    prizeNumber == 2 ||
    prizeNumber == 4 ||
    prizeNumber == 6 ||
    prizeNumber == 8
  ) {
    $('.modal_prize_wrap').addClass('prize_5')
    showModal('modalPrize')
  }
}

// 点击抽奖
$('.lottery_btn').on('click', function () {
  // 移除抽奖按钮动画
  $(this).removeClass('animation')
  // 获取中奖数字
  var number = Math.floor(Math.random() * 8 + 1)
  // 如果拥有抽奖次数 和 按钮可以点击
  if (limit > 0 && status == 0) {
    // 次数减一
    limit--
    // 执行抽奖函数传入中奖数字
    lotteryFun(number)
  } else if (limit <= 0 && status == 0) {
    // 没有抽奖次数 和 按钮不可以点击 
    showModal('modalHint')
  }
})

// 点击活动规则按钮 显示 活动规则弹窗
$('.btn_rule').on('click', function () {
  showModal('modalRule')
})
// 点击我的奖品按钮 显示 我的奖品弹窗
$('.btn_me').on('click', function () {
  showModal('modalMyprize')
})

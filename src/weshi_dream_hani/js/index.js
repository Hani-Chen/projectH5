/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection('.test') showSection('#test')
 *
 */
var $prevSection
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass('show')
  }
  $prevSection = $(section)
  $prevSection.addClass('show')
}

/**
 * 工具函数 - 倒计时
 * 用法: 
 * conntDown().lastDay ==> 天数
 * conntDown().lastHour ==> 时
 * conntDown().lastMinute ==> 分
 * conntDown().lastSecond ==> 秒
 *
 */
function conntDown() {
  var targetDate = new Date(2021, 0, 1)
  var currentDate = new Date()

  var targetTime = Math.floor(targetDate.getTime() / 1000)
  var currentTime = Math.floor(currentDate.getTime() / 1000)
  var timeDistance = targetTime - currentTime

  var lastDay = parseInt(timeDistance / 86400)
  var lastHour = parseInt((timeDistance / 3600) % 24)
  var lastMinute = parseInt((timeDistance / 60) % 60)
  var lastSecond = parseInt(timeDistance % 60)

  document.title = '2020只剩' + parseInt((timeDistance / 86400) / 30) + '个月，拒绝混日子'
  // 返回值 lastDay ==> 天数 lastHour ==> 时 lastMinute ==> 分 lastSecond ==> 秒  
  return {lastDay,lastHour,lastMinute,lastSecond}
}

// 显示首页
function showStart() {
  canvasCollect.startLine = new CanvasAni({
    canvas: 'startLine',
    // canvasData: loadHgData,
    canvasData: startLineData,
    imgSource: sourceCollect,
    autoPlay: false,
    // fps: 5,
    loop: true,
  })
  canvasCollect.startSand = new CanvasAni({
    canvas: 'startSand',
    // canvasData: loadHgData,
    canvasData: startSandData,
    imgSource: sourceCollect,
    autoPlay: true,
    // fps: 5,
    loop: true,
  })
  $('.loading-wrap')
    .addClass('active')
    .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
      showSection('.scetion-start')
      setInterval(function() {
        $('#day').text(conntDown().lastDay)
        $('#tHour').text(conntDown().lastHour)
        $('#tMinute').text(conntDown().lastMinute)
        $('#tSecond').text(conntDown().lastSecond)
      },1000)
      // console.log(123);
      // canvasCollect.startLine.play()
      $(this).animate({ opacity: 0 }, 500, null, function () {
        console.log($(this))
        canvasCollect.startLine.play()
        canvasCollect.startSand.play()
        $('.section-loading').remove()
      })
    })
}

// 首页，启动按钮
$('#btnStart').click(function() {
  showSelect()
})


// 显示选择页
function showSelect() {
  showSection('.section-select')
  canvasCollect.buildCanvasAni = new CanvasAni({
    canvas: 'canvasBuild',
    canvasData: buildData,
    imgSource: sourceCollect,
    autoPlay: true,
    fps: 100,
    loop: false,
    onEnd: function() {
      console.log('结束')
      // canvasCollect.buildCanvasAni.drawPerFrame(0)

      setSelect()
      // window.WSReport.beacon.report('ws.answer.next')
    }
  })
}

/**
 * 设置建筑旋转选择的滚动动画
 * 
 */
function setSelect() {
  console.log('可以开始转动了');
  var dragObj = new dragJS($('.section-select')[0], {
    onMoveStart: function(e) {
      console.log(e)
      
    },
  })
}

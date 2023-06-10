// $(function() {
  // 点击一键启动，进入歌词选择页面
  $('.main_index_btn').click(function() {
    $('.main_index').removeClass('show')
    $('.main_two').addClass('show')
  })

  // 点击下一步，进入录制页面
  $('.main_select_nextbtn').click(function() {
    $('.main_select').removeClass('show')
    $('.main_recognize').addClass('show')
  })

  // 长按麦克风录制音频事件
  $('.main_recognize_microphone').on('touchstart', function() {

    console.log(123)
    // 提示用户录制中
    $('.main_recognize_reminder').text('录制中...')

    // 1秒后隐藏录音提示文本
    var time1 = setTimeout(function() {
      $('.main_recognize_reminder').addClass('hide')
    }, 1000)

    // 3s 完成录音录制事件
    var time2 = setTimeout(function() {
      console.log(132)
      // 进入下一页，歌手信息显示页面
      $('.main_two').removeClass('show')
      $('.main_singer').addClass('show')
    }, 3000) //这里设置长按响应时间

    $('.main_recognize_microphone')
      .off('touchend')
      .on('touchend', function() {
        // 清除计时器
        clearTimeout(time1)
        clearTimeout(time2)
        // 回复录音提示信息
        $('.main_recognize_reminder').text('长按麦克风开始录音（3s以上）')
        $('.main_recognize_reminder').removeClass('hide')
      })
  })

  // 点击重新录制
  $('.restart_btn').click(function() {
    $('.main_two').addClass('show')
    $('.main_singer').removeClass('show')
    // 单个歌手高亮
    $('.item_describe').removeClass('active')
  })
  // 点击单个歌手
  $('.item_describe').click(function() {
    $(this).addClass('active')
    setTimeout(function(){
      $('.main_singer').removeClass('show')
      $('.main_end').addClass('show')
      // 单个歌手高亮
    },500)
  })
  
  // 点击单个歌手唱片
  $('.item_record').click(function() {
    // 单个歌手高亮
    $(this).next().addClass('active')
    setTimeout(function(){
      $('.main_singer').removeClass('show')
      $('.main_end').addClass('show')
    },500)
  })
// })

var songList = [
  {
    t1: '再见我的过去',
    t2: 'I want a new life'
  },
  {
    t1: '原来黎明的起点',
    t2: '就在我心里面'
  },
  {
    t1: '至少我还有梦',
    t2: '也为你而感动'
  },
  {
    t1: '只要我还有梦',
    t2: '就会看到彩虹'
  }
]

var manifestoList = [
  {
    t1: '摇滚酷客',
    t2: '大气时尚，闪耀于形',
    t3: '飞行舱内饰设计，引众瞩目'
  },{
    t1: '文艺清新',
    t2: '文青属性，从容于心',
    t3: '车内静谧空间，尽享私人时光'
  },{
    t1: 'C位王者',
    t2: '众星拱月，无畏于行',
    t3: '实力战将，激擎蓄势待发'
  },{
    t1: '佛系睿智',
    t2: '冷静聪明，智能领航',
    t3: '精致品质，有品位不追随'
  }
]
// 选择对应歌词
$('#songSelect').on('change', function() {
  var v = songList[this.value]
  var v1 = manifestoList[this.value]
  $('#selectText1').text(v.t1)
  $('#selectText2').text(v.t2)

  $('#resultText1').text(v.t1)
  $('#resultText2').text(v.t2)

  $('#endText2').text(v1.t1)
  $('#endText3').text(v1.t2)
  $('#endText4').text(v1.t3)
})


$('.subscribe').click(function(){
  alert('点击预约按钮')
})

$('.invite').click(function(){
  alert('点击邀请按钮')
})

// 点击收藏按钮
$('.btn_collect').click(function(){
  $(this).toggleClass('collected')
})


//点击重新选择梦想宣言
$('.restart_btn2').click(function() {
  $('.main_two').addClass('show')
  $('.main_two_item').removeClass('show')
  $('.main_select').addClass('show')
  $('.main_end').removeClass('show')
    // 单个歌手高亮
    $('.item_describe').removeClass('active')
})
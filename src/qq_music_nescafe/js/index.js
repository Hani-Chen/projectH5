/*
 * @Author: Gianni
 * @Date: 2021-05-14 09:53:51
 * @LastEditors: Gianni
 * @LastEditTime: 2021-05-24 11:01:55
 * @FilePath: \H5-Project\src\qq_music_nescafe\js\index.js
 * @Description: QQ音乐雀巢项目
 */


// 滑屏组件初始化
var myslider = new iSlider({
  wrap: '.wrap',
  item: '.item',
  lastLocate: false,
  preventMove: false,
  onslide: function(index) {
    console.log('当前滑屏页面index: ', index)
    if (index === 0) {
      // 解锁滚动限制
      myslider.lockPrev = false
      myslider.lockNext = false
    } else {
      // 解锁滚动限制
      myslider.lockPrev = true
      myslider.lockNext = true
    }
    if (index === 2) {
      setKernelData(randomAccess(1, 8))
    }
  }
})

// 歌曲信息
var songList = [
  {
    id: 1,
    songText: "逢考必过",
    songId: "212973255",
    songName: "像我这样的人(live)",
    name: "毛不易",
    isHcy: true
  },
  {
    id: 2,
    songText: "水逆退散",
    songId: "303455524",
    songName: "无渴不湖南",
    name: "袁娅维",
  },
  {
    id: 3,
    songText: "刷题担当",
    songId: "294264193",
    songName: "无渴不上海",
    name: "霍尊",
  },
  {
    id: 4,
    songText: "锦鲤附体",
    songId: "281936407",
    songName: "无渴不四川",
    name: "谢帝",
  },
  {
    id: 5,
    songText: "高分上榜",
    songId: "284743684",
    songName: "无渴不河南",
    name: "陆虎",
  },
  {
    id: 6,
    songText: "金榜题名",
    songId: "291275424",
    songName: "无渴不浙江",
    name: "谢春花",
  },
  {
    id: 7,
    songText: "旗开得胜",
    songId: "303455524",
    songName: "无渴不辽宁",
    name: "左卓",
  },
  {
    id: 8,
    songText: "心想事成",
    songId: "303455524",
    songName: "无渴不广东",
    name: "X玖少年团-伍嘉成",
  }
]

/* 判断播放组件是否存在 */
var playerExist = false
/* 初始化播放器类 */
var player
/* 初始化js时如果有音乐直接暂停 */
playerExist && player.pause()

function PlayKernelSong (options) {
  // 播放icon
  this.songPlayIcon = $(".result_song__play")
  // 收藏icon
  this.songCollectIcon = $(".result_song__like")
  // QQ音乐歌曲id
  this.songId = "" || options.songId;
  this.init();
}
/* 播放器初始化 */
PlayKernelSong.prototype.init = function(){
  /* 判断是否存在音乐播放器 */
  playerExist == false && (player = new QMplayer())
  var songPlayIcon = this.songPlayIcon
  /* 监听音视频播放 */
  player.on("play", function () {
    console.log("播放");
    songPlayIcon.addClass("play")
  })
  /* 监听音视频暂停 */
  player.on("pause", function () {
    console.log("暂停");
    songPlayIcon.removeClass("play")
  })
  /* 监听音视频播放结束后暂停播放 */
  player.on("ended", function () {
    console.log("结束");
    songPlayIcon.removeClass("play")
  })
}
/* 歌曲播放 */
PlayKernelSong.prototype.play = function(){
  playerExist = true
  player.play(this.songId)
}
/* 歌曲暂停 */
PlayKernelSong.prototype.stop = function(){
  playerExist = false
  player.pause()
}
/* 歌曲添加收藏 */
PlayKernelSong.prototype.collect = function(){
  this.songCollectIcon.removeClass("cancel_collect")
}
/* 歌曲取消收藏 */
PlayKernelSong.prototype.cancelCollect = function(){
  this.songCollectIcon.addClass("cancel_collect")
}

/**
 * 工具函数 - 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
 function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max)
}

$('.wrap').on('click', '.btn_start', function() {
  // 点击开始识别
  getQuiltData(true)
})

/**
 * 获取相机数据 - 识别手势的数据
 * @param {Boolean} isSucceed 是否识别成功
 */
function getQuiltData(isSucceed) {
  // 此处插入获取的摄像头中的手势
  $('.discern_camera').html('')
  if(isSucceed) {
    // 识别成功
    successfully()
  } else {
    console.log('识别手势失败');
  }
}

/**
 * 识别成功后
 */
function successfully() {
  // 切换到下一页
  alert('识别成功 - 切换到下一页')
  myslider.next()
}



var audioDemo
/**
 *设置内页歌曲信息
 * @param {Number} songNumber 显示内页时的歌曲信息id
 */
 function setKernelData(songNumber) {
   var list = songList[songNumber - 1]
  $(".result_blessing").text(list.songText)
  // 设置艺人歌名
  $(".result_song__title").text(list.songName)
  // 设置艺人姓名
  $(".result_song__name").text(list.name)
  // 歌曲信息 - 客户要求暂时隐藏
  $('.result_song__data').text('');
  // 设置播放器歌曲链接
  audioDemo = new PlayKernelSong({
    songId: list.songId
  })
}

/* 按钮点击 - 点击音频播放按钮 - 切换音频播放状态 */
$('.wrap').on('click', '.result_song__play', function() {
  !$(this).hasClass("play") ? audioDemo.play() : audioDemo.stop()
})
/* 按钮点击 - 点击音频收藏按钮 - 切换音频收藏状态 */
$('.wrap').on('click', '.result_song__like ', function() {
  !$(this).hasClass("cancel_collect") ? audioDemo.cancelCollect() : audioDemo.collect()
})


// 点击结果页返回
$('.wrap').on('click', '.result_return', function() {
  myslider.prev()
  audioDemo.stop()
})

// 点击结果页分享
$('.wrap').on('click', '.btn_share', function() {
  $('#modalShore').addClass('show')
})
// 点击结果页弹窗关闭按钮
$('.wrap').on('click', '.modal_close', function() {
  $('#modalShore').removeClass('show')
})

// 点击活动规则
$('.wrap').on('click', '.discern_rule', function() {
  console.log('点击了活动规则');
})
// 点击识别页开运buff
$('.wrap').on('click', '.btn_welfare', function() {
  console.log('点击了识别页开运buff');
  $(this).attr('href', 'JavaScript:;')
})
// 点击结果页开运buff
$('.wrap').on('click', '.btn_buff', function() {
  console.log('点击了识别页开运buff');
  $(this).attr('href', 'JavaScript:;')
})
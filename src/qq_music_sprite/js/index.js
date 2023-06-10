// 歌曲信息
var songList = [
  {
    id: 1,
    songAlbums: "./img/kernel_albums1.jpg",
    songId: "303665187",
    songName: "无渴不爽",
    name: "华晨宇",
    isHcy: true
  },
  {
    id: 2,
    songAlbums: "./img/kernel_albums2.jpg",
    songId: "303455524",
    songName: "无渴不湖南",
    name: "袁娅维",
  },
  {
    id: 3,
    songAlbums: "./img/kernel_albums3.jpg",
    songId: "294264193",
    songName: "无渴不上海",
    name: "霍尊",
  },
  {
    id: 4,
    songAlbums: "./img/kernel_albums4.jpg",
    songId: "281936407",
    songName: "无渴不四川",
    name: "谢帝",
  },
  {
    id: 5,
    songAlbums: "./img/kernel_albums5.jpg",
    songId: "284743684",
    songName: "无渴不河南",
    name: "陆虎",
  },
  {
    id: 6,
    songAlbums: "./img/kernel_albums6.jpg",
    songId: "291275424",
    songName: "无渴不浙江",
    name: "谢春花",
  },
  {
    id: 7,
    songAlbums: "./img/kernel_albums7.jpg",
    songId: "303455524",
    songName: "无渴不辽宁",
    name: "左卓",
  },
  {
    id: 8,
    songAlbums: "./img/kernel_albums8.jpg",
    songId: "303455524",
    songName: "无渴不广东",
    name: "X玖少年团-伍嘉成",
  },
  {
    id: 9,
    songAlbums: "./img/kernel_albums9.jpg",
    songId: "303455524",
    songName: "无渴不山东",
    name: "焦迈奇",
  },
  {
    id: 10,
    songAlbums: "./img/kernel_albums10.jpg",
    songId: "303455524",
    songName: "无渴不陕西",
    name: "黑撒乐队",
  },
  {
    id: 11,
    songAlbums: "./img/kernel_albums11.jpg",
    songId: "303455524",
    songName: "无渴不湖北",
    name: "房东的猫",
  },
  {
    id: 12,
    songAlbums: "./img/kernel_albums12.jpg",
    songId: "303455524",
    songName: "无渴不甘肃",
    name: "张尕怂",
  },
  {
    id: 13,
    songAlbums: "./img/kernel_albums13.jpg",
    songId: "303455524",
    songName: "无渴不江西",
    name: "邓见超",
  },
  {
    id: 14,
    songAlbums: "./img/kernel_albums14.jpg",
    songId: "303455524",
    songName: "无渴不海南",
    name: "SNH48-杨冰怡",
  },
  {
    id: 15,
    songAlbums: "./img/kernel_albums15.jpg",
    songId: "303455524",
    songName: "无渴不新疆",
    name: "step.jad",
  },
  {
    id: 16,
    songAlbums: "./img/kernel_albums16.jpg",
    songId: "303455524",
    songName: "无渴不北京",
    name: "邵夷贝",
  },
  {
    id: 17,
    songAlbums: "./img/kernel_albums17.jpg",
    songId: "303455524",
    songName: "无渴不青海",
    name: "ANU",
  },
  {
    id: 18,
    songAlbums: "./img/kernel_albums18.jpg",
    songId: "303455524",
    songName: "无渴不天津",
    name: "胡莎莎",
  },
  {
    id: 19,
    songAlbums: "./img/kernel_albums19.jpg",
    songId: "303455524",
    songName: "无渴不山西",
    name: "闫泽欢",
  },
  {
    id: 20,
    songAlbums: "./img/kernel_albums20.jpg",
    songId: "303455524",
    songName: "无渴不云南",
    name: "LCZ小强",
  },
  {
    id: 21,
    songAlbums: "./img/kernel_albums21.jpg",
    songId: "303455524",
    songName: "无渴不河北",
    name: "周子琰",
  },
  {
    id: 22,
    songAlbums: "./img/kernel_albums22.jpg",
    songId: "303455524",
    songName: "无渴不江苏",
    name: "孟西",
  },
  {
    id: 23,
    songAlbums: "./img/kernel_albums23.jpg",
    songId: "303455524",
    songName: "无渴不西藏",
    name: "扎西平措",
  },
  {
    id: 24,
    songAlbums: "./img/kernel_albums24.jpg",
    songId: "303455524",
    songName: "无渴不贵州",
    name: "裘德",
  },
  {
    id: 25,
    songAlbums: "./img/kernel_albums25.jpg",
    songId: "303455524",
    songName: "无渴不福建",
    name: "五音Jw",
  },
  {
    id: 26,
    songAlbums: "./img/kernel_albums26.jpg",
    songId: "303455524",
    songName: "无渴不内蒙古",
    name: "巴音汗",
  },
  {
    id: 27,
    songAlbums: "./img/kernel_albums27.jpg",
    songId: "303455524",
    songName: "无渴不宁夏",
    name: "马潇",
  },
  {
    id: 28,
    songAlbums: "./img/kernel_albums28.jpg",
    songId: "303455524",
    songName: "无渴不安徽",
    name: "安子与九妹.jad",
  },
  {
    id: 29,
    songAlbums: "./img/kernel_albums29.jpg",
    songId: "303455524",
    songName: "无渴不黑龙江",
    name: "杨博然",
  },
  {
    id: 30,
    songAlbums: "./img/kernel_albums30.jpg",
    songId: "303455524",
    songName: "无渴不重庆",
    name: "$唐老师",
  },
  {
    id: 31,
    songAlbums: "./img/kernel_albums31.jpg",
    songId: "303455524",
    songName: "无渴不吉林",
    name: "夏了个天呐唐老师",
  },
  {
    id: 32,
    songAlbums: "./img/kernel_albums32.jpg",
    songId: "303455524",
    songName: "无渴不广西",
    name: "文兆杰",
  }
]

/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection(".test") showSection("#test")
 *
 */
let $prevSection = $(".page_start")
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass("show")
  }
  $prevSection = $(section)
  $prevSection.addClass("show")
}

/**
 * 工具函数 - 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
 function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max)
}
var GoSongList = "https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&appshare=android_qq&appversion=10110008&hosteuin=ow-q7iCqNec5on**&id=648085729&ADTAG=wxfshare"
$("#goSongList").attr("href", GoSongList)



/* 判断播放组件是否存在 */
var playerExist = false
/* 初始化播放器类 */
var player
/* 初始化js时如果有音乐直接暂停 */
playerExist && player.pause()

function PlayKernelSong (options) {
  // 播放icon
  this.songPlayIcon = $(".kernel_song__play")
  // 收藏icon
  this.songCollectIcon = $(".kernel_song__collect")
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
    songPlayIcon.addClass("active")
  })
  /* 监听音视频暂停 */
  player.on("pause", function () {
    console.log("暂停");
    songPlayIcon.removeClass("active")
  })
  /* 监听音视频播放结束后暂停播放 */
  player.on("ended", function () {
    console.log("结束");
    songPlayIcon.removeClass("active")
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
  this.songCollectIcon.addClass("active")
}
/* 歌曲取消收藏 */
PlayKernelSong.prototype.cancelCollect = function(){
  this.songCollectIcon.removeClass("active")
}


/* 首页帧动画 */
var loadingCanvas
var loadingPreloadQueue = new createjs.LoadQueue()
loadingPreloadQueue.on("complete", handleLoadingComplete, this)
// 加载加载页动画素材
loadingPreloadQueue.loadManifest([
    { id: "start_cd-0", src: "./img/start_cd-0.png" },
    { id: "start_cd-9", src: "./img/start_cd-9.png" },
    { id: "start_cd-18", src: "./img/start_cd-18.png" },
    { id: "start_cd-27", src: "./img/start_cd-27.png" },
    { id: "start_cd-36", src: "./img/start_cd-36.png" },
    { id: "start_cd-45", src: "./img/start_cd-45.png" },
    { id: "start_cd-54", src: "./img/start_cd-54.png" },
    { id: "start_cd-63", src: "./img/start_cd-63.png" },
    { id: "start_cd-72", src: "./img/start_cd-72.png" }
])

function handleLoadingComplete() {
    console.log("加载页素材加载完成")
    loadingCanvas = new CanvasAni({
        canvas: "canvasLoading",
        canvasData: loadData,
        imgSource: loadingPreloadQueue,
        autoPlay: true,
        loop: true,
        onLoop: function() {
          showKernel()
          loadingCanvas.destroy()
        }
    })
}

var audioDemo
/**
 *设置内页歌曲信息
 * @param {Number} songNumber 显示内页时的歌曲信息id
 */
 function setKernelData(songNumber) {
   var list = songList[songNumber - 1]
  //  判断是否选中华晨宇的歌曲
   list.isHcy && $(".kernel_text__item").addClass("show")
  // 设置专辑封面
  $(".kernel_albums__img").attr("src", list.songAlbums)
  // 设置艺人歌名
  $(".kernel_song__sname span").text(list.songName)
  // 设置艺人姓名
  $(".kernel_song__name").text(list.name)
  // 设置播放器歌曲链接
  audioDemo = new PlayKernelSong({
    songId: list.songId
  })
}

function showKernel() {
  // 设置内页歌曲信息
  setKernelData(randomAccess(1, 32))
  // setKernelData(1)
  showSection(".page_kernel")
}

/* 按钮点击 - 点击音频播放按钮 - 切换音频播放状态 */
$(".kernel_song__play").on("click", function() {
  !$(this).hasClass("active") ? audioDemo.play() : audioDemo.stop()
})

/* 按钮点击 - 点击音频收藏按钮 - 切换音频收藏状态 */
$(".kernel_song__collect").on("click", function() {
  !$(this).hasClass("active") ? audioDemo.collect() : audioDemo.cancelCollect()
})


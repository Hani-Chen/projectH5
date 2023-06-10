/* 判断播放组件是否存在 */
let playerExist = false
/* 初始化播放器类 */
let player
/* 初始化js时如果有音乐直接暂停 */
playerExist && player.pause()
function PlayKernelSong(options) {
  // QQ音乐歌曲id
  this.songId = '' || options.songId
  this.init()
}
/* 播放器初始化 */
PlayKernelSong.prototype.init = function () {
  /* 判断是否存在音乐播放器 */
  playerExist == false && (player = new QMplayer())
  /* 监听音视频播放 */
  player.on('play', function () {
    // 更改音乐播放状态
    isPlay = true
    // 歌曲播放更改icon状态
    songPlay()
  })
  /* 监听音视频暂停 */
  player.on('pause', function () {
    // 更改音乐播放状态
    isPlay = false
    // 歌曲暂停更改icon状态
    songPlay(false)
  })
  /* 监听音视频播放结束后暂停播放 */
  player.on('ended', function () {
    // 更改音乐播放状态
    isPlay = false
    // 歌曲暂停更改icon状态
    songPlay(false)
  })
}
/* 歌曲播放 */
PlayKernelSong.prototype.play = function () {
  playerExist = true
  player.play(this.songId)
}
/* 歌曲暂停 */
PlayKernelSong.prototype.stop = function () {
  playerExist = false
  player.pause()
}



function songPlay(isPlay = true) {
  if(!isPlay) {
    $('.item_icon').removeClass('play')
    $('.page_details__icon').removeClass('play')
    $('.page_details__cd').addClass('stop')
  }else {
    $('.page_details__icon').addClass('play')
    $('.page_details__cd').removeClass('stop')
  }
}
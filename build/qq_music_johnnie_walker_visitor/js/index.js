/*
 * @Author: Gianni
 * @Date: 2021-08-20 11:24:32
 * @LastEditTime: 2021-08-20 17:52:06
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_johnnie_walker_visitor\js\index.js
 */
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
    console.log('播放')
    $('.visitor_song').addClass('active')
    $('.visitor_album').addClass('play')
  })
  /* 监听音视频暂停 */
  player.on('pause', function () {
    console.log('暂停')
    $('.visitor_song').removeClass('active')
    $('.visitor_album').removeClass('play')
  })
  /* 监听音视频播放结束后暂停播放 */
  player.on('ended', function () {
    console.log('结束')
    $('.visitor_song').removeClass('active')
    $('.visitor_album').removeClass('play')
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
$('.visitor_song').on('click', function () {
  // 设置播放器歌曲链接
  audioDemo = new PlayKernelSong({
    songId: $(this).data('id'),
  })
  audioDemo.play()
})
// 点击收藏
$('.visitor_song__like').on('click', function (e) {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
  } else {
    $(this).removeClass('active')
  }
  e.stopPropagation()
})

// 点击分享按钮
$('.visitor_btn').on('click', function (e) {
})
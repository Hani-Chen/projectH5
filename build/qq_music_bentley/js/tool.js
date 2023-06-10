/*
 * @Author: Gianni
 * @Date: 2021-09-24 11:33:53
 * @LastEditTime: 2021-09-25 17:26:56
 * @LastEditors: Gianni
 * @Description: *
 * @FilePath: \H5-Project\src\qq_music_bentley\js\tool.js
 */
/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection('.test') showSection('#test')
 *
 */
let $prevSection
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass('show')
  }
  $prevSection = $(section)
  $prevSection.addClass('show')
}
showSection('.page_select')

function OriginalAudio(options) {
  // QQ音乐歌曲id
  this.songId = '' || options.url
  this.loop = false || options.loop
  this.isPlay = false || options.isPlay
  this.audio = document.getElementById('PageAudio')
  this.init()
}

let palyVoice = true
/* 播放器初始化 */
OriginalAudio.prototype.init = function () {
  // /* 判断是否存在音乐播放器 */
  // if (this.audio) {
  //   this.audio.currentSrc = this.songId
  // } else {
  // }
  this.audio.src = this.songId
  this.audio.loop = this.loop
  let _this = this
  $('.page_icon__voice').addClass('stop')
  $('audio').bind('ended', function () {
    $('.page_icon__voice').addClass('stop')
    _this.isPlay && $('.page_icon__voice').removeClass('stop')
  })
  $('audio').bind('pause', function () {
    $('.page_icon__voice').addClass('stop')
    _this.isPlay && $('.page_icon__voice').removeClass('stop')
  })
  $('audio').bind('play', function () {
    $('.page_icon__voice').removeClass('stop')
  })
}
/* 歌曲播放 */
OriginalAudio.prototype.play = function () {
  if(!palyVoice) {
    return
  }
  this.audio.play()
}
/* 歌曲暂停 */
OriginalAudio.prototype.stop = function () {
  this.audio.pause()
}

/* 初始化播放器类 */
let player
function PlayKernelSong(options) {
  // QQ音乐歌曲id
  this.songId = '' || options.songId
  this.init()
}
/* 播放器初始化 */
PlayKernelSong.prototype.init = function () {
  /* 判断是否存在音乐播放器 */
  player = new QMplayer()
  $('.page_icon__voice').addClass('stop')
  /* 监听音视频播放 */
  player.on('play', function () {
    $('.page_icon__voice').removeClass('stop')
  })
  /* 监听音视频暂停 */
  player.on('pause', function () {
    $('.page_icon__voice').addClass('stop')
  })
  /* 监听音视频播放结束后暂停播放 */
  player.on('ended', function () {
    $('.page_icon__voice').addClass('stop')
  })
}
/* 歌曲播放 */
PlayKernelSong.prototype.play = function () {
  if(!palyVoice) {
    return
  }
  player.play(this.songId)
}
/* 歌曲暂停 */
PlayKernelSong.prototype.stop = function () {
  player.pause()
}

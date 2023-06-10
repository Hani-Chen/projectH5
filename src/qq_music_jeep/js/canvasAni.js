// 针对GKA修改优化的一个播放序列帧图的动画类
var CanvasAni = function (options) {
  this.timer = null
  this.canvasId = options.canvas
  this.canvas = document.getElementById(options.canvas)
  this.canvasData = options.canvasData
  // 自动播放
  this.autoPlay = options.autoPlay || false
  // 循环状态
  this.loop = options.loop || false
  // 每秒帧数
  this.fps = options.fps || 24
  // 帧动画图片
  this.imgSource = options.imgSource || {}

  // 当播放动画时触发
  this.onPlay = options.onPlay || function () { }
  //   初始化
  this.onInit = options.onInit || function () { }
  // 当帧动画播放结束时调用
  this.onEnd = options.onEnd || function () { }
  // 当帧动画每完成一次循环时调用
  this.onLoop = options.onLoop || function () { }

  // 绘制画布背景
  this.onDrawBg = options.onDrawBg || function () { }
  // 绘制画布前景
  this.onDrawFg = options.onDrawFg || function () { }
  // 绘制画布的蒙版
  this.onDrawmask = options.onDrawmask || function () { }

  // this.customDraw = options.customDraw ||
  this.ctx = this.canvas.getContext('2d')
  // ctx = null
  this.init()
}

CanvasAni.prototype = {
  // 初始化
  init: function () {
    var data = this.canvasData
    this.width = data.sourceW
    this.height = data.sourceH
    this.key = Object.keys(data.animations)[0]
    this.list = data.animations[this.key]
    this.frames = this.canvasData.frames
    this.cacheCanvas = document.createElement('canvas')

    // 透明图层不绘制 减少手机性能 pc不支持
    // this.cacheCtx = this.cacheCanvas.getContext('2d', { alpha: false })

    this.cacheCtx = this.cacheCanvas.getContext('2d')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.cacheCanvas.width = this.width
    this.cacheCanvas.height = this.height
    this.currentFrame = 0
    this.loopCount = 0
    this.reachEnd = false

    this.setRaf()
    if (this.autoPlay) {
      this.paused = false
      this.initStart = true
      this.drawframe()
    } else {
      this.paused = true
      this.initStart = false
      this.drawPerFrame(0)
    }
    // 二次初始化
    this.onInit()
  },
  refreshCanvas() {
    this.canvas = document.getElementById(this.canvasId)
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.cacheCanvas.width = this.width
    this.cacheCanvas.height = this.height
    this.drawPerFrame(0)
  },
  drawframe: function () {
    var o = {}
    var i = this.currentFrame
    var frames = this.frames
    var list = this.list
    var len = list.length
    var cacheCanvas = this.cacheCanvas
    var cacheCtx = this.cacheCtx
    var ctx = this.ctx
    var w = this.width
    var h = this.height
    var data = this.canvasData
    var sfileId = data.file
    var loop = this.loop
    var self = this

    this.lastTick = Date.now()

    this.tick(function () {
      o = list[i]
      cacheCtx.clearRect(0, 0, w, h)
      self.onDrawBg(cacheCtx)
      o = Object.prototype.toString.call(o) == '[object Array]' ? o : [o]
      var t

      for (var j = 0; j < o.length; j++) {
        t = frames[o[j]]
        cacheCtx.drawImage(
          self.imgSource.getResult(sfileId) || self.imgSource.getResult(t.file),
          t.x || data.x || 0,
          t.y || data.y || 0,
          t.width || data.width,
          t.height || data.height,
          t.offX || data.offX || 0,
          t.offY || data.offY || 0,
          t.width || data.width,
          t.height || data.height
        )
      }
      self.onDrawFg(cacheCtx)
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      self.onDrawmask(ctx)
      ctx.drawImage(cacheCanvas, 0, 0, w, h)
      ctx.restore()
      ++i
      if (i === len) {
        if (loop) {
          self.loopCount++
          self.onLoop.call(self, self.loopCount)
          i = 0
        } else {
          // i =
          i--
          self.stop.call(self)
          self.onEnd.call(self)
        }
      }
      self.currentFrame = i
    })
  },
  drawPerFrame: function (frame) {
    var o = {}
    var i = this.currentFrame
    var frames = this.frames
    var list = this.list
    var len = list.length
    var cacheCanvas = this.cacheCanvas
    var cacheCtx = this.cacheCtx
    var ctx = this.ctx
    var w = this.width
    var h = this.height
    var data = this.canvasData
    var sfileId = data.file
    var loop = this.loop
    var self = this

    o = list[frame]
    cacheCtx.clearRect(0, 0, w, h)
    self.onDrawBg(cacheCtx)
    o = Object.prototype.toString.call(o) == '[object Array]' ? o : [o]
    var t

    for (var j = 0; j < o.length; j++) {
      t = frames[o[j]]
      cacheCtx.drawImage(
        self.imgSource.getResult(sfileId) || self.imgSource.getResult(t.file),
        t.x || data.x || 0,
        t.y || data.y || 0,
        t.width || data.width,
        t.height || data.height,
        t.offX || data.offX || 0,
        t.offY || data.offY || 0,
        t.width || data.width,
        t.height || data.height
      )
    }
    self.onDrawFg(cacheCtx)
    ctx.clearRect(0, 0, w, h)
    ctx.save()
    self.onDrawmask(ctx)
    ctx.drawImage(cacheCanvas, 0, 0, w, h)
    ctx.restore()
  },
  play: function () {
    if (this.paused) {
      this.paused = false
      this.onPlay()
      if (this.reachEnd) {
        this.restart()
      } else {
        this.drawframe()
      }
    }
  },
  pause() {
    this.paused = true
  },
  stop: function () {
    this.paused = true
    this.reachEnd = true
  },
  restart: function () {
    this.currentFrame = 0
    this.loopCount = 0
    this.paused = false
    this.reachEnd = false
    // this.initStart = false
    this.drawframe()
  },
  destroy: function () {
    this.stop()
    this.cacheCanvas = null
    this.canvas = null
  },

  tick: function (draw) {
    var self = this
    var fps = this.fps
    var now
    var then = this.lastTick
    var interval = 1000 / fps
    var delta
    if (this.paused) {
      draw()
      return
    }
    if (window.requestAnimationFrame) {
      requestAnimationFrame(function () {
        self.tick.call(self, draw)
      })
      now = Date.now()
      delta = now - then
      if (delta > interval) {
        // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
        this.lastTick = now - (delta % interval)
        draw()
      }
    } else {
      setTimeout(function () {
        self.tick.call(self, draw)
      }, interval)
      draw()
    }
  },
  setRaf: function () {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame
  }
}

// 资源加载进度
var loadPercent = 0
// 时间加载进度
var limitPercent = 0
// 加载时间限制。3000代表至少要求加载2s
var limitTime = 500
var nowTime = 0
// 时间加载进度计时器
var preloadTimer = setInterval(function () {
  if (nowTime >= limitTime) {
    clearInterval(preloadTimer)
  } else {
    nowTime += 100
    limitPercent = (nowTime * 100) / limitTime
    setProgress()
  }
}, 100)

// 帧动画  加载只需要一个帧动画 所以是用变量存储
var loadingCanvas
// 用于判断 是否停止加载动画
var innerLoad = false
var loadingPreloadQueue = new createjs.LoadQueue(false)

loadingPreloadQueue.on('progress', function (evt) {

  loadPercent = Math.floor(evt.progress * 100)
  setProgress()
})

// 加载图片素材
loadingPreloadQueue.loadManifest([
  { src: 'img/btn_previous.png', id: 'btn_previous' },
  { src: 'img/create_bg.jpg', id: 'create_bg' },
  { src: 'img/create_bg1.png', id: 'create_bg1' },
  { src: 'img/create_bg2.png', id: 'create_bg2' },
  { src: 'img/create_bg3.png', id: 'create_bg3' },
  { src: 'img/create_car1.png', id: 'create_car1' },
  { src: 'img/create_car2.png', id: 'create_car2' },
  { src: 'img/create_car3.png', id: 'create_car3' },
  { src: 'img/create_car_tab1.png', id: 'create_car_tab1' },
  { src: 'img/create_car_tab2.png', id: 'create_car_tab2' },
  { src: 'img/create_car_tab3.png', id: 'create_car_tab3' },
  { src: 'img/create_lyric1.png', id: 'create_lyric1' },
  { src: 'img/create_lyric2.png', id: 'create_lyric2' },
  { src: 'img/create_lyric3.png', id: 'create_lyric3' },
  { src: 'img/create_lyric4.png', id: 'create_lyric4' },
  { src: 'img/create_lyric5.png', id: 'create_lyric5' },
  { src: 'img/create_lyric_play.png', id: 'create_lyric_play' },
  { src: 'img/create_lyric_tab.png', id: 'create_lyric_tab' },
  { src: 'img/create_lyric_tab_active.png', id: 'create_lyric_tab_active' },
  { src: 'img/create_sky_tab1.png', id: 'create_sky_tab1' },
  { src: 'img/create_sky_tab2.png', id: 'create_sky_tab2' },
  { src: 'img/create_sky_tab3.png', id: 'create_sky_tab3' },
  { src: 'img/create_title.png', id: 'create_title' },
  { src: 'img/details_img1.jpg', id: 'details_img1' },
  { src: 'img/details_img2.jpg', id: 'details_img2' },
  { src: 'img/home_bg.jpg', id: 'home_bg' },
  { src: 'img/home_btn_start.png', id: 'home_btn_start' },
  { src: 'img/home_car.png', id: 'home_car' },
  { src: 'img/home_hint.png', id: 'home_hint' },
  { src: 'img/home_person.png', id: 'home_person' },
  { src: 'img/icon_checked.png', id: 'icon_checked' },
  { src: 'img/icon_pulldown.png', id: 'icon_pulldown' },
  { src: 'img/loading_bg.png', id: 'loading_bg' },
  { src: 'img/loading_bg_active.png', id: 'loading_bg_active' },
  { src: 'img/logo.png', id: 'logo' },
  { src: 'img/making_bg.png', id: 'making_bg' },
  { src: 'img/making_btn.png', id: 'making_btn' },
  { src: 'img/modal_bg.png', id: 'modal_bg' },
  { src: 'img/modal_close.png', id: 'modal_close' },
  { src: 'img/share_arrows.png', id: 'share_arrows' },
  { src: 'img/survey_bg.jpg', id: 'survey_bg' },
  /* Data: 2020-08-03; Edit: Hani; Describe: 将表单页修改按钮为一个; Start 1.0.0  */
  // { src: 'img/survey_btn.png', id: 'survey_btn' }
  /* Data: 2020-08-03; Edit: Hani; Describe: 将表单页修改按钮为一个; Start 1.0.0  */

])

setProgress()
// 进度处理
function setProgress() {
  var percent = Math.min(loadPercent, limitPercent)
  percent = Math.min(Math.ceil(percent), 100)
  $('.loading_progress__img').css('width', percent + '%')
  $('.loading_percent').text(percent + '%')
  // 素材＋计时器都加载完成
  if (percent >= 100) {
    setTimeout(function () {
      // 移除loading页
      $('.loading_wrap').removeClass('show')
      $('.home_wrap').addClass('show')
    }, 100)
  }
}

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
  this.onPlay = options.onPlay || function () {}
  //   初始化
  this.onInit = options.onInit || function () {}
  // 当帧动画播放结束时调用
  this.onEnd = options.onEnd || function () {}
  // 当帧动画每完成一次循环时调用
  this.onLoop = options.onLoop || function () {}

  // 绘制画布背景
  this.onDrawBg = options.onDrawBg || function () {}
  // 绘制画布前景
  this.onDrawFg = options.onDrawFg || function () {}
  // 绘制画布的蒙版
  this.onDrawmask = options.onDrawmask || function () {}

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
  },
}
// 加载帧动画
var ani1
var loadingPreloadQueue = new createjs.LoadQueue()

loadingPreloadQueue.on('complete', handleComplete, this)
// 加载加载页动画素材
loadingPreloadQueue.loadManifest([
  { id: 'label-0', src: './img/label-0.png' },
  { id: 'time-0', src: './img/time-0.png' },
  { id: 'arrows-0', src: './img/arrows-0.png' },
  { id: 'arrows2-0', src: './img/arrows2-0.png' },
  { id: 'hand-0', src: './img/hand-0.png' },
])
function handleComplete() {
  ani1 = new CanvasAni({
    canvas: 'labelItem',
    canvasData: data1,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  ani2 = new CanvasAni({
    canvas: 'timeItemAni',
    canvasData: data2,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  ani3 = new CanvasAni({
    canvas: 'arrowsAni',
    canvasData: data3,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })

  arrowsItemAni1 = new CanvasAni({
    canvas: 'arrowsItemAni1',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni2 = new CanvasAni({
    canvas: 'arrowsItemAni2',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni3 = new CanvasAni({
    canvas: 'arrowsItemAni3',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni4 = new CanvasAni({
    canvas: 'arrowsItemAni4',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni5 = new CanvasAni({
    canvas: 'arrowsItemAni5',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni6 = new CanvasAni({
    canvas: 'arrowsItemAni6',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni7 = new CanvasAni({
    canvas: 'arrowsItemAni7',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni8 = new CanvasAni({
    canvas: 'arrowsItemAni8',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni9 = new CanvasAni({
    canvas: 'arrowsItemAni9',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  arrowsItemAni10 = new CanvasAni({
    canvas: 'arrowsItemAni10',
    canvasData: data4,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
  hideItemAni = new CanvasAni({
    canvas: 'hideItemAni',
    canvasData: data5,
    imgSource: loadingPreloadQueue,
    autoPlay: true,
    loop: true,
  })
}

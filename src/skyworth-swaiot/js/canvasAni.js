// 定义 url 路径
var baseUrl = '../img';
// var baseUrl = 'http://cdnmeidi.perpower.cn/skyworth-swaiot/';


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



var section1Animation
var innerLoad = false
var section1Queue = new createjs.LoadQueue()
section1Queue.on('complete', section1CanvasComplete, this)
// 加载 第1屏动画素材
section1Queue.loadManifest([
  { id: 'sprites-1', src: baseUrl + '/sprites-1.png' },
  { id: 'sprites-2', src: baseUrl + '/sprites-2.png' },
  { id: 'sprites-3', src: baseUrl + '/sprites-3.png' },
  { id: 'sprites-4', src: baseUrl + '/sprites-4.png' },
  { id: 'sprites-5', src: baseUrl + '/sprites-5.png' },
  { id: 'sprites-6', src: baseUrl + '/sprites-6.png' },
  { id: 'sprites-7', src: baseUrl + '/sprites-7.png' },
  { id: 'sprites-8', src: baseUrl + '/sprites-8.png' },
  { id: 'sprites-9', src: baseUrl + '/sprites-9.png' },
  { id: 'sprites-10', src: baseUrl + '/sprites-10.png' },
  { id: 'sprites-11', src: baseUrl + '/sprites-11.png' },
  { id: 'sprites-12', src: baseUrl + '/sprites-12.png' },
  { id: 'sprites-13', src: baseUrl + '/sprites-13.png' },
  { id: 'sprites-14', src: baseUrl + '/sprites-14.png' },
  { id: 'sprites-15', src: baseUrl + '/sprites-15.png' },
  { id: 'sprites-16', src: baseUrl + '/sprites-16.png' },
  { id: 'sprites-17', src: baseUrl + '/sprites-17.png' },
  { id: 'sprites-18', src: baseUrl + '/sprites-18.png' },
  { id: 'sprites-19', src: baseUrl + '/sprites-19.png' },
  { id: 'sprites-20', src: baseUrl + '/sprites-20.png' },
  { id: 'sprites-21', src: baseUrl + '/sprites-21.png' },
  { id: 'sprites-22', src: baseUrl + '/sprites-22.png' },
  { id: 'sprites-23', src: baseUrl + '/sprites-23.png' },
  { id: 'sprites-24', src: baseUrl + '/sprites-24.png' },
  { id: 'sprites-25', src: baseUrl + '/sprites-25.png' },
  { id: 'sprites-26', src: baseUrl + '/sprites-26.png' },

  // 第一屏 手机版
  { id: 'section1_android-0', src: baseUrl + '/section1_android-0.png' },
  { id: 'section1_android-18', src: baseUrl + '/section1_android-18.png' },
  { id: 'section1_android-36', src: baseUrl + '/section1_android-36.png' },
  { id: 'section1_android-54', src: baseUrl + '/section1_android-54.png' },
  { id: 'section1_android-72', src: baseUrl + '/section1_android-72.png' },
  { id: 'section1_android-90', src: baseUrl + '/section1_android-90.png' },
])


function section1CanvasComplete() {
  console.log('第一屏素材加载完成')
  //创建 第1屏动画
  section1Animation1 = new CanvasAni({
    // 传入id
    canvas: 'section1Canvas1',
    // 传入 data数据id
    canvasData: section1Data,
    // 传入动画素材
    imgSource: section1Queue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })
  
  //创建 第1屏动画
  section1Animation2 = new CanvasAni({
    // 传入id
    canvas: 'section1Canvas2',
    // 传入 data数据id
    canvasData: section1AndroidData,
    // 传入动画素材
    imgSource: section1Queue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })
}



// 第二屏
var section2Animation
var innerLoad = false
var section2Queue = new createjs.LoadQueue()
section2Queue.on('complete', section2CanvasComplete, this)
// 加载 第2屏动画素材
section2Queue.loadManifest([
  // 第二屏动画素材
  { id: 'section2-0', src: baseUrl + '/section2-0.png' },
  { id: 'section2-3', src: baseUrl + '/section2-3.png' },
  { id: 'section2-6', src: baseUrl + '/section2-6.png' },
  { id: 'section2-9', src: baseUrl + '/section2-9.png' },
  { id: 'section2-12', src: baseUrl + '/section2-12.png' },
  { id: 'section2-15', src: baseUrl + '/section2-15.png' },
  { id: 'section2-18', src: baseUrl + '/section2-18.png' },
  { id: 'section2-21', src: baseUrl + '/section2-21.png' },
  { id: 'section2-24', src: baseUrl + '/section2-24.png' },
  { id: 'section2-27', src: baseUrl + '/section2-27.png' },
  { id: 'section2-30', src: baseUrl + '/section2-30.png' },
  { id: 'section2-33', src: baseUrl + '/section2-33.png' },
  { id: 'section2-36', src: baseUrl + '/section2-36.png' },
  { id: 'section2-39', src: baseUrl + '/section2-39.png' },
  { id: 'section2-42', src: baseUrl + '/section2-42.png' },
  { id: 'section2-45', src: baseUrl + '/section2-45.png' },
  { id: 'section2-48', src: baseUrl + '/section2-48.png' },
  { id: 'section2-51', src: baseUrl + '/section2-51.png' },
  { id: 'section2-54', src: baseUrl + '/section2-54.png' },
  { id: 'section2-57', src: baseUrl + '/section2-57.png' },
  { id: 'section2-60', src: baseUrl + '/section2-60.png' },
  { id: 'section2-63', src: baseUrl + '/section2-63.png' },
  { id: 'section2-66', src: baseUrl + '/section2-66.png' },
  { id: 'section2-69', src: baseUrl + '/section2-69.png' },
  { id: 'section2-72', src: baseUrl + '/section2-72.png' },
  { id: 'section2-75', src: baseUrl + '/section2-75.png' },
  { id: 'section2-78', src: baseUrl + '/section2-78.png' },
  { id: 'section2-81', src: baseUrl + '/section2-81.png' },
  { id: 'section2-84', src: baseUrl + '/section2-84.png' },
  { id: 'section2-87', src: baseUrl + '/section2-87.png' },
  { id: 'section2-90', src: baseUrl + '/section2-90.png' },
  { id: 'section2-93', src: baseUrl + '/section2-93.png' },
  { id: 'section2-96', src: baseUrl + '/section2-96.png' },
  { id: 'section2-99', src: baseUrl + '/section2-99.png' },
  { id: 'section2-102', src: baseUrl + '/section2-102.png' },
  { id: 'section2-105', src: baseUrl + '/section2-105.png' },
  { id: 'section2-108', src: baseUrl + '/section2-108.png' },
  { id: 'section2-111', src: baseUrl + '/section2-111.png' },
  { id: 'section2-114', src: baseUrl + '/section2-114.png' },
  { id: 'section2-117', src: baseUrl + '/section2-117.png' }
])


function section2CanvasComplete() {
  console.log('第2屏素材加载完成')
  //创建 第2屏动画
  section2Animation = new CanvasAni({
    // 传入id
    canvas: 'section2Canvas',
    // 传入 data数据id
    canvasData: section2Data,
    // 传入动画素材
    imgSource: section2Queue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })
  
}


// 这里可以放多个帧动画所以用对象存储
var featureCanvas = {}
// 用于判断 是否停止加载动画
var innerLoad = false
var featureQueue = new createjs.LoadQueue(false)
featureQueue.on('complete', handleLoadingComplete, this)
// 加载动画素材
featureQueue.loadManifest([
  // id 为 数据 js中的 file 值
  

  // 第三屏动画素材
  { id: 'section3-0', src: baseUrl + '/section3-0.png' },
  { id: 'section3-2', src: baseUrl + '/section3-2.png' },
  { id: 'section3-4', src: baseUrl + '/section3-4.png' },
  { id: 'section3-6', src: baseUrl + '/section3-6.png' },
  { id: 'section3-8', src: baseUrl + '/section3-8.png' },
  { id: 'section3-10', src: baseUrl + '/section3-10.png' },
  { id: 'section3-12', src: baseUrl + '/section3-12.png' },
  { id: 'section3-14', src: baseUrl + '/section3-14.png' },
  { id: 'section3-16', src: baseUrl + '/section3-16.png' },
  { id: 'section3-18', src: baseUrl + '/section3-18.png' },
  { id: 'section3-20', src: baseUrl + '/section3-20.png' },

  // 第三屏 手机版
  { id: 'section3_android-0', src: baseUrl + '/section3_android-0.png' },
  { id: 'section3_android-6', src: baseUrl + '/section3_android-6.png' },
  { id: 'section3_android-12', src: baseUrl + '/section3_android-12.png' },
  { id: 'section3_android-18', src: baseUrl + '/section3_android-18.png' },

  // 第四屏动画素材
  { id: 'section4-0', src: baseUrl + '/section4-0.png' },
  { id: 'section4-1', src: baseUrl + '/section4-1.png' },
  { id: 'section4-2', src: baseUrl + '/section4-2.png' },
  { id: 'section4-3', src: baseUrl + '/section4-3.png' },
  { id: 'section4-4', src: baseUrl + '/section4-4.png' },
  { id: 'section4-5', src: baseUrl + '/section4-5.png' },
  { id: 'section4-6', src: baseUrl + '/section4-6.png' },
  { id: 'section4-7', src: baseUrl + '/section4-7.png' },
  { id: 'section4-8', src: baseUrl + '/section4-8.png' },
  { id: 'section4-9', src: baseUrl + '/section4-9.png' },
  { id: 'section4-10', src: baseUrl + '/section4-10.png' },
  { id: 'section4-11', src: baseUrl + '/section4-11.png' },
  { id: 'section4-12', src: baseUrl + '/section4-12.png' },
  { id: 'section4-13', src: baseUrl + '/section4-13.png' },
  { id: 'section4-14', src: baseUrl + '/section4-14.png' },
  { id: 'section4-15', src: baseUrl + '/section4-15.png' },
  { id: 'section4-16', src: baseUrl + '/section4-16.png' },
  { id: 'section4-17', src: baseUrl + '/section4-17.png' },
  { id: 'section4-18', src: baseUrl + '/section4-18.png' },
  { id: 'section4-19', src: baseUrl + '/section4-19.png' },
  { id: 'section4-20', src: baseUrl + '/section4-20.png' },
  { id: 'section4-21', src: baseUrl + '/section4-21.png' },
  { id: 'section4-22', src: baseUrl + '/section4-22.png' },
  { id: 'section4-23', src: baseUrl + '/section4-23.png' },
  { id: 'section4-24', src: baseUrl + '/section4-24.png' },
  { id: 'section4-25', src: baseUrl + '/section4-25.png' },
  { id: 'section4-26', src: baseUrl + '/section4-26.png' },
  { id: 'section4-27', src: baseUrl + '/section4-27.png' },
  { id: 'section4-28', src: baseUrl + '/section4-28.png' },
  { id: 'section4-29', src: baseUrl + '/section4-29.png' },
  { id: 'section4-30', src: baseUrl + '/section4-30.png' },
  { id: 'section4-31', src: baseUrl + '/section4-31.png' },
  { id: 'section4-32', src: baseUrl + '/section4-32.png' },
  { id: 'section4-33', src: baseUrl + '/section4-33.png' },
  { id: 'section4-34', src: baseUrl + '/section4-34.png' },
  { id: 'section4-35', src: baseUrl + '/section4-35.png' },
  { id: 'section4-36', src: baseUrl + '/section4-36.png' },
  { id: 'section4-37', src: baseUrl + '/section4-37.png' },
  { id: 'section4-38', src: baseUrl + '/section4-38.png' },
  { id: 'section4-39', src: baseUrl + '/section4-39.png' },
  { id: 'section4-40', src: baseUrl + '/section4-40.png' },
  { id: 'section4-41', src: baseUrl + '/section4-41.png' },
  { id: 'section4-42', src: baseUrl + '/section4-42.png' },
  { id: 'section4-43', src: baseUrl + '/section4-43.png' },
  { id: 'section4-44', src: baseUrl + '/section4-44.png' },
  { id: 'section4-45', src: baseUrl + '/section4-45.png' },
  { id: 'section4-46', src: baseUrl + '/section4-46.png' },
  { id: 'section4-47', src: baseUrl + '/section4-47.png' },
  { id: 'section4-48', src: baseUrl + '/section4-48.png' },
  { id: 'section4-49', src: baseUrl + '/section4-49.png' },
  { id: 'section4-50', src: baseUrl + '/section4-50.png' },
  { id: 'section4-51', src: baseUrl + '/section4-51.png' },
  { id: 'section4-52', src: baseUrl + '/section4-52.png' },
  { id: 'section4-53', src: baseUrl + '/section4-53.png' },
  { id: 'section4-54', src: baseUrl + '/section4-54.png' },
  { id: 'section4-55', src: baseUrl + '/section4-55.png' },
  { id: 'section4-56', src: baseUrl + '/section4-56.png' },
  { id: 'section4-57', src: baseUrl + '/section4-57.png' },
  { id: 'section4-58', src: baseUrl + '/section4-58.png' },
  { id: 'section4-59', src: baseUrl + '/section4-59.png' },
  { id: 'section4-60', src: baseUrl + '/section4-60.png' },
  { id: 'section4-61', src: baseUrl + '/section4-61.png' },
  { id: 'section4-62', src: baseUrl + '/section4-62.png' },
  { id: 'section4-63', src: baseUrl + '/section4-63.png' },
  { id: 'section4-64', src: baseUrl + '/section4-64.png' },
  { id: 'section4-65', src: baseUrl + '/section4-65.png' },
  { id: 'section4-66', src: baseUrl + '/section4-66.png' },
  { id: 'section4-67', src: baseUrl + '/section4-67.png' },
  { id: 'section4-68', src: baseUrl + '/section4-68.png' },
  { id: 'section4-69', src: baseUrl + '/section4-69.png' },
  { id: 'section4-70', src: baseUrl + '/section4-70.png' },
  { id: 'section4-71', src: baseUrl + '/section4-71.png' },
  { id: 'section4-72', src: baseUrl + '/section4-72.png' },
  { id: 'section4-73', src: baseUrl + '/section4-73.png' },
  { id: 'section4-74', src: baseUrl + '/section4-74.png' },
  { id: 'section4-75', src: baseUrl + '/section4-75.png' },
  { id: 'section4-76', src: baseUrl + '/section4-76.png' },
  { id: 'section4-77', src: baseUrl + '/section4-77.png' },
  { id: 'section4-78', src: baseUrl + '/section4-78.png' },
  { id: 'section4-79', src: baseUrl + '/section4-79.png' },
  { id: 'section4-80', src: baseUrl + '/section4-80.png' },
  { id: 'section4-81', src: baseUrl + '/section4-81.png' },
  { id: 'section4-82', src: baseUrl + '/section4-82.png' },
  { id: 'section4-83', src: baseUrl + '/section4-83.png' },
  { id: 'section4-84', src: baseUrl + '/section4-84.png' },
  { id: 'section4-85', src: baseUrl + '/section4-85.png' },
  { id: 'section4-86', src: baseUrl + '/section4-86.png' },
  { id: 'section4-87', src: baseUrl + '/section4-87.png' },
  { id: 'section4-88', src: baseUrl + '/section4-88.png' },
  { id: 'section4-89', src: baseUrl + '/section4-89.png' },
  { id: 'section4-90', src: baseUrl + '/section4-90.png' },
  { id: 'section4-91', src: baseUrl + '/section4-91.png' },
  { id: 'section4-92', src: baseUrl + '/section4-92.png' },
  { id: 'section4-93', src: baseUrl + '/section4-93.png' },
  { id: 'section4-94', src: baseUrl + '/section4-94.png' },
  { id: 'section4-95', src: baseUrl + '/section4-95.png' },
  { id: 'section4-96', src: baseUrl + '/section4-96.png' },
  { id: 'section4-97', src: baseUrl + '/section4-97.png' },
  { id: 'section4-98', src: baseUrl + '/section4-98.png' },
  { id: 'section4-99', src: baseUrl + '/section4-99.png' },
  { id: 'section4-100', src: baseUrl + '/section4-100.png' },
  { id: 'section4-101', src: baseUrl + '/section4-101.png' },
  { id: 'section4-102', src: baseUrl + '/section4-102.png' },
  { id: 'section4-103', src: baseUrl + '/section4-103.png' },
  { id: 'section4-104', src: baseUrl + '/section4-104.png' },
  { id: 'section4-105', src: baseUrl + '/section4-105.png' },
  { id: 'section4-106', src: baseUrl + '/section4-106.png' },
  { id: 'section4-107', src: baseUrl + '/section4-107.png' },

  // 小圆点帧图
  { id: 'sprites', src: baseUrl + '/sprites.png' },

  // 第十一屏动画
  { id: 'section11-0', src: baseUrl + '/section11-0.png' },
  { id: 'section11-20', src: baseUrl + '/section11-20.png' },

  // 第十一屏动画
  { id: 'section12-0', src: baseUrl + '/section12-0.png' },

  // 第十六屏动画
  { id: 'section16-0', src: baseUrl + '/section16-0.png' },
  { id: 'section16-36', src: baseUrl + '/section16-36.png' }
])


// 素材加载完成 后执行
function handleLoadingComplete() {
  console.log('所有素材加载完成')
  // //创建 第2屏动画
  // featureCanvas.section2Canvas = new CanvasAni({
  //   // 传入id
  //   canvas: 'section2Canvas',
  //   // 传入 data数据id
  //   canvasData: section2Data,
  //   // 传入动画素材
  //   imgSource: featureQueue,
  //   // 是否自动播放
  //   autoPlay: false,
  //   // 是否循环播放
  //   loop: true,
  //   // 每秒帧数
  //   fps: 24,
  //   // 开始
  //   onPlay: function () {
  //     // console.log('开始帧动画 section3Canvas')
  //   },
  //   // 循环一次
  //   onLoop: function () {
  //     // console.log('循环了一次帧动画 section3Canvas')
  //   }
  // })

  //创建 第3屏动画
  featureCanvas.section3Canvas1 = new CanvasAni({
    // 传入id
    canvas: 'section3Canvas1',
    // 传入 data数据id
    canvasData: section3Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 10,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })

  //创建 第3屏动画
  featureCanvas.section3Canvas2 = new CanvasAni({
    // 传入id
    canvas: 'section3Canvas2',
    // 传入 data数据id
    canvasData: section3AndroidData,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 10,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })


  //创建 第4屏动画
  featureCanvas.section4Canvas = new CanvasAni({
    // 传入id
    canvas: 'section4Canvas',
    // 传入 data数据id
    canvasData: section4Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })

  //创建 更多 小圆点帧图
  featureCanvas.section4Canvasmore2 = new CanvasAni({
    // 传入id
    canvas: 'more2',
    // 传入 data数据id
    canvasData: moreData,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: true,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })

  //创建 更多 小圆点帧图
  featureCanvas.section4Canvasmore1 = new CanvasAni({
    // 传入id
    canvas: 'more1',
    // 传入 data数据id
    canvasData: moreData,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: true,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })

  //创建 第十一屏 动画
  featureCanvas.section11Canvas = new CanvasAni({
    // 传入id
    canvas: 'section11canvas',
    // 传入 data数据id
    canvasData: section11Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    }
  })

  //创建 第十二屏 动画
  featureCanvas.section12Canvas = new CanvasAni({
    // 传入id
    canvas: 'section12canvas',
    // 传入 data数据id
    canvasData: section12Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: true,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })
  

  //创建 第十六屏 动画
  featureCanvas.section16Canvas1 = new CanvasAni({
    // 传入id
    canvas: 'section16canvas1',
    // 传入 data数据id
    canvasData: section11Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })

  //创建 第十六屏 动画
  featureCanvas.section16Canvas2 = new CanvasAni({
    // 传入id
    canvas: 'section16canvas2',
    // 传入 data数据id
    canvasData: section16Data,
    // 传入动画素材
    imgSource: featureQueue,
    // 是否自动播放
    autoPlay: false,
    // 是否循环播放
    loop: true,
    // 每秒帧数
    fps: 24,
    // 开始
    onPlay: function () {
      // console.log('开始帧动画 section3Canvas')
    },
    // 循环一次
    onLoop: function () {
      // console.log('循环了一次帧动画 section3Canvas')
    }
  })
}


// $(Window).resize(function(){

// })
function loadingPlay() {
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
            self.imgSource.getResult(sfileId) ||
              self.imgSource.getResult(t.file),
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
        if (i === 64) {
          $('.part_animation').addClass('animation_show__item')
        }
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

  var loadingPreloadQueue = new createjs.LoadQueue(false)

  loadingPreloadQueue.on('progress', function (evt) {
    loadPercent = Math.floor(evt.progress * 100)
    setProgress()
  })
  // 加载加载页动画素材
  loadingPreloadQueue.loadManifest([
    { id: 'animation_adorn1', src: './img/animation_adorn1.png' },
    { id: 'choice_item_bg', src: './img/choice_item_bg.png' },
    { id: 'form_adorn1', src: './img/form_adorn1.png' },
    { id: 'loading_adorn2', src: './img/loading_adorn2.png' },
    { id: 'loading_base', src: './img/loading_base.png' },
    { id: 'lyrics_adorn1', src: './img/lyrics_adorn1.png' },
    { id: 'page_bg', src: './img/page_bg.jpg' },
    { id: 'page_btn', src: './img/page_btn.png' },
    { id: 'page_hint', src: './img/page_hint.png' },
    { id: 'page_sprite', src: './img/page_sprite.png' },
    { id: 'sprites-1', src: './img/sprites-1.png' },
    { id: 'sprites-2', src: './img/sprites-2.png' },
    { id: 'sprites-3', src: './img/sprites-3.png' },
    { id: 'sprites-4', src: './img/sprites-4.png' },
    { id: 'sprites-5', src: './img/sprites-5.png' },
    { id: 'sprites-6', src: './img/sprites-6.png' },
    { id: 'sprites-7', src: './img/sprites-7.png' },
    { id: 'sprites-8', src: './img/sprites-8.png' },
    { id: 'sprites-9', src: './img/sprites-9.png' },
    { id: 'sprites-10', src: './img/sprites-10.png' },
    { id: 'sprites-11', src: './img/sprites-11.png' },
    { id: 'sprites-12', src: './img/sprites-12.png' },
    { id: 'sprites-13', src: './img/sprites-13.png' },
    { id: 'sprites-14', src: './img/sprites-14.png' },
    { id: 'sprites-15', src: './img/sprites-15.png' },
    { id: 'sprites-16', src: './img/sprites-16.png' },
    { id: 'sprites-17', src: './img/sprites-17.png' },
    { id: 'sprites-18', src: './img/sprites-18.png' },
    { id: 'sprites-19', src: './img/sprites-19.png' },
    { id: 'sprites-20', src: './img/sprites-20.png' },
    { id: 'sprites-21', src: './img/sprites-21.png' },
    { id: 'sprites-22', src: './img/sprites-22.png' },
    { id: 'sprites-23', src: './img/sprites-23.png' },
    { id: 'sprites-24', src: './img/sprites-24.png' },
    { id: 'sprites-25', src: './img/sprites-25.png' },
    { id: 'sprites-26', src: './img/sprites-26.png' },
    { id: 'sprites-27', src: './img/sprites-27.png' },
    { id: 'sprites-28', src: './img/sprites-28.png' },
    { id: 'sprites-29', src: './img/sprites-29.png' },
    { id: 'sprites-30', src: './img/sprites-30.png' },
    { id: 'sprites-31', src: './img/sprites-31.png' },
    { id: 'sprites-32', src: './img/sprites-32.png' }
  ])

  setProgress()
  // 进度处理
  function setProgress() {
    var percent = Math.min(loadPercent, limitPercent)
    percent = Math.min(Math.ceil(percent), 100)
    $('.loading_text__progress').text(percent + '%')
    console.log(percent + '%')
    // 素材＋计时器都加载完成
    if (percent >= 100) {
      animationCanvas = new CanvasAni({
        canvas: 'animationCanvas',
        canvasData: loadData,
        imgSource: loadingPreloadQueue,
        autoPlay: false,
        fps: 24,
        onEnd: function () {
          $('.part_animation').removeClass('show')
          $('.part_person').addClass('show')
        },
      })
      setTimeout(function () {
        // 移除loading页
        $('.part_loading ').removeClass('show')
        $('.part_animation').addClass('show')
      }, 100)
    }
  }

  $('#animationCanvas').on('click', function () {
    animationCanvas.play()
    $('.animation_adorn2').addClass('hide')
  })
}

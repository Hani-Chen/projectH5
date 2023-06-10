var pathPrefix = 'img'
var canvasCollect = {}
// 针对GKA修改优化的一个播放序列帧图的动画类
var CanvasAni = function(options) {
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
  this.onPlay = options.onPlay || function() {}
  //   初始化
  this.onInit = options.onInit || function() {}
  // 当帧动画播放结束时调用
  this.onEnd = options.onEnd || function() {}
  // 当帧动画每完成一次循环时调用
  this.onLoop = options.onLoop || function() {}

  // 绘制画布背景
  this.onDrawBg = options.onDrawBg || function() {}
  // 绘制画布前景
  this.onDrawFg = options.onDrawFg || function() {}
  // 绘制画布的蒙版
  this.onDrawmask = options.onDrawmask || function() {}

  // this.customDraw = options.customDraw ||
  this.ctx = this.canvas.getContext('2d')
  // ctx = null
  this.init()
}

CanvasAni.prototype = {
  // 初始化
  init: function() {
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
  refreshCanvas:function() {
    this.canvas = document.getElementById(this.canvasId)
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.cacheCanvas.width = this.width
    this.cacheCanvas.height = this.height
    this.drawPerFrame(0)
  },
  drawframe: function() {
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
    this.tick(function() {
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
  drawPerFrame: function(frame) {
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
    ctx.drawImage(cacheCanvas, 0, 0)
    ctx.restore()
    i++
    this.currentFrame = i
  },
  play: function() {
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
  pause:function() {
    this.paused = true
  },
  stop: function() {
    this.paused = true
    this.reachEnd = true
  },
  restart: function() {
    this.currentFrame = 0
    this.loopCount = 0
    this.paused = false
    this.reachEnd = false
    // this.initStart = false
    this.drawframe()
  },
  destroy: function() {
    this.stop()
    this.cacheCanvas = null
    this.canvas = null
  },

  tick: function(draw) {
    var self = this
    var fps = this.fps
    var now
    var then = this.lastTick
    var interval = 1000 / fps
    var delta
    if (this.paused) {
      // draw()
      return
    }
    if (window.requestAnimationFrame) {
      requestAnimationFrame(function() {
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
      setTimeout(function() {
        self.tick.call(self, draw)
      }, interval)
      draw()
    }
  },
  setRaf: function() {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame
  }
}


// 预加载资源存储变量
var loadCollect,sourceCollect

function preloadSource(manifest, progress, complete) {
  var queue = new createjs.LoadQueue(false)
  queue.addEventListener('progress', progress)
  queue.addEventListener('complete', function(evt) {
    complete(evt, queue)
  })
  queue.loadManifest(manifest)
}

var loadingSource

/* 加载加载页资源 */
$(document).ready(function() {
  preloadSource(
    [
      { src: pathPrefix + '/arrow_down.png', id: 'arrow_down' },
      { src: pathPrefix + '/logo.png', id: 'logo' },
      { src: pathPrefix + '/bgm_sprite.png', id: 'bgm_sprite' },
      { src: pathPrefix + '/desc.png', id: 'desc' },
      { src: pathPrefix + '/front_bg.png', id: 'front_bg' },
      { src: pathPrefix + '/loading_slogan.png', id: 'loading_slogan' },
      { src: pathPrefix + '/loading_t_tips.png', id: 'loading_t_tips' },
      { src: pathPrefix + '/loading/line-6.png', id: 'line-6' },
      // 加载页 沙漏帧动画
      { src: pathPrefix + '/loading/hg-0.png', id: 'hg-0' }
    ],
    function(evt) {
      // 加载进度
    },
    function(evt, queue) {
      // 图片对象
      loadCollect = queue
      // 执行显示加载页函数
      loadingShow()
    }
  )
})

/**
 * 显示加载页
 * 
 */
function loadingShow() {
  // 执行工具函数 - 显示元素
  showSection('.scetion-loading')
  
  // 沙漏帧动画
  canvasCollect.loadHg = new CanvasAni({
    canvas: 'loadingHg',
    canvasData: loadHgData,
    imgSource: loadCollect,
    autoPlay: true,
    loop: false
  })

  preloadSource(
    [
      // 首页沙漏素材
      { src: pathPrefix + '/hourglass.png', id: 'hourglass' },
      { src: pathPrefix + '/logo.png', id: 'logo' },
      { src: pathPrefix + '/start_t_tips.png', id: 'start_t_tips' },

      // 首页漏沙子帧动画
      { src: pathPrefix + '/start/sand-0.png', id: 'sand-0' },
      // 首页线框帧动画
      { src: pathPrefix + '/start/s-line-6.png', id: 's-line-6' },
      { src: pathPrefix + '/start/s-line-7.png', id: 's-line-7' },
      { src: pathPrefix + '/start/s-line-8.png', id: 's-line-8' },
      { src: pathPrefix + '/start/s-line-9.png', id: 's-line-9' },
      { src: pathPrefix + '/start/s-line-10.png', id: 's-line-10' },
      { src: pathPrefix + '/start/s-line-11.png', id: 's-line-11' },
      { src: pathPrefix + '/start/s-line-12.png', id: 's-line-12' },
      { src: pathPrefix + '/start/s-line-13.png', id: 's-line-13' },
      { src: pathPrefix + '/start/s-line-14.png', id: 's-line-14' },
      { src: pathPrefix + '/start/s-line-15.png', id: 's-line-15' },
      { src: pathPrefix + '/start/s-line-16.png', id: 's-line-16' },
      { src: pathPrefix + '/start/s-line-17.png', id: 's-line-17' },
      { src: pathPrefix + '/start/s-line-18.png', id: 's-line-18' },
      { src: pathPrefix + '/start/s-line-19.png', id: 's-line-19' },
      { src: pathPrefix + '/start/s-line-20.png', id: 's-line-20' },
      { src: pathPrefix + '/start/s-line-21.png', id: 's-line-21' },
      { src: pathPrefix + '/start/s-line-22.png', id: 's-line-22' },
      { src: pathPrefix + '/start/s-line-23.png', id: 's-line-23' },
      { src: pathPrefix + '/start/s-line-24.png', id: 's-line-24' },
      { src: pathPrefix + '/start/s-line-25.png', id: 's-line-25' },
      { src: pathPrefix + '/start/s-line-26.png', id: 's-line-26' },
      { src: pathPrefix + '/start/s-line-27.png', id: 's-line-27' },
      { src: pathPrefix + '/start/s-line-28.png', id: 's-line-28' },
      { src: pathPrefix + '/start/s-line-29.png', id: 's-line-29' },
      { src: pathPrefix + '/start/s-line-30.png', id: 's-line-30' },
      { src: pathPrefix + '/start/s-line-31.png', id: 's-line-31' },
      { src: pathPrefix + '/start/s-line-32.png', id: 's-line-32' },
      { src: pathPrefix + '/start/s-line-33.png', id: 's-line-33' },
      { src: pathPrefix + '/start/s-line-34.png', id: 's-line-34' },
      { src: pathPrefix + '/start/s-line-35.png', id: 's-line-35' },
      { src: pathPrefix + '/start/s-line-36.png', id: 's-line-36' },
      { src: pathPrefix + '/start/s-line-37.png', id: 's-line-37' },
      { src: pathPrefix + '/start/s-line-38.png', id: 's-line-38' },
      { src: pathPrefix + '/start/s-line-39.png', id: 's-line-39' },
      { src: pathPrefix + '/start/s-line-40.png', id: 's-line-40' },
      { src: pathPrefix + '/start/s-line-41.png', id: 's-line-41' },
      { src: pathPrefix + '/start/s-line-42.png', id: 's-line-42' },
      { src: pathPrefix + '/start/s-line-43.png', id: 's-line-43' },
      { src: pathPrefix + '/start/s-line-44.png', id: 's-line-44' },
      { src: pathPrefix + '/start/s-line-45.png', id: 's-line-45' },
      { src: pathPrefix + '/start/s-line-46.png', id: 's-line-46' },
      { src: pathPrefix + '/start/s-line-47.png', id: 's-line-47' },
      { src: pathPrefix + '/start/s-line-48.png', id: 's-line-48' },
      { src: pathPrefix + '/start/s-line-49.png', id: 's-line-49' },
      { src: pathPrefix + '/start/s-line-50.png', id: 's-line-50' },
      { src: pathPrefix + '/start/s-line-51.png', id: 's-line-51' },
      { src: pathPrefix + '/start/s-line-52.png', id: 's-line-52' },
      { src: pathPrefix + '/start/s-line-53.png', id: 's-line-53' },

      { src: pathPrefix + '/select/select_sprites-0.png', id: 'select_sprites-0' },

      // 选择页 建筑素材帧动画 90张
      { src: pathPrefix + '/select/build_sprites-0.png', id: 'build_sprites-0' },
      { src: pathPrefix + '/select/build_sprites-1.png', id: 'build_sprites-1' },
      { src: pathPrefix + '/select/build_sprites-2.png', id: 'build_sprites-2' },
      { src: pathPrefix + '/select/build_sprites-3.png', id: 'build_sprites-3' },
      { src: pathPrefix + '/select/build_sprites-4.png', id: 'build_sprites-4' },
      { src: pathPrefix + '/select/build_sprites-5.png', id: 'build_sprites-5' },
      { src: pathPrefix + '/select/build_sprites-6.png', id: 'build_sprites-6' },
      { src: pathPrefix + '/select/build_sprites-7.png', id: 'build_sprites-7' },
      { src: pathPrefix + '/select/build_sprites-8.png', id: 'build_sprites-8' },
      { src: pathPrefix + '/select/build_sprites-9.png', id: 'build_sprites-9' },
      { src: pathPrefix + '/select/build_sprites-10.png', id: 'build_sprites-10' },
      { src: pathPrefix + '/select/build_sprites-11.png', id: 'build_sprites-11' },
      { src: pathPrefix + '/select/build_sprites-12.png', id: 'build_sprites-12' },
      { src: pathPrefix + '/select/build_sprites-13.png', id: 'build_sprites-13' },
      { src: pathPrefix + '/select/build_sprites-14.png', id: 'build_sprites-14' },
      { src: pathPrefix + '/select/build_sprites-15.png', id: 'build_sprites-15' },
      { src: pathPrefix + '/select/build_sprites-16.png', id: 'build_sprites-16' },
      { src: pathPrefix + '/select/build_sprites-17.png', id: 'build_sprites-17' },
      { src: pathPrefix + '/select/build_sprites-18.png', id: 'build_sprites-18' },
      { src: pathPrefix + '/select/build_sprites-19.png', id: 'build_sprites-19' },
      { src: pathPrefix + '/select/build_sprites-20.png', id: 'build_sprites-20' },
      { src: pathPrefix + '/select/build_sprites-21.png', id: 'build_sprites-21' },
      { src: pathPrefix + '/select/build_sprites-22.png', id: 'build_sprites-22' },
      { src: pathPrefix + '/select/build_sprites-23.png', id: 'build_sprites-23' },
      { src: pathPrefix + '/select/build_sprites-24.png', id: 'build_sprites-24' },
      { src: pathPrefix + '/select/build_sprites-25.png', id: 'build_sprites-25' },
      { src: pathPrefix + '/select/build_sprites-26.png', id: 'build_sprites-26' },
      { src: pathPrefix + '/select/build_sprites-27.png', id: 'build_sprites-27' },
      { src: pathPrefix + '/select/build_sprites-28.png', id: 'build_sprites-28' },
      { src: pathPrefix + '/select/build_sprites-29.png', id: 'build_sprites-29' },
      { src: pathPrefix + '/select/build_sprites-30.png', id: 'build_sprites-30' },
      { src: pathPrefix + '/select/build_sprites-31.png', id: 'build_sprites-31' },
      { src: pathPrefix + '/select/build_sprites-32.png', id: 'build_sprites-32' },
      { src: pathPrefix + '/select/build_sprites-33.png', id: 'build_sprites-33' },
      { src: pathPrefix + '/select/build_sprites-34.png', id: 'build_sprites-34' },
      { src: pathPrefix + '/select/build_sprites-35.png', id: 'build_sprites-35' },
      { src: pathPrefix + '/select/build_sprites-36.png', id: 'build_sprites-36' },
      { src: pathPrefix + '/select/build_sprites-37.png', id: 'build_sprites-37' },
      { src: pathPrefix + '/select/build_sprites-38.png', id: 'build_sprites-38' },
      { src: pathPrefix + '/select/build_sprites-39.png', id: 'build_sprites-39' },
      { src: pathPrefix + '/select/build_sprites-40.png', id: 'build_sprites-40' },
      { src: pathPrefix + '/select/build_sprites-41.png', id: 'build_sprites-41' },
      { src: pathPrefix + '/select/build_sprites-42.png', id: 'build_sprites-42' },
      { src: pathPrefix + '/select/build_sprites-43.png', id: 'build_sprites-43' },
      { src: pathPrefix + '/select/build_sprites-44.png', id: 'build_sprites-44' },
      { src: pathPrefix + '/select/build_sprites-45.png', id: 'build_sprites-45' },
      { src: pathPrefix + '/select/build_sprites-46.png', id: 'build_sprites-46' },
      { src: pathPrefix + '/select/build_sprites-47.png', id: 'build_sprites-47' },
      { src: pathPrefix + '/select/build_sprites-48.png', id: 'build_sprites-48' },
      { src: pathPrefix + '/select/build_sprites-49.png', id: 'build_sprites-49' },
      { src: pathPrefix + '/select/build_sprites-50.png', id: 'build_sprites-50' },
      { src: pathPrefix + '/select/build_sprites-51.png', id: 'build_sprites-51' },
      { src: pathPrefix + '/select/build_sprites-52.png', id: 'build_sprites-52' },
      { src: pathPrefix + '/select/build_sprites-53.png', id: 'build_sprites-53' },
      { src: pathPrefix + '/select/build_sprites-54.png', id: 'build_sprites-54' },
      { src: pathPrefix + '/select/build_sprites-55.png', id: 'build_sprites-55' },
      { src: pathPrefix + '/select/build_sprites-56.png', id: 'build_sprites-56' },
      { src: pathPrefix + '/select/build_sprites-57.png', id: 'build_sprites-57' },
      { src: pathPrefix + '/select/build_sprites-58.png', id: 'build_sprites-58' },
      { src: pathPrefix + '/select/build_sprites-59.png', id: 'build_sprites-59' },
      { src: pathPrefix + '/select/build_sprites-60.png', id: 'build_sprites-60' },
      { src: pathPrefix + '/select/build_sprites-61.png', id: 'build_sprites-61' },
      { src: pathPrefix + '/select/build_sprites-62.png', id: 'build_sprites-62' },
      { src: pathPrefix + '/select/build_sprites-63.png', id: 'build_sprites-63' },
      { src: pathPrefix + '/select/build_sprites-64.png', id: 'build_sprites-64' },
      { src: pathPrefix + '/select/build_sprites-65.png', id: 'build_sprites-65' },
      { src: pathPrefix + '/select/build_sprites-66.png', id: 'build_sprites-66' },
      { src: pathPrefix + '/select/build_sprites-67.png', id: 'build_sprites-67' },
      { src: pathPrefix + '/select/build_sprites-68.png', id: 'build_sprites-68' },
      { src: pathPrefix + '/select/build_sprites-69.png', id: 'build_sprites-69' },
      { src: pathPrefix + '/select/build_sprites-70.png', id: 'build_sprites-70' },
      { src: pathPrefix + '/select/build_sprites-71.png', id: 'build_sprites-71' },
      { src: pathPrefix + '/select/build_sprites-72.png', id: 'build_sprites-72' },
      { src: pathPrefix + '/select/build_sprites-73.png', id: 'build_sprites-73' },
      { src: pathPrefix + '/select/build_sprites-74.png', id: 'build_sprites-74' },
      { src: pathPrefix + '/select/build_sprites-75.png', id: 'build_sprites-75' },
      { src: pathPrefix + '/select/build_sprites-76.png', id: 'build_sprites-76' },
      { src: pathPrefix + '/select/build_sprites-77.png', id: 'build_sprites-77' },
      { src: pathPrefix + '/select/build_sprites-78.png', id: 'build_sprites-78' },
      { src: pathPrefix + '/select/build_sprites-79.png', id: 'build_sprites-79' },
      { src: pathPrefix + '/select/build_sprites-80.png', id: 'build_sprites-80' },
      { src: pathPrefix + '/select/build_sprites-81.png', id: 'build_sprites-81' },
      { src: pathPrefix + '/select/build_sprites-82.png', id: 'build_sprites-82' },
      { src: pathPrefix + '/select/build_sprites-83.png', id: 'build_sprites-83' },
      { src: pathPrefix + '/select/build_sprites-84.png', id: 'build_sprites-84' },
      { src: pathPrefix + '/select/build_sprites-85.png', id: 'build_sprites-85' },
      { src: pathPrefix + '/select/build_sprites-86.png', id: 'build_sprites-86' },
      { src: pathPrefix + '/select/build_sprites-87.png', id: 'build_sprites-87' },
      { src: pathPrefix + '/select/build_sprites-88.png', id: 'build_sprites-88' },
      { src: pathPrefix + '/select/build_sprites-89.png', id: 'build_sprites-89' },

      // 其他素材
      { src: pathPrefix + '/finger.gif', id: 'finger' },
      { src: pathPrefix + '/btn_arrow.png', id: 'btn_arrow' },
      { src: pathPrefix + '/btn_sprites.png', id: 'btn_arrow' },
      { src: pathPrefix + '/dream_icon-0.png', id: 'dream_icon-0' },
      { src: pathPrefix + '/i_arrow.png', id: 'i_arrow' },
      { src: pathPrefix + '/i_slide.png', id: 'i_slide' },
      { src: pathPrefix + '/icon_remove.png', id: 'icon_remove' },
      { src: pathPrefix + '/input_1.png', id: 'input_1' },
      { src: pathPrefix + '/input_2.png', id: 'input_2' },
      { src: pathPrefix + '/input_tips.png', id: 'input_tips' },
      { src: pathPrefix + '/modal_bg.png', id: 'modal_bg' },
      { src: pathPrefix + '/process_bg_desc.png', id: 'process_bg_desc' },
      { src: pathPrefix + '/process_slogan.png', id: 'process_slogan' },
      { src: pathPrefix + '/select_title_sprites.png', id: 'select_title_sprites' },
      { src: pathPrefix + '/start_bg.png', id: 'start_bg' },
      { src: pathPrefix + '/tips_bg.png', id: 'tips_bg' },
      { src: pathPrefix + '/process_bg.jpg', id: 'process_bg' },
      { src: pathPrefix + '/process_card_bg.png', id: 'process_card_bg' },
      { src: pathPrefix + '/line_side.png', id: 'line_side' },
      { src: pathPrefix + '/line_dot.png', id: 'line_dot' },
      { src: pathPrefix + '/i_item.png', id: 'i_item' },
      { src: pathPrefix + '/process_i.png', id: 'process_i' },
      { src: pathPrefix + '/result_border.png', id: 'result_border' },
      { src: pathPrefix + '/icon_quoto.png', id: 'icon_quoto' },
      { src: pathPrefix + '/result_bg_desc.png', id: 'result_bg_desc' },
      { src: pathPrefix + '/result_desc_bg1.png', id: 'result_desc_bg1' },
      { src: pathPrefix + '/qrcode.png', id: 'qrcode' }
    ],
    function(evt) {
      // 加载进度
      $('.loading-percent .percent').text(Math.floor(evt.progress * 100))
    },
    function(evt, queue) {
      sourceCollect = queue
      $('.loading-btn').addClass('show').on('click',function(){
        showStart()
      })
    }
  )
}

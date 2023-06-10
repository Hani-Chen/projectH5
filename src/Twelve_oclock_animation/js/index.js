/* 禁止浏览器下拉 */
document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
) //passive 参数不能省略,用来兼容ios和android

/* 帧动画 */
// function initAnimate() {
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
    this.cacheCtx = this.cacheCanvas.getContext('2d', { alpha: false })
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
    ctx.drawImage(cacheCanvas, 0, 0, w, h)
    ctx.restore()
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
  pause() {
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
      draw()
      return
    }
    if (window.requestAnimationFrame) {
      requestAnimationFrame(function() {
        self.tick.call(self, draw)
      })
      now = Date.now()
      delta = now - then
      if (delta > interval) {
        // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms(60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
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

/* 加载 */
var canvasPreloadQueue = new createjs.LoadQueue(false)
// 加载完成后执行函数 handleLoadingComplete
canvasPreloadQueue.on('complete', handleLoadingComplete, this)

// 开始加载图片素材
canvasPreloadQueue.loadManifest([
  { id: 'city_bj-0', src: './img/city_bj-0.png' },
  { id: 'city_gz-0', src: './img/city_gz-0.png' }
])

var cityCanvas = {}
// 加载完成后
function handleLoadingComplete() {
  console.log('素材加载完成')
  cityCanvas.beijing = new CanvasAni({
    // 接受数据的 canvas
    canvas: 'canvasBeijing',
    // canvas 数据
    canvasData: cityGzData,
    // canvas 图片资源
    imgSource: canvasPreloadQueue
    // 是否自动播放
    // autoPlay: true,
    // 时候循环播放
    // loop: true
  })

  // cityCanvas.guangzhou = new CanvasAni({
  //   // 接受数据的 canvas
  //   canvas: 'canvasGuangzhou',
  //   // canvas 数据
  //   canvasData: cityGzData,
  //   // canvas 图片资源
  //   imgSource: canvasPreloadQueue,
  //   // 是否自动播放
  //   autoPlay: false
  // })
}
// }

/* 手指事件 */
// function initTouch() {
var time, // 定时器
  triangleDeg = 45, // 角度默认值
  X2, // 鼠标x轴坐标
  Y2, // 鼠标y轴坐标
  contentDiskT, // 圆盘距父元素距离 y坐标
  contentDiskL, // 圆盘距父元素距离 x坐标
  contentT, // 内容距父元素距离  y坐标
  contentL, // 内容距父元素距离  x坐标
  contentR, // 圆盘 r(半径)
  page_x, // 半径加距离左边的距离 (rL)
  page_y, // 半径加距离上边的距离 (rT)
  triangleH, // 三角形高
  triangleW // 三角形宽

// 内容
var content = $('.content')[0]
// 圆盘
var contentDisk = $('.content-disk')[0]
// 圆点
var contentDot = $('.content-dot')[0]

// 创建手指事件
var wrapTouch = new PhyTouch({
  touch: $('.wrap')[0], //反馈触摸的dom
  vertical: false, //不必需，默认是true代表监听竖直方向touch
  target: $('.wrap')[0], //运动的对象
  property: 'translateY', //被运动的属性
  min: 100, //不必需,运动属性的最小值
  max: 2000, //不必需,滚动属性的最大值
  sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
  factor: 1, //不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
  moveFactor: 1, //不必需,表示touchmove位移与被运动属性映射关系，默认值是1
  step: 45, //用于校正到step的整数倍
  bindSelf: false,
  maxSpeed: 2, //不必需，触摸反馈的最大速度限制
  value: 0,
  change: function(value) {},
  touchStart: function(evt, value) {}, // 触摸
  touchMove: function(evt, value) {}, // 手指触摸后移动
  touchEnd: function(evt, value) {}, // 手指触摸动作结束
  tap: function(evt, value) {}, // 单击
  pressMove: function(evt, value) {}, // 按住拖动
  animationEnd: function(value) {} // 运动结束
})

/* 触摸结束时 */
wrapTouch.touchEnd = function(evt, value) {
  // 回退定时器
  time = setInterval(function() {
    // 每次回退5deg
    triangleDeg -= 5
    // 如果回到原点
    if (triangleDeg <= 45) {
      // 停止回退定时器
      clearInterval(time)
      // 恢复默认角度
      triangleDeg = 45
      // 移除暂停动画属性
      contentDot.classList.remove('content-dot-stop')
      // 添加动画
      contentDot.classList.add('content-dot-play')
    }
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'

    // 获取当前帧动画总帧数 计算成360的倍数 * 当前度数
    var cityN = Math.round((cityCanvas.beijing.list.length / 360) * triangleDeg)
    // 将算出的帧数赋值给帧动画
    cityCanvas.beijing.currentFrame = cityN
    // 打印当前帧数
    console.log("打印当前帧数",cityN)
    // 播放帧动画
    cityCanvas.beijing.play()
    // cityCanvas.beijing.paused()
    cityCanvas.beijing.paused = true
    // 当帧动画播放时
    cityCanvas.beijing.onPlay = function() {
      // 打印当前帧数
    console.log("当播放时打印当前帧数",cityN)
    }
  }, 200)

  // cityCanvas.beijing.paused = true

  
    
}

/* 触摸时 */
wrapTouch.touchStart = function(evt, value) {
  // 停止回退定时器
  clearInterval(time)
  // 暂停动画
  contentDot.classList.add('content-dot-stop')
  cityCanvas.beijing.pause()
}
/* 长按时 */
wrapTouch.pressMove = function(evt, value) {
  // cityCanvas.beijing.play()
  // cityCanvas.beijing.canvasData = cityBjData
  // 移除动画
  contentDot.classList.remove('content-dot-play')
  // 停止回退定时器
  clearInterval(time)
  /* 获取鼠标的坐标  相对浏览器 */
  X2 = evt.touches[0].pageX //x坐标
  Y2 = evt.touches[0].pageY //x坐标

  // 圆盘 距父元素距离
  contentDiskT = contentDisk.offsetTop //x坐标
  contentDiskL = contentDisk.offsetLeft //x坐标

  // 内容 距父元素距离
  contentT = content.offsetTop //x坐标
  contentL = content.offsetLeft //x坐标

  // 圆盘 r(半径)
  contentR = contentDisk.offsetWidth / 2 //宽度 r(半径)

  // 获取半径加距离两边的距离 姑且叫(rL,rT)
  page_x = contentR + contentDiskL + contentL
  page_y = contentR + contentDiskT + contentT

  if (X2 > page_x && Y2 < page_y) {
    /* 如果在 +x +y 象限 */

    // 三角形高  rT - 鼠标top
    triangleH = page_y - Y2
    // 三角形宽  鼠标left - rL
    triangleW = X2 - page_x
    // 三角形度数
    triangleDeg = Math.round(
      45 + (Math.atan(triangleW / triangleH) * 180) / Math.PI
    )

    // 移除默认帧动画
    // $('#canvasBeijing').remove('canvas-show')
    // // 执行第一轮帧动画
    // $('#canvasShanghai').add('canvas-show')
    // cityCanvas.guangzhou.play()
    // cityCanvas.guangzhou.loop = true

    // cityCanvas.beijing.canvasData = cityBjData

    // cityCanvas.beijing.imgSource = canvasPreloadQueue

    // cityCanvas.beijing.play()
    //   // canvas 图片资源
    //   imgSource: canvasPreloadQueue,
    //   // 是否自动播放
    //   autoPlay: true,
    //   loop: true
    // })

    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'

    // 获取当前帧动画总帧数 计算成360的倍数 * 当前度数
    var cityN = Math.round((cityCanvas.beijing.list.length / 360) * triangleDeg)
    // 将算出的帧数赋值给帧动画
    cityCanvas.beijing.currentFrame = cityN
    // 打印当前帧数
    console.log("打印当前帧数",cityN)
    // 播放帧动画
    cityCanvas.beijing.play()
    cityCanvas.beijing.paused = true
    // 当帧动画播放时
    cityCanvas.beijing.onPlay = function() {
      // 打印当前帧数
    console.log("当播放时打印当前帧数",cityN)
    }
  } else if (X2 > page_x && Y2 > page_y) {
    /* 如果在 +x -y 象限 */

    // 三角形高  鼠标top - rT
    triangleH = Y2 - page_y
    // 三角形宽  鼠标left - rL
    triangleW = X2 - page_x
    // 三角形度数
    triangleDeg = Math.round(
      135 + (Math.atan(triangleH / triangleW) * 180) / Math.PI
    )
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'

    // 获取当前帧动画总帧数 计算成360的倍数 * 当前度数
    var cityN = Math.round((cityCanvas.beijing.list.length / 360) * triangleDeg)
    // 将算出的帧数赋值给帧动画
    cityCanvas.beijing.currentFrame = cityN
    // 打印当前帧数
    console.log("打印当前帧数",cityN)
    // 播放帧动画
    cityCanvas.beijing.play()
    cityCanvas.beijing.paused = true
    // 当帧动画播放时
    cityCanvas.beijing.onPlay = function() {
      // 打印当前帧数
    console.log("当播放时打印当前帧数",cityN)
    }
  } else if (X2 < page_x && Y2 > page_y) {
    /* 如果在 -x -y 象限 */

    // 三角形高  鼠标top - rT
    triangleH = Y2 - page_y
    // 三角形宽  rT - 鼠标left
    triangleW = page_x - X2
    // 三角形度数
    triangleDeg = Math.round(
      225 + (Math.atan(triangleW / triangleH) * 180) / Math.PI
    )
    contentDot.style.transition = ''
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    
    // 获取当前帧动画总帧数 计算成360的倍数 * 当前度数
    var cityN = Math.round((cityCanvas.beijing.list.length / 360) * triangleDeg)
    // 将算出的帧数赋值给帧动画
    cityCanvas.beijing.currentFrame = cityN
    // 打印当前帧数
    console.log("打印当前帧数",cityN)
    // 播放帧动画
    cityCanvas.beijing.play()
    cityCanvas.beijing.paused = true
    // 当帧动画播放时
    cityCanvas.beijing.onPlay = function() {
      // 打印当前帧数
    console.log("当播放时打印当前帧数",cityN)
    }
  } else if (X2 < page_x && Y2 < page_y) {
    // /* 如果在 -x +y 象限 */

    // 三角形高 rT - 鼠标top
    triangleH = page_y - Y2
    // 三角形宽  rL - 鼠标left
    triangleW = page_x - X2
    // 三角形度数
    triangleDeg = Math.round(
      315 + (Math.atan(triangleH / triangleW) * 180) / Math.PI
    )
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    
    // 获取当前帧动画总帧数 计算成360的倍数 * 当前度数
    var cityN = Math.round((cityCanvas.beijing.list.length / 360) * triangleDeg)
    // 将算出的帧数赋值给帧动画
    cityCanvas.beijing.currentFrame = cityN
    // 打印当前帧数
    console.log("打印当前帧数",cityN)
    // 播放帧动画
    cityCanvas.beijing.play()
    // cityCanvas.beijing.paused()
    cityCanvas.beijing.paused = true
    // 当帧动画播放时
    cityCanvas.beijing.onPlay = function() {
      // 打印当前帧数
    console.log("当播放时打印当前帧数",cityN)
    }
  }
}
// }

// $(document).ready(function() {
//   initAnimate()
//   initTouch()
// })
// var savePicture = document.getElementsByClassName('savePicture')[0]

$('.savePicture').click(function() {
  var cntElem = document.getElementsByClassName('wrap')[0]
  var shareContent = cntElem //需要截图的包裹的（原生的）DOM 对象
  var width = shareContent.offsetWidth //获取dom 宽度
  var height = shareContent.offsetHeight //获取dom 高度
  var canvas = document.createElement('canvas') //创建一个canvas节点
  var scale = 1 //定义任意放大倍数 支持小数
  canvas.width = width * scale //定义canvas 宽度 * 缩放
  canvas.height = height * scale //定义canvas高度 *缩放
  canvas.getContext('2d').scale(scale, scale) //获取context,设置scale
  var opts = {
    backgroundColor: '#ffffff',
    scale: scale, // 添加的scale 参数
    canvas: canvas, //自定义 canvas
    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
    width: width, //dom 原始宽度
    height: height,
    useCORS: true // 【重要】开启跨域配置
  }
  html2canvas(shareContent, opts).then(function(canvas) {
    var context = canvas.getContext('2d')
    // // 【重要】关闭抗锯齿
    // context.mozImageSmoothingEnabled = false
    // context.webkitImageSmoothingEnabled = false
    // context.msImageSmoothingEnabled = false
    // context.imageSmoothingEnabled = false

    // 【重要】默认转化的格式为png,也可设置为其他格式
    var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height)
    $('#box-img')[0].appendChild(img)
    $('#box-img').css({ display: 'block' })

    console.log(img)
  })
})

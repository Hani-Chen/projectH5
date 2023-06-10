/* global $,staticPrefix,AdobeAn,createjs,waveData,yzpData,yzptcData,dqqData */
var otherImage = [
  '520.png',
  'bg-button.png',
  'bg-index.jpg',
  'bgm_sprites.png',
  'bg_end.jpg',
  'bg_svip.jpg',
  'end_person.png',
  'end_text.png',
  'person_king.png',
  'person_queen.png',
  'reginal.png',
  'start_light.png',
  'svip_t1.png',
  'svip_t2.png',
  'svip_t3.png',
  'svip_t4.png',
  'svip_t5.png',
  'svip_t6.png',
  'text.png',

  'panta_person.png',
  'panta_sprites.png',
  'chat_bg.jpg',
  'main_h5_atlas_P_.png',
  'pop_sprites.png',
  'calling_other.png',
  'icon_calling.png',
  'calling_queen.jpg',
  'call_other.png',
  'icon_call.png',
  'person_call.png',
  'bg_call.jpg',
  'bg_message.jpg',
  'message_msg.png',
  'message_text.png',
  'pop_think.png',
  'person_king_think.png'
]
var otherMainfest = otherImage.map(function(v, i) {
  return { src: staticPrefix + 'img/' + v, id: '_other_' + i }
})

var canvasImage = [
  'a_yzp-0',
  'a_yzp-16',
  'a_yzp-24',
  'a_yzp-32',
  'a_yzp-8',
  'a_dqq-0',
  'a_dqq-16',
  'a_dqq-24',
  'a_dqq-32',
  'a_dqq-40',
  'a_dqq-8',
  'a_wave-0',
  'a_yztc-0',
  'a_yztc-16',
  'a_yztc-24',
  'a_yztc-32',
  'a_yztc-40',
  'a_yztc-8'
]
var canvasMainfest = canvasImage.map(function(v) {
  return { src: staticPrefix + 'img/' + v + '.png', id: v }
})
// 其他音频素材
var audioMainfest = [
  { src: staticPrefix + 'audio/online.wav', id: 'online' },
  { src: staticPrefix + 'audio/call.wav', id: 'call' },
  { src: staticPrefix + 'audio/hangup.wav', id: 'hangup' }
]
// var canvasImage = [yzpAniData]

// canvasImage.forEach(function(v){
//   v.frames.map(function(v){
//     return {src: staticPrefix + v.file,id:}
//   })
// })
var imageCollect = []

// 群聊页面
var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  loader,
  fnStartAnimation,
  chatAnimate

function init() {
  canvas = document.getElementById('chatCanvas')
  anim_container = document.getElementById('animation_container')
  dom_overlay_container = document.getElementById('dom_overlay_container')

  var comp = AdobeAn.getComposition('F074CD74B06B45D0B087B7D9982ADCAD')
  var lib = comp.getLibrary()
  loader = new createjs.LoadQueue(true)
  loader.installPlugin(createjs.Sound)
  loader.addEventListener('fileload', function(evt) {
    handleFileLoad(evt, comp)
  })
  loader.addEventListener('progress', function(evt) {
    handleProgress(evt, comp)
  })
  loader.addEventListener('complete', function(evt) {
    handleComplete(evt, comp)
  })
  loader.loadManifest(
    otherMainfest.concat(lib.properties.manifest).concat(canvasMainfest).concat(audioMainfest)
  )
}

// 加载进度
function handleProgress(e) {
  let w = e.progress * 100
  $('.loading-progress-inner').css('width', w + '%')
  $('.loading-percent').text(parseInt(w) + '%')
}
// 文件加载
function handleFileLoad(evt, comp) {
  var images = comp.getImages()
  // 图片缓存
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result
  }
}
// 加载完成
function handleComplete(evt, comp) {
  imageCollect = comp.getImages()
  showStart()
  animationStart(evt, comp)
}

// 开始动画
function animationStart(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary()
  var ss = comp.getSpriteSheet()
  var queue = evt.target
  var ssMetadata = lib.ssMetadata
  for (var i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames
    })
  }
  exportRoot = new lib.mainh5()
  stage = new lib.Stage(canvas)

  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot)
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    // createjs.Ticker.setFPS(lib.properties.fps+5)
    createjs.Ticker.framerate = lib.properties.fps + 5
    createjs.Ticker.addEventListener('tick', stage)
  }

  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if (
          (respDim == 'width' && lastW == iw) ||
          (respDim == 'height' && lastH == ih)
        ) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      canvas.width = w * pRatio * sRatio
      canvas.height = h * pRatio * sRatio
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =
        w * sRatio + 'px'
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height =
        h * sRatio + 'px'
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  makeResponsive(true, 'width', true, 2)
  // fnStartAnimation()
}
// 播放音频
function playSound(id, loop) {
  return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop)
}

// 御花园钩子
function triggerOne(context) {
  chatAnimate = context
  showThink('gardenPop')
}
// 胭脂铺钩子
function triggerTwo(context) {
  chatAnimate = context
  showThink('yanziPop')
}
// 盘他钩子
function triggerThree(context) {
  chatAnimate = context
  showThink('pantaPop')
}

var windowHeight = window.innerHeight
var windowWidth = window.innerWidth

var rootTop = windowHeight + 50

var flowerColor = 'rgba(255,192,203,0.3)' //花色
var flowerColorDeep = 'rgba(241,158,194,0.5)' //花色深
var fallList = [] //飘落樱花列表
var g = 0.04 //重力加速度
var gWind = 0.0005 //风力加速度
var limitSpeedY = 0.8 //速度上限
var ctx // 实际用于绘制的ctx对象，根据页面逻辑有变化

// 启动页画布对象
var canvasStart = document.getElementById('canvasStart')
var ctxStart = canvasStart.getContext('2d')
// Svip页画布对象
var canvasSvip = document.getElementById('canvasSvip')
var ctxSvip = canvasSvip.getContext('2d')
// 落地页画布对象
var canvasEnd = document.getElementById('canvasEnd')
var ctxEnd = canvasEnd.getContext('2d')
// 离屏canvas 优化绘制效率
var cacheCanvas = document.createElement('canvas')
var cacheCtx = cacheCanvas.getContext('2d')
// canvas宽高设置
cacheCanvas.width = canvasStart.width = canvasSvip.width = canvasEnd.width = windowWidth
cacheCanvas.height = canvasStart.height = canvasSvip.height = canvasEnd.height = windowHeight
// canvas 绘制阴影
// cacheCtx.shadowColor = '#ffffff'
// cacheCtx.shadowBlur = 10

// 花瓣颜色组
var flowerColorArray = [flowerColorDeep, flowerColor, flowerColor]
function drawFlower() {
  var color = flowerColorArray[Math.round(Math.random() + 0.2)]
  var r = 3 + Math.random() * 2
  return {
    // 水平位置 负半屏 到满屏 随机产生
    x: (Math.random() * 1.5 - 0.5) * windowWidth,
    // 垂直位置  屏幕顶部
    y: -10,
    sx: Math.random() - 0.5,
    sy: 0,
    color: color,
    r: r,
    deg: 0.8 - 0.3 * Math.random()
  }
}
// 生成200片樱花池
// for (let i = 0; i < 200; i++) {
//   drawFlower()
// }
// let len = flowerList.length
// 绘制花瓣轨迹
function step() {
  if (Math.random() > 0.8) {
    fallList.push(drawFlower())
  }

  cacheCtx.clearRect(0, 0, windowWidth, windowHeight)

  for (var i = 0; i < fallList.length; i++) {
    var v = fallList[i]
    if (v.sy < limitSpeedY) {
      v.sy += g
    }
    v.sx += gWind
    v.x += v.sx
    v.y += v.sy
    if (v.y > rootTop) {
      fallList.splice(i, 1)
      i--
      continue
    }
    v.deg += v.sx * 0.05
    drawPetal(v.color, v.x, v.y, v.r, v.deg, v.deg + Math.PI * 1.3)
  }
  ctx.clearRect(0, 0, windowWidth, windowHeight)
  ctx.drawImage(cacheCanvas, 0, 0, windowWidth, windowHeight)
}
// 绘制单个花瓣
function drawPetal(color, x, y, r, deg) {
  cacheCtx.beginPath()
  cacheCtx.fillStyle = color
  cacheCtx.strokeStyle = flowerColor
  cacheCtx.arc(x, y, r, deg, deg + Math.PI * 1.3)
  // 随机花瓣形状
  cacheCtx.lineTo(x - 0.5, y - 1.1)
  cacheCtx.closePath()
  // 花瓣边缘
  // cacheCtx.stroke()
  cacheCtx.fill()
}
// 花瓣飘落，如果不存在可绘制画布，则不执行
function flowerFlow() {
  if (ctx) {
    step()
  }
  requestAnimationFrame(flowerFlow)
}
// 切换页面显示
function showSection(name, keepPrev) {
  // 是否保留前置页面
  if (!keepPrev) {
    $('.section.show')
      .not('.section-' + name)
      .removeClass('show')
  }
  $('.section-' + name).addClass('show')
}
// 显示启动页
function showStart() {
  ctx = ctxStart
  requestAnimationFrame(flowerFlow)
  $('.bgm-toggle').addClass('show')
  showSection('start')
}
// 跳转显示svip页面
function showPageSvip() {
  ctx = ctxSvip

  showSection('svip')

  // 9s后播放语音通话请求页面
  setTimeout(function() {
    showCall()
    // context.gotoAndPlay(724)
  }, 9000)
}
// 跳转显示结尾页面
function showEnd() {
  ctx = ctxEnd
  showSection('end')
}

// $(document).ready(function(){
// 加载资源初始化动画
init()

// 加入群聊按钮。 加入按钮锁机制，避免连续点击
var startLock = false
$('.start-btn').click(function() {
  if (!startLock) {
    startLock = true
    showChat()
  }
})

// 跳转显示聊天页面
function showChat() {
  // 暂停画布绘制事件，避免浪费性能
  ctx = null
  fnStartAnimation()
  // 延迟300ms以增强按钮反馈，减低动画初始化时的停顿感。
  setTimeout(function() {
    showSection('chat')
  }, 300)
}
// 显示思考、气泡弹窗
function showThink(id) {
  console.log(id)
  ctx = null
  $('#' + id).addClass('show')
  showSection('think', true)
}
// 御花园气泡点击事件
$('#gardenPop').click(function() {
  $('#gardenPop').removeClass('show')
  $('#gardenBox').addClass('show')

  var dqqCanvas = new CanvasAni({
    canvas: document.getElementById('gardenCanvas'),
    canvasData: dqqData,
    width: windowWidth,
    height: windowHeight,
    loop: true,
    onLoop: function(count) {
      if (count == 2) {
        dqqCanvas.destroy()
        $('.section-think').removeClass('show')
        $('#gardenBox').remove()
        chatAnimate.play()
      }
    }
  })
})
// 胭脂铺气泡点击事件
$('#yanziPop').click(function() {
  $('#yanziPop').removeClass('show')
  $('#yanziBox').addClass('show')

  var yzpCanvas = new CanvasAni({
    canvas: document.getElementById('yanziCanvas'),
    canvasData: yzpData,
    width: windowWidth,
    height: windowHeight,
    loop: true
  })
  var yzpPopCanvas = new CanvasAni({
    canvas: document.getElementById('yanziPopCanvas'),
    canvasData: yzptcData,
    width: windowWidth,
    height: windowHeight,
    loop: true,
    onLoop: function(count) {
      if (count == 1) {
        yzpPopCanvas.destroy()
        yzpCanvas.destroy()
        $('.section-think').removeClass('show')
        $('#yanziBox').remove()
        chatAnimate.play()
      }
    }
  })
})
// 盘他气泡点击事件
$('#pantaPop').click(function() {
  showMessage()
})

// 显示qq信息界面
function showMessage() {
  ctx = null
  showSection('message')
  // 1.5s后播放消息音
  setTimeout(function() {
    playSound('online')
  }, 1500)

  // 背景荡秋千动画
  var msgDqqCanvas = new CanvasAni({
    canvas: document.getElementById('msgDqqCanvas'),
    canvasData: dqqData,
    width: windowWidth,
    height: windowHeight,
    loop: true
  })
  $('.message-msg').one('click', function() {
    // 显示svip页面
    showPageSvip()
    // 停止并回收动画
    msgDqqCanvas.destroy()
  })
}
// 显示语音请求页面
function showCall() {
  ctx = null
  showSection('call')
  // 循环播放来电音
  var callSound = playSound('call', -1)
  // 波谱线动画
  var waveCanvas = new CanvasAni({
    canvas: document.getElementById('waveCanvas'),
    canvasData: waveData,
    width: windowWidth,
    height: windowHeight,
    loop: true
  })
  $('.call-answer').one('click', function() {
    showCalling()
    // 停止播放来电音
    callSound.stop()
    // 停止并回收动画
    waveCanvas.destroy()
  })
}
// 显示通话中动画
function showCalling() {
  ctx = null
  showSection('calling')

  var startTime = 2500
  var stopTime = 2500

  // 唐玄宗气泡1
  setTimeout(() => {
    $('.calling-pop-1').addClass('show')
    // 播放新消息提示音
    playSound('fasongxiaoxiwav')
  }, startTime)

  // 唐玄宗气泡2
  setTimeout(() => {
    $('.calling-pop-1').addClass('hide')
    $('.calling-pop-2').addClass('show')
    playSound('fasongxiaoxiwav')
  }, startTime + stopTime)

  // 唐玄宗气泡3
  setTimeout(() => {
    $('.calling-pop-2').addClass('hide')
    $('.calling-pop-3').addClass('show')
    playSound('fasongxiaoxiwav')
  }, startTime + stopTime * 2)

  // 杨贵妃会话
  setTimeout(() => {
    $('.calling-pop-4').addClass('show')
    playSound('fasongxiaoxiwav')
    // 挂断按钮可点击状态
    $('.calling-answer')
      .addClass('active')
      .one('click', function() {
        // 跳转落地页
        showEnd()
        // 播放挂断音效
        playSound('hangup')
      })
  }, startTime + stopTime * 3)
}

// 音频控制按钮
$('#bgmBtn').click(function() {
  $(this).toggleClass('stop')
})

// 针对GKA修改优化的一个播放序列帧图的动画类
var CanvasAni = function(options) {
  this.timer = null
  this.canvas = options.canvas
  this.canvasData = options.canvasData
  this.onEnd = options.onEnd || function() {}
  this.loop = options.loop || false
  this.onLoop = options.onLoop || function() {}
  // this.customDraw = options.customDraw ||
  this.ctx = this.canvas.getContext('2d')
  ctx = null
  this.init()
}

CanvasAni.prototype = {
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
    this.fps = data.fps || 30
    this.currentFrame = 0
    this.loopCount = 0
    this.pause = false
    this.setRaf()
    this.drawframe()
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
    var sfileId = data.fileId
    var loop = this.loop

    // clearInterval(this.timer)
    var self = this
    this.lastTick = Date.now()
    this.tick(function() {
      o = list[i]
      cacheCtx.clearRect(0, 0, w, h)
      o = Object.prototype.toString.call(o) == '[object Array]' ? o : [o]
      var t
      for (var j = 0; j < o.length; j++) {
        t = frames[o[j]]
        cacheCtx.drawImage(
          imageCollect[sfileId] || imageCollect[t.fileId],
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
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(cacheCanvas, 0, 0, w, h)
      ++i
      if (i === len) {
        if (loop) {
          self.loopCount++
          self.onLoop.call(self, self.loopCount)
          i = 0
        } else {
          self.stop.call(self)
          self.onEnd.call(self)
        }
      }
      self.currentFrame = i
    })
  },
  play: function() {
    this.pause = false
  },
  stop: function() {
    this.pause = true
  },
  restart: function() {
    this.currentFrame = 0
    this.loopCount = 0
    this.play()
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
    if (this.pause) {
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

// })

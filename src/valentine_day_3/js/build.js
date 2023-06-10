/* global $,staticPrefix,AdobeAn,createjs,waveData,yzpData,yzptcData,dqqData */
var otherImage = [
  '520.png',
  'bg-button.png',
  'bg-index.jpg',
  'bgm_sprites.png',
  'bg_call.jpg',
  'bg_end.jpg',
  'bg_message.jpg',
  'calling_queen.png',
  'call_other.png',
  'chat_bg.jpg',
  'end_person.png',
  'end_text.png',
  'icon_call.png',
  'icon_calling.png',
  'layer.png',
  'lianxiang.png',
  'message_msg.png',
  'message_text.png',
  'onlookers.gif',
  'panta_sprites.png',
  'person_call.png',
  'person_king.png',
  'person_panta.png',
  'person_queen.png',
  'person_start_king.png',
  'pop_sprites.png',
  'reginal.png',
  'start-text.png',
  'start_light.png',
  'svip_999.png',
  'svip_gift.png',
  'svip_text.png',
  'svip_title.png'
]
var otherMainfest = otherImage.map(function(v, i) {
  return { src: staticPrefix + 'img/' + v, id: '_other_' + i }
})

var canvasImage = [
  'think_mask',
  'think_border',
  'trans_mask',
  'a_wave-0',
  'a_dqq-0',
  'a_dqq-4',
  'a_dqq-8',
  'a_dqq-12',
  'a_dqq-16',
  'a_dqq-20',
  'a_yzp-0',
  'a_yzp-16',
  'a_yzp-8',
  'a_yzptc-0',
  'a_yzptc-16',
  'a_yzptc-24',
  'a_yzptc-32',
  'a_yzptc-40',
  'a_yzptc-8'
]
var canvasMainfest = canvasImage.map(function(v) {
  return { src: staticPrefix + 'img/' + v + '.png', id: v }
})

// 其他音频素材
var audioMainfest = [
  { src: staticPrefix + 'img/bg_svip.jpg', id: 'bg_svip' },
  { src: staticPrefix + 'img/bg_yzp.jpg', id: 'bg_yzp' },
  { src: staticPrefix + 'audio/online.wav', id: 'online' },
  { src: staticPrefix + 'audio/call.wav', id: 'call' },
  { src: staticPrefix + 'audio/hangup.wav', id: 'hangup' },
  { src: staticPrefix + 'audio/520bmg.mp3', id: 'bgm' }
]
var imageCollect = []

// 群聊页面
var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  loader,
  fnStartAnimation,
  chatAnimate,
  bgm

function init() {
  canvas = document.getElementById('chatCanvas')
  anim_container = document.getElementById('animation_container')
  dom_overlay_container = document.getElementById('dom_overlay_container')

  var comp = AdobeAn.getComposition('6F2E59065B941C409C00C7F2D1BA96F1')
  var lib = comp.getLibrary()
  loader = new createjs.LoadQueue(false)
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
    otherMainfest
      .concat(lib.properties.manifest)
      .concat(canvasMainfest)
      .concat(audioMainfest)
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
  // 启动页
  showStart()
  animationStart(evt, comp)
  // svip页
  // showPageSvip()
  // showSection('svip')
  // 落地页
  // showEnd()
  // 电话接通页
  // showCalling()
  // qq消息页面
  // showMessage()
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
  exportRoot = new lib.mainh5517()
  stage = new lib.Stage(canvas)

  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot)
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    createjs.Ticker.framerate = lib.properties.fps
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
// bgm开启或关闭
function toggleBgm(bl) {
  bgm.paused = !bl
}

// 御花园钩子
function triggerOne(context) {
  chatAnimate = context
  showThink('garden')
  // showThink('panta')
}
// 胭脂铺钩子
function triggerTwo(context) {
  chatAnimate = context
  showThink('yanzi')
}
// 盘他钩子
function triggerThree(context) {
  chatAnimate = context
  showThink('panta')
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
// var canvasSvip = document.getElementById('canvasSvip')
// var ctxSvip = canvasSvip.getContext('2d')
// 落地页画布对象
var canvasEnd = document.getElementById('canvasEnd')
var ctxEnd = canvasEnd.getContext('2d')
var canvasMessage = document.getElementById('canvasMessage')
var ctxMessage = canvasMessage.getContext('2d')
// 离屏canvas 优化绘制效率
var cacheCanvas = document.createElement('canvas')
var cacheCtx = cacheCanvas.getContext('2d')
// canvas宽高设置
cacheCanvas.width = canvasStart.width = canvasMessage.width = canvasEnd.width = windowWidth
cacheCanvas.height = canvasStart.height = canvasMessage.height = canvasEnd.height = windowHeight
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
// 背景音乐按钮显示函数
function showBgm() {
  $('.bgm-toggle').addClass('show')
}
// 背景音乐按钮隐藏函数
function hideBgm() {
  $('.bgm-toggle').removeClass('show')
  toggleBgm(false)
}
// 显示启动页
function showStart() {
  pvPage('start')

  ctx = ctxStart
  requestAnimationFrame(flowerFlow)

  // 显示聊天页面
  showSection('start')
}
// 跳转显示结尾页面
function showEnd() {
  pvPage('end')

  ctx = ctxEnd
  showSection('end')
  // 显示背景音乐按钮
  showBgm()
  // 判断是否播放背景音乐
  decideStop()
}

// 加载资源初始化动画
$(document).ready(function() {
  pvPage('loading')
  $('.section-loading').addClass('show')
  init()
})

// 加入群聊按钮。 加入按钮锁机制，避免连续点击
var startLock = false
$('.start-btn').click(function() {
  if (!startLock) {
    startLock = true
    pvEvent('start-btn')
    // 显示聊天页面
    showChat()
  }
})

// 跳转显示聊天页面
function showChat() {
  pvPage('chat')

  // 暂停画布绘制事件，避免浪费性能
  ctx = null

  // 执行动画
  fnStartAnimation()

  // 延迟300ms以增强按钮反馈，减低动画初始化时的停顿感。
  setTimeout(function() {
    // 显示页面
    showSection('chat')
  }, 300)
}

// 显示思考、气泡弹窗
function showThink(id) {
  ctx = null
  // console.log(id)
  $('#' + id + 'Box').addClass('show')
  // 显示页面
  showSection('think', true)
  switch (id) {
    case 'garden':
      $('#gardenPop').addClass('show')
      showGarden()
      break
    case 'yanzi':
      showYanzi()
      break
    case 'panta':
      $('#pantaPop').addClass('show')
      showPanta()
      break
    default:
      break
  }
}
// 显示御花园动画
function showGarden() {
  var dqqCanvas = new CanvasAni({
    canvas: document.getElementById('gardenCanvas'),
    canvasData: dqqData,
    width: windowWidth,
    height: windowHeight,
    onDrawBg: function(ctx) {
      ctx.drawImage(imageCollect.bg_svip, 0, 0)
    },
    onDrawFg: function(ctx) {
      ctx.drawImage(imageCollect.think_border, 0, 780)
    },
    onDrawmask: function(ctx) {
      ctx.drawImage(imageCollect.think_mask, 0, -100)
      ctx.globalCompositeOperation = 'source-in'
    },
    loop: true,
    onLoop: function(i) {
      if (i == 3) {
        dqqCanvas.destroy()
        $('.section-think').removeClass('show')
        $('.think-pop').removeClass('show')
        $('#gardenBox').remove()
        chatAnimate.play()
      }
    }
  })
  dqqCanvas.play()
}
// 显示胭脂铺动画
function showYanzi() {
  $('.think-pop').remove()

  var yzpCanvas = new CanvasAni({
    canvas: document.getElementById('yanziCanvas'),
    canvasData: yzpData,
    width: windowWidth,
    height: windowHeight,
    loop: true,
    onDrawBg: function(ctx) {
      ctx.drawImage(imageCollect.bg_yzp, 0, 0)
    },
    onDrawmask: function(ctx) {
      ctx.drawImage(imageCollect.trans_mask, 0, 1034, 750, 300)
      ctx.globalCompositeOperation = 'source-out'
    }
  })
  yzpCanvas.play()

  var yzpPopCanvas = new CanvasAni({
    canvas: document.getElementById('yanziPopCanvas'),
    canvasData: yzptcData,
    width: windowWidth,
    height: windowHeight,
    loop: false,
    autoPlay: false,
    onEnd: function() {
      // 胭脂动画停止2s后继续
      setTimeout(function() {
        yzpPopCanvas.destroy()
        yzpCanvas.destroy()
        $('.section-think').removeClass('show')
        $('#yanziBox').remove()
        chatAnimate.play()
      }, 2000)
    }
  })
  setTimeout(function() {
    yzpPopCanvas.play()
  }, 1500)
}
// 显示盘他动画
function showPanta() {
  $('.section-think').addClass('section-think-panta')
}
// 盘他气泡点击事件
$('#pantaPop').click(function() {
  // $('.section-think').removeClass('section-think-panta')
  // 淡出
  $('.think-box').addClass('fade-out-left')
  $('.section-chat')
    .removeClass('show')
    .addClass('fade-out-left')
  $('.section-think')
    .removeClass('show')
    .addClass('fade-out')
  showMessage()
})

var msgLock = false
// 显示qq信息界面
function showMessage() {
  if (msgLock) {
    return
  }
  msgLock = true
  pvEvent('panta-pop')
  pvPage('message')

  showSection('message', true)
  showBgm()
  // 点击盘他播放背景音乐
  bgm = playSound('bgm', -1)
  setTimeout(function() {
    // 隐藏聊天页面还有联想页面
    $('.section-chat').removeClass('fade-out-left')
    $('.section-think').removeClass('fade-out')
  }, 1700)
  // 1.5s后播放消息音
  setTimeout(function() {
    playSound('online')
  }, 4000)
  ctx = ctxMessage

  // 背景荡秋千动画
  var msgDqqCanvas = new CanvasAni({
    canvas: document.getElementById('msgDqqCanvas'),
    canvasData: dqqData,
    width: windowWidth,
    height: windowHeight,
    autoPlay: true,
    loop: true,
    onDrawmask: function(ctx) {
      ctx.drawImage(imageCollect.trans_mask, 0, 1034)
      ctx.globalCompositeOperation = 'source-out'
    }
  })
  // 点击QQ消息
  $('.message-msg').one('click', function() {
    $('.section-svip').addClass('show')
    // 停止并回收动画
    msgDqqCanvas.destroy()

    // 3s后可点击
    setTimeout(function() {
      // console.log("可点击跳转")
      $('.section-svip').one('click', function() {
        pvEvent('message-pop')

        // 背景音乐按钮隐藏
        hideBgm()
        // 显示接电话
        showCall()
        clearInterval(automaticSkip)
      })
    }, 3000)

    // 6s后自动播放语音通话请求页面
    var automaticSkip = setTimeout(function() {
      // console.log("自动跳转")
      // 背景音乐按钮隐藏
      hideBgm()
      // 显示接电话
      showCall()
    }, 6000)
  })
}
// 显示语音请求页面
function showCall() {
  pvPage('incoming_call')

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
    autoPlay: true,
    loop: true
  })
  $('.call-answer').one('click', function() {
    pvEvent('answer-btn')
    showCalling()
    // 停止播放来电音
    callSound.stop()
    // 停止并回收动画
    waveCanvas.destroy()
  })
}
// 显示通话中动画
function showCalling() {
  pvPage('calling')

  ctx = null
  showSection('calling')

  var startTime = 1500
  var stopTime = 1500

  // 唐玄宗气泡1
  setTimeout(() => {
    $('.calling-pop-1').addClass('show')
    // 播放新消息提示音
    // playSound('fasongxiaoxiwav')
  }, startTime)
  // 杨贵妃会话
  setTimeout(() => {
    $('.calling-pop-4').addClass('show')
    // playSound('fasongxiaoxiwav')
    // 挂断按钮可点击状态
    $('.calling-answer')
      .addClass('active')
      .one('click', function() {
        pvEvent('hangup-btn')

        // 跳转落地页
        showEnd()
        // 播放挂断音效
        playSound('hangup')
      })
  }, startTime + stopTime)
}

// 音频控制按钮
$('#bgmBtn').click(function() {
  pvEvent('bgm-btn')

  $(this).toggleClass('stop')
  decideStop()
})
var decideStop = function() {
  toggleBgm(!$('#bgmBtn').hasClass('stop'))
}

// 针对GKA修改优化的一个播放序列帧图的动画类
var CanvasAni = function(options) {
  this.timer = null
  this.canvas = options.canvas
  this.canvasData = options.canvasData
  this.autoPlay = options.autoPlay || false
  this.loop = options.loop || false
  
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
    this.fps = data.fps || 24
    this.currentFrame = 0
    this.loopCount = 0
    this.setRaf()
    if (this.autoPlay) {
      this.pause = false
      this.initStart = true
      this.drawframe()
    } else {
      this.pause = true
      this.initStart = false
    }
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
  play: function() {
    this.pause = false
    if (!this.initStart) {
      this.initStart = true
      this.drawframe()
    }
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
// 开通svip按钮
$('.svip-btn').click(function(){
  window.location.href = 'http://gxh.vip.qq.com/club/themes/mobile/act/diy_tpl/zbncyy/html/index.html?_wv=16782337&_wvx=3' // SVIP开通链接
  pvEvent('svip-btn')
})
// 分享按钮
$('.share-btn').click(function(){
  pvEvent('share-btn')
  toShare()
})

function getAbsoluteURL(relativePath) {
  var loc = window.location;
  var arr = loc.pathname.split('/');
  arr.pop();
  return loc.protocol + '//' + loc.hostname + arr.join('/') + relativePath;
}
// 分享配置
function initShare(){
  // 设置分享信息
  qzlib.share.initShare({
      title: '情人节，皇上也发愁了',
      summary: '快来给皇帝支个招',
      url: window.location.href,   
      pic: getAbsoluteURL('/img/share_img.jpg'),
      swapTitleInWX: true
  });
}
// 分享配置
function toShare() {
  // 设置分享描述
  qzlib.share.showShare({
    title: '情人节，皇上也发愁了', // 分享文案
    summary: '快来给皇帝支个招', // 分享描述文案
    url:  window.location.href, // 分享链接
    pic: getAbsoluteURL('/img/share_img.jpg'), // 分享图片
    swapTitleInWX: true
  })
}
// 初始化分享配置
initShare()

// 统计按钮点击事件
function pvEvent(name) {
  // console.log('统计按钮',name)
  qzlib.stat.reportHotClick(location.pathname  + name)
}

// 统计页面pv
function pvPage(name) {
  // console.log('统计页面',name)
  qzlib.stat.reportPV(location.pathname + '_' + name)
}

/* global images, lib, createjs, ss  */
var otherImage = [
  './img/520.png',
  './img/bg-button.png',
  './img/bg-index.jpg',
  // './img/bg-loading.jpg',
  './img/bgm_sprites.png',
  './img/bg_end.jpg',
  './img/bg_svip.jpg',
  './img/end_person.png',
  './img/end_text.png',
  // './img/loading.gif',
  './img/person_king.png',
  './img/person_queen.png',
  './img/reginal.png',
  './img/start_light.png',
  './img/svip_t1.png',
  './img/svip_t2.png',
  './img/svip_t3.png',
  './img/svip_t4.png',
  './img/svip_t5.png',
  './img/svip_t6.png',
  './img/text.png'
]
var otherMainfest = otherImage.map(function(v, i) {
  return { src: v, id: '_other_' + i }
})
// 群聊页面
var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  loader,
  fnStartAnimation

function init() {
  
  canvas = document.getElementById('chatCanvas')
  anim_container = document.getElementById('animation_container')
  dom_overlay_container = document.getElementById('dom_overlay_container')
  images = images || {}
  ss = ss || {}
  loader = new createjs.LoadQueue(true)
  loader.addEventListener('fileload', handleFileLoad)
  loader.addEventListener('progress', handleProgress)
  loader.addEventListener('complete', handleComplete)
  loader.loadManifest(otherMainfest.concat(lib.properties.manifest))
}
function handleProgress(e) {
  let w = e.progress * 100
  $('.loading-progress-inner').css('width', w + '%')
  $('.loading-percent').text(parseInt(w) + '%')
}

function handleFileLoad(evt) {
  // console.log(evt)
  if (evt.item.type == 'image') {
    images[evt.item.id] = evt.result
  }
}
function handleComplete(evt) {
  // console.log(evt)
  // 背景音乐按钮
  // $('.bgm').addClass('show')
  // 宣传页显示
  // $('.section').addClass('show')
  // // $('.lastPageLabel-receptacle').addClass('show')
  // // loading页隐藏
  // $('.loading-receptacle').removeClass('show')
  showStart()
  console.log('加载完成')
  animationStart()
  // return
}
function animationStart() {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var queue = loader
  var ssMetadata = lib.ssMetadata
  for (var i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames
    })
  }
  exportRoot = new lib.mainh538()
  stage = new createjs.Stage(canvas)
  stage.addChild(exportRoot)
  // stage.update()
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED
    // createjs.Ticker.setFPS(lib.properties.fps+5)
    createjs.Ticker.framerate = lib.properties.fps+5
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
    }
  }
  makeResponsive(true, 'width', true, 2)
  // fnStartAnimation()
}
// 杨贵妃荡秋千页面

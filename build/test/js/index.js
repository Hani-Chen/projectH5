
/* 首页帧动画 */
var loadingCanvas
var loadingPreloadQueue = new createjs.LoadQueue()
loadingPreloadQueue.on('complete', handleLoadingComplete, this)
// 加载加载页动画素材
loadingPreloadQueue.loadManifest([
  { id: 'test-0', src: './img/test-0.png' },
  { id: 'test-9', src: './img/test-9.png' },
  { id: 'test-18', src: './img/test-18.png' },
  { id: 'test-27', src: './img/test-27.png' },
])

function handleLoadingComplete() {
  console.log('加载页素材加载完成')
  loadingCanvas = new CanvasAni({
    canvas: 'canvasLoading',
    canvasData: loadData,
    imgSource: loadingPreloadQueue,
    autoPlay: false,
    fps: 14,
    loop: true,
    onLoop: function () {
      // loadingCanvas.destroy()
    },
  })
}

$('.test-button').on('click', function() {
  loadingCanvas.play()
})
// 针对GKA修改优化的一个播放序列帧图的动画类
var CanvasAni = function(options) {
    this.timer = null
    this.canvasId = options.canvas
    this.canvas = document.getElementById(options.canvas)
    this.canvasData = options.canvasData
    this.autoPlay = options.autoPlay || false
    this.loop = options.loop || false
    this.fps = options.fps || 24
    this.imgSource = options.imgSource || {}

    // 当播放动画时触发
    this.onPlay = options.onPlay || function() {}
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
    },
    play: function() {
        if (this.paused) {
            this.paused = false
            if (this.reachEnd) {
                this.restart()
            } else {
                this.drawframe()
            }
            // if (!this.initStart) {
            //     this.initStart = true
            // }
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

// loadData
var loadingCanvas
var innerLoad = false
var loadingPreloadQueue = new createjs.LoadQueue()
loadingPreloadQueue.on('complete', handleLoadingComplete, this)
// 加载加载页动画素材
loadingPreloadQueue.loadManifest([
    { id: 'loading_-0', src: './img/loading_-0.png' },
    { id: 'loading_-8', src: './img/loading_-8.png' },
    { id: 'loading_-16', src: './img/loading_-16.png' },
    { id: 'loading_-24', src: './img/loading_-24.png' },
    { id: 'loading_-32', src: './img/loading_-32.png' },
    { id: 'loading_-40', src: './img/loading_-40.png' },
    { id: 'loading_-48', src: './img/loading_-48.png' }
])

function handleLoadingComplete() {
    console.log('加载页素材加载完成')
    loadingCanvas = new CanvasAni({
        canvas: 'canvasLoading',
        canvasData: loadData,
        imgSource: loadingPreloadQueue,
        autoPlay: true,
        loop: true,
        onLoop: function() {
            // 内页加载完后完成一次动画循环后隐藏加载页
            if (innerLoad) {
                $('.section_home').hide()

                loadingCanvas.destroy()

                preloadComplete()
            }
        },
        onInit: function() {
            // 开始加载内页图片素材
            canvasPreloadQueue.loadManifest([
                { id: 'city_bj-0', src: './img/city_bj-0.png' },
                { id: 'city_gz-0', src: './img/city_gz-0.png' },
                { id: 'city_xm-0', src: './img/city_xm-0.png' },
                { id: 'city_sh-0', src: './img/city_sh-0.png' },
                { id: 'city_qg-0', src: './img/city_qg-0.png' },
                { id: 'city_slogan-0', src: './img/city_slogan-0.png' },
                { id: 'city_like-0', src: './img/like-0.png' },
                { id: 'winebottle', src: './img/winebottle.png' },
                 { id: 'choose_bg', src: './img/choose_bg.jpg'},
                 { id: 'copy', src: './img/copy.png'},
                 { id: 'drop', src: './img/drop.png'},
                 { id: 'icon_backtrack', src: './img/icon_backtrack.png'},
                 { id: 'icon_collect', src: './img/icon_collect.png'},
                 { id: 'icon_gliding', src: './img/icon_gliding.png'},
                 { id: 'icon_list', src: './img/icon_list.png'},
                 { id: 'icon_location', src: './img/icon_location.png'},
                 { id: 'icon_more', src: './img/icon_more.png'},
                 { id: 'icon_note', src: './img/icon_note.png'},
                 { id: 'icon_stop', src: './img/icon_stop.png'},
                 { id: 'item_bg', src: './img/item_bg.png'},
                 { id: 'loading_preview2', src: './img/loading_preview2.jpg'},
                 { id: 'logo', src: './img/logo.png'},
                 { id: 'logo_qq', src: './img/logo_qq.png'},
                 { id: 'playmusic_bg', src: './img/playmusic_bg.jpg'},
                 { id: 'rocker', src: './img/rocker.png'},
                 { id: 'songlist_bg', src: './img/songlist_bg.jpg'},
                 { id: 'songlist_picture', src: './img/songlist_picture.jpg'},
                 { id: 'song_bg', src: './img/song_bg.png'},
                 { id: 'song_list', src: './img/song_list.png'},
                 { id: 'text', src: './img/text.png'},
                 { id: 'turntable_bg', src: './img/turntable_bg.png'}
            ])
        }
    })
}

var cityCanvas = {}
var canvasPreloadQueue = new createjs.LoadQueue()
// canvasPreloadQueue.installPlugin()
canvasPreloadQueue.on('complete', handleComplete, this)
// 内页素材加载完毕
function handleComplete() {
    console.log('内页素材加载完成')
    innerLoad = true

    cityCanvas.beijing = new CanvasAni({
        canvas: 'canvasBeijing',
        canvasData: cityBjData,
        imgSource: canvasPreloadQueue,
        autoPlay: false
    })
    cityCanvas.shanghai = new CanvasAni({
        canvas: 'canvasShanghai',
        canvasData: cityShData,
        imgSource: canvasPreloadQueue,
        autoPlay: false
    })
    cityCanvas.guangzhou = new CanvasAni({
        canvas: 'canvasGuangzhou',
        canvasData: cityGzData,
        imgSource: canvasPreloadQueue,
        autoPlay: false
    })
    cityCanvas.xiamen = new CanvasAni({
        canvas: 'canvasXiamen',
        canvasData: cityXmData,
        imgSource: canvasPreloadQueue,
        autoPlay: false
    })
    cityCanvas.quanguo = new CanvasAni({
        canvas: 'canvasQuanguo',
        canvasData: cityQgData,
        imgSource: canvasPreloadQueue,
        autoPlay: false
    })
    cityCanvas.slogan = new CanvasAni({
        canvas: 'canvasCitySlogan',
        canvasData: citySloganData,
        imgSource: canvasPreloadQueue,
        autoPlay: true,
        loop: true,
        fps: 12
    })
    cityCanvas.Like = new CanvasAni({
        canvas: 'canvasLike',
        canvasData: cityLikeData,
        imgSource: canvasPreloadQueue,
        autoPlay: true,
        loop: true,
        fps: 26
    })

   
}

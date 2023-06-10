// 面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。它使用先前建立的范例，包括模块化，多态和封装几种技术
class FlowerFloat {

  constructor(options) {
    // 创建定时器变量
    this.timer = null;
    // 获取画布
    this.canvas = document.getElementById(options.canvas);
    // 定义花瓣颜色数组
    this.colorArray = options.colorArray || [
      'rgba(255,192,203,0.3)',
      'rgba(241,158,194,0.5)',
      'rgba(255,0,194,0.3)',
      'rgba(255,0,0,0.2)'
    ];
    // 是否自动播放
    this.autoPlay = options.autoPlay || false;

    // 重力
    this.gravity = options.gravity || 0.04;
    // x轴加速度
    this.windSpeed = options.windSpeed || 0.0005;
    // y轴加速度
    this.limitSpeedY = options.limitSpeedY || 0.8;
    /* 绘制的元素半径 */
    this.radius = options.radius || 2;
    /**
   * fragmentary ==> 残缺的半圆
   * fivePointed ==> 五角星
   * roundness ==> 圆形
   * img ==> 自定义图片
   */
    this.form = options.form || 'roundness';
    // 如果绘制的是图片需要传图片地址
    this.imgUrlArray = options.imgUrlArray || [];
    // 获取这个画布的 context - 图像稍后将在此被渲染。
    this.ctx = this.canvas.getContext('2d');
    // 默认执行方法
    this.init();
  }
  init() {
    // 创建离屏画布
    this.cacheCanvas = document.createElement('canvas')
    // 获取这个画布的context - 图像稍后将在此被渲染。
    this.cacheCtx = this.cacheCanvas.getContext('2d')

    // 将页面中的canvas的宽高赋值到离屏画布
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.cacheCanvas.width = this.width
    this.cacheCanvas.height = this.height
    
    // 存储花瓣的数组
    this.fallList = []
    // 存储图片的数组
    this.imgList = []
    // 如果自动播放
    if (this.autoPlay) {
      // 是否已经暂停
      this.paused = false
      // 开始绘制
      this.drawframe()
    } else {
      // 是否已经暂停
      this.paused = true
    }

    // 如果是绘制图片 - 将传入的img数组加载一遍 - 先跳过
    if (this.form == 'img') {
      var _this = this
      this.itemImg = new Image()
      for (var i = 0; i < this.imgUrlArray.length; i++) {
        this.preLoadImg(this.imgUrlArray[i])
        this.oImg.onload = function () {
          _this.imgList.push(this) //已经加载的就推入数组
          if (_this.imgList.length == _this.imgUrlArray.length) {
            console.log(_this.imgList)
            _this.isIimg = true
          }
        }
      }
    }
  }
  /**
   * 单个花瓣的数据 (当前绘制的为圆形花瓣)
   *
   * startX ==> 花瓣绘制起始x轴位置 （负半屏 到满屏 随机产生）
   * startY ==> 花瓣绘制起始y轴位置 （屏幕顶部）
   * startSpeedX ==> 花瓣x轴起始速度
   * startSpeedY ==> 花瓣y轴起始速度
   * color ==> 通过获取花瓣颜色数组得到但但单个需要绘制的花瓣颜色
   * radius ==> 花瓣半径
   * startDeg ==> 花瓣起始角度
   *
   */
  drawFlower() {
    // 随机获取颜色
    var color = this.colorArray[
      // 获取花瓣颜色数组中的随机一个颜色 - Math.round【取整】 - Math.random【随机】
      Math.round(Math.random() * (this.colorArray.length - 1))
    ]
    // 获取半径 - 随机数范围 this.radius  +  [0-2的随机数]
    var radius = this.radius + Math.random() * 2
    return {
      // x轴位置
      startX: (Math.random() * 1.5 - 0.5) * this.width,
      // y轴位置
      startY: -50,
      // x轴速度
      startSpeedX: Math.random() - 0.5,
      // y轴速度
      startSpeedY: 0,
      // 单个花瓣颜色
      color: color,
      // 单个花瓣半径
      radius: radius,
      // 起始角度
      startDeg: 0.8 - 0.3 * Math.random()
    }
  }

  step() {
    
    /* 添加条件限制获取单个花瓣数据  */
    if (Math.random() > 0.8) {
      /* 将获取的单个花瓣数据存入花瓣飘落数组 */
      this.fallList.push(this.drawFlower())
    }

    /**
     * 设置指定矩形区域内（以 点 (x, y) 为起点，范围是(width, height) ）所有像素变成透明，并擦除之前绘制的所有内容的方法。
     *
     * cacheCtx.clearRect(x, y, width, height);
     * x ==> 矩形起点的 x 轴坐标。
     * y ==> 矩形起点的 y 轴坐标。
     * width ==> 矩形的宽度。
     * height ==> 矩形的高度。
     */
    this.cacheCtx.clearRect(0, 0, this.width, this.height)

    /**
     * 获取花瓣飘落数组数据
     *
     *
     */
    for (var i = 0; i < this.fallList.length; i++) {
      /* 获取单个花瓣飘落数组中单个花瓣数据 */
      var v = this.fallList[i]

      /* 判断花瓣Y轴起始速度是否超出 创建 "花瓣" 动态属性时定义的速度上限值 limitSpeedY */
      if (v.startSpeedY < this.limitSpeedY) {
        /* 如果未超出则将创建 "花瓣" 动态属性时定义的重力加速度 赋值到y轴下落速度上 */
        v.startSpeedY += this.gravity
      }

      /* 将创建 "花瓣" 动态属性时定义的风力加速度 赋值到x轴移动速度上 */
      v.startSpeedX += this.windSpeed

      /* 通过x轴移动速度改变x轴移动距离 */
      v.startX += v.startSpeedX

      /* 通过y轴移动速度改变y轴移动距离 */
      v.startY += v.startSpeedY

      /* 如果y轴移动距离超出 定义的 超出屏幕的变量 */
      if (v.startY > this.rootTop) {
        /* 删除花瓣飘落数组中已超出屏幕的花瓣数据 */
        this.fallList.splice(i, 1)
        /* 删除花瓣飘落数组中已超出屏幕的花瓣数据后减去花瓣飘落数组长度 */
        i--
        continue
      }

      /* 改变单个花瓣旋转角度 */
      v.startDeg += v.startSpeedX * 0.05

      this.drawPetal(v.color, v.startX, v.startY, v.radius, v.startDeg)

      /**
       * 设置指定矩形区域内（以 点 (x, y) 为起点，范围是(width, height) ）所有像素变成透明，并擦除之前绘制的所有内容的方法。
       *
       * ctx.clearRect(x, y, width, height);
       * x ==> 矩形起点的 x 轴坐标。
       * y ==> 矩形起点的 y 轴坐标。
       * width ==> 矩形的宽度。
       * height ==> 矩形的高度。
       */
      this.ctx.clearRect(0, 0, this.width, this.height)
      /**
       * 将离屏画布通过自定义画布绘制出来
       */
      this.ctx.drawImage(this.cacheCanvas, 0, 0, this.width, this.height)
    }
  }

  /**
   *
   * @param {*} color 单个花瓣颜色
   * @param {*} startSpeedX x轴起始速度
   * @param {*} startSpeedY y轴起始位置
   * @param {*} radius 花瓣半径
   * @param {*} startDeg 花瓣角度
   */
  drawPetal(color, startSpeedX, startSpeedY, radius, startDeg) {
    this.cacheCtx.save()
    /* 通过清空子路径列表开始一个新路径的方法。 */
    this.cacheCtx.beginPath()

    /* canvas 填充颜色 */
    this.cacheCtx.fillStyle = color

    /* canvas画笔颜色。 */
    this.cacheCtx.strokeStyle = color

    /**
     * 绘制圆弧路径的方法
     *
     * ctx.arc(x, y, radius, startAngle, endAngle);
     * x ==> 圆弧中心（圆心）的 x 轴坐标。
     * y ==> 圆弧中心（圆心）的 y 轴坐标。
     * radius ==> 圆弧的半径。
     * startAngle ==> 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
     * endAngle ==> 圆弧的终点， 单位以弧度表示。
     */
    if (this.form == 'fivePointed') {
      for (var i = 0; i < 5; i++) {
        this.cacheCtx.lineTo(
          Math.cos(((18 + 72 * i - startSpeedX) / 180) * Math.PI) *
          (radius * 2) +
          startSpeedX,
          -Math.sin(((18 + 72 * i - startSpeedX) / 180) * Math.PI) *
          (radius * 2) +
          startSpeedY
        )
        this.cacheCtx.lineTo(
          Math.cos(((54 + 72 * i - startSpeedX) / 180) * Math.PI) * radius +
          startSpeedX,
          -Math.sin(((54 + 72 * i - startSpeedX) / 180) * Math.PI) * radius +
          startSpeedY
        )
      }
    } else if (this.form == 'fragmentary') {
      /**
       * 绘制圆弧路径的方法
       *
       * ctx.arc(x, y, radius, startAngle, endAngle);
       * x ==> 圆弧中心（圆心）的 x 轴坐标。
       * y ==> 圆弧中心（圆心）的 y 轴坐标。
       * radius ==> 圆弧的半径。
       * startAngle ==> 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
       * endAngle ==> 圆弧的终点， 单位以弧度表示。
       */
      this.cacheCtx.arc(
        startSpeedX,
        startSpeedY,
        radius,
        startDeg,
        startDeg + Math.PI * 1.3
      )

      /**
       * 随机花瓣形状
       *
       * ctx.lineTo(x, y);
       * x ==> 直线终点的 x 轴坐标。
       * y ==> 直线终点的 y 轴坐标。
       */
      this.cacheCtx.lineTo(startSpeedX - 0.5, startSpeedY - 1.1)
    } else if (this.form == 'roundness') {
      this.cacheCtx.arc(startSpeedX, startSpeedY, radius, 0, 2 * Math.PI)
    } else if (this.form == 'img' && this.isIimg == true) {
      // if (this.isIimg == true) {
      // console.log(this.imgList[Math.round(Math.random() * (this.imgList.length - 1))]);

      this.cacheCtx.drawImage(
        this.imgList[Math.round(Math.random() * (this.imgList.length - 1))],
        startSpeedX,
        startSpeedY,
        radius * 2,
        radius * 2
      )

     
    }

    /* 将笔点返回到当前子路径起始点的方法。 */
    this.cacheCtx.closePath()

    /* 根据当前的填充样式，填充当前或已存在的路径的方法。 */
    this.cacheCtx.fill()
    this.cacheCtx.stroke() // 结束路径
    this.cacheCtx.restore()
  }
  drawframe() {
    if (this.ctx) {
      this.step()
    }
    this.time = setInterval(() => {
      this.step()
    }, 24)
  }
  // 继续
  play() {
    if (this.paused) {
      this.paused = false
      this.drawframe()
    }
  }

  // 暂停
  stop()  {
    this.paused = true
    clearInterval(this.time)
    // this.ctx.clearRect(0, 0, this.width, this.height)
  }
  // 销毁
  destroy() {
    this.stop()
    this.cacheCanvas = null
    this.canvas = null
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}
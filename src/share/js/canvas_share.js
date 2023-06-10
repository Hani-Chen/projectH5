// 获取画布
var canvas = document.getElementById('canvasShare2')
//创建 2d canvas 画布
const ctx = canvas.getContext('2d')

setInterval(() => {
  //获取当前时间
  var mydate = new Date();
  var h = mydate.getHours();
  var m = mydate.getMinutes();
  var s = mydate.getSeconds();
  h = h + m / 60;
  m = m + s / 60

  //  获取画布宽高
  var width = ctx.canvas.width
  var height = ctx.canvas.height

  // 获取表盘圆心 和半径
  var originW = width / 2
  var originH = height / 2
  var r = 230

  // 画笔颜色 默认透明
  ctx.strokeStyle = 'transparent'

  /* 绘制左边渐变背景 */
  ctx.save();
  var bgColorL = ctx.createLinearGradient(0, 0, width, height)  // 创建线性渐变
  bgColorL.addColorStop(0, "#f3bdd7")
  bgColorL.addColorStop(1, "#e987b8")
  ctx.beginPath()  // 开启路径
  ctx.fillStyle = bgColorL  // 背景填充颜色
  ctx.moveTo(0, 0)
  ctx.lineTo(width, 0)
  ctx.lineTo(0, height)
  ctx.fill()  // 填充
  ctx.stroke()  // 结束路径
  ctx.restore()

  /* 绘制右边渐变背景 */
  ctx.save();
  var bgColorR = ctx.createLinearGradient(0, 0, width, height)
  bgColorR.addColorStop(0, "#aad7f0")
  bgColorR.addColorStop(1, "#78c1e8")
  ctx.beginPath()
  ctx.fillStyle = bgColorR
  ctx.moveTo(width, 0)
  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  /* 绘制表盘 */
  ctx.save();
  ctx.strokeStyle = '#373737'
  ctx.fillStyle = '#171717'
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.arc(originW, originH, r, 0, Math.PI * 2, true) // 绘制
  
  ctx.shadowColor = "rgba(23,23,23,0.2)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 15;
  ctx.shadowOffsetX = 15;
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // 绘制文字
  ctx.save();
  // var HH = 9
  var HH = Math.floor(h)
  if(HH.toString().length < 2 ){
    var textColor = ctx.createLinearGradient(20, 20, 40, 20)  // 创建线性渐变
  }else {
    var textColor = ctx.createLinearGradient(0, 0, 100, 4)  // 创建线性渐变
  }
  textColor.addColorStop(0, "#ebe390")
  textColor.addColorStop(1, "#f1519c")
  ctx.translate(originW, originH)  // 平移
  ctx.beginPath()
  ctx.fillStyle = textColor;
  ctx.font = '288px NumberOnly'  // 字号、字体
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(HH, 0, 20)  // 需要绘制的文案、x轴、y轴
  ctx.stroke()
  ctx.restore()




  /* 绘制刻度 */
  for (var i = 0; i < 60; i++) {
    ctx.save();
    ctx.strokeStyle = '#373737'
    ctx.translate(originW, originH)  // 平移
    ctx.rotate(i * 6 * Math.PI / 180)  // 偏移角度
    ctx.beginPath();
    ctx.lineWidth = 2
    i % 5 == 0 ? ctx.moveTo(0, r - 40) : ctx.moveTo(0, r - 20)
    ctx.lineTo(0, r)
    ctx.stroke()
    ctx.restore()
  }

  /* 绘制时针 */
  ctx.save();
  ctx.lineWidth = 10
  ctx.translate(originW, originH)
  ctx.rotate(h * 30 * Math.PI / 180);
  ctx.beginPath()
  ctx.strokeStyle = '#373737'
  ctx.lineCap = "round";
  // ctx.fillRect(-5, 20, 10, (-r + 20));  // 绘制矩形
  ctx.moveTo(0, 20)
  ctx.lineTo(0, (-r + 45))
  ctx.stroke()
  ctx.restore()



  /* 绘制分针 */
  ctx.save();
  ctx.translate(originW, originH)
  ctx.rotate(m * 6 * Math.PI / 180);
  ctx.beginPath()
  ctx.lineWidth = 10
  ctx.strokeStyle = '#fbffff'
  ctx.lineCap = "round";
  ctx.moveTo(0, 20)
  ctx.lineTo(0, (-r + 20))
  ctx.stroke()
  ctx.restore()

  /* 绘制秒针 */
  ctx.save();
  ctx.lineWidth = 2
  ctx.strokeStyle = '#e96840'
  ctx.translate(originW, originH)
  ctx.rotate(s * 6 * Math.PI / 180);
  ctx.beginPath()
  ctx.moveTo(0, 20)
  ctx.lineTo(0, -(r - 20))
  ctx.stroke()
  ctx.restore()


  /* 绘画小圆点 */
  ctx.save();
  ctx.fillStyle = '#3c3c3c'
  // ctx.fillStyle = '#f00'
  // ctx.strokeStyle = '#f00'
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(originW, originH, 3, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}, 1000);

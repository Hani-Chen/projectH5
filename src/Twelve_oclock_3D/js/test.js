// 画布的容器
var container
container = document.getElementById('canvasBox')

// 相机，场景，渲染器
var camera, scene, renderer

// 3d 模型
var object

// 窗口宽高
var winWidth = container.clientWidth
var winHeight = container.clientHeight

// 画面中心坐标
var winCenterX = winWidth / 2
var winCenterY = winHeight / 2

// 鼠标事件
var mouseX = 0,
  mouseY = 0

var fontSize

// 初始化3d场景
function init() {
  // document.body.appendChild(container)

  camera = new THREE.PerspectiveCamera(45, winWidth / winHeight, 1, 3)

  camera.position.z = 2.5
  camera.position.x = 0
  camera.position.y = 5

  scene = new THREE.Scene()

  var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
  scene.add(ambientLight)

  var pointLight = new THREE.PointLight(0xffffff, 0.8)
  camera.add(pointLight)

  scene.add(camera)

  var manager, // 加载器管理器
    textureLoader, // 贴图加载器
    texture, // 贴图对象
    textureN, // 法线贴图对象
    loader // OBJ模型对象加载器实例

  function loadModel() {
    object.traverse(function(child) {
      if (child.isMesh) {
        console.log(child)
        child.material.map = texture
        child.material.normalMap = textureN
      }
    })
    object.position.y = 5
    object.position.x = 0
    object.rotateY(-(60 * Math.PI) / 180)
    // object.position.z = -1
    // object.scale.x = 100
    // object.scale.y += 100
    // object.scale.z = 100

    scene.add(object)
    console.log('将模型加入场景中', object)
  }

  manager = new THREE.LoadingManager(loadModel)

  manager.onProgress = function(item, loaded, total) {
    console.log('manager 加载过程：', item, loaded, total)
  }

  textureLoader = new THREE.TextureLoader(manager)

  texture = textureLoader.load('/img/Cerberus_A.jpg')
  textureN = textureLoader.load('/img/Cerberus_N.jpg')

  loader = new THREE.OBJLoader(manager)
  var path1 = '/img/male02.obj'
  var path2 = '/img/Cerberus.obj'
  loader.load(
    path2,
    function(obj) {
      console.log('加载了3D模型', 'Cerberus.obj')
      object = obj
    },
    function(xhr) {
      if (xhr.lenthComputable) {
        var percent = (xhr.loaded / xhr.total) * 100
        console.log('model', Math.round(percent, 2), '% download')
      }
    },
    function(err) {
      console.log('model loaded error: ', err)
    }
  )

  renderer = new THREE.WebGLRenderer({
    alpha: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(winWidth, winHeight)
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize, false)
  window.addEventListener('mousemove', onWindowMouseMove, false)
}

// 渲染3d场景效果
function render() {
  // camera.rotation.z += 0.1
  if (object) {
    // console.log(mouseY)
    // console.log(object.rotation.y)
    // object.rotation.y += (-mouseY - object.rotation.y) * 0.05
    // object.rotation.x += 0.01
    // object.rotation.y -= 0.01
    object.rotation.z -= 0.01
    // object.rotation.x = (60 * Math.PI) / 180
    // object.rotation.y = -((60 * Math.PI) / 180)
  }
  // camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
// 更新场景动画
function animate() {
  requestAnimationFrame(animate)
  render()
}

// 窗口尺寸变化事件函数
function onWindowResize() {
  console.log(11)
  winWidth = container.clientWidth
  winHeight = container.clientHeight
  winCenterX = winWidth / 2
  winCenterY = winHeight / 2
  camera.aspect = winWidth / winHeight
  camera.updateProjectionMatrix()
  renderer.setSize(winWidth, winHeight)
}

// 鼠标移动事件函数
function onWindowMouseMove(event) {
  mouseX = (event.clientX - winCenterX) / 2
  mouseY = (event.clientY - winCenterY) / 2
}

init()
animate()

/* 小圆点 */
var contentDot = document.getElementsByClassName('content-dot')[0]
// 获取圆盘
var contentDisk = document.getElementsByClassName('content-disk')[0]
// 获取内容容器
var content = document.getElementsByClassName('content')[0]

/* 禁止浏览器下拉 */
document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
) //passive 参数不能省略，用来兼容ios和android

/* 网页容器 */
var wrap = document.getElementsByClassName('wrap')[0]
/* 内容 */
var content = document.getElementsByClassName('content')[0]
/* 圆盘 */
var contentDisk = document.getElementsByClassName('content-disk')[0]

/* 进度 */
var demo2 = document.querySelector('#J_demo2')
var wrapTouch = new PhyTouch({
  touch: wrap, //反馈触摸的dom
  vertical: false, //不必需，默认是true代表监听竖直方向touch
  target: wrap, //运动的对象
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
  touchMove: function(evt, value) {},
  touchEnd: function(evt, value) {},
  tap: function(evt, value) {}, // 单击
  pressMove: function(evt, value) {},
  animationEnd: function(value) {} //运动结束
})

// 定义转动角度 ，定义定时器
var triangleDeg = 45,time

/* 触摸结束时 */
wrapTouch.touchEnd = function(evt, value) {
  // 回退定时器
  time = setInterval(function() {
    // 每次回退5deg
    triangleDeg -= 5
    // 如果回到原点
    if (triangleDeg <= 45) {
      // 停止回退定时器
      clearInterval(time);
      // 恢复默认角度
      triangleDeg = 45
      // 移除暂停动画属性
      contentDot.classList.remove('content-dot-stop')
      // 添加动画
      contentDot.classList.add('content-dot-play')
    }
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    // 给3D模型添加 Y轴角度
    object.rotation.y = -((triangleDeg * Math.PI) / 180)
    // 给3D模型添加 X轴角度
    // object.rotation.x = (triangleDeg * Math.PI) / 180
    // 进度条进度
    demo2.setAttribute(
      'stroke-dasharray',
      '' + (942 / 360) * (triangleDeg - 45) + ',942'
    )
  }, 20)
  
  
}
/* 触摸时 */
wrapTouch.touchStart = function(evt, value) {
  // 停止回退定时器
  clearInterval(time);
  // 暂停动画
  contentDot.classList.add('content-dot-stop')
}
/* 长按时 */
wrapTouch.pressMove = function(evt, value) {
  // 移除动画
  contentDot.classList.remove('content-dot-play')
  // 停止回退定时器
  clearInterval(time);
  /* 获取鼠标的坐标  相对浏览器 */
  X2 = evt.touches[0].pageX //x坐标
  Y2 = evt.touches[0].pageY //x坐标

  // 圆盘 距父元素距离
  var contentDiskT = contentDisk.offsetTop //x坐标
  var contentDiskL = contentDisk.offsetLeft //x坐标

  // 内容 距父元素距离
  var contentT = content.offsetTop //x坐标
  var contentL = content.offsetLeft //x坐标

  // 圆盘 r(半径)
  var contentR = contentDisk.offsetWidth / 2 //宽度 r(半径)

  // 获取半径加距离两边的距离 姑且叫(rL,rT)
  var page_x = contentR + contentDiskL + contentL
  var page_y = contentR + contentDiskT + contentT
  
  object.rotation.z = 0
  if (X2 > page_x && Y2 < page_y) {
    /* 如果在 +x +y 象限 */

    // 三角形高  rT - 鼠标top
    let triangleH = page_y - Y2
    // 三角形宽  鼠标left - rL
    let triangleW = X2 - page_x
    // 三角形度数
    triangleDeg = Math.round(
      45 + (Math.atan(triangleW / triangleH) * 180) / Math.PI
    )
    
    
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    // 给3D模型添加 Y轴角度
    object.rotation.y = -((triangleDeg * Math.PI) / 180)
    // 给3D模型添加 X轴角度
    object.rotation.x = (triangleDeg * Math.PI) / 180
    // 进度条进度
    demo2.setAttribute(
      'stroke-dasharray',
      '' + (942 / 360) * (triangleDeg - 45) + ',10000'
    )
    
  } else if (X2 > page_x && Y2 > page_y) {
    /* 如果在 +x -y 象限 */

    // 三角形高  鼠标top - rT
    let triangleH = Y2 - page_y
    // 三角形宽  鼠标left - rL
    let triangleW = X2 - page_x
    // 三角形度数
    triangleDeg = Math.round(
      135 + (Math.atan(triangleH / triangleW) * 180) / Math.PI
    )
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    // 给3D模型添加 Y轴角度
    object.rotation.y = -((triangleDeg * Math.PI) / 180)

    // 进度条进度
    demo2.setAttribute(
      'stroke-dasharray',
      '' + (942 / 360) * (triangleDeg - 45) + ',10000'
    )
  } else if (X2 < page_x && Y2 > page_y) {
    /* 如果在 -x -y 象限 */

    // 三角形高  鼠标top - rT
    let triangleH = Y2 - page_y
    // 三角形宽  rT - 鼠标left
    let triangleW = page_x - X2
    // 三角形度数
    triangleDeg = Math.round(
      225 + (Math.atan(triangleW / triangleH) * 180) / Math.PI
    )
    contentDot.style.transition = ''
    // 将度数赋值给小圆点
    contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    // 给3D模型添加 Y轴角度
    object.rotation.y = -((triangleDeg * Math.PI) / 180)

    // 进度条进度
    demo2.setAttribute(
      'stroke-dasharray',
      '' + (942 / 360) * (triangleDeg - 45) + ',10000'
    )
    // console.log(triangleDeg)
    
  } else if (X2 < page_x && Y2 < page_y) {
    // /* 如果在 -x +y 象限 */

    // // 三角形高 rT - 鼠标top
    // let triangleH = page_y - Y2
    // // 三角形宽  rL - 鼠标left
    // let triangleW = page_x - X2
    // // 三角形度数
    // triangleDeg = Math.round(
    //   315 + (Math.atan(triangleH / triangleW) * 180) / Math.PI
    // )
    // contentDot.style.transition = ''
    
    //   // 将度数赋值给小圆点
    // contentDot.style.transform = 'rotate(' + triangleDeg + 'deg)'
    // // 给3D模型添加 Y轴角度
    // object.rotation.y = -((triangleDeg * Math.PI) / 180)
    // // 给3D模型添加 X轴角度
    // object.rotation.x = (triangleDeg * Math.PI) / 180

    // // ctx.beginPath()
    // // ctx.arc(150, 150, 150, 1.5 * Math.PI, ((225 + triangleDeg) * Math.PI) / 180, false)
    // // ctx.stroke()
    // demo2.setAttribute(
    //   'stroke-dasharray',
    //   '' + (942 / 360) * (triangleDeg  - 45) + ',10000'
    // )
    // // console.log(triangleDeg)
  }
  // if(triangleDeg >= 402){
  //   // alert("到底了")
  // }else if(triangleDeg<= 46){
  //   // alert("到顶了")
  // }
}
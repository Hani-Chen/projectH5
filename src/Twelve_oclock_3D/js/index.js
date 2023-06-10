var renderer //渲染器
// var content = $('.content')[0] // 获取div
contentW = $('.content')[0].clientWidth // 获取容器宽
contentH = $('.content')[0].clientHeight // 获取容器高
/* 初始化渲染器 */
function initThree() {
  renderer = new THREE.WebGLRenderer({
    // antialias: false // 渲染时锯齿感很强 不吃性能
    // antialias: true, // 渲染时锯齿感弱  更好的算法渲染 吃性能 吃CPU
    // alpha:true // 背景是否透明
  })
  renderer.setSize(contentW, contentH) // 渲染器大小
  $('.content')[0].appendChild(renderer.domElement) // 添加到容器里 渲染到页面
  renderer.setClearColor(0xffffff, 1.0) // 当每一帧绘制之后 刷新一下背景颜色 然后再重新绘制 如果不刷新 可能会重叠
}

var scene
/* 初始化场景 */
function initScene() {
  console.log('初始化场景')
  scene = new THREE.Scene()
}

var camera
/* 初始化相机 */
function initCamera() {
  console.log('初始化相机')
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  )
  camera.position.z = 250
  scene.add(camera)
}

var light
/* 始化光线 */
function initLight() {
  console.log('始化光线')
  /* 光线的属性 */
  // light = new THREE.DirectionalLight(
  //   0xff0000, // 光的颜色
  //   1.0, // 光的强度
  //   0
  // )
  // /* 光的位置 */
  // light.position.set(
  //   100, // x轴
  //   100, // y轴
  //   200 //z轴
  // )
  // scene.add(light) // 灯光加入到场景

  var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
  scene.add(ambientLight)
  var pointLight = new THREE.PointLight(0xffffff, 0.8)
  camera.add(pointLight)
}

/* 初始化材质图 */
function initTexture() {}

/* 初始化3D模板*/
function initModel() {
  var object, texture, textureLoader, manager
  function loadModel() {
    object.traverse(function(child) {
      if (child.isMesh) {
        child.material.map = texture
      }
    })
    object.position.y = 0
    scene.add(object)
  }
  manager = new THREE.LoadingManager(loadModel)
  manager.onProgress = function(item, loaded, total) {
    console.log(item, loaded, total)
  }
  textureLoader = new THREE.TextureLoader(manager)
  texture = textureLoader.load('/img/Cerberus_A.jpg')

  var loader = new THREE.OBJLoader(manager)
  loader.load(
    '/img/Cerberus.obj',
    function(obj) {
      object = obj
    },
    function(xhr) {
      if (xhr.lengthComputable) {
        var percent = (xhr.loaded / xhr.total) * 100
        console.log('model', Math.round(percent, 2), '%')
      }
    },
    function(err) {
      console.log('load model error', err)
    }
  )

  // var loader = new THREE.ObjectLoader()
  //   loader.addEventListener('load', function(event){
  //     var obj = event.contentH
  //     object.position.y = 0;
  //     object.position.x = 0;
  //     object.position.z = 0;
  //     scene.add( obj );
  //   })
  // loader.load('/img/Cerberus.obj',function(obj){
  //   scene(obj)
  // })
}
function renderFrame() {
  // camera.position.x
  camera.lookAt( scene.position );
  renderer.render(scene, camera)
}
function threeStart() {
  initThree()
  initScene()
  initCamera()
  initLight()
  initTexture()
  initModel()
  renderFrame()
}
threeStart()
function animate(){
  requestAnimationFrame(animate)
  renderFrame()
}

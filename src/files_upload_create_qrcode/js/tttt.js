
// /**
//  * Key1 2016-09-01
//  *  AK(AccessKey): M-LsasLqryjs-ZEobc1Yz0gGmEICuGWd00fAiBud
//  *  SK(SecretKey): bw_GuIS8GKZvIQWMhy9_RcJpqnhe4rPCHvCXX1dX
//  * Key2 016-08-30
//  *  AK(AccessKey): ujFqrmCnpMUht1ryaazFTsxvQ1yoBRJMNWM2s2dT
//  *  SK(SecretKey): QmPp40gUkGZWBu1Ub_sOSp3xZsAdNqNggOPdmAw3
//  *
//  */

// $(function () {
//   /**
//    * 文件上传七牛
//    *
//    */
//   uploader = Qiniu.uploader({
//     // 上传模式，依次退化
//     runtimes: 'html5,flash,html4',
//     //上传按钮的ID
//     browse_button: 'btnUploadVideo',

//     // uptoken是上传凭证，由其他程序生成  *    uploadToken = AccessKey + ':' + encodedSign + ':' + encodedPutPolicy
//     uptoken: '<Your upload token>',
//     uptoken: '<Your upload token>',
//     // Ajax请求uptoken的Url，强烈建议设置（服务端提供） *
//     uptoken_url: '/uptoken',
//     // 在需要获取uptoken时，该方法会被调用 *
//     uptoken_func: function () {
//       return uptoken
//     },

//     //上传按钮的上级元素ID
//     container: 'uploadBtnWrap',
//     //最大文件限制
//     max_file_size: '200mb',

//     //引入flash，相对路径 *
//     flash_swf_url: '/static/js/plupload/Moxie.swf',
//     // 是否开启可拖曳上传
//     dragdrop: true,

//     // uptoken_url: '/qiniu-token/', //设置请求qiniu- token的url

//     //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
//     // uptoken : '<Your upload token>',
//     //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
//     // unique_names: true,
//     // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
//     // save_key: true,
//     // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理

//     //自己的七牛云存储空间域名
//     domain: 'http://cdnmeidi.perpower.cn/',

//     //是否允许同时选择多文件
//     multi_selection: false,

//     //文件类型过滤，这里限制为图片类型
//     filters: {
//       mime_types: [{ title: 'Image files', extensions: 'jpg,jpeg,gif,png' }],
//     },

//     // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
//     auto_start: true,
//     init: {
//       FilesAdded: function (up, files) {
//         plupload.each(files, function (file) {
//           // 文件添加进队列后，处理相关的事情
//         })
//       },
//       BeforeUpload: function (up, file) {
//         // 每个文件上传前，处理相关的事情
//       },
//       UploadProgress: function (up, file) {
//         // 每个文件上传时，处理相关的事情
//       },
//       FileUploaded: function (up, file, info) {
//         // 每个文件上传成功后，处理相关的事情
//         // 其中info.response是文件上传成功后，服务端返回的json，形式如：
//         // {
//         //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
//         //    "key": "gogopher.jpg"
//         //  }
//         // 查看简单反馈
//         // var domain = up.getOption('domain');
//         // var res = parseJSON(info.response);
//         // var sourceLink = domain +"/"+ res.key; 获取上传成功后的文件的Url
//       },
//       Error: function (up, err, errTip) {
//         //上传出错时，处理相关的事情
//       },
//       UploadComplete: function () {
//         //队列文件处理完毕后，处理相关的事情
//       },
//       Key: function (up, file) {
//         // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
//         // 该配置必须要在unique_names: false，save_key: false时才生效
//         var key = ''
//         // do something with key here
//         return key
//       },
//     },
//   })

var xhr //异步请求对象
var ot //时间
var oloaded //大小

//本地上传浏览器
function UpladFile() {
  var fileObj = document.getElementById('file').files[0]
  if (fileObj.name) {
    // $('.el-upload-list').css('display', 'block')
    $('.upload-video-inner .img').attr('src','http://pic.616pic.com/ys_bnew_img/00/18/40/d5uKf1RbOf.jpg')
    $('.upload-video-inner .text').text(fileObj.name)
  } else {
    // alert('请选择文件')
  }
}

// 浏览器上传到后端
function sub() {
  var fileObj = document.getElementById('file').files[0]
  if (fileObj == undefined || fileObj == '') {
    alert('请选择文件')
    return false
  }
  var title = $.trim($('#title').val())
  if (title == '') {
    alert('请填写视频标题')
    return false
  }
  var url = 'http://car.dbgoodboy.cn/uploads/' // 接收上传文件的后台地址
  var form = new FormData() // FormData 对象
  form.append('mf', fileObj) // 文件对象
  form.append('title', title) // 标题
  xhr = new XMLHttpRequest() // XMLHttpRequest 对象
  xhr.open('post', url, true) //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
  xhr.onload = uploadComplete //请求完成
  xhr.onerror = uploadFailed //请求失败
  xhr.upload.onprogress = progressFunction //【上传进度调用方法实现】
  xhr.upload.onloadstart = function () {
    //上传开始执行方法
    ot = new Date().getTime() //设置上传开始时间
    oloaded = 0 //设置上传开始时，以上传的文件大小为0
  }
  xhr.send(form) //开始上传，发送form数据
}
//上传成功响应
function uploadComplete(evt) {
  //服务断接收完文件返回的结果  注意返回的字符串要去掉双引号
  if (evt.target.responseText) {
    alert('上传成功！')
  } else {
    alert('上传失败')
  }
}
//上传失败
function uploadFailed(evt) {
  alert('上传失败！')
}

//上传进度实现方法，上传过程中会频繁调用该方法
function progressFunction(evt) {
  console.log(evt);
  
  // // event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0
  // if (evt.lengthComputable) {
  //   $('.progress-wrap').css('display', 'flex')
  //   /*进度条显示进度*/
  //   $('.progress-box').css(
  //     'width',
  //     Math.round((evt.loaded / evt.total) * 100) + '%'
  //   )
  //   $('.progress-text').html(Math.round((evt.loaded / evt.total) * 100) + '%')
  // }

  // var time = document.getElementById('time')
  // var nt = new Date().getTime() //获取当前时间
  // var pertime = (nt - ot) / 1000 //计算出上次调用该方法时到现在的时间差，单位为s
  // ot = new Date().getTime() //重新赋值时间，用于下次计算

  // var perload = evt.loaded - oloaded //计算该分段上传的文件大小，单位b
  // oloaded = evt.loaded //重新赋值已上传文件大小，用以下次计算

  // //上传速度计算
  // var speed = perload / pertime //单位b/s
  // var bspeed = speed
  // var units = 'b/s' //单位名称
  // if (speed / 1024 > 1) {
  //   speed = speed / 1024
  //   units = 'k/s'
  // }
  // if (speed / 1024 > 1) {
  //   speed = speed / 1024
  //   units = 'M/s'
  // }
  // speed = speed.toFixed(1)
  // //剩余时间
  // var resttime = ((evt.total - evt.loaded) / bspeed).toFixed(1)
  // time.innerHTML = '上传速度：' + speed + units + ',剩余时间：' + resttime + 's'
  // if (bspeed == 0) time.innerHTML = '上传已取消'
}

/**
 * 生成二维码
 *
 */
// 获取到的 七牛 视频链接
var videoUrl = 'https://baidu.com'

// 替换页面点击跳转的链接
$('#videoUrl').attr('href', videoUrl)

// 生成二维码
var qrcode = new QRCode(document.getElementById('uploadQrcode'), {
  width: 520,
  height: 520,
  colorDark: '#000',
})
qrcode.makeCode(videoUrl)
// })

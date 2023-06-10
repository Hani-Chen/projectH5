var list = []

var successList = []
var itemDemo = ''
//本地上传浏览器
function UpladFile() {
  console.log($('#csv_file')[0].files)

  for (let i = 0; i < $('#csv_file')[0].files.length; i++) {
    list.push($('#csv_file')[0].files[i])
  }
  console.log(list)

  demoFun()
}

function demoFun() {
  itemDemo = ''
  for (let i in list) {
    console.log(list[i])

    itemDemo += `<li class="upload-item active" data-index=${i}>
		<div class="progress" ></div>
		<div class="upload-item-img">
			<img src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" alt="" class="img">
		</div>
		<a class="upload-item-name">
			${list[i].name}
		</a>
		<label class="upload-item-label"><i class="el-icon-upload-success el-icon-check"></i></label>
		<i></i>
	</li>`
  }
  if(itemDemo == '') {
    $('.btn-upload-wrap').removeClass('show')
  }else {
    
    $('.btn-upload-wrap').addClass('show')
  }
  $('.upload-list').html(itemDemo)
  
}

var itemSuccessDemo
function demoSuccessFun(successList) {
  vitemSuccessDemo = ''
  for (let i in successList) {
    vitemSuccessDemo += `<li class="success-item"  data-index=${i}>
		<div class="upload-item-img">
			<img src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" alt="" class="img">
		</div>
		<a class="upload-item-name">
		${list[i].name}
		</a>
		<label class="upload-item-label"><i class="el-icon-upload-success el-icon-check"></i></label>
		<i></i>
	</li>`

    $('.success-list').html(vitemSuccessDemo)

    $('.success-list .success-item').eq(i).removeClass('active')
    // 生成二维码
    var qrcode = new QRCode(
      $('.success-item').eq(i).find('.upload-item-img')[0],
      {
        width: 520,
        height: 520,
        colorDark: '#000',
      }
    )
    qrcode.makeCode(successList[i].url)
  }

  $('.success-wrap').addClass('show')
}

$('#import').click(function () {
  $.ajax({
    type: 'GET',
    url: 'http://car.dbgoodboy.cn/index.php/index/index/token',
    success: function (urlData) {
      for (let i in list) {
        // (function(i) {
        var data = new FormData()
        const element = list[i]
        console.log(element)
        data.append('file', list[i])
        data.append('token', urlData)
        $.ajax({
          type: 'POST',
          url: 'http://up-z2.qiniup.com/',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          xhr: function () {
            myXhr = $.ajaxSettings.xhr()
            if (myXhr.upload) {
              myXhr.upload.addEventListener(
                'progress',
                function (e) {
                  if (e.lengthComputable) {
                    var percent = Math.floor((e.loaded / e.total) * 100)
                    if (percent <= 100) {
                      console.log(
                        $('.upload-list .upload-item').eq(i).find('.progress')
                      )

                      $('.upload-list .upload-item')
                        .eq(i)
                        .find('.progress')
                        .eq(0)
                        .css('width', percent + '%')

                      console.log('已上传：' + percent + '%')
                    }
                    if (percent >= 100) {
                      console.log('文件上传完毕，请等待...')
                    }
                  }
                },
                false
              )
            }
            return myXhr
          },
          success: function (ret) {
            list[i].url = ret.address
            successList = list
            $('.upload-list .upload-item').eq(i).removeClass('active')

            // 生成二维码
            var qrcode = new QRCode(
              $('.upload-item').eq(i).find('.upload-item-img')[0],
              {
                width: 520,
                height: 520,
                colorDark: '#000',
              }
            )

            console.log('successList', successList)
            var temp = encodeURI(ret.address)
            console.log('ret.address', ret.address)
            console.log('temp', temp)
            qrcode.makeCode(temp)
          },
          error: function (err) {
            console.log('获取报错', err)
          },
        })
        // }(i))
      }
    },
    error: function (err) {
      console.log('获取报错', err)
    },
  })
})

$('.upload-list').on('click', '.upload-item-label', function () {
  console.log(123123)
  delete list[$(this).parents('.upload-item').attr('data-index')]
  console.log(list)
  demoFun()
})

$('.success-wrap').on('click', '.success-icon-wrap', function () {
  $(this).parents('.success-wrap').toggleClass('show')
})

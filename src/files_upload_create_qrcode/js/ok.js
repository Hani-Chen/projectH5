$.ajax({
  type: 'GET',
  url: 'http://car.dbgoodboy.cn/index.php/index/index/index',
  success: function (urlData) {
    $('#import').click(function () {
      var data = new FormData()
      data.append('file', $('#csv_file')[0].files[0])
      data.append('token', urlData)
      $.ajax({
        type: 'POST',
        url: 'http://up-z2.qiniup.com/',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        success: function (ret) {
          console.log(ret)
        },
        error: function (err) {
          console.log('获取报错', err)
        },
      })
    })
  },
  error: function (err) {
    console.log('获取报错', err)
  },
})
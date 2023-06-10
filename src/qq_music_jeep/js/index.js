// 生成海报页数据
var carData = {
  // tab选项数据[0] ==> 选择汽车tab数据
  // tab选项数据[1] ==> 选择背景图片tab数据
  // tab选项数据[2] ==> 选择歌曲tab数据
  'tabTest': [
    [
      {
        id: 1,
        text: '气势',
        url: './img/create_car_tab1.png'
      },
      {
        id: 2,
        text: '独有',
        url: './img/create_car_tab2.png'
      },
      {
        id: 3,
        text: '豪迈',
        url: './img/create_car_tab3.png'
      }
    ],
    [
      {
        id: 1,
        text: '仲夏星空',
        url: './img/create_sky_tab1.png'
      },
      {
        id: 2,
        text: '缤纷彩霞',
        url: './img/create_sky_tab2.png'
      },
      {
        id: 3,
        text: '风和日丽',
        url: './img/create_sky_tab3.png'
      }
    ],
    [
      {
        id: 1,
        text: '',
        name: '陈粒',
        songName: '奇妙能力歌',
        // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
        songId: 111111
      },
      {
        id: 2,
        text: '',
        name: '旅行团乐队',
        songName: '永远都会在',
        // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
        songId: 22222
      },
      {
        id: 3,
        text: '',
        name: '汪峰',
        songName: '像梦一样自由',
        // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
        songId: 33333
      },
      {
        id: 4,
        text: '',
        name: '痛仰乐队',
        songName: '公路之歌',
        // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
        songId: 44444
      },
      {
        id: 5,
        text: '',
        name: '面孔乐队',
        songName: '灿若星辰',
        // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
        songId: 55555
      }
    ]
  ],
  // 选择汽车图片
  'car': [
    {
      id: 1,
      url: './img/create_car1.png'
    },
    {
      id: 2,
      url: './img/create_car2.png'
    },
    {
      id: 3,
      url: './img/create_car3.png'
    }
  ],
  // 选择背景图数据
  'bg': [
    {
      id: 1,
      url: './img/create_bg1.png'
    },
    {
      id: 2,
      url: './img/create_bg2.png'
    },
    {
      id: 3,
      url: './img/create_bg3.png'
    }
  ],
  // 选择歌词数据
  'lyric': [
    {
      id: 1,
      url: './img/create_lyric1.png'
    },
    {
      id: 2,
      url: './img/create_lyric2.png'
    },
    {
      id: 3,
      url: './img/create_lyric3.png'
    },
    {
      id: 4,
      url: './img/create_lyric4.png'
    },
    {
      id: 5,
      url: './img/create_lyric5.png'
    },

  ]
}
//  存储选择后的数据
var carDataActive = {
  // tab选项数据[0] ==> 选择汽车tab数据
  // tab选项数据[1] ==> 选择背景图片tab数据
  // tab选项数据[2] ==> 选择歌曲tab数据
  'tabTest': [
    [
      {
        id: 1,
        text: ''
      }
    ],
    [
      {
        id: 1,
        text: ''
      }
    ],
    [
      {
        id: 1,
        text: '',
        name: '',
        songName: ''
      }
    ]
  ],
  // 默认选择的汽车图片
  'car': [
    {
      id: 1,
      url: './img/create_car1.png'
    }
  ],
  // 默认选择的背景图片
  'bg': [
    {
      id: 1,
      url: ''
    }
  ],
  // 默认选择的歌词海报
  'lyric': [
    {
      id: 1,
      url: ''
    }
  ]
}

/* 生成海报的用户名 */
var userName = 'Hani1111'
$('.user_name>span').text(userName)

/* 生成海报的序号 */
var usernumber = '007111'
$('.making_number>span').text(usernumber)

/* Data: 2020-08-03; Edit: Hani; Describe: 将二维码从图片中分离做单独配置; Start 1.0.0 */
/* 生成海报的二维码 */
var userQrcode = './img/qrcode.png'
$('.making_qrcode>img').attr('src', userQrcode)
/* Data: 2020-08-03; Edit: Hani; Describe: 将二维码从图片中分离做单独配置; End 1.0.0 */

/* Data: 2020-08-03; Edit: Hani; Describe: 配置页面的长按保存的图片路径; Start 1.0.0 */
/* 生成海报的分享图 */
var saveImg = ''
$('#saveImg').attr('src', saveImg)
/* Data: 2020-08-03; Edit: Hani; Describe: 配置页面的长按保存的图片路径; End 1.0.0 */

// 默认显示的页面
var savePage = 'home_wrap'
/**
 * 按class显示弹窗
 */
function showPage(name) {
  if (savePage) {
    $('.' + savePage).removeClass('show')
  }
  savePage = name
  $('.' + name).addClass('show')
}
/**
 * toast信息工具函数
 */
function showToast(str) {
  var $toast = $('<div class="toast_item"><span class="ani">' + str + '</span></div>')
  $('.wrap').append($toast)
  setTimeout(function () {
    $toast.animate({ opacity: 0 }, 300, null, function () {
      $toast.remove()
    })
  }, 1500)
}


var listName = ''
/* 详情页点击开始 - 显示选择页 */
function showSelect(createIndex = 1) {
  showPage('create_wrap')
  // 显示选择页的时候 - 移除选择选择歌词页的class
  $('.select_list').removeClass('show')
  $('.select_bg .text').removeClass('broaden')
  $('.btn_next').text('下一步')
  var tabList = carData['car'][0]
  if (createIndex == 1) {
    tabList = carData['car'][0];
    // 上一步按钮隐藏
    $('.btn_previous').removeClass('show')
    // 到达选择背景的时候 - 添加class
    $('.select_bg').addClass('show')
  } else if (createIndex == 2) {
    tabList = carData['bg'][0];
    // 上一步按钮显示
    $('.btn_previous').addClass('show')
    // 到达选择背景的时候 - 添加class
    $('.select_bg').addClass('show')
    $('.select_bg .text').addClass('broaden')
  } else if (createIndex == 3) {
    tabList = carData['lyric'][0];
    // 上一步按钮显示
    $('.btn_previous').addClass('show')
    // 到达选择歌词页的时候 - 添加class
    $('.select_lyric').addClass('show')
    $('.btn_next').text('生成海报')
  }
  var carUrl = carDataActive['car'][0].url, bgUrl = carDataActive['bg'][0].url, lyricUrl = carDataActive['lyric'][0].url
  /* 如果保存的数据里面有天空的背景图 */
  if (bgUrl != '' && createIndex == 2) {
    listName = 'bg'
    showSaveData(listName, createIndex)
  } else if (carUrl != '' && createIndex == 1) {
    listName = 'car'
    showSaveData(listName, createIndex)
  } else if (lyricUrl != '' && createIndex == 3) {
    listName = 'lyric'
    showSaveData(listName, createIndex)
  } else {
    /* 切换页面时 - 移除单个选项所有高亮 */
    $('.select_item').removeClass('active')
    /* 切换页面时 - 显示第一个高亮 */
    $('.select_item').eq(0).addClass('active')
    // 更换大图
    $('.create_inner .bg_item' + createIndex).attr('src', tabList.url)
  }
  // 更换标题
  $('.create_inner .title_img').removeClass().addClass('title_img title_' + createIndex)
  // 更换tab
  for (let i = 0; i < $('.select_bg .select_item').length; i++) {
    var tabItem = carData['tabTest'][createIndex - 1][i]
    var $item = $('.select_item').eq(i);
    $item.find('.img').attr('src', tabItem.url)
    $item.find('.text').text(tabItem.text)
    $item.find('.title').text(tabItem.songName)
    $item.find('.name').text(tabItem.name)
  }

  // 更换选择歌曲tab
  var $item = ''
  $('.select_lyric').empty()
  for (let i = 0; i < carData['tabTest'][2].length; i++) {
    var tabItem = carData['tabTest'][2][i]
    $item += `<div class="select_item select_item${i + 1} ${(i + 1) == carDataActive['lyric'][0].id ? 'active' : ''}">
      <div class="lyric_wrap">
        <div class="title font_hydhj lyric_item">《<span>${tabItem.songName}</span>》</div>
        <div class="name lyric_item">${tabItem.name}</div>
      </div>
    </div>`
  }
  $('.select_lyric').append($item)
}
/* 制作海报页 - 显示储存的选择数据 */
function showSaveData(listName, createIndex) {
  if (createIndex == 1) {
    // 回到了选择汽车页
    $('.bg_item').attr('src', '')
    $('.create_select .btn_next').removeClass('car_ok sky_ok lyric_ok')
  }
  $('.create_inner .bg_item' + createIndex).attr('src', carDataActive[listName][0].url)
  /* 切换页面时 - 移除所有tab的高亮 */
  $('.select_item').removeClass('active')
  /* 切换页面时 - 高亮保存好的那一个 */
  $('.select_item').eq((carDataActive[listName][0].id - 1)).addClass('active')
}
/* 制作海报页 - 点击tab选项 - 存储指定数据 & 显示指定大图 */
function showTabData(listName, tabIndex, createIndex) {
  carDataActive[listName][0].url = carData[listName][tabIndex].url
  carDataActive[listName][0].id = carData[listName][tabIndex].id
  /* 更换大图 */
  $('.create_inner .bg_item' + createIndex).attr('src', carDataActive[listName][0].url)
}

/* 显示生成海报成功页 */
function showMaking() {
  // var makingData = carDataActive[]
  showPage('making_wrap')
  console.log(carDataActive);
  $('.making_car').attr('src', carDataActive['car'][0].url)
  $('.making_sky').attr('src', carDataActive['bg'][0].url)
  $('.making_lyric').attr('src', carDataActive['lyric'][0].url)
}

/* 点击弹窗关闭按钮 - 隐藏弹窗 */
$('.modal_close').on('click', function () {
  // 移除弹窗显示类
  $(this).parents('.modal').removeClass('show')
})
/* 点击首页活动规则 - 显示活动规则弹窗 */
$('.home_rule span').on('click', function () {
  // 移除弹窗显示类
  $('#modalRule').addClass('show')
})

// 点击生成海报页的单个选择
$('.select_list').on('click', '.select_item', function () {
  /* 选择 - 移除单个选项所有高亮 */
  $('.select_item').removeClass('active')
  /* 选择 - 高亮当前选项 */
  $(this).addClass('active')
  if (!($('.create_select .btn_next').hasClass('car_ok'))) {
    showTabData('car', $(this).index(), 1)
  } else if (!($('.create_select .btn_next').hasClass('sky_ok'))) {
    showTabData('bg', $(this).index(), 2)
  } else if (!($('.create_select .btn_next').hasClass('lyric_ok'))) {
    showTabData('lyric', $(this).index(), 3)
  }
})

/* 制作海报 - 点击下一步 */
$('.create_select').on('click', '.btn_next', function () {
  if (!($('.create_select .btn_next').hasClass('car_ok'))) {
    // 选择汽车 - 点击下一步
    $(this).addClass('car_ok')
    showSelect(2)
  } else if (!($('.create_select .btn_next').hasClass('sky_ok'))) {
    if (carDataActive['bg'][0].url == '') {
      showTabData('bg', 0, 2)
    }
    // 选择背景 - 点击下一步
    $(this).addClass('sky_ok')
    showSelect(3)

  } else if (!($('.create_select .btn_next').hasClass('lyric_ok'))) {
    if (carDataActive['lyric'][0].url == '') {
      showTabData('lyric', 0, 3)
    }
    // 选择歌词 - 点击下一步
    $(this).addClass('lyric_ok')
  }
})

/* 制作海报 - 点击上一步 */
$('.create_select').on('click', '.btn_previous ', function () {
  var btnNext = $('.create_select .btn_next')

  if (btnNext.hasClass('car_ok') && !(btnNext.hasClass('sky_ok'))) {
    /* 在选择歌词页点击上一步 - 从选择天空页回到选择汽车页面 */
    showSelect(1)
    btnNext.removeClass('car_ok')
    /* 在选择天空页点击上一步 - 清除选择好的天空大图 */
    $('.sky_bg').attr('src', '')
  } else if (btnNext.hasClass('car_ok') && btnNext.hasClass('sky_ok')) {
    /* 在选择歌词页点击上一步 - 从选择歌词页回到选择天空页面 */
    showSelect(2)
    /* 在选择歌词页点击上一步 - 清除选择好的歌词大图 */
    $('.lyric_bg').attr('src', '')
    btnNext.removeClass('sky_ok')
  }
})

/* 点击首页 - 立即开始定制 - 显示详情页 */
$('.home_btn__start').on('click', function () {
  showPage('details_wrap')
})
/* 点击详情页 - 我知道了 - 显示生成海报页 */
$('.btn_see ').on('click', function () {
  showSelect()
})

/* 点击生成海报页- 生成海报 - 显示留资页 */
$('.create_wrap').on('click', '.lyric_ok', function () {
  showPage('survey_wrap')
})

/* 点击生成海报成功页- 重新制作 - 显示生成海报页 */
$('.making_inner').on('click', '.btn_again', function () {
  showSelect(1)
  $('#surveyForm')[0].reset();
  $('select').css("color", '#939598');
})

/* 点击生成海报成功页- 邀请好友 - 显示分享弹窗 */
$('.making_inner').on('click', '.btn_share', function () {
  $('#modalShare').addClass('show')
})

/* 点击表单页活动规则 - 显示活动规则弹窗 */
$('.survey_rule').on('click', function () {
  // 移除弹窗显示类
  $('#modalRule').addClass('show')
})

/* Data: 2020-08-03; Edit: Hani; Describe: 优化表单判断; Start 1.0.0 */
$("#surveyForm").submit(function () {
  if ($('#name').val() == '') {
    showToast('请填写姓名')
  } else if ($('#phone').val() == '') {
    showToast('请填写电话号码')
  } else if ($('#region').val() == '') {
    showToast('请选择用车城市')
  } else if ($('#dealer').val() == '') {
    showToast('请选择经销商')
  } else if ($('#car').val() == '') {
    showToast('请选择座驾')
  } else if (!($('#select').get(0).checked) ) {
    showToast('请勾选用户须知')
  } else {
    // 填写完成 - 显示生成成功页面
    showMaking()
  }
  return false;
});
/* Data: 2020-08-03; Edit: Hani; Describe: 优化表单判断; End 1.0.0 */
// 表单选中事件 - 改变文字颜色
$("select").change(function () {
  $(this).css("color", '#000');
});

/* 点击表单页- 重新制作 - 显示生成海报页 */
$('.survey_return').on('click', 'span', function () {
  showMaking()
})



/* Data: 2020-08-03; Edit: Hani; Describe: 城市list更改; Start 1.0.0 */
/* 添加表单页城市数据和联动 */
changeCity(data)
function changeCity(val) {
  //7.获取第二个下拉列表
  var c = document.getElementById('city')

  for (var i = 0; i < val.length; i++) {
    var temp = $(
      '<option value=' +
        data[i].reg.value +
        '>' +
        data[i].reg.name +
        '</option>'
    )
    $('#region').append(temp)
  }

  for (var j = 0; j < val[0].city.length; j++) {
    var temp = $(
      '<option value=' +
        data[0].city[j].value +
        '>' +
        data[0].city[j].name +
        '</option>'
    )
    $('#city').append(temp)
  }
}

$('#region').on('change', function(e) {
  console.log('change')
  // 判断当前修改到了第几个省份数据
  console.log(e)
  var value = $('#region')[0].value
  var valueIndex = 0
  for (var i = 0; i < data.length; i++) {
    if (value === data[i].reg.value) {
      valueIndex = i
      break
    }
  }

  // 清除城市数据
  $('#city').empty()

  // 增加新数据
  for (var j = 0; j < data[valueIndex].city.length; j++) {
    var temp = $(
      '<option value="' +
        data[valueIndex].city[j].value +
        '">' +
        data[valueIndex].city[j].name +
        '</option>'
    )
    $('#city').append(temp)
  }
})
/* Data: 2020-08-03; Edit: Hani; Describe: 城市list更改; End 1.0.0 */
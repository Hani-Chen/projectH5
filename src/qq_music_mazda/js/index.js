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

// 六首歌曲信息
var songList = [
  {
    id: 1,
    // 歌曲名称
    songName: '做梦',
    // 艺人名称
    name: '朱主爱',
    lyric: '我们 一起做梦 一起逆着风 \n管他 暴雨狂风 我们一起走\n就算 雨下得再汹涌\n有你 有我 还有梦\n在某个角落 在某个星空\n在那里闪烁',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 111,
    // 当前歌曲 在结果页的两个结果
    title: [
      {
        // 结果页称号
        label: '恭喜您获得【潮奢甜咖】称号',
        // 结果页标题
        title: '你的歌声甜美百变，具有甜心派歌手潜质',
        // 结果页文案
        text: '敢不敢和拥有超跑般黄金身材比例2021款全新MAZDA CX-4一决高下',
        // 结果页汽车
        carUrl: './img/share_car1.png'
      },
      {
        label: '恭喜您获得【潮奢声咖】称号',
        title: '你就是领潮甜心派偶像',
        text: '让同样实力派的2021款全新MAZDA CX-4伴你高歌',
        carUrl: './img/share_car2.png'
      }
    ]
  },
  {
    id: 2,
    songName: '想见你想见你想见你',
    name: '八三夭乐团',
    lyric: '想见你 只想见你\n未来过去 我只想见你\n穿越了千个万个\n时间线里 人海里相依',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 222,
    title: [
      {
        label: '恭喜您获得【潮奢暖咖】称号',
        title: '歌声温柔，让人想保护',
        text: '你需要一台具有智能安全装备2021款全新MAZDA CX-4守护你',
        carUrl: './img/share_car3.png'
      },
      {
        label: '恭喜您获得【潮奢实力唱将】称号',
        title: '你就是领先实力派歌手',
        text: '配一辆优雅与动感兼容并蓄的2021款全新MAZDA CX-4，带上想见的TA穿越人海吧',
        carUrl: './img/share_car1.png'
      }
    ]
  },
  {
    id: 3,
    songName: '大碗宽面',
    name: '吴亦凡',
    lyric: '这碗大\n千万别虚荣心作祟\n真心话\n这大碗宽面也很贵\n先别说话\n不想给你机会先别怼\n就散了吧\n听完这首歌就洗洗睡',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 333,
    title: [
      {
        label: '恭喜您获得【潮奢动感咖】称号',
        title: '你的Rap又潮又酷',
        text: '邀你坐上2021款全新MAZDA CX-4，兼顾驾驭乐趣的同时，尽享舒适体验',
        carUrl: './img/share_car2.png'
      },
      {
        label: '恭喜您获得【潮奢顶流唱将】称号',
        title: '你就是领潮实力派歌手',
        text: '搭配2021款全新MAZDA CX-4，尽享极智升级的操控驾感吧',
        carUrl: './img/share_car3.png'
      }
    ]
  },
  {
    id: 4,
    songName: '那些年',
    name: '胡夏',
    lyric: '那些年错过的大雨\n那些年错过的爱情\n好想拥抱你\n拥抱错过的勇气\n曾经想征服全世界\n到最后回首才发现\n这些年滴滴点点全部都是你',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 444,
    title: [
      {
        label: '恭喜您获得【潮奢暖咖】称号',
        title: '你的歌声醇厚，给人安全感',
        text: '如同坐上拥有全系领先智能安全装备的2021款全新MAZDA CX-4，为你保驾护航',
        carUrl: './img/share_car1.png'
      },
      {
        label: '恭喜您获得【潮奢实力唱将】称号',
        title: '你就是领享实力派歌手',
        text: '坐上一辆拥有静谧技术的2021款全新MAZDA CX-4，自在畅享越级的舒适感',
        carUrl: './img/share_car2.png'
      }
    ]
  },
  {
    id: 5,
    songName: '你要跳舞吗',
    name: '新裤子',
    lyric: '你你你你要跳舞吗\n你你你你要跳舞吗\n你你你你要跳舞吗\n你你你你要跳舞吗',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 555,
    title: [
      {
        label: '恭喜您获得【潮奢摇滚咖】称号',
        title: '唱完这首歌，你就是这条街最亮的仔',
        text: '让2021款全新MAZDA CX-4的智能四驱系统带给你无尽正能量',
        carUrl: './img/share_car3.png'
      },
      {
        label: '恭喜您获得【潮奢实力唱将】称号',
        title: '你就是领驭实力派歌手',
        text: '驾上加速度矢量控制系统升级的2021款全新MAZDA CX-4，嗨唱同时体验驾驭乐趣',
        carUrl: './img/share_car1.png'
      }
    ]
  },
  {
    id: 6,
    songName: '无价之姐',
    name: '李宇春',
    lyric: '看我弄潮搏浪\n多认真的亮相\n努力跳\n摇咿摇咿摇咿摇咿摇咿摇\n看我乘风破浪\n多城市的欲望\n努力唱\n吆咿吆咿吆咿吆咿吆咿吆',
    // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
    songId: 666,
    title: [
      {
        label: '恭喜您获得【潮奢魅力歌手】称号',
        title: '你的歌声魂动霸气',
        text: '让2021款全新MAZDA CX-4的智能四驱系统，带你领略无价风光',
        carUrl: './img/share_car2.png'
      },
      {
        label: '恭喜您获得【潮奢顶流唱将】称号',
        title: '你就是领潮实力派歌手',
        text: '驾上轿跑般动力的2021款全新MAZDA CX-4，尽享高端体验，你就是真正的无价之姐',
        carUrl: './img/share_car3.png'
      }
    ]
  }
]

// 动画结束 开启点击
$('.home_guide')[0].addEventListener("animationend", function () {
  $('.home_content').removeClass('forbid')
}, false);

var item = ''

// 渲染列表页
function listShow() {
  $('.list_inner').empty()
  for (let i = 0; i < songList.length; i++) {
    item += `<div class="item">
    <div class="item_data">
      <div class="item_songname font_nscjb">《<span></span>${songList[i].songName}</span>》</div>
      <div class="item_name font_nscjm">${songList[i].name}</div>
    </div>
    <div class="item_event" data-id="${songList[i].id}"  data-songId="${songList[i].songId}">
      <div class="item_btn item_play stop"></div>
      <div class="item_btn item_sing font_nscjb"></div>
    </div>
  </div>`
  }
  $('.list_inner').append(item)
}

/* 点击首页 - 显示列表页 */
$('.home_content').on('click', function () {
  listShow()
  showPage('list_wrap')
})

/* 点击列表页播放 - 切换状态 */
$('.list_inner').on('click', '.item_play', function () {
  $('.item_play').addClass('stop')
  // 获取当前点击的歌曲id
  var songId = $(this).parents('.item_event').attr("data-songid")

  /* 这里可以直接获取到列表中对应的SongID */
  console.log(`这里可以直接获取到列表中对应的SongID:${songId}`);

  // 通过按钮icon - 判断是否播放音乐
  if ($(this).hasClass('stop')) {
    /* 这里放置播放音乐事件 */

    // 改变播放icon状态
    $(this).removeClass('stop')

  } else {
    /* 这里放置暂停音乐事件 */

    // 改变播放icon状态
    $(this).addClass('stop')
  }

})

// 获取当前歌曲列表下标
var singIndex = 0
/* 点击列表页 - 录制跳转页面 */
$('.list_inner').on('click', '.item_sing', function () {

  // 获取歌曲id
  singIndex = ($(this).parents('.item_event').attr("data-id") - 1)
  // 显示演唱页面
  showConcert(songList[singIndex])
})

/* 点击分享页 - 体验 */
$('.share_content').on('click', '.trial', function () {
  // 显示表单页
  showPage('form_wrap')
})


/* 点击返回 */
$('.wrap_page ').on('click', '.return', function () {
  var pageReturn = $(this).parents('.wrap_page')
  if(pageReturn.hasClass('form_wrap')) {
    showPage('share_wrap')
  }
  if(pageReturn.hasClass('share_wrap')) {
    showPage('sing_wrap')
  }
  if(pageReturn.hasClass('sing_wrap')) {
    showPage('list_wrap')
  }
})

// 长按时执行的计时器
let backwards
// 显示演唱页
function showConcert(list) {
  // 显示页面
  showPage('sing_wrap')
  // 更换页面信息
  $('.sing_title .song_name').html(list.songName)
  $('.sing_title .name').html(list.name)
  $('.sing_lyric').text(list.lyric)

  // 倒计时
  let number = 0

  // 当前演奏时间
  let totalTime = 0
  // 长按演唱页麦克风录制音频事件
  $('.sing_wrap .round_wrap')[0].addEventListener('touchstart', function () {
    // 长按显示波纹动画
    $('.sing_wrap .round_wrap').addClass('show')

    // 长按执行定时器
    clearInterval(backwards)
    backwards = setInterval(function () {

      // 更改倒计时时间
      number = number - 10
      // 如果倒计时结束
      if (number <= 0) {
        // 执行开始演唱函数
        startConcert()
        // 演唱时间增加
        totalTime++
      }

      // 多久完成演奏 通过它跳转页面
      let time = 20000

      // 如果倒计时结束
      if (totalTime * 10 > time) {
        endSing(list)
      }
    }, 10)

  })

  var gameTime
  // 结束长按演唱页麦克风录制音频事件
  $('.sing_wrap .round_wrap')[0].addEventListener('touchend', function () {
    $('.sing_wrap .round_wrap').removeClass('show')
    gameTime = Math.floor(totalTime / 100 % 60)
    // 判断录制时长
    if (gameTime < 3) {
      showToast('至少录制三秒以上哦')
    } else {
      endSing(list)
    }

    // 解除计时器
    clearInterval(backwards)
    // 时间恢复默认值
    $('.sing_wrap .sing_time').text('00:00.00')
    // 录制时间恢复默认值
    totalTime = 0
    gameTime = 0
  })

  // 开始演唱
  function startConcert() {
    // 毫秒
    let hs = String(totalTime).substring(String(totalTime).length - 2)
    // 秒钟
    let s = Math.floor(totalTime / 100 % 60)
    s = String(s).length > 1 ? s : '0' + s
    // 分钟
    let m = Math.floor(Math.floor(totalTime / 100) / 60 % 60);
    m = String(m).length > 1 ? m : '0' + m
    // 计时器
    $('.sing_wrap .sing_time').text(`${m}:${s}.${hs}`)
  }

}

function endSing (list) {
  // 解除计时器
  clearInterval(backwards)

  /**
   * 0 ==> 低分
   * 1 ==> 高分
   */
  showShare(list, 0)
}

// 显示分享页
function showShare(list, id) {
  console.log(list, id);
  $('.share_label').text(list.title[id].label)
  $('.share_title').text(list.title[id].title)
  $('.share_text').text(list.title[id].text)
  $('.share_car img').attr('src', list.title[id].carUrl)
  showPage('share_wrap')
}

// 三级联动demo
var $province = $('#province')
var $city = $('#city')
var $region = $('#region')

/**
 * 根据依赖值，筛选返回符合条件的新的选项列表
 * @param {string|number} dependentValue 依赖值
 * @param {Array} optionsArray 选项列表
 */
function filterOptions(dependentValue, optionsArray) {
  var resultOptions = []
  $.each(optionsArray, function (index, option) {
    if (option.dependentValue.indexOf(dependentValue) !== -1) {
      resultOptions.push(option)
    }
  })
  return resultOptions
}

/**
 * 渲染选择框数据
 * @param {zeptoDom} $select 要渲染的选择框对象
 * @param {Array} options 渲染选项
 * @param {string} placeholder 占位选项
 * @param {string} selectedValue 选中值
 */
function changeSelectOptions($select, options, placeholder, selectedValue) {
  // 默认的空选项
  var optionTpl = '<option value="" disabled="disabled" selected hidden="hidden">' + placeholder + '</option>'
  // 生成选项值模板html
  $.each(options, function (index, option) {
    optionTpl += '<option value="' + option.value + '" ' + (selectedValue == option.value ? 'selected' : '') + '>' + option.name + '</option>'
  })
  // 渲染选项值到选项框中
  $select.empty().append(optionTpl)
}

// 初始化三个选项框的数据
changeSelectOptions($province, provinceOptions, '省份')
changeSelectOptions($city, cityOptions, '城市')
changeSelectOptions($region, regionOptions, '经销商')

// 省份变化
$province.on('change', function () {
  var cityValue = $city.val()
  changeSelectOptions($city, filterOptions(this.value, cityOptions), '城市', cityValue)
  // 触发城市的change事件，使3级联动触发
  $city.trigger('change')
})
// 城市变化
$city.on('change', function () {
  var regionValue = $region.val()
  changeSelectOptions($region, filterOptions(this.value, regionOptions), '经销商', regionValue)
})


/* 表单校验 */ 
$("#form").submit(function (e) {
  if ($('#name').val() == '') {
    showToast('请填写姓名')
  } else if ($('#phone').val() == '') {
    showToast('请填写电话号码')
  } else if ($('#province').val() == '') {
    showToast('请选择省份')
  } else if ($('#city').val() == '') {
    showToast('请选择城市')
  } else if ($('#region').val() == '') {
    showToast('请选择经销商')
  } else {

    
    recoverSelect()
  }
  return false;
});

// 表单选中事件 - 改变文字颜色
$("select").change(function () {
  $(this).css("color", '#000');
});
/* 恢复表单选中状态 */
function recoverSelect() {
  $('#surveyForm')[0].reset();
  $('select').css("color", '#939598');
}

/* Data: 2020-08-12; Edit: Hani; Describe: 添加隐私说明入口; Start v:1.0.0 */
// // 情况一 - 外链跳转 - 配置外链
// $('.form_privacy a').attr('href','www.baidu.com');
// 情况二 - 点击事件
$('.form_privacy a').on('click',function() {
  console.log('点击了隐私说明');
})
/* Data: 2020-08-12; Edit: Hani; Describe: 添加隐私说明入口; End v:1.0.0 */
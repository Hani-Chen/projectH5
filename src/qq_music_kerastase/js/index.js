/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection('.test') showSection('#test')
 *
 */
let $prevSection = $(".page_start")
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass('show')
  }
  $prevSection = $(section)
  $prevSection.addClass('show')
}

/**
 * 工具函数 - 秒数转格式
 * @param {Number} value 需要转格式的秒数
 */
function second(value) {
  var theTime = parseInt(value); // 秒
  var middle = 0; // 分
  var hour = 0; // 小时
  if (theTime > 60) {
    middle = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (middle > 60) {
      hour = parseInt(middle / 60);
      middle = parseInt(middle % 60);
    }
  }
  var resultHour = parseInt(hour) < 10 ? ('0' + parseInt(hour)) : parseInt(hour);
  var resultMiddle = parseInt(middle) < 10 ? ('0' + parseInt(middle)) : parseInt(middle);
  var resultTheTime = parseInt(theTime) < 10 ? ('0' + parseInt(theTime)) : parseInt(theTime);
  // if (middle > 0) {
  //   result = "" + parseInt(middle) + "分" + result;
  // }
  // if (hour > 0) {
  // }
  return resultHour + ":" + resultMiddle + ":" + resultTheTime;;
}

/**
 * 工具函数 - 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max)
}


/**
 * toast信息工具函数
 */
function showToast(str) {
  let $toast = $('<div class="toast_item">' + str + '</div>')
  $('.wrap').append($toast)
  setTimeout(function() {
    $toast.animate({ opacity: 0 }, 300, null, function() {
      $toast.remove()
    })
  }, 1500)
}


/**
 * 点击启动页 - 开启元气挑战按钮 - 显示录制页
 */
$('.start_btn').on('click', function () {
  // 显示录制页
  showSection($('.page_record'))
})

// 录制页 - 原唱
let url = 'https://sharefs.yun.kugou.com/202103031137/c546ac97ba6a516b9595760449b86832/KGTX/CLTX001/7d1f930c00afe74af6ba5e7fa3f3188c.mp3'
establishAudio(url)

function establishAudio(url) {
  // 创建标签
  let audio = $('<audio id="player"  src="' + url + '" hidden></audio>')
  //放到容器里区
  $(".audiopalyer").html(audio)
  $("#player")[0].load();
}

// 当前演奏时间
let totalTime = 0
// 长按时执行的计时器
let backwards
// 长按录制页麦克风录制音频事件
$('#recordSing')[0].addEventListener('touchstart', function (e) {
  $('.record_play__icon').removeClass('play')
  $("#player")[0].pause();
  $('.record_sing').addClass('sing')
  // 长按执行定时器
  clearInterval(backwards)
  backwards = setInterval(function () {
    // 演唱时间增加
    totalTime++
    $('.record_time').text(second(totalTime / 100))
  }, 10)

})

// 结束长按录制页麦克风录制音频事件
$('#recordSing')[0].addEventListener('touchend', function (e) {
  // 解除计时器
  clearInterval(backwards)
  // 恢复页面中倒计时默认值
  $('.record_time').text(second(0))
  // 将页面计时清零
  $('.record_time').text(second(0))
  // 移除麦克风动画
  $('.record_sing').removeClass('sing')
  // 暂停音乐
  $('.record_play__icon').removeClass('play')
  $("#player")[0].pause();

  console.log(totalTime/ 100);
    // 判断录制时长
    if(Number(totalTime/ 100) < 3) {
      showToast('至少录制三秒以上哦')
      // 录制时间恢复默认值
      totalTime = 0
      return
    }
    // 录制时间恢复默认值
    totalTime = 0

  // 显示评分页面
  showGrade()
})


// 点击播放原唱按钮
$('.record_play__icon').on('click', function (event) {
  if (!$(this).hasClass('play')) {
    $(this).addClass('play')
    $("#player")[0].currentTime = 0;
    $("#player")[0].play();
  } else {
    $(this).removeClass('play')
    $("#player")[0].pause();
  }
})


$("#player")[0].addEventListener('play', function () {
  $('.record_play__icon').addClass('play')
  $("#player")[0].currentTime = 0;
  $("#player")[0].play();
})

// 监听歌曲暂停
$("#player")[0].addEventListener('pause', function () {
  $('.record_play__icon').removeClass('play')
  $("#player")[0].pause();
})

// 音乐播放结束后暂停播放
$("#player")[0].addEventListener('ended', function () {
  $('.record_play__icon').removeClass('play')
  $("#player")[0].pause();
})


// 用户昵称
let userName = 'Hani'
// 用户头像
let userPortrait = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319772070,3114389419&fm=26&gp=0.jpg'
// 用户分数
let userScore = ''
// 用户评分
let userComment = [
  '不要灰心！\n快试一试小凯同款「元气姜」粉精华，\n一起元气发光！',
  '你的声纹元气满满呢！\n试一试小凯同款「元气姜」粉精华，\n让元气值更上一层楼吧 ',
  'WOW！\n你的声纹元气值和小凯很接近呢，\n 快用巴黎卡诗「元气姜」粉精华\n获得满分元气吧!',
]

/**
 * 点击启动页 - 开启元气挑战按钮 - 显示录制页
 */
$('.go_list').on('click', function () {
  // 执行 - 显示录制页函数
  showList()
})

function showGrade() {
  // 随机获取分数 - 正式请清除
  userScore = randomAccess(0, 99) + '.' + randomAccess(10, 99) 
  // 显示页面
  showSection($('.page_grade'))

  // 判断等级
  let comment = 0
  if (Number(userScore) < 60) {
    comment = 0
  } else if (Number(userScore) < 80) {
    comment = 1
  } else if (Number(userScore) < 100) {
    comment = 2
  }

  // 添加用户昵称
  $('.page_grade  .name').text(userName)
  // 添加用户头像
  $('.page_grade  .portrait_img').attr('src', userPortrait)
  // 添加用户得分
  $('.page_grade  .grade_score').text(userScore)
  // 添加用户评语
  $('.grade_comment').text(userComment[comment])
}

// 排行榜数据
let ranking = [
  {
    userName: '赵一',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '钱二',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '孙三',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '李四',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '周五',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '吴六',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '郑七',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '王八',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '我是一个超出隐藏的昵称',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  },
  {
    userName: '陈十',
    userScore: Number(randomAccess(0, 99) + '.' + randomAccess(10, 99))
  }
]

/**
 * 工具函数 - 数组排序
 */
function sortBy(score, userScore) {
  return function (a, b) {
    if (a[score] === b[score]) return a[userScore] - b[userScore];
    return a.score - b.score;
  }
}
ranking.sort(sortBy("score", "userScore")).reverse()


function showList() {
  let list = ranking.slice()

  let rankingIndex = 0
  list.forEach((item, index) => {
    if (item.userScore > userScore) {
      rankingIndex = Number(index) + 1
    }
  });
  if (rankingIndex < 10) {
    // 将自己数据添加到榜单列表 isSelf 标记数据是自己 不能移除
    list.splice(rankingIndex, 0, {
      userName,
      userScore,
      isSelf: true
    });
    $('.list_hint').removeClass('show')
  } else {
    $('.list_hint').addClass('show')
  }

  let demoItem = ''
  // 遍历排名数据
  for (let index = 0; index < 10; index++) {
    const element = list[index];
    demoItem += `<div class="list_ranking__item ${element.isSelf ? 'active' : ''}">
    <div class="list_ranking__data">
      <div class="list_ranking__number number_style">${index + 1}</div>
      <div class="list_ranking__name">${element.userName}</div>
    </div>
    <div class="list_ranking__gride">${element.userScore}</div>
  </div>`
  }
  // 将排名数据添加到页面
  $('.list_ranking__inner').html(demoItem)

  // 显示页面
  showSection($('.page_list'))
}
/**
 * 点击启动页 - 开启元气挑战按钮 - 显示录制页
 */
$('.list_btn__item').on('click', function () {
  // 执行 - 显示录制页函数
  showSection($('.page_record'))
})

/**
 * 按ID显示弹窗
 */
function showModal(id) {
  $('#' + id).addClass('show')
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show')
}

/* 点击弹窗关闭按钮 - 隐藏弹窗 */
$('.modal_close').on('click', function () {
  // 移除弹窗显示类
  $(this).parents('.modal').removeClass('show')
})

// 点击分享按钮 - 显示分享弹窗
$('.share_btn').on('click', function () {
  showModal('modalShore')
})
// 点击活动规则按钮按钮 - 显示规则弹窗
$('.record_hint__rule ').on('click', function () {
  console.log('需要显示活动规则');
})
/* Data: 2021年3月12日10:48:12; Edit: Hani; Describe: 列表页添加返回按钮; Start */
// 点击列表页返回按钮
$('.page_item .return').on('click', function () {
  // 显示页面
  showSection($('.page_grade'))
})
/* Data: 2021年3月12日10:48:12; Edit: Hani; Describe: 列表页添加返回按钮; End */


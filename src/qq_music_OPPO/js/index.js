// 当前默认显示的页面
var $currentSection = $('.page_loading')
// 需要显示的页面
var $backSection = ''
// 页面显示函数
function showSection($section) {
  if ($currentSection) {
    $currentSection.removeClass('show')
    $backSection = $currentSection
  }
  $section.addClass('show')
  $currentSection = $section
}

function backSection() {
  showSection($backSection)
}

// 全局资源缓存组
var imageCollect

/**
 *  预加载图片资源
 * @param {Array} names 图片名数组
 * @param {Function} cb 加载回调
 * @param {String} prefix 图片路径配置
 */
function preloadImage(names, cb, prefix, onProgress) {
  var n = 0,
    imgs = {}
  names.forEach(function (name) {
    var img = new Image()
    img.onload = (function (name, img) {
      return function () {
        imgs[name] = img
        n++
        onProgress(n, names.length)
        n === names.length && cb && cb(imgs)
      }
    })(name, img)
    img.src = (prefix || '') + name
  })
}


function setLoading() {
  var isLoadingEnd = false;
  var isTimeEnd = false;
  setTimeout(function () {
    isTimeEnd = true
    if (isLoadingEnd && isTimeEnd) {
      // 显示loading页面
      showSection($('.page_home'))
    }
  }, 2000)

  // 需要加载的静态资源的数组
  var imgs = [
    './img/answer_btn.png',
    './img/answer_btn_active.png',
    './img/answer_cd.png',
    './img/answer_cd_bg.png',
    './img/answer_icon_play.png',
    './img/answer_icon_stop.png',
    './img/answer_sequence.png',
    './img/answer_solution.png',
    './img/answer_song_progress.jpg',
    './img/home_cd.png',
    './img/home_earphone.png',
    './img/home_start_bg.png',
    './img/home_text.png',
    './img/loading_bg.jpg',
    './img/loading_cd.png',
    './img/loading_earphone.png',
    './img/loading_text.png',
    './img/logo.png',
    './img/squeeze_retest.png',
    './img/squeeze_decorate.png',
    './img/squeeze_ear_copper.jpg',
    './img/squeeze_ear_gold.jpg',
    './img/squeeze_ear_iron.jpg',
    './img/squeeze_ear_null.jpg',
    './img/squeeze_ear_silver.jpg',
    './img/squeeze_ear_wood.jpg',
    './img/squeeze_ellipses.png',
    './img/squeeze_frame.png',
    './img/squeeze_headset.png',
    './img/squeeze_line_down.png',
    './img/squeeze_line_up.png',
    './img/squeeze_save.png',
    './img/squeeze_prize.png',
    './img/squeeze_lottery.png',
    './img/answer_light.png',
    './img/modal_bg.png',
    './img/modal_close.png',
    './img/squeeze_prize1.png',
    './img/squeeze_prize2.png',
    './img/squeeze_prize3.png',
    './img/squeeze_prize4.png',
  ]
  preloadImage(
    imgs,
    function (imgs) {
      imageCollect = imgs
    },
    '',
    function (n, total) {
      if (n === total) {
        isLoadingEnd = true;
        if (isLoadingEnd && isTimeEnd) {
          // 显示loading页面
          showSection($('.page_home'))
        }

      }
    }
  )
}
setLoading()

// 默认显示第几个答题页
var currentTopic = 1;
// 点击开始测试
$('.home_start').on('click', function () {
  // 显示答题页
  showSection($('.page_answer'))
  // 显示第几题的内容
  showAnswerPage(currentTopic)
})


// 是否可以播放
var isMayPlay = false
// 点击icon播放
$('.answer_song__icon').on('click', function () {
  if ($('#answerSongMusic')[0].duration != 0) {
    if ($('#answerSongMusic')[0].paused) {
      $('#answerSongMusic')[0].play();
      musicPlay()
    } else {
      $('#answerSongMusic')[0].pause();
      musicStop()
    }
  }
})

$('#answerSongMusic')[0].addEventListener("canplay", function () {
  /* 可以播放时改变变量值 */
  isMayPlay = true
  /* 可以播放时改变变量值 */
});

// 音乐正常结束时
$('#answerSongMusic')[0].addEventListener("ended", function () {
  musicStop();
});

// 音频暂停
function musicStop() {
  $('.answer_song__icon').removeClass('play')
  $('.answer_cd__item ').removeClass('play')
}
// 音频播放
function musicPlay() {
  $('.answer_song__icon').addClass('play')
  $('.answer_cd__item ').addClass('play')
}

/* Data: 2020-11-06; Edit: Hani; Describe: 修改答题数据; Start  */
// 答题页数据
var answerList = [{
    id: 0,
    // 问题标题
    title: '试听《尘鼓》的前10秒，下列哪个选项最为接近三个鼓的实际位置分布？',
    // 问题歌曲链接
    url: 'http://music.163.com/song/media/outer/url?id=5241787.mp3',
    // 正确答案的下标
    isCorrect: 0,
    // 第一天特殊样式需要判断
    isImg: true,
  },
  {
    id: 1,
    title: '试听这段王菲的《影子》，伴奏的乐器数量总共有多少 ？',
    url: 'http://music.163.com/song/media/outer/url?id=300342.mp3',
    isCorrect: 1,
    isImg: false,
    // 除第一题以外其他的答案列表
    list: [{
        text: 'A、3件'
      },
      {
        text: 'B、4件'
      },
      {
        text: 'C、5件'
      }
    ],
  },
  {
    id: 2,
    title: '试听这首《You Belong to Me》的部分节选，下列哪个选项是这首歌的录音地点？',
    url: 'http://music.163.com/song/media/outer/url?id=5053289.mp3',
    isCorrect: 2,
    isImg: false,
    list: [{
        text: 'A、录音棚'
      },
      {
        text: 'B、直播间'
      },
      {
        text: 'C、现场'
      }
    ],
  },
  {
    id: 3,
    title: '试听这段《深情相拥》，下列这些对男歌手的描述，哪个最为贴切？',
    url: 'http://music.163.com/song/media/outer/url?id=187988.mp3',
    isCorrect: 1,
    isImg: false,
    list: [{
        text: 'A、个性，态度的青年男歌手'
      },
      {
        text: 'B、温柔，成熟的中年男歌手'
      },
      {
        text: 'C、沧桑，质朴的老年男歌手'
      }
    ],
  }, {
    id: 4,
    title: '试听这首小提琴曲《Partita No.3 E Major:I Preludio》的部分节选，演奏者想要表达的情绪是  ？',
    url: 'https://sharefs.yun.kugou.com/202011102038/bd4cc4bc6ccca6b77a6202cd16accf51/G208/M02/0F/11/cIcBAF6aLKaAMooQADHqQdy2MMM975.mp3',
    isCorrect: 2,
    isImg: false,
    list: [{
        text: 'A、兴奋，激昂'
      },
      {
        text: 'B、孤独，忧伤'
      },
      {
        text: 'C、轻松，欢快'
      }
    ],
  },
  {
    id: 5,
    title: '试听这段王者荣耀游戏主题曲《Main Theme》，有哪些种类的乐器在这段音乐中出现？',
    url: 'http://music.163.com/song/media/outer/url?id=31192230.mp3',
    isCorrect: 1,
    isImg: false,
    list: [{
        text: 'A、弓弦乐器，木管乐器，弹拨乐器'
      },
      {
        text: 'B、弓弦乐器，打击乐器，铜管乐器'
      },
      {
        text: 'C、键盘乐器，打击乐器，弹拨乐器'
      }
    ],
  }
]
/* Data: 2020-11-06; Edit: Hani; Describe: 修改答题数据; End  */
/**
 * 显示答题页
 * @param {Number} index 当前是第几道题
 */
function showAnswerPage(index) {
  // 切换题目 - 恢复进度条
  $('.answer_song__ball').css("left", 0);
  $('.answer_song__progress').css("width", 0);
  // 添加题目动画
  $('.page_answer').addClass('ani')
  // 答案是否可以点击
  isClick = true;

  musicStop()
  // 页面显示 - 当前是第几题
  $('.answer_sequence__present').text(index)
  // 页面显示 - 最多多少道题
  $('.answer_sequence__sum').text(answerList.length)
  // 页面显示 - 当前题目标题
  $('.answer_title').text(answerList[index - 1].title)
  // 页面显示 - 改变cd
  $('.answer_cd__item').removeClass().addClass('answer_cd__item answer_cd__item' + index)
  $('#answerSongMusic').attr('src', answerList[index - 1].url)
  // 移除第一道题的特殊类名
  $('.answer_select__wrap').removeClass('answer_select__topic1')
  // 移除按钮高亮
  $('.answer_select__item').removeClass('active')
  $('.answer_title').removeClass('shrink')
  // 如果是第一题 -第一题是图片
  if (answerList[index - 1].isImg) {
    $('.answer_select__wrap').addClass('answer_select__topic1')
    // 第一题没有文案 - 是图片
    $('.answer_select__text').text('')
  } else {
    if (index > 4) {
      $('.answer_title').addClass('shrink')
    }
    for (let i = 0; i < answerList[index - 1].list.length; i++) {
      const element = answerList[index - 1].list[i];
      $('.answer_select__text' + (i + 1)).text(element.text)
    }
  }
}



// 点击答题页选项
var isClick = true
// 正确的数量
var topicNumber = 0;
$('.answer_select__item').on('click', function () {
  if (isClick) {
    $('.page_answer').removeClass('ani')
    isClick = false
    if ($(this).index() == answerList[currentTopic - 1].isCorrect) {
      topicNumber++
      console.log(topicNumber);
    }
    if (currentTopic <= answerList.length) {
      $(this).addClass('active')
      $('.answer_select__item').removeAttr('onclick');
      setTimeout(function () {

        currentTopic++;
        if (currentTopic == answerList.length + 1) {
          showEnd(topicNumber)
        } else {

          showAnswerPage(currentTopic)
        }
        // 选择完题目停止1s - 可修改
      }, 1000)
    }
  }
})

// 显示落地页
function showEnd(index) {
  // 暂停音乐
  $('#answerSongMusic')[0].pause();
  // 执行暂停音乐函数
  musicStop()
  // 判断对了多少题
  $('.page_squeeze').removeClass().addClass('page_item page_squeeze')
  if (index == 0) {
    $('.page_squeeze').addClass('page_null')
  } else if (index == 1) {
    $('.page_squeeze').addClass('page_wood')
  } else if (index == 2) {
    $('.page_squeeze').addClass('page_wood')

  } else if (index == 3) {
    $('.page_squeeze').addClass('page_iron')

  } else if (index == 4) {
    $('.page_squeeze').addClass('page_copper')

  } else if (index == 5) {
    $('.page_squeeze').addClass('page_silver')
  }
  // 修改对了多少题
  $('.squeeze_topic__number').text(index)
  // 修改百分比
  $('.squeeze_defeat__number').text(16.5 * index)
  // 显示落地页
  showSection($('.page_squeeze'))

}


$('.squeeze_retest__text').on('click', function () {
  // 当前第几题
  currentTopic = 1
  // 当前对了多少
  topicNumber = 0
  // 显示答题页
  showSection($('.page_answer'))
  // 显示第几题的内容
  showAnswerPage(currentTopic)
})

// 修改用户头像
$('#avatar').attr('src', 'http://m.imeitou.com/uploads/allimg/2020110210/rjfsv2bmfyj.jpg')





/* Data: 2020-11-06; Edit: Hani; Describe: 中奖弹窗配置; Start */
// 奖品弹窗数据
var prizeList = [{
    id: 0,
    text: 'OPPO Enco W31 真无线蓝牙耳机',
    img: './img/squeeze_prize1.png'
  },
  {
    id: 1,
    text: 'OPPO Enco W51 真无线降噪耳机',
    img: './img/squeeze_prize2.png'
  },
  {
    id: 2,
    text: 'OPPO Enco X 真无线降噪耳机',
    img: './img/squeeze_prize3.png'
  },
  {
    id: 3,
    text: 'OPPO 智能电视 R1 55英寸',
    img: './img/squeeze_prize4.png'
  }
]

/**
 * 
 * @param {Number} index 中奖id
 * 0 ==> OPPO Enco W31 真无线蓝牙耳机
 * 1 ==> OPPO Enco W51 真无线降噪耳机
 * 2 ==> OPPO Enco X 真无线降噪耳机
 * 3 ==> OPPO 智能电视 R1 55英寸
 * 4 ==> 啥也没抽到
 * 5 ==> 次数用完
 */
function lotteryFun(index) {
  $('.modal').removeClass('show')
  if (index < 4) {
    $('.prize_text').text(prizeList[index].text);
    $('.prize_img__item').attr('src', prizeList[index].img)
    $('#modalPrize').addClass('show');
  } else if (index == 4) {
    $('#modalOver').addClass('show');
  } else if (index == 5) {
    $('#modalHint').addClass('show');
  } else if (index == 6) {
    $('#modalNat').addClass('show');
  }
}
// 每次抽奖的中奖数字
var testIndex = 0;
// 是否可以继续抽奖
var isLottery = true;
// 是否得到了奖品
var isGet = false;
// 默认实物的id - 由于只能中一次实物所以默认值是4（4是未中奖）
var isGetLotteryNumber = 4;
// 点击抽奖
$('.squeeze_lottery__text').on('click', function () {
  // 第一步 - 判断能不能继续抽奖
  if (isLottery) {
    /**
     * 随机获取中奖id 
     * 0 ==> OPPO Enco W31 真无线蓝牙耳机
     * 1 ==> OPPO Enco W51 真无线降噪耳机
     * 2 ==> OPPO Enco X 真无线降噪耳机
     * 3 ==> OPPO 智能电视 R1 55英寸
     * 4 ==> 啥也没抽到
     */
    testIndex = Math.floor(Math.random() * 5)

    // 判断用户是否抽到实物
    if (testIndex < 4) {
      // 如果抽到实物了isGet改变变量值 ， 将不再抽取实物
      isGet = true
      // 记录实物id - 方便查看实物奖品
      isGetLotteryNumber = testIndex;
    }
    // 显示中奖弹窗
    lotteryFun(testIndex)
    // 改变变量值 - 禁止再次抽奖
    isLottery = false;
  } else {
    // 禁止抽奖后 - 再次抽奖显示没有次数
    lotteryFun(5)
  }
})
// 点击弹窗关闭按钮
$('.modal_close').on('click', function () {
  $('.modal').removeClass('show')
})
// 点击我的奖品按钮
$('.squeeze_prize__text').on('click', function () {
  // 如果抽到过实物 - 显示实物弹窗 
  if (!isLottery && isGet) {
    lotteryFun(testIndex)
    console.log('抽到实物了');
  } else if (!isLottery) {
    // 如果没有抽到实物- 显示未中奖弹窗
    lotteryFun(testIndex)
    console.log('没抽到实物');
  } else {
    // 如果没有开始抽奖 - 显示未开始抽奖弹窗
    lotteryFun(6)
  }
})
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
}, {
  passive: false
}); //passive 参数不能省略，用来兼容ios和android

/* Data: 2020-11-06; Edit: Hani; Describe: 中奖弹窗配置; End */
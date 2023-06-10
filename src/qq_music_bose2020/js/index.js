/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection('.test') showSection('#test')
 *
 */
let $prevSection = $(".page_home")
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass('show')
  } 
  $prevSection = $(section)
  $prevSection.addClass('show')
}


/**
 * toast信息工具函数
 */
function showToast(str) {
  let $toast = $('<div class="toast_item">' + str + '</div>')
  $('.page_concert').append($toast)
  setTimeout(function() {
    $toast.animate({ opacity: 0 }, 300, null, function() {
      $toast.remove()
    })
  }, 1500)
}


// 首页切换图片
$('.page_home .bg_item:first-child').addClass('ani')
function home(){
  if($('.page_home').hasClass('show')) {
    $('.page_home .bg_item').toggleClass('ani')
    setTimeout(home, 2500)
  }
}
home()

// 动画结束 开启点击
$('.home_title')[0].addEventListener("animationend",function(){
  $('.aureole_wrap').removeClass('forbid')
},false);

$('.aureole_wrap').on('click',function(){
  showSection('.page_select')
})
// 歌单列表
let songList = [
  {
    id: 0,
    name: '徐佳莹',
    songName: '《失落沙洲》',
    songLyrics: '我不是一定要你回来\n只是当又一个人看海\n回头才发现你不在\n留下我迂回的徘徊',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '1234',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">徐佳莹</span>给了你\n一个鼓励的眼神\n别灰心\n继续加油'
      },
      {
        text: '你的唱功赛高\n<span class="name">徐佳莹</span>听了\n都有一点动心'
      },
      {
        text: '你的音色让\n无数音雄尽折腰\n连<span class="name">徐佳莹</span>听了\n都想为你下腰'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '徐佳莹粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '徐佳莹粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '徐佳莹粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '徐佳莹粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '徐佳莹粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '徐佳莹粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '徐佳莹粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '徐佳莹粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '徐佳莹粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '徐佳莹粉丝',
        score: '97.98'
      }
    ]

  },
  {
    id: 1,
    name: '吴亦凡',
    songName: '《大碗宽面》',
    songLyrics: '这碗大\n千万别虚荣心作祟\n真心话\n这大碗宽面也很贵',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">吴亦凡</span>说你的\nfreestyle还需要\n加强哦！'
      },
      {
        text: '听你唱歌很满足\n就像<span class="name">wuli凡凡</span>的\n大碗宽面般满足'
      },
      {
        text: '你的声线带电\n<span class="name">吴亦凡</span>听了\n都来电'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '吴亦凡粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '吴亦凡粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '吴亦凡粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '吴亦凡粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '吴亦凡粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '吴亦凡粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '吴亦凡粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '吴亦凡粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '吴亦凡粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '吴亦凡粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 2,
    name: '五月天 －阿信',
    jcName: '阿信',
    songName: '《离开地球表面》',
    songLyrics: '一颗心噗通噗通的狂跳\n一瞬间烦恼烦恼烦恼\n全忘掉\n我再也不要再也不要\n委屈自己一秒',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">阿信</span>送来\n爱的鼓励\n演唱还要\n再接再厉哦'
      },
      {
        text: '声线过耳不忘\n<span class="name">五月天</span>都想\n找你当主唱'
      },
      {
        text: '你的歌喉\n能量爆棚直逼\n离开地球表面的\n<span class="name">五月天</span>'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '阿信粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '阿信粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '阿信粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '阿信粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '阿信粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '阿信粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '阿信粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '阿信粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '阿信粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '阿信粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 3,
    name: '陈奕迅',
    songName: '《好久不见》',
    songLyrics: '我多么想和你见一面\n看看你最近改变\n不再去说从前 只是寒暄',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">Eason</span>向你送来\n安慰的淘汰\n等你下回再战'
      },
      {
        text: '你的嗓音与\n<span class="name">陈奕迅</span>高度相似\n低音炮\n轻松击中少女心'
      },
      {
        text: '你拥有<span class="name">陈奕迅</span>的\n灵魂男声\nK歌之王\n你当之无愧'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '陈奕迅粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '陈奕迅粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '陈奕迅粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '陈奕迅粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '陈奕迅粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '陈奕迅粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '陈奕迅粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '陈奕迅粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '陈奕迅粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '陈奕迅粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 4,
    name: '林俊杰',
    songName: '《可惜没如果》',
    songLyrics: '全都怪我不该沉默时沉默\n该勇敢时软弱如果不是我\n误会自己洒脱让我们难过',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">JJ</span>拍拍你的肩\n对你说：唱功还需要\n继续修炼哦'
      },
      {
        text: '你的歌喉暖得像\n一个拥抱，\n<span class="name">林俊杰</span>听了点名\n和你背对背拥抱'
      },
      {
        text: '你的声线\n穿透力爆表，\n跟<span class="name">林俊杰</span>一样\n声入人心'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '俊杰粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '俊杰粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '俊杰粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '俊杰粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '俊杰粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '俊杰粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '俊杰粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '俊杰粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '俊杰粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '俊杰粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 5,
    name: '青春有你2 －虞书欣',
    jcName: '虞书欣',
    songName: '《我怎么这么好看》',
    songLyrics: '哎呀妈呀天呐怎么办\n我怎么这么好看\n What you gonna say \nno way \n漂亮不是罪绝对\n这么好看怎么办',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '请继续练习\n总有一天\n会像<span class="name">虞美人</span>般\n吸睛力爆棚'
      },
      {
        text: '你的歌声\n简直slay全场\n比肩<span class="name">虞美人</span>\n实力控场'
      },
      {
        text: '哇哦～\n你的唱腔可真秀\n比<span class="name">虞书欣</span>的\n模仿秀还秀'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '虞书欣粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '虞书欣粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '虞书欣粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '虞书欣粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '虞书欣粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '虞书欣粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '虞书欣粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '虞书欣粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '虞书欣粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '虞书欣粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 6,
    name: '易烊千玺',
    songName: '《朋友请听好》',
    songLyrics: '说车站风好大\n说喜欢那个他\n说奶奶的手帕\n藏着给你的糖',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '相信你的演唱\n总有一天会像\n<span class="name">千玺</span>般易燃易爆'
      },
      {
        text: '你的嗓音\n一鸣惊人\n<span class="name">易烊千玺</span>听了\n都想一键三连'
      },
      {
        text: '原来，你就是\n传说中的开口跪\n把<span class="name">易烊千玺</span>\n都唱醉！'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '千玺粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '千玺粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '千玺粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '千玺粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '千玺粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '千玺粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '千玺粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '千玺粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '千玺粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '千玺粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 7,
    name: '王一博',
    songName: '《无感》',
    songLyrics: '我没有你想象的好\n也没有他想象的坏\n只看到部分的我就很喜欢',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '快向<span class="name">王一博</span>导师\n多多请教\n坐等你大秀Vocal'
      },
      {
        text: '你的嗓音\n真叫人难忘记\n就像令人着迷的\n<span class="name">蓝忘机</span>'
      },
      {
        text: '你的演唱\n全程核能\n如荷尔蒙爆表的<span class="name">\n王一博</span>'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '王一博粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '王一博粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '王一博粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '王一博粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '王一博粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '王一博粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '王一博粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '王一博粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '王一博粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '王一博粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 8,
    name: '周杰伦',
    songName: '《说好不哭》',
    songLyrics: '眼看着你难过\n挽留的话却没有说\n你会微笑放手\n说好不哭让我走',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '别难过哦\n和<span class="name">杰伦小公举</span>\n说好不哭的'
      },
      {
        text: '歌声百听不厌\n<span class="name">周董</span>听了想\n再给你\n一首歌的时间'
      },
      {
        text: '你是不折不扣的\n好声音\n<span class="name">杰伦导师</span>\n必将为你转身'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '周总粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '周总粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '周总粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '周总粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '周总粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '周总粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '周总粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '周总粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '周总粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '周总粉丝',
        score: '97.98'
      }
    ]
  },
  {
    id: 9,
    name: '蔡依林',
    songName: '《心引力》',
    songLyrics: '心引力的定律\n找到你想对你说\n在一起我和你\n早已慢慢靠近',
    // songID ==> 可直接传入SongID 点击播放按钮可直接获取到对应SongID
    songID: '111222',
    // 分数对应显示的文案
    gradeTitle: [
      {
        text: '<span class="name">蔡依林</span>说\n你唱歌画面太美\n她不敢看'
      },
      {
        text: '你是\n真·唱跳实力派\n<span class="name">蔡依林</span>听了想倒带'
      },
      {
        text: '你的歌声\n心动值Max\n像<span class="name">J女王</span>般\n自带心引力'
      }
    ],
    // 当前歌曲top10
    ranking: [
      {
        id: 0,
        name: '蔡依林粉丝',
        score: '98.5'
      },
      {
        id: 1,
        name: '蔡依林粉丝',
        score: '98.4'
      },
      {
        id: 2,
        name: '蔡依林粉丝',
        score: '98.3'
      },
      {
        id: 3,
        name: '蔡依林粉丝',
        score: '98.2'
      },
      {
        id: 4,
        name: '蔡依林粉丝',
        score: '98.1'
      },
      {
        id: 5,
        name: '蔡依林粉丝',
        score: '98.0'
      },
      {
        id: 6,
        name: '蔡依林粉丝',
        score: '97.99'
      },
      {
        id: 7,
        name: '蔡依林粉丝',
        score: '97.98'
      },
      {
        id: 8,
        name: '蔡依林粉丝',
        score: '97.98'
      },
      {
        id: 9,
        name: '蔡依林粉丝',
        score: '97.98'
      }
    ]
  },
]

// 选择歌曲页歌单列表渲染
;(function () {
  // 一页显示多少数据 
  let pagingNumber = 5; 
  // 当前显示第几页
  let pagingNowNumber = 0; 
  // 分页后的数组
  let = pagingList = []
  // 总共会分多少页
  let pagingAllNumber = Math.ceil(songList.length / pagingNumber)
  for (let i = 0; i < songList.length; i++) {
    let start = i * pagingNumber
    let end = start + pagingNumber
    if (pagingAllNumber > i) {
      pagingList.push(songList.slice(start, end))
    }
  }

  /* Data: 2020-05-28; Edit: Hani; Describe: 添加按钮置灰; Start */// 如果是第一页 添加上一页按钮置灰状态
  if(pagingNowNumber == 0) {
    $('.select_content .btn_prev').addClass('btn_prev_gray')
  }
  // 点击选择歌曲页 - 翻页 - 上一页 切换列表
  $('.select_content').on('click','.btn_prev',function(){
    /* 点击上一页时 - 如果不是第一页 */
    if(pagingNowNumber > 0) {
      // 将显示的页面下标减一
      pagingNowNumber = pagingNowNumber - 1
      // 执行列表渲染函数
      selectListRender(pagingNowNumber)
      // 移除下一页按钮置灰状态
      $('.select_content .btn_next').removeClass('btn_next_gray')
    }
    // 如果是第一页 添加上一页按钮置灰状态
    if(pagingNowNumber == 0) {
      $(this).addClass('btn_prev_gray')
    }
  })
  // 点击选择歌曲页 - 翻页 - 下一页 切换列表
  $('.select_content').on('click','.btn_next',function(){

    /* 点击上一页时 - 如果不是最后一页 */
    if(pagingNowNumber < pagingAllNumber - 1) {
      // 将显示的页面下标加一
      pagingNowNumber = pagingNowNumber + 1
      // 执行列表渲染函数
      selectListRender(pagingNowNumber)
      // 移除上一页按钮置灰状态
      $('.select_content .btn_prev').removeClass('btn_prev_gray')
    }
    // 如果是最后一页 添加下一页按钮置灰状态
    if(pagingNowNumber == pagingAllNumber - 1) {
      $(this).addClass('btn_next_gray')
    }
  })
  /* Data: 2020-05-28; Edit: Hani; Describe: 添加按钮置灰; End */

  // 分页函数
  function selectListRender(number = 0) {
    $('.select_list').empty();
    for (let i = 0; i < pagingList[number].length; i++) {
      let index = i
      let pagingData = pagingList[pagingNowNumber][i]
      index >= 5 ? (index = index - 5) : (index = i)
      let $item = `<div class="select_item select_item${index+1}">
          <div class="item_text">
          <div class="title">${pagingData.songName}</div>
          <div class="text">${pagingData.name}</div>
          </div>
          <div class="item_btn">
          <div class="btn btn_play btn_stop" data-songID="${pagingData.songID}"></div>
          <div class="btn btn_record" data-index="${pagingData.id}"></div>
          </div>
          </div>`;
      $('.select_list').append($item)
    }
  }
  // 默认执行
  selectListRender()

  // 点击选择歌曲页 - 单个歌单播放按钮 - 切换播放状态（播放音乐）
  $('.select_list').on('click','.item_btn .btn_play',function(){

    /* 这里可以直接获取到列表中对应的SongID */
    console.log($(this).attr("data-songID"));

    // 通过按钮icon - 判断是否播放音乐
    if($(this).hasClass('btn_stop')) {
      /* 这里放置播放音乐事件 */

      // 改变播放icon状态
      $(this).removeClass('btn_stop')
      
    }else {
      /* 这里放置暂停音乐事件 */

      // 改变播放icon状态
      $(this).addClass('btn_stop')
    }
    
  })

  // 点击选择歌曲页 - 单个歌单播放按钮 - 录这首 - 跳转到演奏页
  $('.select_list').on('click','.item_btn .btn_record',function(){
    let checkedSongList= songList[$(this).attr("data-index")]
    /* 这里可以直接获取到列表中当前歌曲的所有信息 */
    console.log();
    showConcert(checkedSongList)
  })
  
})()

// 显示演唱页
function showConcert(list) {
  $('.circle').removeClass('show')
  /* Data: 2020-06-03; Edit: Hani; Describe: 移除默认显示的话筒光晕动效; Start */
  // setTimeout(function(){
  //   // $('.page_concert .circle').addClass('show')
  // },1500)
  /* Data: 2020-06-03; Edit: Hani; Describe: 移除默认显示的话筒光晕动效; End */
  // 展示当前选择的歌曲 - 歌词
  $('.page_concert .title').html(list.songLyrics)
  // 展示当前选择的歌曲 - 歌名和艺人名称
  $('.page_concert .text').text(list.songName + list.name)
  // 显示页面
  showSection('.page_concert')

  /* Data: 2020-06-03; Edit: Hani; Describe: 修改倒计时时间; Start */
  // 倒计时
  let number = 0
  /* Data: 2020-06-03; Edit: Hani; Describe: 修改倒计时时间; End */

  // 当前演奏时间
  let totalTime = 0
  // 长按时执行的计时器
  let backwards
  // 长按演唱页麦克风录制音频事件
  $('.page_concert .aureole')[0].addEventListener('touchstart', function() {
    
    /* Data: 2020-06-03; Edit: Hani; Describe: 长按时添加话筒光晕动效; Start */
    // 指定用户判断
    if(true){
      $('.page_concert .circle').addClass('show')
    }
    /* Data: 2020-06-03; Edit: Hani; Describe: 长按时添加话筒光晕动效; End */

    // 长按执行定时器
    clearInterval(backwards)
    backwards = setInterval(function() {
      
      // 更改倒计时时间
      number = number - 10
      // 如果倒计时结束
      if(number <= 0) {
        // 隐藏倒计时
        $('.page_concert .number').hide()
        // 执行开始演唱函数
        startConcert()
        // 演唱时间增加
        totalTime++
      }
      
      // 多久完成演奏 通过它跳转页面
      let time = 4000

      // 如果倒计时结束
      if(totalTime*10 > time) {
        
        // 解除计时器
        clearInterval(backwards)

        // 获取分数
        let index = parseInt(Math.random()*(90+1),10) + 0.22

        // 获取用户名
        let userName = 'Hani'

        // 显示落地页 传入当前选择的歌曲列表  和 演奏的分数 和 用户名
        showEnd(list,index,userName)
      }
      // 更改页面中倒计时
      $('.page_concert .number').text(Math.floor(number/1000))
    }, 10)

  })
  
  // 结束长按演唱页麦克风录制音频事件
  $('.page_concert .aureole')[0].addEventListener('touchend', function() {

    /* Data: 2020-06-03; Edit: Hani; Describe: 结束长按时移除话筒光晕动效; Start */
    $('.page_concert .circle').removeClass('show')
    /* Data: 2020-06-03; Edit: Hani; Describe: 结束长按时移除话筒光晕动效; End */

    let gameTime = Math.floor(totalTime / 100 % 60)
    // 判断录制时长
    if(gameTime < 3) {
      showToast('至少录制三秒以上哦')
    }

    /* Data: 2020-06-03; Edit: Hani; Describe: 修改倒计时时间; Start */
    // 倒计时恢复默认值
    number = 0
    /* Data: 2020-06-03; Edit: Hani; Describe: 修改倒计时时间; End */
    
    // 显示倒计时
    $('.page_concert .number').show()
    // 解除计时器
    clearInterval(backwards)
    // 恢复页面中倒计时默认值
    $('.page_concert .number').text('')
    // 时间恢复默认值
    $('.page_concert .concert_time').text('00:00.00')
    // 录制时间恢复默认值
    totalTime = 0
    
  })
  
  // 开始演唱
  function startConcert() {
    // 毫秒
    let hs = String(totalTime).substring(String(totalTime).length-2)
    // 秒钟
    let s = Math.floor(totalTime / 100 % 60)
    s = String(s).length > 1 ? s : '0' + s
    // 分钟
    let m = Math.floor(Math.floor(totalTime / 100)/60%60);
    m =   String(m).length > 1 ? m : '0' + m
    // 计时器
    $('.page_concert .concert_time').text(`${m}:${s}.${hs}`)
  }
  
}
// 显示落地页
function showEnd(list,score,userName) {
  
  // 判断分数区间
  let grade
  if(Number(score) >= 0 && Number(score) <= 20) {
    grade = list.gradeTitle[0].text
  }else if(Number(score) > 20 && Number(score) <= 70) {
    grade = list.gradeTitle[1].text
  }else if(Number(score) > 70 && Number(score) <= 99) {
    grade = list.gradeTitle[2].text
  }
  let decimals = String(score).split(".");

  /* Data: 2020-05-28; Edit: Hani; Describe: 删除分字 删除代码 "<span class="unit">分</span>"; Start */
  // 显示分数小数部分
  $('.page_end .score').html(`${Math.floor(score)}<span class="decimals">.${decimals[1] == undefined ? '00' : decimals[1]}</span>`)
  /* Data: 2020-05-28; Edit: Hani; Describe: 删除分字 删除代码 "<span class="unit">分</span>"; End */

  // 此处填写当前用户名称
  $('.page_end .title').text(userName)
  // 等级标语
  $('.page_end .text').html(grade)
  
  // 显示页面
  showSection('.page_end')
  // 点击选择歌曲页 - 查看完整歌单
  $('.page_end').on('click','.btn_list',function(){
    // 显示榜单页 传入当前选择的歌曲列表id
    showExample(list.id)
  })
  
}

// 显示磅单页
function showExample(songId) {
  // 更改榜单数据 - 传入当前榜单列表和当前songList id
  exampleListRender(songList,songId)
  console.log(songList.length);
  
  /* Data: 2020-05-28; Edit: Hani; Describe: 添加按钮置灰; Start */
  // 如果是第一页 添加上一页按钮置灰状态
  if(songId == 0) {
    $('.example_content .btn_prev').addClass('btn_prev_gray')
  }else if(songId == songList.length-1) {
    // 如果是最后一页 添加下一页按钮置灰状态
    $('.example_content .btn_next').addClass('btn_next_gray')
  }

  // 点击排行榜页 - 翻页 - 上一页 榜单
  $('.example_content').on('click','.btn_prev',function(){
    if(songId > 0) {
      songId = songId - 1
      // 更改榜单数据 - 传入当前榜单列表和当前songList id
      exampleListRender(songList,songId)
      // 移除下一页按钮置灰状态
      $('.example_content .btn_next').removeClass('btn_next_gray')
    }
    // 如果是第一页 添加上一页按钮置灰状态
    if(songId == 0) {
      $(this).addClass('btn_prev_gray')
    }
  })
  // 点击排行榜页 - 翻页 - 下一页 榜单
  $('.example_content').on('click','.btn_next',function(){
    if(songId < songList.length-1) {
      songId = songId + 1
      // 更改榜单数据 - 传入当前榜单列表和当前songList id
      exampleListRender(songList,songId)
      // 移除上一页按钮置灰状态
      $('.example_content .btn_prev').removeClass('btn_prev_gray')
    }
    // 如果是最后一页 添加下一页按钮置灰状态
    if(songId == songList.length-1) {
      $(this).addClass('btn_next_gray')
    }
  })
  /* Data: 2020-05-28; Edit: Hani; Describe: 添加按钮置灰; End */


  // 显示页面榜单页
  showSection('.page_example')

  
  // 点击排行榜页 - 不服在唱 - 回到歌曲选择页
  $('.example_content').on('click','.btn_restart',function(){
    // 显示页面
    showSection('.page_select')
    home()
  })
}

// 更换榜单
function exampleListRender(exampleList,songId) {
  // 获取当前是哪首歌的榜单
  console.log(exampleList[songId]);
  
  // 改变榜单标题
  $('.example_list__title').text((exampleList[songId].jcName ? exampleList[songId].jcName : exampleList[songId].name) + exampleList[songId].songName)

  // 清空榜单数据
  $('.example_content .list_wrap').empty();
  // 获取排行数据
  let  rankingList =  exampleList[songId].ranking
  // 更改榜单数据
  for (let i = 0; i < rankingList.length; i++) {
    let $item = `<div class="example_list__item  example_list__item${rankingList[i].id + 1}"">
    <span>${String(rankingList[i].id + 1).length > 1 ? rankingList[i].id  + 1 : '0' + (rankingList[i].id  + 1)}</span>
    <span class="name">${rankingList[i].name}</span>
    <span>${rankingList[i].score}</span>
    </div>`;
    $('.example_content .list_wrap').append($item)
  }
}

// 点击磅单页返回按钮 - 返回落地页
$('.example_return').on('click',function() {
  showSection('.page_end')
})
// 存储当前城市 设置为默认城市 ['beijing','shanghai','guangzhou','xiamen','quanguo']
var currentCity = 'shanghai'

// 存储单前播放歌单
var currentAlbum = []

// 存储播放器实例
var player

// 加载页加载完成时回调
function preloadComplete() {
  // 设置默认城市
  setCity(currentCity)
}

// 滑屏组件初始化
var myslider = new iSlider({
  wrap: '.wrap',
  item: '.item',
  lastLocate: false,
  preventMove: false,
  onslide: function(index) {
    console.log('当前滑屏页面index: ', index)
    // 由于islider会将页面html移除，所以需要针对每一屏专门做重绘处理
    if (index == 0) {
      // 进入第一页的时候重绘canvas动画
      for (var key in cityCanvas) {
        if (cityCanvas.hasOwnProperty(key)) {
          var canvasObj = cityCanvas[key]
          canvasObj.refreshCanvas()
        }
      }
      if (currentCity) {
        // 设置城市信息
        setCity(currentCity)
      }
    } else if (index == 1) {
      // 还原滚动区域位置
      $('#box_middle').css('transform', 'translateY(0)')
      // 初始化播放器
      initPlayer()
    } else if (index == 2) {
      // 更新播放中的歌曲信息
      player.refreshSongInfo()
      // 播放酒瓶动画
      setBottleAni()
      setPlayerCity()
    }

    if (index !== 1) {
      // 解锁滚动限制
      myslider.lockPrev = false
      myslider.lockNext = false
    }
    
    if (index != 0) {
      // 还原mv信息
      $('.city_mv_wrapper').removeClass('active')
      $('#mvVideo')[0] && $('#mvVideo')[0].load()
    }
  }
})

// 不同城市信息，包含城市名，城市mv路径，城市歌单
var cityData = {
  beijing: {
    // 城市名
    name: '北京',
    // 播放器页城市名
    city: '北京BEIJING',
    // 播放器页酒吧地址
    barAddress: '北京酒吧地址',
    // mv地址
    videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    // 城市歌单
    albumList: [
      {
        // 单个歌单id
        id: 1,
        // 歌单歌曲列表
        songList: [
          {
            // 歌曲id
            id: 1,
            // 歌曲名称
            name: '北京欢迎你',
            // 歌曲封面图
            cover:
              'http://y.gtimg.cn/music/photo_new/T002R300x300M000001bA5lD30v3ir.jpg',
            // 歌曲播放地址
            src:
              'http://dl.stream.qqmusic.qq.com/M500004OixdJ0BZ3fg.mp3?vkey=9DE384BD107542AA358322AD0D7605CBADA3BC1CADD8E15DD80AB0BD25020176D7870F1C086C28F730F073377E5667801E63A44A6E61634F&guid=5150825362&fromtag=1',
            // 歌曲总时长
            duration: 437,
            // 开始播放的副歌时间点
            highTime: 75
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          },{
            id: 6,
            name: '再见只是陌生人 （DJ版）',
            cover:'http://y2002-img.qq190.net/Users/sheetcovers/496150/7c3151523bf343efb58430ab1ef43fcf.jpg',
            src: 'http://mp3.jiuku.9ku.com/upload/128/2018/02/27/876246.mp3',
            duration: 240,
            highTime: 29.5

          }
        ]
      },
      {
        id: 2,
        songList: [
          {
            id: 1,
            name: '不说再见',
            cover:
              'http://p1.music.126.net/GHspaji-l6W7rBT0e4PFrg==/2529976259373492.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=399354289.mp3',
            duration: 296,
            highTime: 108
          },
          {
            id: 2,
            name: '后来',
            cover:
              'http://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=254574.mp3',
            duration: 341,
            highTime: 130
          }
        ]
      },
      {
        id: 3,
        songList: [
          {
            id: 1,
            name: '最近 (正式版)',
            cover:
              'http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=1357825630.mp3',
            duration: 217,
            highTime: 43
          }
        ]
      },
      {
        id: 4,
        songList: [
          {
            id: 1,
            name: 'Bye Bye Bye',
            cover:
              'http://p1.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=4164331.mp3',
            duration: 200,
            highTime: 43
          }
        ]
      },
      {
        id: 5,
        songList: [
          {
            id: 1,
            name: '上海滩',
            cover:
              'http://p1.music.126.net/0jg4yO62vvgfzx8VZLbQyw==/109951163020567754.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=320950.mp3',
            duration: 193,
            highTime: 18
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          }
        ]
      }
    ]
  },
  shanghai: {
    name: '上海',
    city: '上海SHANGHAI',
    barAddress: 'ARKHAM巨鹿路168号 021－62116371',
    videoSrc: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    albumList: [
      {
        id: 1,
        songList: [
          {
            id: 1,
            name: '上海滩',
            cover:
              'http://p1.music.126.net/0jg4yO62vvgfzx8VZLbQyw==/109951163020567754.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=320950.mp3',
            duration: 193,
            highTime: 18
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          }
        ]
      },
      {
        id: 2,
        songList: [
          {
            id: 1,
            name: '不说再见',
            cover:
              'http://p1.music.126.net/GHspaji-l6W7rBT0e4PFrg==/2529976259373492.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=399354289.mp3',
            duration: 296,
            highTime: 108
          },
          {
            id: 2,
            name: '后来',
            cover:
              'http://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=254574.mp3',
            duration: 341,
            highTime: 130
          }
        ]
      },
      {
        id: 3,
        songList: [
          {
            id: 1,
            name: '最近 (正式版)',
            cover:
              'http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=1357825630.mp3',
            duration: 217,
            highTime: 43
          }
        ]
      },
      {
        id: 4,
        songList: [
          {
            id: 1,
            name: 'Bye Bye Bye',
            cover:
              'http://p1.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=4164331.mp3',
            duration: 200,
            highTime: 43
          }
        ]
      }
    ]
  },
  guangzhou: {
    name: '广州',
    city: '广州BEIJING',
    barAddress: '广州酒吧地址',
    videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    albumList: [
      {
        id: 1,
        songList: [
          {
            id: 1,
            name: '广州 - 光辉岁月',
            cover:
              'http://p2.music.126.net/JOJvZc_7SqQjKf8TktQ_bw==/29686813951246.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=346576.mp3',
            duration: 298,
            highTime: 54
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          }
        ]
      },
      {
        id: 2,
        songList: [
          {
            id: 1,
            name: '不说再见',
            cover:
              'http://p1.music.126.net/GHspaji-l6W7rBT0e4PFrg==/2529976259373492.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=399354289.mp3',
            duration: 296,
            highTime: 108
          },
          {
            id: 2,
            name: '后来',
            cover:
              'http://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=254574.mp3',
            duration: 341,
            highTime: 130
          }
        ]
      },
      {
        id: 3,
        songList: [
          {
            id: 1,
            name: '最近 (正式版)',
            cover:
              'http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=1357825630.mp3',
            duration: 217,
            highTime: 43
          }
        ]
      },
      {
        id: 4,
        songList: [
          {
            id: 1,
            name: 'Bye Bye Bye',
            cover:
              'http://p1.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=4164331.mp3',
            duration: 200,
            highTime: 43
          }
        ]
      }
    ]
  },
  xiamen: {
    name: '厦门',
    city: '厦门BEIJING',
    barAddress: '厦门酒吧地址',
    videoSrc: 'https://chimee.org/vod/1.mp4',
    albumList: [
      {
        id: 1,
        songList: [
          {
            id: 1,
            name: '厦门 - 海阔天空',
            cover:
              'http://p1.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=347230.mp3',
            duration: 326,
            highTime: 68
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          }
        ]
      },
      {
        id: 2,
        songList: [
          {
            id: 1,
            name: '不说再见',
            cover:
              'http://p1.music.126.net/GHspaji-l6W7rBT0e4PFrg==/2529976259373492.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=399354289.mp3',
            duration: 296,
            highTime: 108
          },
          {
            id: 2,
            name: '后来',
            cover:
              'http://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=254574.mp3',
            duration: 341,
            highTime: 130
          }
        ]
      },
      {
        id: 3,
        songList: [
          {
            id: 1,
            name: '最近 (正式版)',
            cover:
              'http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=1357825630.mp3',
            duration: 217,
            highTime: 43
          }
        ]
      },
      {
        id: 4,
        songList: [
          {
            id: 1,
            name: 'Bye Bye Bye',
            cover:
              'http://p1.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=4164331.mp3',
            duration: 200,
            highTime: 43
          }
        ]
      }
    ]
  },
  quanguo: {
    name: '全国',
    city: '全国BEIJING',
    barAddress: '全国酒吧地址',
    videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    albumList: [
      {
        id: 1,
        songList: [
          {
            id: 1,
            name: '哎呀呀',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180615/20180615164413946823.jpg',
            src:
              'http://fs.open.kugou.com/d2240b1dcf95aab1712b7581b8db88a0/5d23fe66/G133/M02/10/1B/xQ0DAFsjf8mAAmomACq7MetTyzo072.mp3',
            duration: 174,
            highTime: 16
          },
          {
            id: 2,
            name: '去年夏天（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20180511/20180511024413357312.jpg',
            src:
              'http://fs.open.kugou.com/e6218887f06d8039d37cc7709826b01a/5d23fb06/G132/M02/05/05/ZJQEAFsehBCAR60OAENRLWX0_lo298.mp3',
            duration: 275,
            highTime: 62.5
          },
          {
            id: 3,
            name: '我以朋友的名义（DJ版）',
            cover:
              'http://imge.kugou.com/stdmusic/150/20170720/20170720190010484150.jpg',
            src:
              'http://fs.open.kugou.com/f0a6f6b3c29d0fcd689a904b28205152/5d23fc6d/G107/M03/1E/11/S5QEAFlwjEyAD7PbAC4Zr_wgGGw525.mp3',
            duration: 188,
            highTime: 25
          },
          {
            id: 4,
            name: '不仅仅是喜欢（DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src:
              'http://fs.open.kugou.com/d0540585cb0f2cdd02518a8232e90603/5d23fcc9/G129/M09/0E/1D/wQ0DAFraqUGAN6QEADEfOwLy41s831.mp3',
            duration: 201,
            highTime: 52
          },
          {
            id: 5,
            name: '可能否 （DJ版）',
            cover:
              'http://singerimg.kugou.com/uploadpic/softhead/150/20140714/20140714150846646607.jpg',
            src: 'http://music.163.com/song/media/outer/url?id=1312932836.mp3',
            duration: 2430,
            highTime: 51
          }
        ]
      },
      {
        id: 2,
        songList: [
          {
            id: 1,
            name: '不说再见',
            cover:
              'http://p1.music.126.net/GHspaji-l6W7rBT0e4PFrg==/2529976259373492.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=399354289.mp3',
            duration: 296,
            highTime: 108
          },
          {
            id: 2,
            name: '后来',
            cover:
              'http://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=254574.mp3',
            duration: 341,
            highTime: 130
          }
        ]
      },
      {
        id: 3,
        songList: [
          {
            id: 1,
            name: '最近 (正式版)',
            cover:
              'http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=1357825630.mp3',
            duration: 217,
            highTime: 43
          }
        ]
      },
      {
        id: 4,
        songList: [
          {
            id: 1,
            name: 'Bye Bye Bye',
            cover:
              'http://p1.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=300x300',
            src: 'http://music.163.com/song/media/outer/url?id=4164331.mp3',
            duration: 200,
            highTime: 43
          }
        ]
      }
    ]
  }
}

/**
 * 切换城市信息，关于城市选择页的信息变化都在这里统一处理
 */
function setCity(city) {
  var name = cityData[city].name
  currentCity = city
  // 设置其他城市为未选中
  $('.city_tab_item.active').removeClass('active')
  // 设置城市项选中状态
  $('.city_tab_item[data-city=' + city + ']').addClass('active')
  // 替换城市名称
  $('.city_name').text(name)
  // 播放城市选择动画
  cityCanvas[city].play()

  // 改变底部图片文案
  $('.text_img_box').removeClass('beijing shanghai guangzhou xiamen quanguo')
  $('.text_img_box').addClass(city)
  // 改变城市文案
  $('.view_more').text('下滑查看更多' + name + '歌单')

  
  // 更新歌单页为最新城市歌单
  setAlbumPageInfo(cityData[city].albumList)
  // 还原mv信息
  $('.city_mv_wrapper').removeClass('active')
  if($('#mvVideo')[0]){
    $('#mvVideo')[0].src=cityData[city].videoSrc
    $('#mvVideo')[0].load()
  }
}

function setPlayerCity(){
  
  $('.bottom_name').text(cityData[currentCity].city)
  $('.bottom_site').text(cityData[currentCity].barAddress)
  
}

/**
 * 接受一个歌单数据，渲染歌单页内容
 * @param {Array} albumList 
 */
function setAlbumPageInfo(albumList) {
  // 指定当前歌单
  currentAlbum = albumList
  // 通过 arttemplate 渲染 歌单列表 html代码
  var albumHtml = template('songHtml', {
    // 判断如果未传入地区歌单 默认上海歌单
    albumList: albumList == '' ? ShAlbumList : albumList
  })
  // 将歌单列表代码 渲染到页面
  box_middle.innerHTML = albumHtml

}

/**
 * 音乐播放器类
 * @param {*} options
 */
var MusicPlayer = function(options) {
  this.songList = options.songList // 歌曲列表
  this.currentSong = 0 // 当前播放的下标
  this.clickNum = 0 // 用于判断是要播放还是暂停
  this.pattern = 0 // 播放模式 0 列表循环 1 单曲循环 2 随机播放
  this.currentTime = 0 // 当前播放时间
  this.touch = false // 是否按住小圆点
  this.listDom = '' //歌曲列表

  // 点击循环状态
  this.onChangeMode = options.onChangeMode || function() {}
  // 点击上一曲
  this.onPrev = options.onPrev || function() {}
  // 点击暂停时
  this.onPause = options.onPause || function() {}
  // 点击播放时
  this.onPlay = options.onPlay || function() {}
  // 点击下一曲
  this.onNext = options.onNext || function() {}
  // 点击列表
  this.onList = options.onList || function() {}

  this.nextBtn = options.nextBtn
  this.prevBtn = options.prevBtn
  this.playBtn = options.playBtn
  this.modeBtn = options.modeBtn

  this.playingSong = null

  this.init()
}
MusicPlayer.prototype = {
  init: function() {
    this.initSong()
    this.handler()
  },

  initSong: function() {
    this.audio = new Audio()
    var self = this
    this.audio.onended = function() {
      // 圆盘停止转动
      $('.turntable_box').removeClass('rotate')
      if (self.pattern == 0) {
        console.log('列表循环 ==> 自动下一曲')
        self.clickNum = 1
        self.next(self.currentSong)
      } else if (self.pattern == 1) {
        console.log('单曲循环 ==> 自动下一曲')
      } else if (self.pattern == 2) {
        console.log('随机播放 ==> 自动下一曲')
        self.clickNum = 1
        self.next(self.currentSong)
      } else {
        self.pause()
      }
    }
    this.audio.ontimeupdate = function() {
      var currentTime = this.currentTime
      $('.lose_time').text(self.songTime(currentTime))
      self.progressbar(
        self.songList[self.currentSong].duration,
        currentTime,
        'progressbar',
        'lose_progressbar'
      )
    }
    // this.song = new Audio()
    // commandAudio.src = this.songList[this.currentSong].src
  },
  handler: function() {
    var self = this
    $(document)
      // 播放/暂停按钮
      .on('click', self.playBtn, function() {
        if (self.clickNum == 0) {
          self.play()
        } else {
          self.pause()
        }
      })
      // 上一首按钮
      .on('click', self.prevBtn, function() {
        self.prev()
      })
      // 下一首按钮
      .on('click', self.nextBtn, function() {
        self.next()
      })
      // 更换模式按钮
      .on('click', self.modeBtn, function() {
        // self.cha
        self.changeMode()
      })
      this.setDragEvent()
    
  },
  // 由于islider会删除页面节点,拖拽事件需要反复绑定
  setDragEvent(){
    var self = this
    if ($('.progressbar_dot')[0]) {
      if($('.progressbar_dot').data('drag')){
        return
      }
      console.log(1.1)
      $('.progressbar_dot').data('drag','true')
      // 滚动条拖拽
      new dragJS($('.progressbar_dot')[0], {
        parent: $('.progressbar')[0],
        onMove: function(point) {
          self.touch = true
          $('.lose_progressbar').css('width', point.percent + '%')
        },
        onMoveStart: function(point) {
          $('.lose_progressbar').css('width', point.percent + '%')
        },
        onMoveEnd: function(point) {
          // console.log((point.percent / 100) * self.audio.duration - 1)
          // self.pause()
          self.audio.currentTime =
            (point.percent / 100) * self.audio.duration - 1
          // self.play()
          self.touch = false
        }
      })
    }
  },
  progressbar: function(songTime, loseTime, progressbarDom, dotDom) {
    // alert(songTime,loseTime,progressbarDom,dotDom)
    // 已经播放的进度
    var dotDom = document.getElementsByClassName(dotDom)[0]
    // 进度条
    var progressbarDom = document.getElementsByClassName(progressbarDom)[0]
    if (!progressbarDom) {
      return
    }
    progressbarDom = progressbarDom.clientWidth
    // 过去的时间 * 长度 / 总时间
    var x = (loseTime * progressbarDom) / songTime
    // console.log('宽度', progressbarDom)
    // console.log('left', x)
    // if (x + dotDom.clientWidth > progressbarDom) {
    //     x = progressbarDom - dotDom.clientWidth
    // }
    // var x = x / 100
    if (this.touch == true) {
      return
    }
    dotDom.style.width = x + 'px'
  },
  // 秒 换算分钟
  songTime: function(songSecond, totalTime) {
    // 获取需要替换文案的dom
    var totalTimeDom = document.getElementsByClassName(totalTime)
    // 换算分钟
    let m = (songSecond / 60) | 0
    // 如果小于10 补缺
    if (m < 10) {
      m = '0' + m
    }
    // 换算秒
    let s = songSecond % 60 | 0
    // 如果小于10 补缺
    if (s < 10) {
      s = '0' + s
    }
    // 输出换算好的时间
    var duration = m + ':' + s
    return duration
  },
  // 循环状态
  changeMode: function() {
    this.pattern = (this.pattern + 1) % 3
    if (this.pattern == 1) {
      this.audio.loop = true
    } else {
      this.audio.loop = false
    }
    $(this.modeBtn)
      .removeClass('mode1 mode2 mode3 mode0')
      .addClass('mode' + this.pattern)
    console.log(
      '当前播放模式： ',
      ['列表循环', '单曲循环', '随机播放', '顺序播放'][this.pattern]
    )
    this.onChangeMode()
  },

  // 暂停
  pause: function() {
    // 暂停
    this.audio.pause()
    //当前播放状态  0 ==> 暂停
    this.clickNum = 0
    // 播放按钮 状态
    $(this.playBtn).addClass('pause')
    this.onPause()
  },
  // 设置播放歌曲
  setSong(songId) {
    var self = this
    
    var song = this.songList[songId]
    if(song==this.playingSong){
      return
    }
    this.currentSong = songId

    // console.log('切换歌曲', song)
    this.playingSong = song
    // 切换歌曲地址
    this.audio.src = song.src
    // 从副歌开始播放
    this.audio.currentTime = song.highTime
    this.refreshSongInfo()
  },
  refreshSongInfo() {
    this.setAlbum(this.songList || currentAlbum[0].songList)
    this.setDragEvent()

    var song = this.playingSong
    if (!song) {
      return
    }
    // 更新唱片图
    $('.turntable_img').attr('src', song.cover)
    // 更新歌曲总时长
    $('.total_time').text(this.songTime(song.duration))
    // 更新播放音乐的标题
    $('.playmusic_music_name').text(song.name)


    if (this.clickNum == 1) {
      $(this.playBtn).removeClass('pause')
      // 圆盘转动
      $('.turntable_box').addClass('rotate')
    } else {
      $(this.playBtn).addClass('pause')
    }
  },
  // 播放
  play: function(songId, isChangeList) {
    
    // 如果songId与当前在播放的songId不一致，则切换歌曲播放
    if (isChangeList || songId != this.currentSong) {
      if (songId === undefined) {
        songId = this.currentSong
      }
      // 设置新的要播放的歌曲
      this.setSong(songId)
    }

    //当前播放状态  1 ==> 播放
    this.clickNum = 1
    $(this.playBtn).removeClass('pause')
    // 播放当前链接音乐
    this.audio.play()
    this.onPlay()
  },
  // 下一曲
  next: function() {
    var currentSong = this.currentSong
    var songId
    // 如果是随机播放
    if (this.pattern == 2) {
      // 取 0 到 列表长度-1 的随机数
      var nextSongId = Math.floor(Math.random() * this.songList.length)
      // 如果取到的值和上一次相等就执行 如果不相同就跳过
      while (currentSong == nextSongId) {
        nextSongId = Math.floor(Math.random() * this.songList.length)
      }
      // 将随机下标赋值给播放id
      songId = nextSongId
    } else {
      // 判断如果当前下标大于列表长度时 跳转到第一首
      if (currentSong == this.songList.length - 1) {
        songId = 0
      } else {
        songId = currentSong + 1
      }
    }
    this.play(songId)
  },
  // 上一曲
  prev: function(songId) {
    var currentSong = this.currentSong
    var songId

    // 如果是随机播放
    if (this.pattern == 2) {
      // 取 0 到 列表长度-1 的随机数
      var nextSongId = Math.floor(Math.random() * this.songList.length)
      // 如果取到的值和上一次相等就执行 如果不相同就跳过
      while (currentSong == nextSongId) {
        nextSongId = Math.floor(Math.random() * this.songList.length)
      }
      // 将随机下标赋值给播放id
      songId = nextSongId
    } else {
      // 判断如果当前下标小于0时 跳转到最后一首
      if (currentSong == 0) {
        songId = this.songList.length - 1
      } else {
        songId = currentSong - 1
      }
    }
    this.play(songId)

    this.onPrev()
  },
  duration: function() {},
  // 歌曲列表
  songListDom: function(songList) {
    // 将列表清空
    this.listDom = ''
    // 渲染当前数组歌曲列表
    for (let i = 0; i < songList.length; i++) {
      this.listDom += '<li class="list_item">' + songList[i].name + '</li>'
      music_list.innerHTML = this.listDom
    }
  },

  setAlbum: function(songList) {
    if (songList) {
      this.songList = songList
    }
  }
}

// 初始化播放器
function initPlayer() {
  // 已初始化播放器
  if (player) {
    // 如果已初始化，则刷新播放器数据状态
    player.refreshSongInfo()
    return
  }
  player = new MusicPlayer({
    songList: [],

    nextBtn: '.nextsong_box',
    prevBtn: '.prev_box',
    playBtn: '.play_box',
    modeBtn: '.schema_box',
    // 点击循环状态后
    onChangeMode() {},
    // 点击上一曲时
    onPrev() {
    },
    // 点击暂停时
    onPause() {
      // 圆盘停止转动
      $('.turntable_box').removeClass('rotate')
    },
    // 点击播放时
    onPlay() {
      // 圆盘转动
      $('.turntable_box').addClass('rotate')

      myslider.next()
      
    },
    // 点击下一曲时
    onNext() {
    }
  })

  // 设置播放器默认歌单
  player.setAlbum(currentAlbum[0].songList)
}

$('.wrap')
  // MV播放按钮点击事件
  .on('click', '.city_mv_btn_play', function() {
    $('.city_mv_wrapper').addClass('active')
    $('#mvVideo')[0].play()
  })
  // 城市选择页 点击点赞
  .on('click', '.city_like', function(e) {
    console.log('当前点赞的城市', currentCity)
    // 暂停点赞动画播放
    cityCanvas.Like.stop()
  })
  // 选择城市
  .on('click', '.city_tab_item', function() {
    var $this = $(this)
    var city = $this.data('city')
    if (!$this.is('.active')) {
      // 设置城市信息
      setCity(city)
    }
  })
  // 歌单页面，点击查看更多 按钮
  .on('click', '.music_more', function(e) {
    var $this = $(this)
    var $text = $this.find('.music_more_btn')
    if ($this.is('.active')) {
      $this.removeClass('active')
      $(this)
        .prev()
        .removeClass('show')
      $text.text('查看更多')
    } else {
      $this.addClass('active')
      $(this)
        .prev()
        .addClass('show')
      $text.text('收起')
    }
  })
  // 歌单页面，点击收藏歌单
  .on('click', '.collect', function(e) {
    // 歌单索引
    var index = $(this).data('index')
    console.log('点击收藏歌单', currentAlbum[index])
    // 添加/删除收藏状态类 .collected
    if($(this).find('.collect_img').is(".collected")){
      $(this).find('.collect_img').removeClass('collected')
    }else{
      $(this).find('.collect_img').addClass('collected')
    }
    
  })
  // 歌单页面 点击单首歌曲
  .on('click', '.music_item', function() {
    // myslider.next()
    // 歌单索引
    var aIndex = $(this).data('aindex')
    // 歌曲索引
    var sIndex = $(this).data('sindex')
    console.log('当前歌曲所在歌单', currentAlbum[aIndex].songList)

    // 传入数组
    player.setAlbum(currentAlbum[aIndex].songList)
    // 改变播放状态
    player.clickNum = 1
    player.play(sIndex, true)
    player.songListDom(currentAlbum[aIndex].songList)
  })
  // 歌单页面  点击单个歌单专辑封面
  .on('click', '.picture_wrap', function(e) {
    $('.picture_header_stop').removeClass('picture_header_play')
    $(this)
      .children('.picture_header_stop')
      .addClass('picture_header_play')

    // 歌单索引
    var currentIndex = $(this).data('index')

    // 传入歌单数据
    player.setAlbum(currentAlbum[currentIndex].songList)
    // 开始播放歌单中的第一首歌曲
    player.play(0, true)
    player.songListDom(currentAlbum[currentIndex].songList)
  })
  // 音乐播放器页面，点击返回按钮
  .on('click', '.backtrack_box', function(e) {
    myslider.prev()
  })

$('#mvVideo')[0].addEventListener('ended', function() {
  $('.city_mv_wrapper').removeClass('active')
  $('#mvVideo')[0].load()
  alert('播放结束')
})

/**
 * 播放酒瓶动画
 */
function setBottleAni() {
  var baseWidth = 750
  var baseHeight = 1334
  var windowHeight = window.innerHeight * 2
  var windowWidth = window.innerWidth * 2
  var ratio = windowWidth / baseWidth
  var ratioH = windowHeight / baseHeight
  // const { Scene, Sprite } = spritejs
  var Scene = spritejs.Scene
  var Sprite = spritejs.Sprite
  var scene = new Scene('#beerWrapper', {
    viewport: ['auto', 'auto'],
    resolution: [windowWidth, windowHeight],
    stickMode: 'width',
    stickExtend: true
  })
  var layer = scene.layer()
  // 酒瓶数据，十个酒瓶
  var bottleData = [
    // {
    //   x: 405, // 中间停留阶段的x坐标
    //   y: 850, // 中间停留阶段的y坐标
    //   size: 210, // 酒瓶大小
    //   rotate: 0, // 酒瓶旋转角度
    //   delay: 800 // 酒瓶动画时间延迟
    // },
    {
      x: 270,
      y: 670,
      size: 240,
      rotate: 0,
      delay: 600
    },
    {
      x: 480,
      y: 585,
      size: 180,
      rotate: 0,
      delay: 900
    },
    // {
    //   x: 140,
    //   y: 495,
    //   size: 190,
    //   rotate: 0,
    //   delay: 200
    // },
    {
      x: 65,
      y: 485,
      size: 210,
      rotate: 0,
      delay: 700
    },
    {
      x: 340,
      y: 465,
      size: 250,
      rotate: 0,
      delay: 1000
    },
    {
      x: 670,
      y: 430,
      size: 170,
      rotate: 0,
      delay: 100
    },
    // {
    //   x: 490,
    //   y: 345,
    //   size: 170,
    //   rotate: 0,
    //   delay: 400
    // },
    {
      x: 565,
      y: 285,
      size: 240,
      rotate: 0,
      delay: 300
    },
    {
      x: 240,
      y: 225,
      size: 240,
      rotate: 0,
      delay: 0
    }
  ]
  var img = canvasPreloadQueue.getResult('winebottle')
  // 依次添加酒瓶
  bottleData.forEach(v => {
    var bottle = new Sprite(img)
    v.x = ratio*(v.x+10)
    v.y = ratioH*(v.y+80)
    v.size *= ratio
    bottle.attr({
      anchor: [0.5, 0.5],
      pos: [v.x, 0],
      size: [v.size, v.size]
    })
    // 酒瓶动画阶段一
    var dropAnim = bottle.animate(
      [
        { y: -400, rotate: 0 },
        { y: v.y, rotate: v.rotate },
        { y: v.y - 40, rotate: v.rotate },
        { y: v.y + 20, rotate: v.rotate },
        { y: v.y - 30, rotate: v.rotate },
        { y: v.y, rotate: v.rotate }
      ],
      {
        delay: v.delay / 2,
        duration: 2500,
        fill: 'both',
        easing: 'ease-in'
      }
    )
    // 阶段一动画结束后回调
    dropAnim.finished.then(function() {
      // 阶段二动画
      var exitAnim = bottle.animate(
        [
          { y: v.y, rotate: v.rotate },
          { y: windowHeight + 300, rotate: v.rotate }
        ],
        { duration: 200, fill: 'forwards', easing: 'ease' }
      )
      exitAnim.finished.then(function() {
        // 阶段二动画结束后销毁动画对象
        bottle.remove()
      })
    })
    // 将动画对象添加到画布中
    layer.append(bottle)
  })
}

// 歌单滚动区域处理
// 滚动区域位移
var scrollT = 0
// 滚动内容部分高度
var scrollH
// 监听滚动区域的拖拽时间
var scrollDrag = new dragJS($('#box_middle')[0], {
  parent: $('#scrollView')[0],
  onMoveStart: function(point) {
    scrollH =
      $('#box_middle')[0].clientHeight - $('#scrollView')[0].clientHeight
    if (scrollH > 10) {
      myslider.lockPrev = true
      myslider.lockNext = true
    }
    if (scrollT == 0) {
      myslider.lockPrev = false
    }
    if (scrollT == -scrollH) {
      myslider.lockNext = false
    }
  },
  onMove: function(point) {
    scrollT += point.oy
    scrollT = Math.min(0, Math.max(scrollT, -scrollH))
    $('#box_middle').css('transform', 'translateY(' + scrollT + 'px)')
  },
  onMoveEnd: function(point) {
    if (scrollT == 0) {
      myslider.lockPrev = false
    }
    if (scrollT == -scrollH) {
      myslider.lockNext = false
    }
  }
})

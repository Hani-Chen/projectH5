$(function () {
  // 歌单列表
  let songList = [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '111222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ]

  for (let i = 0; i < songList.length; i++) {
    const element = songList[i]
    let $item = `<div class="item_wrap">
    <div class="item_name" data-songUrl="${element.songUrl}">
      <div class="serial">${element.id}</div>
      <div class="name_wrap">
        <div class="song_name">${element.songName}</div>
        <div class="singer_name">${element.name}</div>
      </div>
    </div>
    <!-- 播放按钮 -->
    <div class="item_icon" data-songID="${element.songID}"></div>
  </div>`
    $('.list_wrap').append($item)
  }

  // 点击单个歌单播放按钮 - 切换播放状态（播放音乐）
  $('.list_wrap').on('click', '.item_icon', function (event) {
    // 移除选中状态
    $('.item_wrap').removeClass('active')
    // 改变当前元素选中状态
    $(this).parents('.item_wrap').addClass('active')
    //  这里获取到当前歌曲的songUrl - 并改变按钮链接
    $('.poster > a').attr('href',$(this).parents('.item_wrap').find('.item_name').attr('data-songUrl'))

    // 这里改变按钮状态
    if (!$(this).hasClass('active')) {
      $('.item_icon').removeClass('active')
      // 改变播放icon状态
      $(this).addClass('active')
      /* 这里可以直接获取到列表中对应的SongId */
      console.log(`这里是当前元素的SongId:${$(this).attr('data-songID')}`)
      /* 这里放置播放音乐事件 */
    } else {
      // 改变播放icon状态
      $(this).removeClass('active')
      /* 这里放置暂停音乐事件 */
    }
  })

  // 点击单个歌单（选择音乐）
  $('.list_wrap').on('click', '.item_name', function () {
    // 移除选中状态
    $('.item_wrap').removeClass('active')
    // 改变当前元素选中状态
    $(this).parents('.item_wrap').addClass('active')
    //  这里获取到当前歌曲的songUrl - 并改变按钮链接
    $('.poster > a').attr('href', $(this).attr('data-songUrl'))

    $('.item_icon').removeClass('active')
    // 改变播放icon状态
    $(this).parents('.item_wrap').find('.item_icon').addClass('active')
    /* 这里可以直接获取到列表中对应的SongId */
    console.log(`这里是当前元素的SongId:${$(this).parents('.item_wrap').find('.item_icon').attr('data-songID')}`)
  })
})

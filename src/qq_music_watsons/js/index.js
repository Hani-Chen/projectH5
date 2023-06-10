/**
 * list[1] ==> 潮到冒泡对应歌单列表
 * list[2] ==> 佛系真香对应歌单列表
 * list[3] ==> 养生够汽对应歌单列表
 * list[4] ==> 零卡超燃对应歌单列表
 * list[6] ==> 盐值炸裂对应歌单列表
 * list[7] ==> 柠檬附体对应歌单列表
 * list[8] ==> 甜蜜暴击对应歌单列表
 * list[9] ==> 欧气十足对应歌单列表
 */
let list = {
  '1': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见111',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '2': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见222',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '3': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见333',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '4': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见444',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '6': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见666',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '7': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见777',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '8': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见888',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ],
  '9': [
    {
      id: 1,
      name: '好妹妹',
      songName: '不说再见999',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112221',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;111',
    },
    {
      id: 2,
      name: '胡夏',
      songName: '那些年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112222',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;222',
    },
    {
      id: 3,
      name: '张震岳  ',
      songName: '再见',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112223',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;333',
    },
    {
      id: 4,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112224',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;444',
    },
    {
      id: 5,
      name: '五月天',
      songName: '干杯（Life Live）',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112225',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;555',
    },
    {
      id: 6,
      name: '李易峰版 ',
      songName: '再见再见-逃跑计划',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112226',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;666',
    },
    {
      id: 7,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112227',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;777',
    },
    {
      id: 8,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112228',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;888',
    },
    {
      id: 9,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '1112229',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;999',
    },
    {
      id: 10,
      name: 'SHE',
      songName: '你曾是少年',
      // songID ==> 可直接传入SongID 点击播放按钮可 直接获取到对应SongID
      songID: '11122210',
      // songUrl ==> 可直接传入songUrl 选中歌曲 直接获取到对应songUrl
      songUrl: 'JavaScript:;1000',
    },
  ]
}

/* 定义兑换码 - 后面赋值这里只是定义 */
let cdkey = ''

/* 配置 - 开喝mojito跳转链接 */
let drinkLink = 'JavaScript:;111'
/* 赋值 - 开喝mojito跳转链接到页面中 */
$('.start_drink').attr('href',drinkLink)


/* 页面中文字滚动 */
class TextRoll {
  /**
   * demo ==> 需要滚动的元素
   * rollValue ==> 滚动的初始值
   * intervalRoll ==> 创建定时器变量
   */
  constructor($demo) {
    this.demo = $demo;
    this.rollValue = 0;
    this.intervalRoll = null;
  }
  /* 开始滚动 */
  start() {
    if (this.intervalRoll) {
      this.stop()
    }
    let _this = this
    this.intervalRoll = setInterval(function () {
      _this.rollValue++
      $(_this.demo).css("transform", "translate3d(0," + (-_this.rollValue) + "px,0)");
      if ($(_this.demo).height() <= _this.rollValue) {
        _this.rollValue = 0
      }
    }, 20)
  }
  /* 停止滚动 */
  stop() {
    clearInterval(this.intervalRoll);
  }
}

/* 抽奖次数 */
let limit = 999

/**
 * 按钮可点击的状态
 * 0 ==> 可点击
 * 1 ==> 不可点击
 */
let status = 0

/**
 * 抽奖函数 
 * @param {Number} designated 指定的中奖数字
 */
function lotteryFun(designated) {
  // 如果传入指定中奖数值 和 按钮状态可点击时
  if (designated && status == 0) {
    // index ==> 抽奖奖品下标 numberTurns ==> 抽奖旋转圈数 speed ==> 抽奖旋转速度
    let index = 0; numberTurns = 0; speed = 0
    // 更改按钮点击状态
    status = 1
    function lottery() {
      speed++
      index++
      $('.active').removeClass('show')
      $('.active' + index).addClass('show')
      // 如果旋转到第六圈 并且 指定中奖数字  等于 当前抽奖奖品下标
      if (numberTurns > 6 && designated == index) {
        /* 这里开奖了 */

        // 1. 定时器清零
        speed = 0

        // 2. 显示获奖易拉罐
        $('.home_winning__item').addClass('show')
        $('.home_winning__item').addClass('item_' + index)

        // 3. 过1500毫秒显示中奖结果
        setTimeout(function () {
          // 4. 显示列表页
          showList(designated)
          // 5. 将抽奖按钮修改为可点击
          status = 0
          // 6. 抽奖圈数归零
          numberTurns = 0

          // 7. 移除已中奖的易拉罐
          $('.home_winning__item').removeClass('show')
          $('.home_winning__item').removeClass('item_' + designated)
          // 8. 移除中奖易拉罐的高亮状态
          $('.active' + designated).removeClass('show')
          // 9. 停止首页文字滚动
          homeRoll.stop()

        }, 1500)
      } else {
        setTimeout(lottery, speed)
      }
      if (index == 9) {
        index = 0
        numberTurns++
      }
    }
    setTimeout(lottery, 10)
  }
}

/* 恢复首页状态 */
function recoverHome() {
  $('.hand').addClass('ani')
  homeRoll.start()
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; Sart 1.0.0 */
  $('.loote').addClass('ani')
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; End 1.0.0 */
}

// 存储上一次中奖数字
let winningIndex
/**
 * 中奖显示逻辑函数
 * @param {Number} winningNumber 中奖数字
 */
function showList(winningNumber) {
  homeRoll.stop()
  /* 启动文字滚动 */
  listRoll.start()
  // 移除上一次的信息
  if (winningIndex) {
    $('.list_title').removeClass('list_title__' + winningIndex)
    $('.list_title__active').removeClass('list_title__' + winningIndex)
    $('.list_gridding').removeClass('gridding' + winningIndex)
    $('.list_decorate').removeClass('decorate' + winningIndex)
  }
  // 存储上一次中奖数字
  winningIndex = winningNumber

  // 传入的中奖数字 == 5 ？ 显示中奖弹窗
  if (winningNumber == 5) {
    // 这里传入兑换码
    cdkey = 'ABCDEFG123456'

    /* 启动弹窗文字滚动 */
    modalRoll.start()
    
    /* 传入中奖后的兑换码 */
    $('.prize_cdkey').val(cdkey)
    // 显示中奖弹窗
    $('#modalPrize').addClass('show')  
  }else {

    // 显示列表页头部标题
    $('.list_title').addClass('list_title__' + winningNumber)
    $('.list_title__active').addClass('list_title__' + winningNumber)
    // 显示列表页网格
    $('.list_gridding').addClass('gridding' + winningNumber)
    // 显示列表页小装饰
    $('.list_decorate').addClass('decorate' + winningNumber)


    // 创建列表
    let $item = ''
    $('.list_inner').empty()
    for (let i = 0; i < list[winningNumber].length; i++) {
      const listItem = list[winningNumber][i];
      $item += `<div class="item">
      <div class="item_text__wrap">
        <div class="item_title">${listItem.songName}</div>
        <div class="item_text">${listItem.name}</div>
      </div>
      <div class="item_icon_wrap">
        <!-- 收藏 -->
        <div class="item_collect"></div>
        <!-- 播放 -->
        <div class="item_play" data-songID="${listItem.songID}"></div>
      </div>
    </div>`
    }
    $('.list_inner').append($item)
    
    // 移除首页显示
    $('.section_home').removeClass('show')
    // 显示列表页
    $('.section_list').addClass('show')

  }
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; Start 1.0.0 */
  $('.loote').removeClass('ani')
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; End 1.0.0 */

}

/* 创建首页文字滚动 */
let homeRoll = new TextRoll('.home_textroll__item')
/* 创建列表页文字滚动 */
let listRoll = new TextRoll('.list_textroll__item')
/* 创建弹窗文字滚动 */
let modalRoll = new TextRoll('.modal_textroll__item')

/* Data: 2020-07-30; Edit: Hani; Describe: 修复第一次手指动画不执行; Sart 1.0.0 */
/* 启动首页动效 */
recoverHome()
/* Data: 2020-07-30; Edit: Hani; Describe: 修复第一次手指动画不执行; End 1.0.0 */

/* 点击抽奖 - 执行易拉罐抽奖动画 - 得出最终中奖的易拉罐 */
$('.home_loote').on('click', function () {
  // 1. 移除提示抽奖按钮动画
  $('.hand').removeClass('ani')
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; Sart 1.0.0 */
  $('.loote').addClass('ani')
  /* Data: 2020-07-30; Edit: Hani; Describe: 添加按钮横扫动画; End 1.0.0 */

  // 2. 获取中奖数字
  let number = Math.floor(Math.random() * 9 + 1)

  // 3. 判断：如果拥有抽奖次数不为零 和 按钮可以点击
  if (limit > 0 && status == 0) {
    // 4. 次数减一
    limit--
    // 5. 传入指定中奖数字 ==> 目前为[1 - 9] 的随机数
    lotteryFun(number)
  } else if (limit <= 0 && status == 0) {
    // 没有抽奖次数 和 按钮不可以点击 
    alert('抽奖次数不足')
  }
})

// /* 点击抽奖 - 必中奖专辑 - 测试专用 */
// $('.home_test').on('click', function () {
//   // 移除提示抽奖按钮动画
//   $('.hand').removeClass('ani')
//   // 指定中第5个
//   lotteryFun(5)
// })

/* 点击列表页单个收藏按钮 - 当前单个歌曲显示收藏icon */
$('.list_inner').on('click', '.item_collect',function () {
  // 这里改变按钮状态
  if (!$(this).hasClass('active')) {
    // 改变播放icon状态
    $(this).addClass('active')
    /* 这里放置音乐收藏后的事件 */
    console.log(`id为：${$(this).next().attr('data-songID')}的音乐被收藏了`);
  } else {
    // 改变播放icon状态
    $(this).removeClass('active')
    /* 这里放置暂停音乐事件 */
    console.log(`id为：${$(this).next().attr('data-songID')}的音乐被取消收藏了`);
  }
})

/* 点击列表页单个播放按钮 - 当前单个歌曲更改iocn状态 - 移除其他歌曲播放状态 */
$('.list_inner').on('click', '.item_play',function () {
  // 这里改变按钮状态
  if (!$(this).hasClass('active')) {
    $('.item_play').removeClass('active')
    // 改变播放icon状态
    $(this).addClass('active')
    /* 这里可以直接获取到列表中对应的SongId */
    console.log(`要播放SongId为:${$(this).attr('data-songID')}的歌曲了`)
    /* 这里放置播放音乐事件 */
  } else {
    // 改变播放icon状态
    $(this).removeClass('active')
    /* 这里放置暂停音乐事件 */
    console.log(`要暂停SongId为:${$(this).attr('data-songID')}的歌曲了`)
  }
})

/* 点击关闭按钮隐藏弹窗 */
$('.modal_close').on('click', function () {
  // 停止弹窗内文字滚动
  modalRoll.stop()
  // 移除弹窗显示类
  $(this).parents('.modal').removeClass('show')
  // 执行回复首页状态函数
  recoverHome()
})

/* 点击复制兑换码 - return返回的就是兑换码 */
let clipboard = new Clipboard('.btn_copy', {
  text: function() {
    return $('.prize_cdkey').val();
  }
});
// 复制成功回调
clipboard.on('success', function(e) {
  alert("复制成功");
});
// 复制失败回调
clipboard.on('error', function(e) {
  console.log(e);
});

/* 点击列表页的返回按钮 */
$('.list_return').on('click', function () {
  /* 启动列表页文字滚动 */
  listRoll.stop()
  // 移除首页显示
  $('.section_home').addClass('show')
  // 显示列表页
  $('.section_list').removeClass('show')
  // 执行回复首页状态函数
  recoverHome()
})

/* 点击列表页的分享按钮 */
$('.btn_share').on('click', function () {
  /* 调用QQ音乐分享 */
  // 获取本地分享图
  let sharImg = '../img/share.jpg'
  console.log(`获取需要分享的图片资源${sharImg}`);
})

/* 点击弹窗中兑换按钮 */
$('.btn_cdkey').on('click', function () {
  /* 调用兑换 */
  console.log(`获取兑换码${cdkey}`);
})



/* Data: 2020-08-07; Edit: Hani; Describe: 添加活动规则按钮和我的奖品按钮; Start 1.0.1 */

/* 点击首页活动规则 */
$('.home_btn__rule').on('click', function () {
  // 这里存放活动规则弹窗显示事件
})

/* 点击首页我的奖品 */
$('.home_btn__prize').on('click', function () {
  // 这里存放我的奖品弹窗显示事件
})

/* Data: 2020-08-07; Edit: Hani; Describe: 添加活动规则按钮和我的奖品按钮; End 1.0.1 */
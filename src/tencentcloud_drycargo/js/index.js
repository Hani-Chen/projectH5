let list = [
  {
    id: 1,
    title: '实用工具箱',
    text: '千帆计划如何帮助企业迈出第一步，解决“不会转、不敢转、不能转”。',
  },
  {
    id: 2,
    title: '实用工具箱',
    text: '认知重启，理解生态与共生演化，洞悉企业数字化转型根本问题。',
  },
  {
    id: 3,
    title: '实用工具箱',
    text: '纵览智能变革热点，从“数智创新”的企业案例寻找转型方案。',
  },
  {
    id: 4,
    title: '业绩增长包',
    text: '如何建立可触达、可激活、可转化的私域用户资产快速恢复生意？',
  },
  {
    id: 5,
    title: '业绩增长包',
    text: '如何通过业务决策数字化、业务流程在线化助力企业追回全年业绩？',
  },
  {
    id: 6,
    title: '业绩增长包',
    text: '如何构建数字化销售之旅，智能对话客户，助力企业提升交易？',
  },
  {
    id: 7,
    title: '业绩增长包',
    text: '如何通过社交化运营，提升销售与管理效率助力业绩增长？',
  },
  {
    id: 8,
    title: '业绩增长包',
    text: '如何借力电子合同，打通数字化转型的“最后一公里”？',
  },
  {
    id: 9,
    title: '业绩增长包',
    text: '如何打通营销各环节数据，搭建地产营销线上化的数字高速？ ',
  },
]
// 滑屏组件初始化
let myslider = new iSlider({
  wrap: '.wrap',
  item: '.item',
  lastLocate: false,
  preventMove: false,
  // noslide: [0],
  onslide: function(index) {
    console.log(index);
    if(index == 0) {
      // myslider.lockPrev = true
      $('.home-wrap .item-ani').addClass('animation')
      $('.inside-wrap .personage-item').removeClass('animation')
      $('.end-wrap .item-ani').removeClass('animation')
    }
    if (index == 1) {
      // myslider.lockPrev = true
      $('.home-wrap .item-ani').removeClass('animation')
      $('.inside-wrap .personage-item').addClass('animation')
      $('.end-wrap.end-wrap .item-ani').removeClass('animation')
    }
    if (index == 2) {
      $('.inside-wrap .personage-item').removeClass('animation')
      // myslider.lockPrev = false
      $('.home-wrap.end-wrap .item-ani').addClass('animation')
    }
  }
})

// // 点击首页按钮 - 切换下一页
// $('.home-wrap').on('click','.btn',function() {
//   myslider.next()
// })

$('.inside-wrap').on('click','.personage-item',function() {
  // console.log($(this).children().attr("data-url"));
  $('.modal-introduce-wrap .btn').attr("href",$(this).children().attr("data-url"))
  $('.modal-introduce-wrap .btn').attr("data-id",$(this).children().attr("data-id"))
  $('.modal-introduce-wrap .title').text(list[$(this).index()].title)
  $('.modal-introduce-wrap .text').text(list[$(this).index()].text)
  $('.modal-introduce').addClass('show')
})
$('.item-btn').bind("click",function(event){
  event.stopPropagation();    //  阻止事件冒泡
});

$('.modal-introduce').on('click','.modal-close',function() {
  $('.modal-introduce').removeClass('show')
})

// 统计下载课件
function statistics(index) {
  MtaH5.clickStat(`event${index}`)
}
// 统计弹窗中的按钮
$('.modal-introduce').on('click','.btn',function() {
  MtaH5.clickStat(`event${$(this).attr("data-id")}`)
})

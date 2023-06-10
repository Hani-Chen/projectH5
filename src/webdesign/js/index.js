/**
 * 按ID显示弹窗
 */
function showModal(id) {
  // 显示弹窗
  $('#' + id).addClass('show');
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show');
}
let domain = 'http://pdcproject.perpower.cn/';
// 导航数据 - 正式
let navUrl = domain + 'index.php/index/index/menudata';
// 导航数据测试
// let navUrl = 'http://rest.apizza.net/mock/5deef5367573dc49963eeabc092f4ed6/textTest'
/**
 * 请求导航数据
 */
$.ajax({
  type: 'GET',
  url: navUrl,
  dataType: 'json',
  success: (data) => {
    console.log(data);
    navRenderer(data)
  },
  error: function (err) {
    console.log(err)
  }
});

/**
 * 导航栏渲染
 * @param {json} data 导航栏数据
 */
function navRenderer(data) {
  var $navItem = '';
  for (var i = 0; i < data.length; i++) {
    $navItem += `<li class="page-nav-item ${i == 0 ? 'active' : ''}" data-id="${data[i].id}">${data[i].title}</li>`
  }
  $('.page-nav-list').append($navItem)
}


// 列表正式链接
let url = domain + 'index.php/index/index/pagedata';
// 列表测试链接
// let url = 'http://rest.apizza.net/mock/5deef5367573dc49963eeabc092f4ed6/imgTest';

// 当前id
let listId = 7;
// 默认页吗
let listPage = 1;
// 当前页面显示多少列
let lineNumber = 6;
// 实例对象
let example;
// 当前页面已加载的所有数据
let allDataList = [];
// 瀑布流父元素
let father = $('#fallsList');
// 当前滑动到第几页
let currentPage = 2;
// 加载时上锁
let loadingLock = false


/* 数据请求 */
function ajaxPromise(url, data, type = 'post') {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: type,
      dataType: 'json',
      url: url,
      data: {
        id: data.listId,
        page: data.listPage
      },
      success: function (res) {
        resolve(res);
      },
      error: function (res) {
        console.log("Error:");
        console.log(res);
        reject(res)
      }
    })
  });
}


class FallsProject {
  /**
   * 
   * @param {Array} data 瀑布流数据
   * @param {zeptoDom} listDemo 
   * @param {Number} lineNumber 
   */
  constructor(data, listDemo, lineNumber) {
    this.data = data
    this.listDemo = listDemo
    // 列表容器宽度
    this.listWidth = listDemo.width() || $(window).width();
    // 一列的元素数量
    this.lineNumber = lineNumber;
    this.allDataList = []
    this.start()
  }

  /* 初始化第一屏数据 */
  start() {
    /* 第一步 - 创建列数 */
    this.listDemo.empty()
    for (let i = 0; i < this.lineNumber; i++) {
      /* 创建demo */
      let demo = document.createElement('div');
      /* 添加class */
      demo.className = "line-item";
      /* 添加列宽 */
      /* append 到页面中 */
      this.listDemo.append(demo);
    }
    this.renderer(this.data)
  }
  /* 方法函数 - 获取最小值 */
  ArrayMin(arr) {
    // 存储最小值 - 默认数组第一个
    let minArrItem = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      arr.forEach(function (item, index) {
        if (item < minArrItem) {
          minArrItem = item;
          minIndex = index;
        }
      })
    }
    return {
      minIndex,
      minItem: minArrItem
    };
  }
  renderer(data) {
    /* 第二步 - 预加载data中的图片资源 */
    // 定义当前加载到哪一个
    let loadCount = 0
    // 获取列表总长度
    let imgArrLength = data.length;
    let _this = this


    // 循环加载图片
    for (let i = 0; i < data.length; i++) {

      // 创建img
      let img = new Image();
      // 添加链接
      img.src = data[i].showUrl;
      img.onerror = function () {
        loadCount++
        // 加载完成后
        if (loadCount === imgArrLength) {

          let demoHeaght = []

          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < _this.lineNumber; j++) {
              demoHeaght.push($('.line-item').eq(j).height())
              if (j == _this.lineNumber - 1) {
                $('.line-item').eq(_this.ArrayMin(demoHeaght).minIndex).append(`<div class="page-falls-item">
                  <img class="img" src="${data[i].showUrl ? data[i].showUrl : ''}" alt="">
                  <div class="text-wrap">
                    <div class="title">${data[i].desc}</div>
                  </div>
                  </div>`)
                demoHeaght = []
              }
            }
          }
          initEnd()
        }
      };
      // 执行加载事件
      img.onload = function () {
        // 改变加载数量
        loadCount++;
        // 加载完成后
        if (loadCount === imgArrLength) {
          let demoHeaght = []
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < _this.lineNumber; j++) {
              demoHeaght.push($('.line-item').eq(j).height())
              if (j == _this.lineNumber - 1) {
                $('.line-item').eq(_this.ArrayMin(demoHeaght).minIndex).append(`<div class="page-falls-item">
                  <img class="img" src="${data[i].showUrl ? data[i].showUrl : ''}" alt="">
                  <div class="text-wrap">
                    <div class="title">${data[i].desc}</div>
                  </div>
                  </div>`)
                demoHeaght = []
              }
            }
          }
          pageResize()
          initEnd()
          loadingLock = false
          $('.data-loading').removeClass('show')
          isLoading = false
        }
      };

    };
    this.allDataList = this.allDataList.concat(data)
    // this.allDataList.push(...data)
    // console.log(...data);
  }
  zoom(lineNumber) {
    this.lineNumber = lineNumber
    let demoHeaght = []
    // 破坏布局重新排列
    this.listDemo.empty()
    for (let i = 0; i < this.lineNumber; i++) {
      /* 创建demo */
      let demo = document.createElement('div');
      /* 添加class */
      demo.className = "line-item";
      /* 添加列宽 */
      /* append 到页面中 */
      this.listDemo.append(demo);
    }

    for (let i = 0; i < this.allDataList.length; i++) {
      for (let j = 0; j < this.lineNumber; j++) {
        demoHeaght.push($('.line-item').eq(j).height())
        if (j == this.lineNumber - 1) {
          $('.line-item').eq(this.ArrayMin(demoHeaght).minIndex).append(`<div class="page-falls-item">
            <img class="img" src="${this.allDataList[i].showUrl ? this.allDataList[i].showUrl : ''}" alt="">
            <div class="text-wrap">
              <div class="title">${this.allDataList[i].desc}</div>
            </div>
            </div>`)
          demoHeaght = []
        }
      }
    }
  }
}




ajaxPromise(url, {
  listId: listId,
  listPage: listPage
}).then(res => {
  console.log(res.data);
  showKongPage(res.data)
  example = new FallsProject(res.data, father, lineNumber)
  pageResize();
})





$(window).scroll(function () {
  if ($(document).scrollTop() <= 0) {
    // alert("滚动条已经到达顶部为0");
  }
  if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
    loadingList(listId)
  }
});

let isLoading = false;

function loadingList(listId) {
  ajaxPromise(url, {
    listId: listId,
    listPage: currentPage
  }).then(res => {
    console.log(res, currentPage);
    if (!isLoading) {
      isLoading = true;
      if (res.code != 1 && !loadingLock) {
        $('.data-loading').addClass('show')
        loadingLock = true
        example.renderer(res.data)
        currentPage++
      } else if (res.code != 0) {
        $('.data-loading').removeClass('show')
        $('.loading-text').text(res.msg)
      }
    }
  })
}

function pageResize() {
  if ($(window).width() <= 375) {
    example.zoom(1)
  } else if ($(window).width() <= 750) {
    example.zoom(2)
  } else if ($(window).width() <= 992) {
    example.zoom(3)
  } else if ($(window).width() <= 1200) {
    example.zoom(4)
  } else if ($(window).width() <= 1440) {
    example.zoom(4)
  } else if ($(window).width() <= 1600) {
    example.zoom(5)
  } else if ($(window).width() > 1600) {
    example.zoom(5)
  }
};
/* 监听页面大小 */
$(window).resize(function () {
  pageResize();
});

/* 点击单个tab - 显示不同数据 */
$('.page-nav-list').on('click', '.page-nav-item', function () {
  getItemPage($(this).data("id"));
  $(this).addClass('active');
})

function getItemPage(listId) {
  $('.loading-text').text('')
  hideModal('fallsList')
  hideModal('bannerWrap')
  $('.page-nav-wrap').addClass('hidden')
  $('.page-nav-wrap').removeClass('show')
  showModal('modalLoading')
  $('.page-nav-item').removeClass('active')
  ajaxPromise(url, {
    listId: listId,
    listPage: listPage
  }).then(res => {
    example = new FallsProject(res.data, father, lineNumber);
    currentPage = 2;
    scrollTo(0, 0);
    $('.page')[0].scrollTo(0, 0);
    showKongPage(res.data)
  })
};
/* 点击单个图片 - 显示大图 */
$('.page-falls-list').on('click', '.page-falls-item', function () {
  console.log($(this).find('.img').attr('src'));
  $('#popLookImg').attr('src', $(this).find('.img').attr('src'))
  showModal('modallookImg')
  $('.page').addClass('hidden');
  console.log($('.lookimg-inner').scrollTop());
  $('.lookimg-inner')[0].scrollTo(0, 0);
})
// 点击弹窗关闭
$('.close').on('click', function () {
  $(this).parents('.modal').removeClass('show')
  $('.page').removeClass('hidden');
})

/* 点击图片禁止冒泡 - 待优化 */
$('.lookimg-img').on('click', function (e) {
  e.stopPropagation()
})

/* 点击手机端 - 菜单 */
$('.page-nav-toggle').on('click', function () {
  $('.page-nav-wrap').toggleClass('show')
})


let bannerData = [{
    id: 0,
    url: 'https://www.baidu.com/',
    img: 'https://casinometvergunning.org/wp-content/uploads/sites/7/2020/04/Ted-header-1250x320.png',
    videoUrl: ''
  },
  {
    id: 1,
    url: 'https://www.baidu.com/',
    img: '',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 2,
    url: 'https://www.baidu.com/',
    img: 'https://i2.wp.com/wellnessdoctorrx.com/wp-content/uploads/2019/06/PushRX_BANNER-1250-x-320-_1_NICE.png?fit=1250%2C322&ssl=1',
    videoUrl: ''
  },
  {
    id: 3,
    url: 'https://www.baidu.com/',
    img: '',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 4,
    url: 'https://www.baidu.com/',
    img: 'https://www.mnp.ca/Style%20Library/mnp/images/EU%20Page/EU%20Technologo%201250x320.jpg',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  }
];

console.log(1);
let bannerUrl = domain + 'index.php/index/index/pdcbanner';
$.ajax({
	url: bannerUrl,
	type: "post",
	dataType: "json",
	async: false,
	success: function(data){
    bannerData = data
	}
});

let swiperItem = '';
for (let i = 0; i < bannerData.length; i++) {
  const bannerItem = bannerData[i];
  
  swiperItem += `<div class="swiper-slide">
    <a href="${bannerItem.url}" class="item-link" target="view_windoe">
      <img src="${bannerItem.img}" alt="">
      <video src="${bannerItem.videoUrl}" autoplay muted loop class="item-inner item-video"></video>
    </a>
  </div>`
};
$('.swiper-wrapper').html(swiperItem);


function initEnd() {
  $('.page').removeClass('hidden');
  $('.loading-text').text('');
  $('.page-nav-wrap').removeClass('hidden');
  hideModal('modalLoading');
  showModal('fallsList');
  showModal('bannerWrap');
  initSwiper();
}
let mySwiper 
function initSwiper() {
  if(!mySwiper) {
    mySwiper = new Swiper('.swiper-container', {
      initialSlide :0, 
      loop: true,
      autoplay : 3000,
      autoplayDisableOnInteraction:false,
      speed:800,
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    })
  }
  mySwiper.update()
}


function showKongPage(list) {
  if(list.length == 0) {
    initEnd();
    $('.page').addClass('hidden');
    $('.loading-text').text('页面内容为空哦')
  }
}

// 点击logo
$('.page-nav-logo').on('click', function() {
  let item = $('.page-nav-list .page-nav-item').eq(0)
  getItemPage(item.data("id"));
  item.addClass('active');
})
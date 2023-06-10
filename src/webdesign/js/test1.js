/**
 * 按ID显示弹窗
 */
function showModal(id) {
  // 显示弹窗
  $('#' + id).addClass('show')
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show')
}

/**
 * 请求导航数据
 */
$.ajax({
  type: 'GET',
  url: 'http://sj.dbgoodboy.cn/index.php/index/index/menudata',
  dataType: 'json',
  success: (data) => {
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

// 定义变量
let listId = 7
let listPage = 1

/* 请求列表数据 */
function showList(listId, listPage) {
  console.log();
  $.ajax({
    type: 'POST',
    url: 'http://sj.dbgoodboy.cn/index.php/index/index/pagedata',
    dataType: 'json',
    data: {
      id: listId,
      page: listPage
    },
    success: (data) => {
      listRenderer(data)
    },
    error: function (err) {
      console.log(err);
    }
  });
}
showList(listId, listPage)
/* 渲染列表 */
function listRenderer(data) {

  var $listItem = '';
  for (var i = 0; i < data.length; i++) {
    $listItem += `<div class="page-falls-item">
          <img class="img" src="${data[i].showUrl ? data[i].showUrl : ''}" alt="">
          <div class="text-wrap">
            <div class="title">${data[i].desc}</div>
          </div>
        </div>`;
  }
  // $('.page-falls-list').removeClass().append($listItem)

  // 隐藏加载页
  hideModal('modalLoading')

  waterfallHandler(data)
}

// function ArrayMin(arr) {
//   let minArrItem = arr[0];
//   let minIndex = 0;
//   for(let i = 0; i < arr.length; i++) {
//     arr.forEach(function(item, index) {
//       if(item < minArrItem) {
//         minArrItem = item;
//         minIndex = index;
//       }
//     })
//   }
//   return {
//     minIndex,
//     minItem: minArrItem
//   };
// }

// console.log(ArrayMin([13, 12, 32, 22, 34]));

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
  }


  start() {

    /* 第一步 - 创建列数 */
    for (let i = 0; i < this.lineNumber; i++) {
      let demo = document.createElement('div');
      demo.className = "line-item";
      demo.style.width = this.listWidth / this.lineNumber + 'px'
      this.listDemo.append(demo)
    }
    




    // // 第二步 - 循环获取最小高度的列
    // let test = {
    //   id: 0,
    //   demo: ''
    // };

    // let columnHeight = [];


    // for (let i = 0; i < this.data.length; i++) {
    //   for(let j = 0; j < this.lineNumber; j++) {
    //     columnHeight.push($('.line-item').eq(i).height());
    //   }


    //   // for (let j = 0; j < $('.line-item').length; j++) {

    //   //   var cur = $('.line-item').eq(j).height();
    //   //   var curDemo = $('.line-item').eq(j);
    //   //   if(cur > test.id) {
    //   //     test.id = cur
    //   //     test.demo = curDemo
    //   //     // console.log(test);
    //   //   }else if($('.line-item').eq(j).height() == 0) {
    //   //     test.id = $('.line-item').eq(j).height()
    //   //     test.demo = $('.line-item').eq(j)
    //   //     // console.log(test);
    //   //   }
    //   //   // console.log(test);
    //   //     $(test.demo).append(`<div class="page-falls-item">
    //   //     <img class="img" src="${this.data[i].showUrl ? this.data[i].showUrl : ''}" alt="">
    //   //     <div class="text-wrap">
    //   //       <div class="title">${this.data[i].desc}</div>
    //   //     </div>
    //   //     </div>`)
    //   // }


    //   // $('.line-item').each(function (index, item) {
    //   //   if ($(item).height() <= test) {
    //   //     test = $(item).height()
    //   //     demo = $(item)
    //   //   }
    //   // })

    //   // $(demo).append(`<div class="page-falls-item">
    //   // <img class="img" src="${this.data[i].showUrl ? this.data[i].showUrl : ''}" alt="">
    //   // <div class="text-wrap">
    //   //   <div class="title">${this.data[i].desc}</div>
    //   // </div>
    //   // </div>`)
    // }

    // console.log("coluHeight", columnHeight);

    // // for (let i = 0; i < this.data.length; i++) {
    // //   const item = this.data[i];
    // //   // for (let j = 0; j < $('.line-item').length; j++) {
    // //   //   const lineItem = $('.line-item')[i];
    // //   //   if(lineItem.height) {

    // //   //   }
    // //   // }
    // // }

    // // $.each(this.itemDemo, function (index, item) {
    // //   let itemHeight = $(item).outerHeight();
    // //   // 高度数组最小的高度
    // //   let minHeight = Math.min(...heightArr);

    // //   console.log(minHeight);
    // //   // // 高度数组最小的高度的索引
    // //   // let minIndex = heightArr.indexOf(minHeight);

    // //   // $(item).css({
    // //   //   position: 'absolute',
    // //   //   top: minHeight + 'px',
    // //   //   left: minIndex * this.itemWidth + 'px'
    // //   // });
    // //   // heightArr[minIndex] += itemHeight;
    // //   // console.log(minIndex);
    // // })
  }
}



function waterfallHandler(data) {
  let test = new FallsProject(data, $('#fallsList'), 5)
  test.start()  
}
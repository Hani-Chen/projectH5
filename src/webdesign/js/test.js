// /**
//  * 按ID显示弹窗
//  */
// function showModal(id) {
//   // 显示弹窗
//   $('#' + id).addClass('show')
// }

// /**
//  * 按ID隐藏弹窗
//  */
// function hideModal(id) {
//   $('#' + id).removeClass('show')
// }

// /**
//  * 请求导航数据
//  */
// $.ajax({
//   type: 'GET',
//   url: 'http://sj.dbgoodboy.cn/index.php/index/index/menudata',
//   dataType: 'json',
//   success: (data) => {
//     console.log(data);
//     navRenderer(data)
//   },
//   error: function (err) {
//     console.log(err)
//   }
// });

// /**
//  * 导航栏渲染
//  * @param {json} data 导航栏数据
//  */
// function navRenderer(data) {
//   var $navItem = '';
//   for (var i = 0; i < data.length; i++) {
//     $navItem += `<li class="page-nav-item ${i == 0 ? 'active' : ''}" data-id="${data[i].id}">${data[i].title}</li>`
//   }
//   $('.page-nav-list').append($navItem)

//   // 渲染列表数据
//   listRenderer($('.page-nav-item.active').data("id"))

// }
// var $fallsList
// function listRenderer(id) {
//   // 切换列表时摧毁布局
//   if ($fallsList) {
//     $fallsList.masonry('destroy')
//   }
//   /**
//    * 请求列表数据
//    */
//   $.ajax({
//     type: 'POST',
//     url: 'http://sj.dbgoodboy.cn/index.php/index/index/pagedata',
//     dataType: 'json',
//     data: {
//       id: id,
//       page: 1
//     },
//     success: (data) => {
//       /**
//        * 列表渲染
//        * @param {json} data 列表数据
//        */
//       console.log(data);
//       $('.page-falls-list').empty()
//       var $listItem = '';
//       for (var i = 0; i < data.length; i++) {
//         $listItem += `<div class="page-falls-item">
//           <img class="img" src="${data[i].showUrl ? data[i].showUrl : ''}" alt="">
//           <div class="text-wrap">
//             <div class="title">${data[i].desc}</div>
//           </div>
//         </div>`;
//       }
//       $('.page-falls-list').append($listItem)
//       $fallsList = $('#fallsList').masonry({
//         itemSelector: '.page-falls-item',
//         gutter: 16, //元素水平方向的间隙
//         fitWidth: true, // 设置网格容器宽度等于网格宽度，这样配合css的auto margin实现居中显示
//         stagger: 10,
//         // resize: false,
//       });

//       var obj = $fallsList.masonry();
//       $fallsList.masonry('on', 'layoutComplete', function () {
//         console.log('layout is complete');
//         if (!initialize) {
//           pageResize();
//           initialize = true
//         }
//         hideModal('modalLoading')
//         showModal('fallsList')

//       });
//     },
//     error: function (err) {
//       console.log(err);
//     }
//   });

// };

// /* 点击单个tab - 显示不同数据 */
// $('.page-nav-list').on('click', '.page-nav-item', function () {
//   hideModal('fallsList')
//   showModal('modalLoading')
//   $('.page-nav-item').removeClass('active')
//   $(this).addClass('active')
//   console.log($(this).data("id"));
//   // 渲染列表数据
//   listRenderer($(this).data("id"))
//   $('.page-nav-wrap').removeClass('show')
// })

// /* 点击单个图片 - 显示大图 */
// $('.page-falls-list').on('click', '.page-falls-item', function () {
//   console.log($(this).find('.img').attr('src'));
//   $('#popLookImg').attr('src', $(this).find('.img').attr('src'))
//   showModal('modallookImg')
// })
// $('.close').on('click', function () {
//   $(this).parents('.modal').removeClass('show')
// })

// /* 点击图片禁止冒泡 - 待优化 */
// $('.lookimg-img').on('click', function (e) {
//   e.stopPropagation()
// })

// /* 监听页面大小 */
// $(window).resize(function () {
//   pageResize();
// });

// var pageWidth = 1500;
// var initialize = false;
// function pageResize() {
//   if ($fallsList) {
//     if ($(window).width() <= 375) {

//       $('.page-nav-inner').css('width', '100%');
//       $('.page-inner').css('width', '100%');
//       $('.page-falls-list').css('width', '92%');
//       // 单个元素
//       $('.page-falls-item').css('width', '100%');

//     } else if ($(window).width() <= 768) {
//       $('.page-nav-inner').css('width', '100%');
//       $('.page-inner').css('width', '100%');
//       $('#fallsList').css('width', '92%');
//       $('.page-falls-item').css('width', '100%');
//       console.log("$(window).width() <= 768");
//     } else if ($(window).width() <= 992) {
//       pageWidth = 740
//       $('.page-nav-inner').css('width', pageWidth + 'px');
//       $('.page-inner').css('width', pageWidth + 'px');
//       $('.page-falls-item').css('width', '236px');
//     } else if ($(window).width() <= 1280) {
//       pageWidth = 992
//       $('.page-nav-inner').css('width', pageWidth + 'px');
//       $('.page-inner').css('width', pageWidth + 'px');
//       $('.page-falls-item').css('width', '236px');
//     } else if ($(window).width() <= 1600) {
//       pageWidth = 1244
//       $('.page-nav-inner').css('width', pageWidth + 'px');
//       $('.page-inner').css('width', pageWidth + 'px');
//       $('.page-falls-item').css('width', '236px');
//     } else if ($(window).width() > 1600) {
//       pageWidth = 1500
//       $('.page-nav-inner').css('width', pageWidth + 'px');
//       $('.page-inner').css('width', pageWidth + 'px');
//       $('.page-falls-item').css('width', '236px');
//     }
//     $fallsList.masonry();
//   }
// };

// $('.page-nav-toggle').on('click', function () {
//   $('.page-nav-wrap').toggleClass('show')
// })


// var page = 1
// function downLoad(list, id) {
//   $(window).scroll(function () {

//     if ($(document).scrollTop() <= 0) {
//       // alert("滚动条已经到达顶部为0");
//     }
//     if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
//       // alert("滚动条已经到达底部为" + $(document).scrollTop());
//       page += 1
//       // console.log( "距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight );
//       // 切换列表时摧毁布局
//       if ($fallsList) {
//         $fallsList.masonry('destroy')
//       }
//       $.ajax({
//         type: 'POST',
//         url: 'http://sj.dbgoodboy.cn/index.php/index/index/pagedata',
//         dataType: 'json',
//         data: {
//           id: 7,
//           page: page
//         },
//         success: (data) => {
//           /**
//            * 列表渲染
//            * @param {json} data 列表数据
//            */
//           console.log(data);
//           var $listItem = '';
//           for (var i = 0; i < data.length; i++) {
//             $listItem += `<div class="page-falls-item">
//               <img class="img" src="${data[i].showUrl ? data[i].showUrl : ''}" alt="">
//               <div class="text-wrap">
//                 <div class="title">${data[i].desc}</div>
//               </div>
//             </div>`;
//           }
//           $('.page-falls-list').append($listItem)
//           $fallsList.masonry();

//           $fallsList = $('#fallsList').masonry({
//             itemSelector: '.page-falls-item',
//             gutter: 16, //元素水平方向的间隙
//             fitWidth: true, // 设置网格容器宽度等于网格宽度，这样配合css的auto margin实现居中显示
//             stagger: 10,
//             // resize: false,
//           });

//           var obj = $fallsList.masonry();
//           $fallsList.masonry('on', 'layoutComplete', function () {
//             console.log('layout is complete');
//             if (!initialize) {
//               pageResize();
//               initialize = true
//             }
//             hideModal('modalLoading')
//             showModal('fallsList')

//           });
//         },
//         error: function (err) {
//           console.log(err);
//         }
//       });
//     }
//   });

// }
// // }

// downLoad()







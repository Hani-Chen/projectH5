// // 定义 url 路径
// var baseUrl = './img';
// // var imageUrl = baseUrl + 'img/image.jpg';
// // console.log(imageUrl);

// // 给标题容器动态赋值高度
// function assignmentHeight() {
//   for (let i = 0; i <= $('.section').length ; i++) {
//     var domeHeight = $('.section-' + i + ' .title-main').innerHeight() + 'px'
//     $('.section-' + i + ' .title-wrap').css({ 'height': domeHeight })
//   }
// }
// assignmentHeight()

// // 文案置顶
// /**
//  * 置顶
//  * @param {*} $dome 需要执行动画的dome
//  */
// function sticky($dome) {

//   var winTop = $(window).scrollTop()
//   // console.log(domeHeight, winHeight)
//   var domeTop = $($dome + ' .title-wrap').offset().top

//   if (domeTop - winTop <= 0) {
//     $($dome + ' .title-main').addClass('fixed')
//   } else {
//     $($dome + ' .title-main').removeClass('fixed')
//   }
// }

// // 取消置顶
// function disappear($dome) {
//   // 获取已经滚出屏幕的内容高
//   var winTop = $(window).scrollTop()
//   // 获取元素距离网页顶部距离
//   var domeTop = $($dome + ' .title-wrap').offset().top
//   var domeHeight = $($dome).height()
//   var winHeight = $(window).height()
//   var top = domeTop + domeHeight - winTop - winHeight
//   // console.log(top)

//   if( domeTop + domeHeight - winTop <= winHeight) {
//     // console.log(top-winHeight)
//   //   console.log(13)
//     $($dome + ' .title-main').css('top', top + 'px')
//   }else {
//   //     $($dome + ' .title-main').css('top', '0px')
//   }
//   // if (domeTop - winTop <= winHeight) {
//   //   $($domeLase + ' .title-main').css('top', top + 'px')
//   // } else {
//   // } 0
// }

// $(window).scroll(function () {
//   for (var i = 1; i <= $('.section').length; i++) {
//     if(i==19) {
//       i++
//     }
//     // 当前屏幕高
//     var winHeight = $(window).height()
//     // 当前容器高
//     var domeHeight = $('.section-' + i).height()
//     if (!(domeHeight < winHeight)) {
//       // 置顶函数 传当前需要置顶的dome
//       sticky('.section-' + i);
//       disappear('.section-' + i)
//     }
//   }
//   assignmentHeight()
// })
$(function(){
  $('.return-top').addClass('show')
  // 监听页面滚动
  $(window).scroll(function() {
    if ($(window).scrollTop() <= $('.section-1').height()) {
      $('.return-top').addClass('active')
    } else {
      $('.return-top').removeClass('active')
    }
  })
  
  if ($(window).scrollTop() <= $('.section-1').height()) {
    console.log($('.section-1').height())
    $('.return-top').addClass('active')
  } else {
    $('.return-top').removeClass('active')
  }
  // 返回顶部
  $('.return-top').click(function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    $(this).addClass('active')
  })
  
  $('.return-top').hover(function(){
    $('.return-top').addClass('active')
  },function(){
    $('.return-top').removeClass('active')
  });
  
  // 套餐详情轮播
  mySwiper1 = new Swiper('#section19Swiper1', {
    loop: true, // 循环模式选项
    speed: 1500,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active'
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // 自动轮播
    autoplay: {
      disableOnInteraction: false
    }
  })
  
  mySwiper2 = new Swiper('#section19Swiper2', {
    loop: true, // 循环模式选项
    speed: 1500,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active'
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      disableOnInteraction: false
    }
  })
  
  // 新建控制器
  var controller = new ScrollMagic.Controller()
  
  // 第一屏 帧动画事件  进入
  function canvasState() {
    var sectionwrapCanvas = new ScrollMagic.Scene({
      triggerElement: '.section-1',
      triggerHook: 1
    }).addTo(controller)
  
    sectionwrapCanvas.on('start', function(event) {
      // 如果是往下滚 暂停 第一屏帧动画
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        section1Queue.on('complete', section1CanvasComplete, this)
        // 素材加载完成后执行
        function section1CanvasComplete() {
          if ($(window).width() > 768) {
            section1Animation1.play()
            section1Animation2.stop()
  
            $('#section1Canvas2').hide()
            $('#section1Canvas1').show()
          } else {
            section1Animation2.play()
            section1Animation1.stop()
            $('#section1Canvas1').hide()
            $('#section1Canvas2').show()
          }
          // section1Animation1.onLoop: function () {
          // }
        }
        // 如果素材已经加载完成
        if (section1Queue.loaded) {
          if ($(window).width() > 768) {
            section1Animation1.play()
            section1Animation2.stop()
  
            $('#section1Canvas2').hide()
            $('#section1Canvas1').show()
          } else {
            section1Animation2.play()
            section1Animation1.stop()
            $('#section1Canvas1').hide()
            $('#section1Canvas2').show()
          }
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        section1Queue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            section1Animation1.stop()
          } else {
            section1Animation2.stop()
          }
        }
        // 如果素材已经加载完成
        if (section1Queue.loaded) {
          if ($(window).width() > 768) {
            section1Animation1.stop()
          } else {
            section1Animation2.stop()
          }
        }
      }
    })
  }
  
  // 第一屏 帧动画事件  离开
  function canvasStateNext() {
    var feature3Canvas = new ScrollMagic.Scene({
      triggerElement: '.section-2',
      triggerHook: 0
    }).addTo(controller)
    feature3Canvas.on('start', function(event) {
  
      // 如果是往下滚 暂停 第一屏帧动画
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        section1Queue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            section1Animation1.stop()
          } else {
            section1Animation2.stop()
          }
          // featureCanvas.feature1Canvas.stop()
        }
        // 如果素材已经加载完成
        if (section1Queue.loaded) {
          if ($(window).width() > 768) {
            section1Animation1.stop()
          } else {
            section1Animation2.stop()
          }
          // featureCanvas.feature1Canvas.stop()
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        section1Queue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            section1Animation1.play()
            section1Animation2.stop()
  
            $('#section1Canvas2').hide()
            $('#section1Canvas1').show()
          } else {
            section1Animation2.play()
            section1Animation1.stop()
            $('#section1Canvas1').hide()
            $('#section1Canvas2').show()
          }
  
          // featureCanvas.feature1Canvas.play()
        }
        // 如果素材已经加载完成
        if (section1Queue.loaded) {
          if ($(window).width() > 768) {
            section1Animation1.play()
            section1Animation2.stop()
            $('#section1Canvas2').hide()
            $('#section1Canvas1').show()
          } else {
            section1Animation2.play()
            section1Animation1.stop()
            $('#section1Canvas1').hide()
            $('#section1Canvas2').show()
          }
          // featureCanvas.feature1Canvas.play()
        }
      }
    })
  }
  
  // 帧动画事件  进入
  function canvasState2($performer, canvas) {
    var sectionwrapCanvas = new ScrollMagic.Scene({
      triggerElement: $performer,
      triggerHook: 1
    }).addTo(controller)
  
    sectionwrapCanvas.on('start', function(event) {
      // 如果是往下滚 暂停 第一屏帧动画
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          featureCanvas[canvas].play()
          // 开始十一屏动画
          if(canvas == 'section11Canvas') {
            console.log(canvas)
            featureCanvas.section11Canvas.onPlay = function() {
              var section11Arr = ['.section-11 .text', '.section-11 .text2']
              // 第二屏加文字动画
              TweenMax.staggerFromTo(
                section11Arr,
                0.1,
                { y: '+=10', opacity: 0 },
                { y: 0, opacity: 1, delay: 1.5 },
                0.15
              )
            }
            featureCanvas.section11Canvas.stop()
            featureCanvas.section11Canvas.play()
          }
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          featureCanvas[canvas].play()
          // 开始十一屏动画
          if(canvas == 'section11Canvas') {
            console.log(canvas)
           
            featureCanvas.section11Canvas.onPlay = function() {
              var section11Arr = ['.section-11 .text', '.section-11 .text2']
              // 第二屏加文字动画
              TweenMax.staggerFromTo(
                section11Arr,
                0.1,
                { y: '+=10', opacity: 0 },
                { y: 0, opacity: 1, delay: 1.5 },
                0.15
              )
            }
  
            featureCanvas.section11Canvas.stop()
            featureCanvas.section11Canvas.play()
          }
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          featureCanvas[canvas].stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          featureCanvas[canvas].stop()
        }
        
      }
    })
  }
  
  // 帧动画事件  离开
  function canvasStateNext2($performer, canvas) {
    var sectionwrapCanvas = new ScrollMagic.Scene({
      triggerElement: $performer,
      triggerHook: 0
    }).addTo(controller)
    sectionwrapCanvas.on('start', function(event) {
  
      // 如果是往下滚 暂停 第一屏帧动画
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          featureCanvas[canvas].stop()
          // featureCanvas.feature1Canvas.stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          featureCanvas[canvas].stop()
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          featureCanvas[canvas].play()
          
          
          
          // 开始十一屏动画
          if(canvas == 'section11Canvas') {
            console.log(canvas)
            featureCanvas.section11Canvas.onPlay = function() {
              var section11Arr = ['.section-11 .text', '.section-11 .text2']
              // 第二屏加文字动画
              TweenMax.staggerFromTo(
                section11Arr,
                0.1,
                { y: '+=10', opacity: 0 },
                { y: 0, opacity: 1, delay: 1.5 },
                0.15
              )
            }
            featureCanvas.section11Canvas.stop()
            featureCanvas.section11Canvas.play()
          }
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          featureCanvas[canvas].play()
  
          
          
          // 开始十一屏动画
          if(canvas == 'section11Canvas') {
            console.log(canvas)
            featureCanvas.section11Canvas.onPlay = function() {
              var section11Arr = ['.section-11 .text', '.section-11 .text2']
              // 第二屏加文字动画
              TweenMax.staggerFromTo(
                section11Arr,
                0.1,
                { y: '+=10', opacity: 0 },
                { y: 0, opacity: 1, delay: 1.5 },
                0.15
              )
            }
            featureCanvas.section11Canvas.stop()
            featureCanvas.section11Canvas.play()
          }
        }
      }
    })
  }
  
  // // 第二屏 Swaiot就在你身边 - 帧动画
  // canvasState2('.section-2', 'section2Canvas')
  // canvasStateNext2('.section-3', 'section2Canvas')
  
  // 第三屏 掌握AIoT核心科技 - 帧动画
  // canvasState2('.section-3', 'section3Canvas')
  // canvasStateNext2('.section-4', 'section3Canvas')
  
  // // 第四屏 为智慧屏幕而生 - 帧动画
  // canvasState2('.section-4', 'section4Canvas')
  // canvasStateNext2('.section-5', 'section4Canvas')
  
  // 第十一屏 智能设备一键秒连 - 帧动画
  canvasState2('.section-11', 'section11Canvas')
  canvasStateNext2('.section-12', 'section11Canvas')
  
  // 第十六屏 自定义场景模式 - 帧动画1
  canvasState2('.section-16', 'section16Canvas1')
  canvasStateNext2('.section-17', 'section16Canvas1')
  
  // 第十六屏 自定义场景模式 - 帧动画2
  canvasState2('.section-16', 'section16Canvas2')
  canvasStateNext2('.section-17', 'section16Canvas2')
  
  // 第三屏  进入
  function canvasState3() {
    var sectionwrapCanvas = new ScrollMagic.Scene({
      triggerElement: '.section-3',
      triggerHook: 1
    }).addTo(controller)
  
    sectionwrapCanvas.on('start', function(event) {
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.play()
            featureCanvas.section3Canvas2.stop()
  
            $('#section3Canvas1').show()
            $('#section3Canvas2').hide()
          } else {
            featureCanvas.section3Canvas1.stop()
            featureCanvas.section3Canvas2.play()
            $('#section3Canvas1').hide()
            $('#section3Canvas2').show()
          }
          // featureCanvas.section3Canvas.play()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.play()
            featureCanvas.section3Canvas2.stop()
  
            $('#section3Canvas1').show()
            $('#section3Canvas2').hide()
          } else {
            featureCanvas.section3Canvas1.stop()
            featureCanvas.section3Canvas2.play()
            $('#section3Canvas1').hide()
            $('#section3Canvas2').show()
          }
          // featureCanvas.section3Canvas.play()
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.stop()
          } else {
            featureCanvas.section3Canvas2.stop()
          }
          // featureCanvas.section3Canvas.stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.stop()
          } else {
            featureCanvas.section3Canvas2.stop()
          }
        }
      }
    })
  }
  // 第三屏  离开
  function canvasStateNext3() {
    var sectionwrapCanvas = new ScrollMagic.Scene({
      triggerElement: '.section-4',
      triggerHook: 0
    }).addTo(controller)
    sectionwrapCanvas.on('start', function(event) {
  
      // 如果是往下滚 暂停 第一屏帧动画
      if (event.state == 'DURING') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.stop()
          } else {
            featureCanvas.section3Canvas2.stop()
          }
          // featureCanvas.feature1Canvas.stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.stop()
          } else {
            featureCanvas.section3Canvas2.stop()
          }
        }
      } else if (event.state == 'BEFORE') {
        // 帧动画素材加载完成执行
        featureQueue.on('complete', handleLoadingComplete, this)
        // 如果是往回滚
        // 素材加载完成后执行
        function handleLoadingComplete() {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.play()
            featureCanvas.section3Canvas2.stop()
  
            $('#section3Canvas1').show()
            $('#section3Canvas2').hide()
          } else {
            featureCanvas.section3Canvas1.stop()
            featureCanvas.section3Canvas2.play()
            $('#section3Canvas1').hide()
            $('#section3Canvas2').show()
          }
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          if ($(window).width() > 768) {
            featureCanvas.section3Canvas1.play()
            featureCanvas.section3Canvas2.stop()
  
            $('#section3Canvas1').show()
            $('#section3Canvas2').hide()
          } else {
            featureCanvas.section3Canvas1.stop()
            featureCanvas.section3Canvas2.play()
            $('#section3Canvas1').hide()
            $('#section3Canvas2').show()
          }
        }
      }
    })
  }
  
  canvasState()
  canvasStateNext()
  
  canvasState3()
  canvasStateNext3()
  $(window).resize(function() {
    canvasState()
    canvasStateNext()
    canvasState3()
    canvasStateNext3()
  })
  
  // 第七屏内容动画
  function section7before() {
    if ($(window).width() > 768) {
      // 第七屏屏幕logo
      var section7logo1 = new TweenMax.staggerFromTo(
        '.section-7 .logo1',
        0.5,
        { left: '-4.5%', opacity: 0 },
        { left: '15.8%', opacity: 1 }
      )
      new ScrollMagic.Scene({
        triggerElement: '.section-7',
        triggerHook: 0
      })
        .setTween(section7logo1)
        .addTo(controller)
    } else {
      // 第七屏屏幕logo
      var section7logo1 = new TweenMax.staggerFromTo(
        '.section-7 .logo1',
        0.5,
        { left: '-4.5%', opacity: 0 },
        { left: '9.8%', opacity: 1 }
      )
      new ScrollMagic.Scene({
        triggerElement: '.section-7',
        triggerHook: 0
      })
        .setTween(section7logo1)
        .addTo(controller)
    }
  
    // 第七屏加小圆蒙层
    var section7before = new TweenMax.staggerFromTo(
      '.section-7 .before-wrap',
      0.5,
      { opacity: 0 },
      { opacity: 1 }
    )
    new ScrollMagic.Scene({
      triggerElement: '.section-7 .product-img-wrap',
      triggerHook: 0
    })
      .setTween(section7before)
      .addTo(controller)
  
    // 第七屏小圆logo
    var section7logo2 = new TweenMax.staggerFromTo(
      '.section-7 .logo2',
      1,
      { opacity: 0 },
      { opacity: 1 }
    )
    new ScrollMagic.Scene({
      triggerElement: '.section-7 .product-img-wrap',
      triggerHook: 0
    })
      .setTween(section7logo2)
      .addTo(controller)
  
    // 第七屏加屏幕蒙层
    var section7after = new TweenMax.staggerFromTo(
      '.section-7 .after-wrap',
      0.5,
      { opacity: 0 },
      { opacity: 1 }
    )
    new ScrollMagic.Scene({
      triggerElement: '.section-7',
      triggerHook: 0
    })
      .setTween(section7after)
      .addTo(controller)
  }
  section7before()
  
  // 第十二屏 特殊动画
  var section12Arr = [
    $('.section-12 .content-box'),
    $('.section-12 .frames2').eq(0)
  ]
  var section12Animation = new TweenMax.staggerFromTo(
    section12Arr,
    0.5,
    { opacity: 0 },
    { opacity: 1, delay: 0.5 },
    1
  )
  new ScrollMagic.Scene({
    triggerElement: '.section-12',
    triggerHook: 0.2
  })
    .setTween(section12Animation)
    .addTo(controller)
  
  // 页面文字动效
  function sectionAnimation($dome) {
    // 图片和标题文案
    var sectionArr = [
      $($dome + ' .title-logo').eq(0),
      $($dome + ' .title-heading').eq(0)
    ]
    // 间隔时间
    var intervalTime = 0.17
    // 延迟时间
    var delayTime = 0.2
    // 执行时间
    var executeTime = 0.08
    // 第二屏加文字动画
    var section2Text = new TweenMax.staggerFromTo(
      sectionArr,
      executeTime,
      { y: '+=10', opacity: 0 },
      { y: 0, opacity: 1, delay: delayTime },
      intervalTime
    )
    new ScrollMagic.Scene({
      triggerElement: $dome,
      triggerHook: 0.9
    })
      .setTween(section2Text)
      .addTo(controller)
  
    // 文案显示动画
    // 延迟时间
    var delayTime2 = 0.6
    // 执行时间
    var executeTime2 = 0.4
    // 文案 和 内容
    var sectionArr1 = [$($dome + ' .title-text').eq(0)]
    var section2Text = new TweenMax.staggerFromTo(
      sectionArr1,
      executeTime2,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: delayTime2
      }
    )
    new ScrollMagic.Scene({
      triggerElement: $dome,
      triggerHook: 0.9
    })
      .setTween(section2Text)
      .addTo(controller)
  
    // 内容显示动画
    // 延迟时间
    var delayTime2 = 1.2
    // 执行时间
    var executeTime2 = 0.8
    // 文案 和 内容
    var sectionArr2 = [$($dome + ' .animation-box')]
    var section2Text = new TweenMax.staggerFromTo(
      sectionArr2,
      executeTime2,
      { y: '+=45', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: delayTime2,
        onComplete: function() {
          if ($dome == '.section-2') {
            featureQueue.on('complete', section2CanvasComplete, this)
            // 素材加载完成后执行
            function section2CanvasComplete() {
              section2Animation.play()
            }
            // 如果素材已经加载完成
            if (featureQueue.loaded) {
              section2Animation.play()
            }
          }
  
          if ($dome == '.section-4') {
            featureQueue.on('complete', handleLoadingComplete, this)
            // 素材加载完成后执行
            function handleLoadingComplete() {
              featureCanvas.section4Canvas.play()
            }
            // 如果素材已经加载完成
            if (featureQueue.loaded) {
              featureCanvas.section4Canvas.play()
  
            }
          }
        }
      }
    )
    var textAn = new ScrollMagic.Scene({
      triggerElement: $dome,
      triggerHook: 0.9
    })
      .setTween(section2Text)
      .addTo(controller)
  }
  
  // 执行文字动效i++
  function executeAnimation() {
    for (var i = 1; i <= $('.section').length; i++) {
      if (i == 8) {
        // 第八屏 特殊处理
        // 图片和标题文案
        var section8Arr = [$('.section-' + i + ' .title-heading').eq(0)]
  
        var section8Text = new TweenMax.staggerFromTo(
          section8Arr,
          0.08,
          { y: '+=10', opacity: 0 },
          { y: 0, opacity: 1, delay: 0.2 }
        )
        new ScrollMagic.Scene({
          triggerElement: '.section-' + i,
          triggerHook: 0.9
        })
          .setTween(section8Text)
          .addTo(controller)
  
        // 文案显示动画
        var section8Arr1 = [$('.section-' + i + ' .wrap-left').eq(0),$('.section-' + i + ' .wrap-left').eq(1)]
        var section8Text2 = new TweenMax.staggerFromTo(
          section8Arr1,
          0.4,
          { y: '+=45', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 0.6
          }
        )
        new ScrollMagic.Scene({
          triggerElement: '.section-' + i,
          triggerHook: 0.9
        })
          .setTween(section8Text2)
          .addTo(controller)
  
        // 内容显示动画
        var section8Arr3 = [$('.section-' + i + ' .wrap-text')]
        var section8Text3 = new TweenMax.staggerFromTo(
          section8Arr3,
          0.8,
          { y: '+=45', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 1.2
          }
        )
        new ScrollMagic.Scene({
          triggerElement: '.section-' + i,
          triggerHook: 0.9
        })
          .setTween(section8Text3)
          .addTo(controller)
        i++
      }
      sectionAnimation('.section-' + i)
    }
  }
  executeAnimation()
  
  // 帧动画事件  进入
  function canvasStop() {
    var sectionwrapCanvas1 = new ScrollMagic.Scene({
      triggerElement: '.section-5',
      triggerHook: 0
    }).addTo(controller)
  
    sectionwrapCanvas1.on('start', function(event) {
      // 当前屏下滚显示 play
      if (event.state == 'DURING') {
        
      } else if (event.state == 'BEFORE') {
        // 当前屏上滚消失 stop
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          console.log('素材加载完成后执行,当前屏上滚显示 stop')
          featureCanvas.section4Canvas.play()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          console.log('如果素材已经加载完成,当前屏上滚显示 stop')
          featureCanvas.section4Canvas.play()
        }
      }
    })
  
    
    var sectionwrapCanvas2 = new ScrollMagic.Scene({
      triggerElement: '.section-4',
      triggerHook: 1
    }).addTo(controller)
  
    sectionwrapCanvas2.on('start', function(event) {
      // 当前屏下滚显示 play
      if (event.state == 'DURING') {
        
      } else if (event.state == 'BEFORE') {
        // 当前屏上滚消失 stop
        featureQueue.on('complete', handleLoadingComplete, this)
        // 素材加载完成后执行
        function handleLoadingComplete() {
          console.log('素材加载完成后执行,当前屏上滚显示 stop')
          featureCanvas.section4Canvas.stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          console.log('如果素材已经加载完成,当前屏上滚显示 stop')
          featureCanvas.section4Canvas.stop()
        }
      }
    })
  }
  canvasStop()
  
  
  
  // 第二屏帧动画事件  进入
  function canvasStop1() {
  
    var sectionwrapCanvas2 = new ScrollMagic.Scene({
      triggerElement: '.section-3',
      triggerHook: 0
    }).addTo(controller)
  
    sectionwrapCanvas2.on('start', function(event) {
      // 当前屏下滚显示 play
      if (event.state == 'DURING') {
        
      } else if (event.state == 'BEFORE') {
        // 当前屏上滚消失 stop
        featureQueue.on('complete', section2CanvasComplete, this)
        // 素材加载完成后执行
        function section2CanvasComplete() {
          console.log('素材加载完成后执行,当前屏上滚显示 stop')
          section2Animation.play()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          console.log('如果素材已经加载完成,当前屏上滚显示 stop')
          section2Animation.play()
        }
      }
    })
  
    
    var sectionwrapCanvas2 = new ScrollMagic.Scene({
      triggerElement: '.section-2',
      triggerHook: 1
    }).addTo(controller)
  
    sectionwrapCanvas2.on('start', function(event) {
      // 当前屏下滚显示 play
      if (event.state == 'DURING') {
        
      } else if (event.state == 'BEFORE') {
        // 当前屏上滚消失 stop
        featureQueue.on('complete', section2CanvasComplete, this)
        // 素材加载完成后执行
        function section2CanvasComplete() {
          console.log('素材加载完成后执行,当前屏上滚显示 stop')
          section2Animation.stop()
        }
        // 如果素材已经加载完成
        if (featureQueue.loaded) {
          console.log('如果素材已经加载完成,当前屏上滚显示 stop')
          section2Animation.stop()
        }
      }
    })
  
  
    // var sectionwrapCanvas3 = new ScrollMagic.Scene({
    //   triggerElement: '.section-3',
    //   triggerHook: 0
    // }).addTo(controller)
  
    // sectionwrapCanvas3.on('start', function(event) {
    //   // 当前屏下滚显示 play
    //   if (event.state == 'DURING') {
        
    //   } else if (event.state == 'BEFORE') {
    //     // 当前屏上滚消失 stop
    //     featureQueue.on('complete', section2CanvasComplete, this)
    //     // 素材加载完成后执行
    //     function section2CanvasComplete() {
    //       console.log('素材加载完成后执行,当前屏上滚显示 stop')
    //       section2Animation.play()
    //     }
    //     // 如果素材已经加载完成
    //     if (featureQueue.loaded) {
    //       console.log('如果素材已经加载完成,当前屏上滚显示 stop')
    //       section2Animation.play()
    //     }
    //   }
    // })
  
    
    // var sectionwrapCanvas4 = new ScrollMagic.Scene({
    //   triggerElement: '.section-2',
    //   triggerHook: 1
    // }).addTo(controller)
  
    // sectionwrapCanvas4.on('start', function(event) {
    //   // 当前屏下滚显示 play
    //   if (event.state == 'DURING') {
        
    //   } else if (event.state == 'BEFORE') {
    //     // 当前屏上滚消失 stop
    //     featureQueue.on('complete', section2CanvasComplete, this)
    //     // 素材加载完成后执行
    //     function section2CanvasComplete() {
    //       console.log('素材加载完成后执行,当前屏上滚显示 stop')
    //       section2Animation.stop()
    //     }
    //     // 如果素材已经加载完成
    //     if (featureQueue.loaded) {
    //       console.log('如果素材已经加载完成,当前屏上滚显示 stop')
    //       section2Animation.stop()
    //     }
    //   }
    // })
  }
  canvasStop1()
})
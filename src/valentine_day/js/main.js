
$(document).ready(function() {
  /*==================== 图片资源预加载 开始 ====================*/
  var imgss = 0;
  var imgs = [
    './img/bg-button.png',
    // './images/main_h5_atlas_.png',
    // './images/main_h5_atlas_2.png',
    './img/bg-button.png',
    './img/bg-loading.jpg',
    './img/bg_SVIP.png',
    './img/bg-index.jpg',
    './img/bubble.png',
    './img/clothing.png',
    './img/cosmetics.png',
    './img/nameplate.png',
    './img/reminder.png',
    './img/SVIP_title.png'
  ]
  for(i=0; i<imgs.length; i++){
    var image = new Image();
    image.src = imgs[i]
    image.onload = function(){
      imgss ++;
      var w = (imgss / imgs.length) * 100;
      console.log("shaggfaafhsj",imgss / imgs.length)
      $(".loading").css( "width", w + "%")
      $(".percentage").text(parseInt(w)+ "%")
      if(w == 100){
        // 背景音乐按钮
        $('.bgm').addClass('show')
        // 宣传页显示
        $('.publicity-receptacle').addClass('show')
        // $('.inform-receptacle').addClass('show')
        // loading页隐藏
        $('.loading-receptacle').removeClass('show')
          console.log("加载完成")
  
      }
    };
  }
  /*==================== 图片资源预加载 结束 ====================*/
  
  /*==================== 点击背景音乐按钮 ==> 暂停背景音乐 开始 ====================*/
  $('.play').click(function() {
    console.log("暂停背景音乐")
    $('.play').addClass("playStyle");
    $('.play').next().addClass("stopStyle");
    
    // $("#bgMusic")[0].pause();
    
    // $('.bgm>.stop').addClass("stopStyle");
  })
  $('.stop').click(function() {
    console.log("开始背景音乐")
    $('.stop').removeClass("stopStyle");
    $('.stop').prev().removeClass("playStyle");
    
    // $("#bgMusic")[0].play();
    // $('.bgm>.stop').addClass("stopStyle");
  })
  /*==================== 点击背景音乐按钮 ==> 暂停背景音乐 结束 ====================*/
  /*==================== 点击加入群聊 ==> 进动画页 开始 ====================*/
  $('.publicity-onlookers').click(function() {
    console.log("跳转到 群聊动画页")
    // 显示动画页
    $('.groupchat-receptacle').addClass('show')
    // 隐藏首页
    $('.publicity-receptacle').removeClass('show')
    // 初始化 群聊页动画
    init()
  })
  /*==================== 点击加入群聊 ==> 进动画页 结束 ====================*/
})






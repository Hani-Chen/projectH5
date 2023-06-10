/**
 * 埋点所需事件
 */
 window.TencentKdAct.init({
  pageId: "yurenjie0330",
  pageNumber: "yuren01",
  actKey: "kobe",
  shareTitle: "愚人节防骗创造营，喊你入营啦",
  shareDesc: "看看你会几班出道？",
  shareImage: "https://mcdn.kandian.qq.com/act/path/qq_browser_anti_fraud/img/bg-share2.png",
});

/**
 *
 * @param {Sting} id 事件id
 * @param {Sting} name 事件参数
 */
function buriedPoint(id, name = "") {
  // 埋点
  $(document).trigger(id, name);
}
let IntervalTime = null;
function buriedPointTime() {
  // 访问时长，2s上报一次
  if (IntervalTime) {
    clearInterval(IntervalTime);
  }
  IntervalTime = setInterval(function () {
    $(document).trigger("REPORT_VIEW_TIME", "page", 2);
  }, 2000);
}

// 埋点 - 首页曝光
buriedPoint("REPORT_PAGE_EXPOSURE");
// 埋点 - 首页访问
buriedPoint("REPORT_PAGE_VIEW");
// 埋点 - 页面访问时长
buriedPointTime();

/* global $, Howl */
// 答题卡片数据，pic卡片图面，answer为题目真假
var trueNews = [
  { pic: "./img/quest/01.png", answer: true, real: 1 },
  { pic: "./img/quest/02.png", answer: true, real: 2 },
  { pic: "./img/quest/03.png", answer: true, real: 3 },
  { pic: "./img/quest/04.png", answer: true, real: 4 },
  { pic: "./img/quest/05.png", answer: true, real: 5 },
  { pic: "./img/quest/06.png", answer: true, real: 6 },
  { pic: "./img/quest/07.png", answer: true, real: 7 },
  { pic: "./img/quest/08.png", answer: true, real: 8 },
  { pic: "./img/quest/09.png", answer: true, real: 9 },
  { pic: "./img/quest/10.png", answer: true, real: 10 },
];
var fakeNews = [
  { pic: "./img/quest/fake 1.png", answer: false },
  { pic: "./img/quest/fake 2.png", answer: false },
  { pic: "./img/quest/fake 3.png", answer: false },
  { pic: "./img/quest/fake 4.png", answer: false },
];
// 结果新闻裂变,pic图片，link链接
var resultNewsList = [
  { pic: "./img/newsItem/1.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/2.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/3.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/4.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/5.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/6.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/7.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/8.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/9.png", link: "javascript:void(0);" },
  { pic: "./img/newsItem/10.png", link: "javascript:void(0);" },
];
// 题目数组
var cardArr = [];
// 答对记录
var answerCount = 0;
// 横向轮播新闻
var newsArr = [
  "4·1 愚人节防骗彩排",
  "4·1 愚人节防骗彩排",
  "4·1 愚人节防骗彩排",
];
function showNews() {
  var targetNews = newsArr[Math.floor(Math.random() * newsArr.length)];
  var $targetDom = $(
    '<span class="slider-item word">' + targetNews + "</span>"
  );
  $("#slider").append($targetDom);
  setTimeout(function () {
    $targetDom.remove();
  }, 4300);
}
// showNews()
setInterval(function () {
  showNews();
}, 1600);

// 开始按钮
$(".btn").on("click", function () {
  var _this = $(this);
  _this.addClass("btn-active");
  // 按钮动画
  setTimeout(function () {
    _this.removeClass("btn-active");
    switch (_this.data("operate")) {
      case "start":
        clickStart();
        break;
      case "zhen":
        answerQuestion.checkAnswer(true);
        break;
      case "jia":
        answerQuestion.checkAnswer(false);
        break;
      case "restart":
        rePlay();
        break;
      case "store":
        toSaveImage();
        break;
      default:
        break;
    }
  }, 200);
});

// 背景音频切换播放
$("#player").on("click", function () {
  if (MUSIC.bgm.playing()) {
    MUSIC.bgm.pause();
  } else {
    MUSIC.bgm.play();
  }
});

// 开始按钮
function clickStart() {
  // 埋点 - 点击首页开练按钮
  buriedPoint("REPORT_BTN_CLICK", "begin");

  // // 埋点 - 显示规则页（倒计时）
  window.TencentKdAct.setPageNumber("yuren02");
  buriedPoint("REPORT_PAGE_EXPOSURE");
  buriedPoint("REPORT_PAGE_VIEW");

  $(".part-question")
    .addClass("part-active")
    .siblings()
    .removeClass("part-active");
  transtionCount();
  cardQuestion();
}
var CountDownTimer; // 定时器
// 点击卡片任意处 开始
$(".pic-transtion-card").on("click", function () {
  clearInterval(CountDownTimer);
  hideTranstion();
});
// 倒计时
function transtionCount() {
  buriedPointTime();
  var count = 2;
  CountDownTimer = setInterval(function () {
    $("#count").text(count);
    count--;
    if (count < 0) {
      CountDownTimer && clearInterval(CountDownTimer);
      // 隐藏过渡页
      hideTranstion();
    }
  }, 1000);
}

// 过度页隐藏
function hideTranstion() {
  // 埋点 - 显示答题页【问题一】
  window.TencentKdAct.setPageNumber("yuren03");
  buriedPoint("REPORT_PAGE_EXPOSURE");
  buriedPoint("REPORT_PAGE_VIEW");
  buriedPointTime();

  $("#count").css("display", "none");
  $(".progress").addClass("progress-active");
  $(".pic-transtion-card").addClass("card-active-leftStart");
  // 渲染答题卡
  setTimeout(function () {
    $(".pic-transtion-card").css("display", "none");
  }, 700);
}

// 答题卡渲染
function cardQuestion() {
  cardArr = [].concat(
    getRandomArrayElements(fakeNews, 3),
    getRandomArrayElements(trueNews, 7)
  );
  cardArr.shuffle();
  var cardDom = [];
  resultNewsList = [];
  for (var i = 1; i < cardArr.length + 1; i++) {
    cardDom.push(
      '<div class="pic pic-card" id="card' +
        i +
        '"><img class="pic-card-inner" src="' +
        cardArr[i - 1].pic +
        '" alt=""></div>'
    );
    if (cardArr[i - 1].real) {
      resultNewsList.push({
        pic: "./img/newsItem/" + cardArr[i - 1].real + ".png",
      });
    }
  }
  cardArr.reverse();
  // 清空答题卡
  // 重新增加新的答题卡
  $("#cardBox").empty().append(cardDom.join(""));
}

// 答题  左滑动动画 .8秒   右滑动动画 1.2秒
var answerQuestion = (function () {
  var currentNum = 10;
  var progress = 0;
  var rollLock = false;
  return {
    // 验证答案
    checkAnswer: function (bl) {
      // 点击锁
      if (rollLock) {
        return;
      }
      rollLock = true;

      var currentDom = "#card" + currentNum;
      var that = this;
      // 答对了
      if (bl === cardArr[progress].answer) {
        // 答对了
        MUSIC.right.play();
        answerCount++;
        if (currentNum > 1) {
          if (bl) {
            // 往左滑
            $(currentDom).addClass("card-active-right-left");
          } else {
            // 往右滑
            $(currentDom).addClass("card-active-right-right");
          }
          that.hideCard();
        } else {
          that.showResult();
        }
      } else {
        // 答错了
        MUSIC.error.play();
        if (currentNum > 1) {
          if (bl) {
            // 往右滑
            $(currentDom).addClass("card-active-error-right");
          } else {
            // 往左滑
            $(currentDom).addClass("card-active-error-left");
          }
          // 抖动动画等待0.4s
          setTimeout(function () {
            that.hideCard();
          }, 300);
        } else {
          that.showResult();
        }
      }
    },
    hideCard: function () {
      var currentDom = "#card" + currentNum;
      currentNum--;
      progress++;
      // 进度条更新
      setTimeout(function () {
        $(".progress-rate").width(progress * 10 + "%");
        $(".progress-count").text(progress + " / 10");
      }, 300);
      // 隐藏当前答题卡
      setTimeout(function () {
        $(currentDom).css("display", "none");
        rollLock = false;
      }, 600);

      // 埋点 - 显示答题页
      let topicNumber = Number(progress) + 3;
      window.TencentKdAct.setPageNumber(
        "yuren" + (topicNumber < 10 ? "0" + topicNumber : topicNumber)
      );
      buriedPoint("REPORT_PAGE_EXPOSURE");
      buriedPoint("REPORT_PAGE_VIEW");
      buriedPointTime();
    },
    reset: function () {
      currentNum = 10;
      progress = 0;
    },
    showResult: function () {
      $(".progress-rate").width("100%");
      $(".progress-count").text("10 / 10");
      setTimeout(function () {
        rollLock = false;
        $(".part-wrapper").addClass("part-wrapper-result");
        $(".part-result")
          .addClass("part-active")
          .siblings()
          .removeClass("part-active");
        renderResult();
      }, 300);
    },
  };
})();

let userName = "",
  userAvatar = "./img/pic-placeholder-avatar.jpg";
window.TencentKdAct.getUserInfo(function (userInfo) {
  if (userInfo) {
    userAvatar = userInfo.avatar;
    $("#shareAvatar").attr("src", userInfo.avatar);
    userName = userInfo.nickName;
  }
});
// 设置结果页面数据
function renderResult() {
  var grade = ["F", "D", "C", "B", "A", "A"][parseInt(answerCount / 2)],
    //
    resultInfoTip = [
      "愚人节请pick me ，绝对包\n您开心。",
      "根本无法出线，但守住了智\n商的底线。",
      "都怪我太年轻，这节目来早\n了。",
      "再聪明一点点就能出道。",
      "4·1 愚人节，请用最强的骗\n术帮我完成公演。",
      "4·1 愚人节，请用最强的骗\n术帮我完成公演。",
    ][parseInt(answerCount / 2)],
    name = userName || "我是用户名";
  $("#resultGrade").text(grade);
  $("#resultCount").text(answerCount);
  $("#resultName").text(name);
  $(".result-info-tip").text(resultInfoTip);
  var shareAvatar = new Image();
  shareAvatar.onload = function () {
    drawImageShare(grade, answerCount, name, resultInfoTip, shareAvatar);
  };
  shareAvatar.crossOrigin = "Anonymous";
  shareAvatar.src = userAvatar;
  setResultNews();

  // 埋点 - 显示结果页
  window.TencentKdAct.setPageNumber("yuren13");
  buriedPoint("REPORT_PAGE_EXPOSURE");
  buriedPoint("REPORT_PAGE_VIEW");
  buriedPointTime();
}
// 设置结果页新闻
function setResultNews() {
  var news = getRandomArrayElements(resultNewsList, resultNewsList.length);
  var newsTpl = [];
  var like =
    "https://kandian.qq.com/mqq/watchspot/activityplatform/newTopicView.html?bid=3654&article_type=0&rowkey=516605c1b02722KL&topic_id=1544471&talk_id=1605015014_2486361616648963122";
  $.each(news, function (i, v) {
    newsTpl.push(
      '<a href="' +
        like +
        '" class="news-item"><img class="news-item-pic" src="' +
        v.pic +
        '"></a>'
    );
  });
  $("#newsList").empty().append(newsTpl.join(""));
}
$(".news-list").on("click", ".news-item", function () {
  buriedPoint("REPORT_BTN_CLICK", "thenews");
});

$(".share-dialog-content").on("touchstart", function () {
  buriedPoint("REPORT_SAVE_IMAGE");
});
// 保存图片 打开弹窗
function toSaveImage() {
  // 埋点 - 点击保存按钮
  buriedPoint("REPORT_BTN_CLICK", "save");
  $("#player").css("display", "none");
  $(".share-dialog").addClass("share-dialog-active");
}

// 重玩
function rePlay() {
  // 埋点 - 点击重玩按钮
  buriedPoint("REPORT_BTN_CLICK", "playagain");
  $(".part-wrapper").removeClass("part-wrapper-result");
  $(".part-question")
    .addClass("part-active")
    .siblings()
    .removeClass("part-active");
  $(".pic-transtion-card").removeClass("card-active-leftStart");
  $(".progress").addClass("progress-active");
  $(".progress-rate").width("0%");
  $(".progress-count").text("0 / 10");
  $("#saveImage").css("display", "none");
  // 重置答题数据
  answerQuestion.reset();
  answerCount = 0;
  // 渲染答题卡
  cardQuestion();
}
// 关闭弹框
$(".share-dialog-close").on("click", function () {
  $("#player").css("display", "block");
  $(".share-dialog").removeClass("share-dialog-active");
});

// 生成分享图片
/**
 *
 * @param {string} grade '等级'
 * @param {Number} number '答题正确数'
 * @param {string} name '名字'
 * @param {string} text '文案'
 */

function drawImageShare(grade, number, name, text, shareAvatar) {
  var shareBg = document.getElementById("shareBg");
  var shareQrcode = document.getElementById("shareQrcode");
  grade = grade || "F";
  number = number || "0";
  name = name || "创造营";
  text = text || "愚人节请pick me ，绝对包\n您开心。";
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 750;
  canvas.height = 1334;
  ctx.drawImage(shareBg, 0, 0, 750, 1334);
  circleImg(ctx, shareAvatar, 130, 807, 57);
  ctx.drawImage(shareQrcode, 580, 1195, 90, 90);
  // drawBg(ctx, 'img/bg-share.jpg')
  // 等级
  ctx.save();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "104px WY";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(grade, 534, 868);
  ctx.restore();
  // 答题数
  ctx.save();
  ctx.fillStyle = "#30ffcc";
  ctx.font = "35px WY";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  if (number >= 10) {
    ctx.fillText(number, 445, 944);
  } else {
    ctx.fillText(number, 448, 944);
  }
  ctx.restore();

  // 用户名称
  ctx.save();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "32px WY";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  if (name.length > 6) {
    name = name.substr(0, 6) + "...";
  }
  ctx.fillText(name, 90, 1035);
  ctx.restore();

  // 介绍文案
  ctx.save();
  ctx.fillStyle = "#230479";
  ctx.font = "30px WY";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  text.split(/[(\r\n)\r\n]+/).forEach(function (v, i) {
    if (text.split(/[(\r\n)\r\n]+/).length == 2) {
      ctx.fillText(v, 340, 970 + i * 38);
    } else {
      ctx.fillText(v, 340, 970);
    }
  });
  ctx.restore();

  $("#saveImage").attr("src", canvas.toDataURL());
  $("#saveImage").css("display", "block");
}

function circleImg(ctx, img, x, y, r) {
  ctx.save();
  var d = 2 * r;
  var cx = x + r;
  var cy = y + r;
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(img, x, y, d, d);
  ctx.restore();
}

/**
 * 音频模块管理
 */

var MUSIC = {};
function initMusic() {
  MUSIC = {
    bgm: new Howl({
      src: ["img/audio-bg.mp3"],
      volume: 0.07,
      autoplay: true,
      preload: true,
      html5: true,
      loop: true,
      onplay: function () {
        $("#player").addClass("player-active");
      },
      onpause: function () {
        $("#player").removeClass("player-active");
      },
      onend: function () {
        $("#player").removeClass("player-active");
      },
      onstop: function () {
        $("#player").removeClass("player-active");
      },
    }),
    error: new Howl({
      src: ["img/audio-error.mp3"],
      html5: true,
      preload: true,
    }),
    right: new Howl({
      src: ["img/audio-right.mp3"],
      html5: true,
      preload: true,
    }),
  };
}
initMusic();
// 自动播放音乐
document.addEventListener("WeixinJSBridgeReady", function () {
  var isPlaying = MUSIC.bgm.playing();
  if (!isPlaying) {
    MUSIC.bgm.play();
  }
});
// 背景音频控制按钮
$(".bgm-toggle").click(function () {
  var isPlaying = MUSIC.bgm.playing();
  if (isPlaying) {
    MUSIC.bgm.pause();
  } else {
    MUSIC.bgm.play();
  }
});
var bgmH = false;
/**
 * 判断当前页面是否隐藏
 */
function getHidden() {
  var prefixs = ["webkit", "moz", "mos", "o"];
  if ("hidden" in document) return document.hidden;
  for (var i = 0; i < prefixs.length; i++) {
    if (`${prefixs[i]}Hidden` in document) {
      return document[`${prefixs[i]}Hidden`];
    }
  }
  // not support
  return null;
}
function pageHiddenHandler() {
  var isHidden = getHidden();
  if (isHidden) {
    if (MUSIC.bgm.playing()) {
      bgmH = true;
    }
    MUSIC.bgm.pause();
  } else {
    if (bgmH) {
      MUSIC.bgm.play();
      bgmH = false;
    }
  }
}

document.addEventListener("visibilitychange", pageHiddenHandler, false);
var overscroll = function (el) {
  el.addEventListener("touchstart", function () {
    var top = el.scrollTop,
      totalScroll = el.scrollHeight,
      currentScroll = top + el.offsetHeight;
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if (top === 0) {
      el.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  });
  el.addEventListener("touchmove", function (evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if (el.offsetHeight < el.scrollHeight) evt._isScroller = true;
  });
};
overscroll(document.querySelector(".scroll"));
document.body.addEventListener(
  "touchmove",
  function (evt) {
    //In this case, the default behavior is scrolling the body, which
    //would result in an overflow.  Since we don't want that, we preventDefault.
    if (!evt._isScroller) {
      evt.preventDefault();
    }
  },
  { passive: false }
);

// 数组随机
Array.prototype.shuffle = function () {
  var arr = this;
  for (var i = arr.length - 1; i >= 0; i--) {
    var randomIdx = Math.floor(Math.random() * (i + 1));
    var itemAtIdx = arr[randomIdx];
    arr[randomIdx] = arr[i];
    arr[i] = itemAtIdx;
  }
  return arr;
};
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

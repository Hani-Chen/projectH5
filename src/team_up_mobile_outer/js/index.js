var isPortrait = false
// var initSizeFixed = function() {
//     var sizeFix = function() {
//         var $wrap = $('body'),
//             w = $(window).width(),
//             h = $(window).height(),
//             d,
//             rate = 750
//         if (orientation == 90 || orientation == -90) {
//             $wrap.css({
//                 width: h,
//                 height: w,
//                 '-webkit-transform':
//                     'rotate(-90deg) translate3d(' + -h + 'px,0,0)',
//                 'transform-origin': '0 0'
//             })
//             $('.pop').css({
//                 width: h,
//                 height: w,
//                 '-webkit-transform': 'translate3d(0,0,0)'
//             })
//             d = h
//             isPortrait = true
//         } else {
//             $wrap.css({
//                 width: w,
//                 height: h,
//                 '-webkit-transform': 'none'
//             })
//             $('.pop').css({
//                 width: w,
//                 height: h,
//                 '-webkit-transform': 'translate3d(0,0,0)'
//             })
//             d = w
//             isPortrait = false
//         }
//         $('html').css({ fontSize: (d / rate) * 100 })

//         pageSwiper && (pageSwiper.params.isReverse = isPortrait)
//         swiperHeader && (swiperHeader.params.isReverse = isPortrait)
//     }
//     sizeFix()

//     var is_ipad = /(iPad|iPod)/i.test(navigator.userAgent)
//     if (is_ipad) {
//         $(window).on('load orientationchange', function() {
//             sizeFix()
//             setTimeout(sizeFix, 300)
//         })
//     } else {
//         $(window).on('load resize', function() {
//             sizeFix()
//             setTimeout(sizeFix, 300)
//         })
//     }
// }
// initSizeFixed()

/*global jQuery */
;(function($) {
    'use strict'
    var definer = $(
            '<div dir="rtl" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: -1000px; overflow: scroll">ABCD</div>'
        ).appendTo('body')[0],
        type = 'reverse'

    if (definer.scrollLeft > 0) {
        type = 'default'
    } else {
        definer.scrollLeft = 1
        if (definer.scrollLeft === 0) {
            type = 'negative'
        }
    }

    $(definer).remove()
    $.support.rtlScrollType = type
})(jQuery)

window.windowwidth = $(window).width()
$('.teamup').scroll(function(event) {
    $('.list-box').removeClass('show')
    $('.list-item-arrow').removeClass('rotate')
    $('.list-secondary').removeClass('show')
    // 已经滚过的区域

    var offsetTop = isPortrait
        ? $('.teamup-tabbar-wrapper').offset().left
        : $('.teamup-tabbar-wrapper').offset().top
    if (offsetTop <= 0) {
        $('.teamup-tabbar-affix')
            .addClass('affixed')
            .css(
                'background-position-y',
                offsetTop - adaptive.remToPx(0.75) + 'px'
            )
    } else {
        $('.teamup-tabbar-affix').removeClass('affixed')
    }
})
// 設置tabbar滾動效果
function setScrollItem(index) {
    var isAr = $('body').is('.ar')

    var target = $('.tab-item')[index]
    $('.tab-item').removeClass('active')
    $(target).addClass('active')
    var offsetWidth = target.offsetLeft - adaptive.remToPx(0.24)
    // 阿語滾動方向相反，需要單獨處理
    if (isAr) {
        var offsetLeft = target.offsetLeft
        if (jQuery.support.rtlScrollType == 'default') {
            offsetWidth =
                $('.tabbar')[0].scrollWidth -
                window.innerWidth * 2 +
                target.offsetWidth +
                offsetLeft +
                adaptive.remToPx(0.24)
        } else {
            offsetWidth =
                target.offsetLeft +
                adaptive.remToPx(0.24) -
                window.innerWidth +
                target.offsetWidth
        }
    }

    $('.tabbar').animate({ scrollLeft: offsetWidth + 'px' }, 300)
}
$('.tab-item').click(function() {
    var index = $(this).index()
    pageSwiper.slideTo(index)
    setScrollItem(index)
})

var pageSwiper = new Swiper('#page', {
    resistanceRatio: 0.7,
    autoHeight: true,
    isReverse: isPortrait,
    on: {
        transitionStart: function() {
            setScrollItem(this.activeIndex)
            $('.vfx').removeClass('vfx')
        }
    }
})

function isScrollEvent(bl) {
    if (bl) {
        // 放開滾動事件
        $('.teamup').removeClass('overflow')
    } else {
        // 禁止滾動事件
        $('.teamup').addClass('overflow')
    }
}

// 阻止冒泡事件
function bubble($element) {
    $element.click(function(e) {
        e.stopPropagation()
    })
}
// 活动规则弹窗
$('.teamup-rules').click(function() {
    $('[data-rule]').addClass('show')
    isScrollEvent(false)

    // 活动规则打点
    gtag('event', 'x_click', {
        event_category: '20190617teamup',
        event_label: 'm_action_rule'
    })
})

// 点击点赞
$('.rank-btn').click(function() {
    // 投票打点
    gtag('event', 'x_jump', {
        event_category: '20190617teamup',
        event_label: 'm_vote_link'
    })
})

// 点击分享
$('[data-shareplay]').click(function() {
    $(this)
        .parents('.pop')
        .removeClass('show')
    $('[data-share]').addClass('show')
    isScrollEvent(false)
})

// 点击头像
$('.rank-img').click(function() {
    // 显示选手详情弹窗
    $('[data-introduce]').addClass('show')
    isScrollEvent(false)

    // 选手详情打点
    gtag('event', 'x_click', {
        event_category: '20190617teamup',
        event_label: 'm_details'
    })
})

// 弹窗关闭
$('[data-shut]').click(function() {
    $(this)
        .parents('.pop')
        .removeClass('show')
    isScrollEvent(true)

    // 弹窗关闭打点
    gtag('event', 'x_click', {
        event_category: '20190617teamup',
        event_label: 'm_shut_icon'
    })
})

// 弹窗关闭
$('.pop').click(function() {
    $(this).removeClass('show')
    isScrollEvent(true)

    // 点击空白区域 - 关闭 - 打点
    gtag('event', 'x_click', {
        event_category: '20190617teamup',
        event_label: 'm_pop_shut'
    })
})

// 点击头部下载
$('[data-download]').click(function() {
    $('.download-list-box').toggleClass('show')
    $('.list-box').removeClass('show')
})

// 点击头部nav
$('[data-nav]').click(function() {
    $('.list-box').toggleClass('show')
    $('.list-item-arrow').removeClass('rotate')
    $('.list-secondary').removeClass('show')
    $('.download-list-box').removeClass('show')
})

// 点击子导航
$('[data-subnavigation]').click(function() {
    $(this)
        .children('.list-item-arrow')
        .toggleClass('rotate')
    $(this)
        .children('.list-secondary')
        .toggleClass('show')
})

// 头部轮播
var swiperHeader = new Swiper('.swiper-header', {
    loop: true, // 循环模式选项
    isReverse: isPortrait,
    // 自动轮播
    autoplay: {
        disableOnInteraction: false
    }
})

// 判断如果只有一张轮播图 销毁自动轮播
if (swiperHeader.slides.length <= 3) {
    swiperHeader.destroy()
}

// 阻止弹窗冒泡
bubble($('.pop-rule-content'))
bubble($('.pop-share-content'))
bubble($('.pop-like-content'))
bubble($('.pop-introduce-content'))
bubble($('.pop-none-content'))
bubble($('.secondary-item'))

//监听屏幕尺寸变化
window.onresize = function() {
    // pageSwiper.updateAutoHeight(0);
    setTimeout(function() {
        pageSwiper.updateSize()
        pageSwiper.updateAutoHeight(0)
        setScrollItem(pageSwiper.realIndex)
    }, 1000)
}

// 下载按钮判断 是安卓机 还是 ios
let u = navigator.userAgent
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //判断是否是 android终端
let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //判断是否是 iOS终端
if (isIOS) {
    $('.download-apk')
        .parent()
        .addClass('hide')
    $('body').addClass('ios')
    $('html').addClass('ios')
} else if (isAndroid) {
    $('.download-apple')
        .parent()
        .addClass('hide')
    $('body').removeClass('ios')
    $('html').removeClass('ios')
}

//动态插入数据后调入此函数
function insertBox() {
    var length = $('.rank-content-box').children().length
    console.log(length)
    if (length % 3 != 0) {
        $('<div class="rank-item"></div>').appendTo('.rank-content-box')
    }
}

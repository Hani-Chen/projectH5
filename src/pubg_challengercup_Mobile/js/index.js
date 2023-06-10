'use strict';

(function(){

    // 固定使用的对象/变量
    
    // 固定绑定的页面事件

    // 监听tab导航栏的点击切换事件
    $('.tabbar_list>li').click(function(){
        var $elem = $(this)
        var $target = $('#'+$elem.data('target'))
        
        // 移除所有tab项和tab内容页的active类
        $('.tabbar_list>li,.tab_pane').removeClass('active')

        // 为当前点击的tab项和及其对应的tab内容页增加active类
        $target.addClass('active')
        $elem.addClass('active')
    })

    // 封装好的方法

    // 页面启动的代码

})();
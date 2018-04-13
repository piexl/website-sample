/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2017-04-08
*/

var Component = function(){
    var component = this;

    //返回顶部
    component.GoTopInit = function(){
        var $comGotop = $('.com-gotop'),
            initScrollTop = $(window).scrollTop();
        function ShowGotop(top){
            if (top > 100) {
                $comGotop.removeClass('hide');
            } else {
                $comGotop.addClass('hide');
            }
        }
        ShowGotop(initScrollTop);
        $(window).on('scroll',function(){
            var scrollTop = $(this).scrollTop(),
                screenHeight = $(window).height();
            ShowGotop(scrollTop);
        });
        $comGotop.click(function(){
            $('body,html').animate({ scrollTop: 0 }, 500);
        });
    }
    component.Init = function(){
        component.GoTopInit();
        console.log('component init');
    }();
}
var Component = new Component();
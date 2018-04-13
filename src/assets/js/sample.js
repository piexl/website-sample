/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2017-04-08
*/

var Sample = function(){
    var sample = this;
    //幻灯片初始化
    sample.SwiperInit = function(){
        var $swiperSample = $('.swiper-sample');
        sample.mainSwiper = new Swiper($swiperSample, {
            loop: true,
            // 如果需要分页器
            pagination: $swiperSample.find('.swiper-pagination'),
            // 如果需要前进后退按钮
            nextButton: $swiperSample.find('.swiper-sample .swiper-button-next'),
            prevButton: $swiperSample.find('.swiper-sample .swiper-button-prev'),
        })
    }
    //初始化
    sample.Init = function(){
        sample.SwiperInit();
        console.log('sample init');
        //console.log('Unit', Unit);
    }();
}
var Sample = new Sample();
/**
 * Created by QQ794520386 on 2017/3/15.
 */
define(['zepto','mychart','swiper','swiperAnimate'],function ($,ecs) {

    //切换
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 1,
        pagination: '.swiper-pagination',
        //virtualTranslate : true,
        mousewheelControl: true,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
        },
        onTransitionEnd: function (swiper) {
            swiperAnimate(swiper);
        },
        watchSlidesProgress: true,
        onSlideChangeStart: function (swiper) {
            var ix = swiper.activeIndex;
            if (ix == '4') {
                ecs.workEP.setOption(wkOption);
            } else if (ix == '5') {
                ecs.myChart.setOption(option);
            }
        }
    });
})
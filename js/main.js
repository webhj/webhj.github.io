/**
 * @author wjl(794520386@qq.com)
 * @Created 2017/3/15
 */
require.config({
    baseUrl: "js/",
    paths: {
        //'css':'css.min', //css加载器
        'zepto': ["zepto"],
        'echarts':["echarts"],
        'swiper':["swiper"],
        'swiperAnimate':["swiperAnimate"]
    },
    shim: {
        "zepto": {
            //非标准模块化
            exports: "$"
        },
        'swiper': ['zepto']
        //,'swiperAnimate': ['swiper','css!../css/animate.min.css'] //swiperAnimate加载swiper和animate.min.css依赖
    },
    waitSeconds: 0
})
require(['zepto'], function ($) {
    $(function () {
        $('#load').hide();
        $('#array').show();
        //音乐
        var music = $('#music'),
            musicAudio = document.getElementById("music-audio");
        music.click(function () {
            if (musicAudio.paused) {
                musicAudio.play();
                $(this).removeClass('stopped')
            }
            else {
                musicAudio.pause();
                $(this).addClass('stopped')
            }

        })
    });
})

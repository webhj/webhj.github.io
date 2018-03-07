/**
 * Created by QQ794520386 on 2017/3/15.
 */
define(['echarts'],function (echarts) {
    //图表颜色定义
    var colorLists = ['#fdffda', '#f4ffe6', '#cdffe1', '#d3ecff', '#ffeeec'];

    var setColors = function (params, option, colorList) {
        var colorDATA = option.series[0].data;

        var maxDATA = [];
        for (var i in colorDATA) {
            maxDATA.push(colorDATA[i].value)
        }
        var patterns = /null/g;
        var colorDATAStr = maxDATA.join();
        var colorDATAStr = colorDATAStr.replace(patterns, '0');
        maxDATA = colorDATAStr.split(',');
        var numMax = Math.max.apply(null, maxDATA);
        var colorListIng = [];
        var a = 0;
        for (var x in maxDATA) {
            colorListIng[x] = colorList[x];
            if (maxDATA[x] == numMax && numMax > 0) {
                a++
                if (a > 1) {
                    colorListIng[x] = colorList[x]
                } else {
                    colorListIng[x] = '#ffa2ae';
                }
            } else {
                colorListIng[x] = colorList[x]
            }
        }
        return colorListIng[params.dataIndex]
    };

    //工作经历
    var workEP = echarts.init(document.getElementById('works'));
    var dataS = ['2008/10 -- 2010/10', '2010/11 -- 2013/12', '2014/05 -- 2016-/07'];
    wkOption = {
        grid: {
            left: '8%',
            right: '0',
            bottom: '12%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['众和睿杰', '爸妈在线', '华讯方舟'],
                axisLabel: {
                    textStyle: {
                        color: colorLists[0]
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: colorLists[0]
                    }
                }
            }
        ],
        yAxis: {
            axisLabel: {
                formatter: function (val) {
                    return val + '年';
                }
            },

            splitNumber: 3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: colorLists[0]
                }
            }

        },
        series: [
            {
                name: '工作时间',
                type: 'bar',
                data: [2, 3, 2],
                itemStyle: {
                    normal: {color: '#ffa2ae'}
                }
            }
        ],
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (obj) {
                var names = obj.name;
                //console.log(names);
                var dateSE = '';
                if (names == '众和睿杰') {
                    dateSE = dataS[0] + '<p><b>工作描述：</b></p><p>网页界面设计，XTHML+CSS排版，FLASH制作及LOGO设计等。</p>'
                } else if (names == '爸妈在线') {
                    dateSE = dataS[1] + '<p><b>工作描述：</b></p><p>负责公司的整体网站界面设计，WEB前端开发，页面优化、Seo等，主要以心理咨询、心理百科、心理问答 、心理圈子等版块组成。</p>'
                } else if (names == '华讯方舟') {
                    dateSE = dataS[2] + '<p><b>工作描述：</b></p><p>任职前端设计组组长，接触的项目主要为智慧城市、智慧教育行业的终端产品，主要负责后台的web前端页面开发、APP端内嵌的H5页面以及app视觉设计的管理工作。</p>'
                }
                return names + '<br><b>工作时间：</b><br>' + dateSE;
            }
        }

    };

    //主要技能
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        calculable: true,
        series: [
            {
                name: ' ',
                type: 'pie',
                radius: [5, 35],
                center: ['55%', '25%'],
                roseType: 'radius',
                data: [
                    {value: 4, name: 'HTML5'},
                    {value: 5, name: 'css3'},
                    {value: 5, name: 'Ajax'},
                    {value: 4, name: 'JavaScript'}

                ],
                itemStyle: {
                    normal: {
                        color: '#FFEFD4'
                    }
                }
            }, {
                name: ' ',
                type: 'pie',
                radius: [5, 35],
                center: ['55%', '75%'],
                roseType: 'radius',
                data: [
                    {value: 5, name: 'Zepto'},
                    {value: 6, name: 'jQuery'},
                    {value: 6, name: 'Vue.js'},
                    {value: 5, name: 'Bootstrap'},
                    {value: 4, name: 'Gulp'},
                    {value: 3, name: 'AngularJS'}

                ],
                itemStyle: {
                    normal: {
                        color: '#FFEFD4'
                    }
                }
            }
        ]
    };


    option.series[0].itemStyle.normal.color = function (params) {
        var goColor = setColors(params, option, colorLists)
        return goColor
    };
    option.series[1].itemStyle.normal.color = function (params) {
        var goColor = setColors(params, option, colorLists)
        return goColor
    };

    return {
        workEP:workEP,
        myChart:myChart
    }
});
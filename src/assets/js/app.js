/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2017-04-08
*/

var App = function(){
    var app = this;
    //项目配置信息
    app.defeatPageNum = 3; //默认分页数
    var api_domain = 'http://panama.projects.dragontrail.com'; //设置示例接口链接
    app.api = api_domain + '/api/'; //api地址 api_domain 由后端设置在_footer.html中传入

    //打开弹层
    app.OpenCoverLayer = function () {
        app.oldSrcollTop = $(window).scrollTop();
        $('body,html').addClass('un-scroll');
    }
    //关闭弹层
    app.CloseCoverLayer = function () {
        $('body,html').removeClass('un-scroll');
        $(window).scrollTop(app.oldSrcollTop);
    }

    /**
     * LoadMoreAjax 发送加载更多ajax请求
     * 
     * @param {Boolean}    isLoadingMore  是否为加载更多
     * @param {Object}     $elemet        列表jq对象
     * @param {String}     url            请求的url
     * @param {Object}     params         传递参数
     *        @param {Number} paged         分页id
     * @param {Function}   callback       回调函数
     * @example
     */
    app.LoadMoreAjax = function (isLoadingMore, $elemet, url, params, callback) {
        var loading_tpl = '<div class="inline-loading">' +
            '<div class="inline-loading-inner clear-float">' +
            '<div class="loading-img float-left"><img src="../assets/imgs/loading.gif" alt=""></div>' +
            '</div>' +
            '</div>';
        if (isLoadingMore) {
            $elemet.after(loading_tpl);
        }
        $.ajax({
            url: app.api + url,
            data: params,
            dataType: 'json',
            success: function (data) {
                callback && callback(data);
            },
            error: function (res) {
                console.log('error', res);
            },
            complete: function () {
                if (isLoadingMore) {
                    $('.inline-loading').remove();
                }
            }
        });
    }

    /**
     * ListMoreInit 列表滚动加载更多
     * 
     * @param {Object} $list            列表jq对象
     * @param {String} url              请求的url
     * @param {Object} params           请求的参数
     *        @param {Number} paged         分页id
     * @param {Boolean} listIsAjaxEnd   列表是否加载完
     * @param {Function} callback       回调函数
     * @example
     */
    app.ListMoreInit = function ($list, url, params, listIsAjaxEnd, callback) {
        app.listIsAjax = false;
        app.listIsAjaxEnd = listIsAjaxEnd;
        app.loadMoreParam = params;
        //滚动加载
        if (!app.isAjaxEnd) {
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop(),
                    windowHeight = $(window).height(),
                    documentHeight = $(document).height(),
                    isScrollFooter = scrollTop + windowHeight >= documentHeight;
                if (isScrollFooter && !app.listIsAjax && !app.listIsAjaxEnd) {
                    app.listIsAjax = true;
                    app.LoadMoreAjax(true, $list, url, app.loadMoreParam, function (data) {
                        app.listIsAjax = false;
                        app.loadMoreParam.paged++
                        callback && callback(data, url, params);
                    });
                }
            });
        }
    }

    app.Init = function(){
        console.log('app init');
    }();
}
var App = new App();
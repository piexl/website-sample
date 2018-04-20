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
    var api_domain = 'http://ush.projects.dragontrail.com/'; //设置示例接口链接
    app.api = api_domain + '/api/'; //api地址 api_domain 由后端设置在_footer.html中传入
    /**
     * LoadMoreAjax 发送加载更多ajax请求
     * 
     * @param {boolean}    isLoadingMore  是否为加载更多
     * @param {object}     $elemet        列表jq对象
     * @param {string}     postType       分类类型
     * @param {object}     props          传递参数
     *        @param {string} page        页面
     * @param {function}   callback       回调函数
     * @example App.LoadMoreAjax(true, $lsit, 'destination', { page:2, }, function (data) { })
     */
    app.LoadMoreAjax = function (isLoadingMore, $elemet, postType, props, callback) {
        var loading_tpl = '<div class="inline-loading">' +
            '<div class="inline-loading-inner clear-float">' +
            '<div class="loading-img float-left"><img src="/assets/imgs/loading.gif" alt=""></div>' +
            '<div class="loading-text float-left">加载中</div>' +
            '</div>' +
            '</div>';
        if (isLoadingMore) { $elemet.after(loading_tpl); }
        $.ajax({
            url: app.api + 'mag.' + postType + '.list.json',
            data: props,
            dataType: 'json',
            success: function (data) {
                callback && callback(data);
            },
            error: function (res) {
                console.log('error', res);
            },
            complete: function () {
                if (isLoadingMore) { $('.inline-loading').remove(); }
            }
        });
    }
    /**
     * ListMoreInit 列表滚动加载更多
     * 
     * @param {object} $list           列表jq对象
     * @param {string} postType        post类型
     * @param {boolean} listIsAjaxEnd   列表是否加载完
     * @param {function} callback        回调函数
     * @example App.ListMoreInit($list，'destination', true, function (data, postType) { })
     */
    app.ListMoreInit = function ($list, postType, listIsAjaxEnd, callback) {
        app.listPage = 2;
        app.listIsAjax = false;
        app.listIsAjaxEnd = listIsAjaxEnd;
        //滚动加载
        if (!app.isAjaxEnd) {
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop(),
                    windowHeight = $(window).height(),
                    documentHeight = $(document).height(),
                    isScrollFooter = scrollTop + windowHeight == documentHeight;
                if (isScrollFooter && !app.listIsAjax && !app.listIsAjaxEnd) {
                    app.listIsAjax = true;
                    app.LoadMoreAjax(true, $list, postType, { page: app.listPage }, function (data) {
                        app.listIsAjax = false;
                        app.listPage++;
                        callback && callback(data, postType);
                    });
                }
            });
        }
    }

    app.init = function(){
        console.log('app init');
    }();
}
var App = new App();
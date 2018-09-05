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
    //视频弹层
    component.VideoInit = function(){
        $('body').on('click', 'a[data-role="video"]', function (event) {
            event.preventDefault();
            var $this = $(this),
                videoUrl = $this.attr('href');
                poster = $this.data('poster');
            console.log('videoUrl', videoUrl);
            if (videoUrl !== '') {
                var videoTpl = '<div class="com-video-cover" id="videoCover">' +
                    '<div class="cover-inner">' +
                    '<div class="inner-box">' +
                    '<div class="cover-content">' +
                    '<button class="close-btn"><i class="iconfont icon-close"></i></button>' +
                    '<video src="' + videoUrl + '" poster="' + poster + '" controls="controls" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true" x5-video-player-type="h5" x5-video-orientation="h5" x5-video-player-fullscreen="true">' +
                    '</video>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                App.OpenCoverLayer();
                $('body').append(videoTpl);
                var $videoCover = $('#videoCover'),
                    $closeBtn = $videoCover.find('.close-btn'),
                    thisVideo = $videoCover.find('video')[0],
                    otherVideo = $('video')[0];
                if (otherVideo && !otherVideo.paused) {
                    otherVideo.pause();
                }
                if (thisVideo.paused) {
                    thisVideo.play();
                }
                $closeBtn.click(function () {
                    $videoCover.remove();
                    App.CloseCoverLayer();
                });
            }
        });
    }
    //图片查看器
    component.GalleryInit = function () {
        if (component.gallery) {
            component.gallery.destroy();
        }
        $('body').on('click', '[data-role="gallery"]', function (e) {
            e.stopPropagation();
            var swipes = $(this).data("gallery"),
                items = [];
            photoSwipeTpl = '<div class="pswp pswp-cover" id="photoSwipe" tabindex="-1" role="dialog" aria-hidden="true">' +
                '<div class="pswp__bg"></div>' +
                '<div class="pswp__scroll-wrap">' +
                '<div class="pswp__container">' +
                '<div class="pswp__item"></div>' +
                '<div class="pswp__item"></div>' +
                '<div class="pswp__item"></div>' +
                '</div>' +
                '<div class="pswp__ui pswp__ui--hidden">' +
                '<div class="pswp__top-bar">' +
                '<div class="pswp__counter"></div>' +
                '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
                '<div class="pswp__preloader">' +
                '<div class="pswp__preloader__icn">' +
                '<div class="pswp__preloader__cut">' +
                '<div class="pswp__preloader__donut"></div>' +
                '</div>' +
                ' </div>' +
                '</div>' +
                '</div>' +
                '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
                '<div class="pswp__share-tooltip"></div>' +
                '</div>' +
                '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">' +
                '</button>' +
                '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">' +
                '</button>' +
                '<div class="pswp__caption">' +
                '<div class="pswp__caption__center"></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $photoSwipe = $(photoSwipeTpl).appendTo('body');
            // console.log("swipes", swipes);
            swipes.forEach(function (item) {
                items.push({
                    src: item.imageUrl,
                    w: item.width,
                    h: item.height
                })
            });
            component.gallery = new PhotoSwipe($('#photoSwipe')[0], PhotoSwipeUI_Default, items, {
                index: 0, // start at first slide
                bgOpacity: 0.7
            });
            component.gallery.init();
        })
    }
    //搜索
    component.RearchInit = function () {
        function checkSearchKeyword(keyword) {
            if (keyword !== '' && !/^\s*$/g.test(keyword) && keyword !== '.' && !/\//.test(keyword) && !/\\/.test(keyword)) {
                return true;
            } else {
                return false;
            }
        }

        function search(keyword, $input) {
            //console.log('keyword', keyword);
            if (checkSearchKeyword(keyword)) {
                window.location.href = "/search/" + keyword;
            } else {
                $input.addClass('error');
            }
        }
        $('.com-search .search-btn').click(function () {
            var $this = $(this),
                $input = $this.siblings('input[data-role="search"]'),
                keyword = $input.val();
            search(keyword, $input);
        });
        $('input[data-role="search"]').on('keyup', function (event) {
            var $input = $(this),
                keyword = $input.val();
            e = event ? event : (window.event ? window.event : null);
            var currKey = 0;
            currKey = e.keyCode || e.which || e.charCode;
            if (currKey == 13) {
                search(keyword, $input.parents('.search-inner'));
            }
        });
        $('input[data-role="search"]').on('input', function () {
            var $input = $(this),
                isError = $input.hasClass('error'),
                keyword = $input.val();
            if (checkSearchKeyword(keyword)) {
                if (isError) {
                    $input.removeClass('error');
                    $input.parents('.search-inner').removeClass('error');
                }
            } else {
                $input.addClass('error');
                $input.parents('.search-inner').addClass('error');
            }
        });
    }
    component.Init = function(){
        component.GoTopInit();
        component.VideoInit();
        component.GalleryInit();
        component.RearchInit();
        console.log('component init');
    }();
}
var Component = new Component();
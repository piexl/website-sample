
## 项目介绍

website-sample 是整理的响应式网站制作模板，其中整理我们展示类项目制作的基本模板和方法。

## 文件结构

```node
├── assets
│   ├── css                                 //项目样式文件
│   │   ├── ProPreboot.less                     //基础类库
│   │   ├── app.css
│   │   ├── app.less                            //主样式
│   │   ├── component.css
│   │   ├── component.less                      //组件样式
│   │   ├── smaple.css
│   │   └── smaple.less                         //示例页面样式
│   ├── imgs                                //项目图片资源
│   │   ├── loading.gif
│   │   └── nav_rightbar_img.jpg
│   ├── js                                  //项目js
│   │   ├── app.js                             //项目主js库
│   │   ├── component.js                       //组件js库
│   │   ├── sample.js                          //sample页面
│   │   └── unit.js                            //常用小功能集
│   └── vendor                              //第三方库
│       ├── PhotoSwipe                      //图集预览库
│       │   ├── default-skin
│       │   │   ├── default-skin.css
│       │   │   ├── default-skin.png
│       │   │   ├── default-skin.svg
│       │   │   └── preloader.gif
│       │   ├── photoswipe-ui-default.js
│       │   ├── photoswipe-ui-default.min.js
│       │   ├── photoswipe.css
│       │   ├── photoswipe.js
│       │   └── photoswipe.min.js
│       ├── animate                             //css动画库
│       │   └── animate.min.css
│       ├── flexible.js
│       ├── jquery-1.9.1.min.js                 //jquery库
│       └── swiper-3.4.2                        //swiper库
│           ├── css
│           │   └── swiper.min.css
│           └── js
│               ├── swiper.jquery.min.js
│               └── swiper.min.js
└── pages
    └── sample.html                         //项目示例页面
```

## 依赖第三方库

+ [iconfont](http://www.iconfont.cn) 字体图标库
+ [animate.css](https://daneden.github.io/animate.css/) css3动画类库
+ [flexible.js]( https://github.com/amfe/lib-flexible) 手机端适配解决方案[lib-flexible](https://github.com/amfe/article/issues/17)
+ [Jquery](http://hemin.cn/jq/) dom操作库，采用 `1.9.1`版本是为了兼容IE9+
+ [Swiper](http://3.swiper.com.cn/) 幻灯片库，采用`3.4.2`版本也是为了兼容IE9+，`swiper4`只兼容到IE10+
+ [PhotoSwipe](http://photoswipe.com/) 图片幻灯片库，采用`4.1.1`版本

## 项目主文件介绍

主要说明`sample.html`、`app.less`、`app.js`

### sample.html示例模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>samle-page</title>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <!-- 360浏览器 6.5+ 使用 webkit 引擎渲染 -->
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="shortcut icon" href="">
    <link rel="stylesheet" href="../assets/vendor/animate/animate.min.css">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_822169_jqlybm7u4qp.css">
    <link rel="stylesheet" href="../assets/vendor/swiper-3.4.2/css/swiper.min.css">
    <link rel="stylesheet" href="../assets/vendor/PhotoSwipe/photoswipe.css">
    <link rel="stylesheet" href="../assets/vendor/PhotoSwipe/default-skin/default-skin.css">
    <link rel="stylesheet" href="../assets/css/app.css">
    <link rel="stylesheet" href="../assets/css/component.css">
    <link rel="stylesheet" href="../assets/css/smaple.css">
    <script src="../assets/vendor/flexible.js"></script>
</head>
<body>
<!-- 页面内容 -->

<!-- 脚本文件 -->
<script src="../assets/vendor/jquery-1.9.1.min.js"></script>
<script src="../assets/vendor/swiper-3.4.2/js/swiper.jquery.min.js"></script>
<script src="../assets/vendor/PhotoSwipe/photoswipe-ui-default.min.js"></script>
<script src="../assets/vendor/PhotoSwipe/photoswipe.min.js"></script>
<script src="../assets/js/unit.js"></script>
<script src="../assets/js/app.js"></script>
<script src="../assets/js/component.js"></script>
<script src="../assets/js/sample.js"></script>
</body>
</html>
```

### app.less 主样式文件

#### 浏览器样式的重置

```less
//清除样式
*{margin:0;padding:0;list-style:none}body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0}body,button,input,select,textarea{font:14px/1.5 tahoma,arial,sans-serif}h1,h2,h3,h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp{font-family:courier new,courier,monospace}small{font-size:12px}ul,ol{list-style:none}a{text-decoration:none}a:hover{text-decoration:none}legend{color:#000}fieldset,img{border:0}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}

```

#### 项目基础标签样式设置

如：

```less
// 链接
a {
    color: #333;
    text-decoration: none;
    &[href]{
        cursor:pointer;
    }
    &:hover {
        color:#000;
        text-decoration: underline;
    }
}
//按钮
button{
  outline:none;
  cursor:pointer;
}
```

#### 文字相关大小颜色对齐方式设置

```less
//文字对齐方式
.text-left{text-align:left;}
.text-right{text-align:right;}
.text-center{text-align:center;}

// 文字颜色
.text-primary{color:@brand-primary}

//灰色字
.text-gray{color:@gray;} //#555
.text-gray-light{color:@gray-light;} //#999
.text-gray-lighter{color:@gray-lighter;} //#eee

//文字大小
.text-xxxl{font-size:@font-size-xxxl;}
.text-xxl{font-size:@font-size-xxl;}
.text-xl{font-size:@font-size-xl;}
.text-lg{font-size:@font-size-lg;}
.text-md{font-size:@font-size-md;}
.text-sm{font-size:@font-size-sm;}
```

#### 布局相关设置

```less
//显示与隐藏
.hide{display:none!important;}
.show{display:block!important;}
.invisible{visibility:hidden;}

//左浮动
.float-left {float:left;}
//右浮动
.float-right {float:right;}
```

#### 图片盒子

防止图片盒子下面留有白边

````less
.img-box{font-size:0;line-height:0;background-size:100% auto;}
````

#### 固定内容区域限制

```less
.wrapper{
    .box-sizing;
    .clearfix();
    &.wrapper-fixed{
        width:100%;
        max-width:1170px;
        margin-left:auto;
        margin-right:auto;
        //overflow:hidden;
        @media (max-width:@screen-md-max){
            max-width:@screen-sm-min - 15*2;
            padding-left:15px;
            padding-right:15px;
        }
        @media (max-width:@screen-sm-max){
            max-width:@screen-xs-min;
            padding-left:35*@rpx;
            padding-right:35*@rpx;
        }
    }
    &.wrapper-fluid{
        width:100%;
    }
}

```

#### 图片放大效果

```less
.zoom-box{
    display:block;
    overflow:hidden;
    img{.transition(all,0.5s,ease,0s);.transform-origin(center,center)}
    &:hover{
        img{.scale3d(1.05,1.05,1.05);}
    }
}
```

### unit.js 常用小功能单元

项目中常用的基本小功能单元

#### GetUrlParms 获取地址栏参数

```js
/**
 * 获取地址栏参数
 * 
 * @param {string} parms 参数名
 * @returns {string} 参数返回值
 */
unit.GetUrlParms = function(parms){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
    return unescape(r[2]);
    return null;
}
```

参数

参数 | 说明 | 类型 | 必选
-|-|-
param | 要获取的参数 | String | 必选

#### Browser 获取浏览器的信息

```js
/**
 * 浏览器类型的判断
 * 
 * @returns {object} 参数返回浏览器判断信息
 */
unit.Browser = function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {//移动终端浏览器版本信息   
        trident: u.indexOf('Trident') > -1, //IE内核  
        presto: u.indexOf('Presto') > -1, //opera内核 
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' //是否微信内置浏览器
    };
}();
```

返回值

参数 | 说明 | 类型
-|-|-
trident | 是否IE内核 | Boolean
presto | 是否opera内核 | Boolean
webKit | 是否苹果、谷歌内核  | Boolean
gecko | 是否火狐内核  | Boolean
mobile | 是否为移动终端  | Boolean
ios | 是否为移动终端  | ios终端
android | 是否为移动终端  | android终端或者uc浏览器
iPhone | 是否为iPhone或者QQHD浏览器  | android终端或者uc浏览器
iPad | 是否iPad  | android终端或者uc浏览器
webApp | 是否web应该程序，没有头部与底部  | android终端或者uc浏览器
wechat | 是否微信内置浏览器  | android终端或者uc浏览器

#### SetCookie 设置Cookie

``` js
/**
 * 写cookie
 * 
 * @param {Sting}  name   名称
 * @param {any}    value  设置的值
 * @param {Number} day    时间（天）
 */
unit.SetCookie = function (name, value, day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
}
```

参数

参数 | 说明 | 类型
-|-|-
name | 名称 | Sting
value | 值 | any
day | 值 | Number

#### GetCookie 获得Cookie

``` js
/**
 * 
 * 获取cookie
 * 
 * @param {string} name 获取的名称
 * @returns 返回获取的值
 */
unit.GetCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
```

参数

参数 | 说明 | 类型
-|-|-
name | 名称 | Sting

### app.js主js文件

作为应用的主js文件，项目整体中都会使用的一些配置公共函数等

#### 打开弹层

```js
//打开弹层
app.OpenCoverLayer = function () {
    app.oldSrcollTop = $(window).scrollTop();
    $('body,html').addClass('un-scroll');
}
```

#### 关闭弹层

```js
//关闭弹层
app.CloseCoverLayer = function () {
    $('body,html').removeClass('un-scroll');
    $(window).scrollTop(app.oldSrcollTop);
}
```

#### 页面滚动加载更多

配合使用LoadMoreAjax和ListMoreInit

+ LoadMoreAjax 加载更多ajax

```js
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
```

参数

参数 | 说明 | 类型 | 备注
-|-|-
isLoadingMore | 是否为加载更多 | Boolean |-
$elemet | 列表jq对象 | Object |-
url | 请求的url | Sting |-
params | 名称 | Sting | paged必传类型为Number
callback | 名称 | Function|-

+ ListMoreInit 加载更多初始化

```js
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
```

参数

参数 | 说明 | 类型 | 备注
-|-|-
$list | 列表jq对象 | Object |-
url | 请求的url | Sting |-
listIsAjaxEnd | 列表是否加载完成 | Boolean |-
params | 名称 | Sting | paged必传类型为Number
callback | 名称 | Function|-

+ 使用示例

```js
//滚动加载示例
var pageNum = App.defeatPageNum, //分页个数
    url = 'mag.experience.list.json', //请求的url
    $list = $('.scroll-list'), //listJQ对象
    params = {
        paged:2,
        post_type:'experience'
    },
    listIsAjaxEnd = $list.find('.grid-item').length < pageNum ? true : false; //是否可加载更多
// 列表滚动加载初始化
App.ListMoreInit($list, url, params, listIsAjaxEnd, function (data, url, params) {
    // console.log('ListMoreInit', data, 'url', url, 'params', params);
    if (data.errcode == 0) {
        var listHtml = '',
            listData = data.experiences;
        App.listIsAjaxEnd = listData.length < pageNum ? true : false;
        for (i in listData) {
            var item = listData[i],
                item_link = item.post_name,
                imgUrl = item.thumbnail ? item.thumbnail : '/webs/ush/assets/images/sample/facilities_img.jpg';
            //列表模板
            var item_tpl =  '<div class="grid-item">'+
                                '<div class="grid-item-inner">' + item.title + '</div>'+
                            '</div>';
            listHtml += item_tpl;
        }
        $list.append(listHtml);
    }
})
```

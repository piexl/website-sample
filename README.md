
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="shortcut icon" href="">
    <link rel="stylesheet" href="../assets/vendor/animate/animate.min.css">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_609371_yowgbwwg1c5idx6r.css">
    <link rel="stylesheet" href="../assets/vendor/swiper-3.4.2/css/swiper.min.css">
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
            max-width:@screen-md-min - 15*2;
            padding-left:15px;
            padding-right:15px;
        }
        @media (max-width:@screen-sm-max){
            max-width:@screen-sm-min;
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

### app.js主js文件

作为应用的主js文件，项目整体中都会使用的一些配置公共函数等

```js
var App = function(){
    var app = this;
    //项目配置
    app.config = {
        name:'website-sample'
    }
    app.init = function(){
        console.log('app init');
    }();
}
var App = new App();
```



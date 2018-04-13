
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

+ [animate.css](https://daneden.github.io/animate.css/) css3动画类库
+ [flexible.js]( https://github.com/amfe/lib-flexible) 手机端适配解决方案[lib-flexible](https://github.com/amfe/article/issues/17)
+ [Jquery](http://hemin.cn/jq/) dom操作库，采用 `1.9.1`版本是为了兼容IE9+
+ [Swiper](http://3.swiper.com.cn/) 幻灯片库，采用`3.4.2`版本也是为了兼容IE9+，`swiper4`只兼容到IE10+

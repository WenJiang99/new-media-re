# new-media 项目

## 项目依赖环境
- [Node](https://nodejs.org/zh-cn/)
  - 下载
  - 安装
  - 命令行执行node -v 测试是否安装成功(如果提示 node 不是可执行命令，就需要手动添加node到环境变量)

## 项目开发工具
- IDE
  - [VSCODE](https://code.visualstudio.com/Download)（用其他IDE也可以，推荐VSCODE）
  - Chrome浏览器（或者其他）
- Github


## 启动运行
- 打开项目根目录（带有package.json文件的目录），在当前目录进入DOS窗口
- 执行`npm install yarn -g` 全局安装 `yarn` （执行这一步需要先安装Node，具体见上面说明）
- 执行`yarn install` 或者 `npm install` 安装项目依赖
- 执行`yarn start` 或者 `npm run start` 启动项目
- 在浏览器 **https://127.0.0.1:6677 或者 https://localhost:6677**查看项目

## 线上访问
- 为了更利于评委老师们查看我们的项目，我们在自己的电脑使用nginx对项目进行了部署，现在，老师可以访问**http://n2773h2002.zicp.vip**    
    来访问我们部署好的项目。   
- 鉴于校园内在睡觉时间宿舍断电，因此在晚上 `11:30` -- 凌晨 `6:30` 之间，我们将无法保证服务器的正常运行，为了获得更好的体验效果    
    老师可以在白天时候访问
- 我们建议评委老师把链接复制到浏览器中再进行打开（防止被某些平台屏蔽）    
- 同时，我们建议老师使用电脑进行浏览我们的网页，以获得最佳的浏览体验

## 项目Github仓库
- 我们的项目使用Github进行版本管理，评委老师们可以在github上查看到我们的项目
- [仓库地址](https://github.com/WenJiang99/new-media-re/tree/develop)

## 开发 & 生产
- 我们在配置项目时候，同时配置了开发环境和生产环境，在执行`yarn start` 时候将启动开发环境，在执行`yarn build`时候，将会把项目构建   
  出来一个用于生产环境的dist目录文件
- 生产环境下的 js,html,css 等文件都会经过自动打包、压缩体积等，我们部署在本地服务器上的也正是生产环境的文件


## 项目结构
- src：项目源代码目录
  - assets：存放项目的各种静态资源（图片，字体等文件）
    - images：存放项目中的图片文件
    - styles：存放项目通用的样式文件

  - screens：存放各个页面文件
    - App：项目的入口页面，配置路由
    - Home：Home页面
    - Bank/Carrier/Cinema/Cosmodrome/Court/Dam/Government/Gymnasium/Hospital/School/Terrace/Transportation：相应的副页面文件
    - components:存放项目的通用组件，每个组件单独写在一个子目录下
    - interface：存放一些通用接口
    - lib：通用的公共方法库
      - common
        - contant.ts：存放通用的常量
        - map.ts：存放map地图有关的变量、函数
        - canvas.ts：有关canvas绘图的一些函数、变量
        - background.ts：有关背景样式的一些常量
        - color.ts：有关项目颜色设置的一些常量
        - font.ts：有关项目字体设置的一些常量
        - ulti.ts：项目的通用方法函数
      - data目录：项目的数据来源，每个文件对应一个页面的数据

  - index.tsx,index.html：项目的入口文件
  - 
- scripts：存放脚本、项目的配置信息
- 
- dist：存放编译后生成的文件，用于生产环境，部署到服务器
- 
- node_modules：项目的依赖包目录

## 主要技术栈
- React框架：
  - [React官网](https://zh-hans.reactjs.org/)
- React Router
  - [react-router](https://react-guide.github.io/react-router-cn/)
  - [官方文档](https://reacttraining.com/react-router/web/guides/quick-start)
  
- Typescript
  - [Typescript](https://www.tslang.cn/index.html)
  - [Typescript的优势](https://www.jianshu.com/p/d2d15111f9d4)
  
- Webpack打包
  - [官方文档](https://www.webpackjs.com/)
  
- Babel转译
  - [Babel官网](https://www.babeljs.cn/)

- Antd UI组件库
  - [Antd](https://ant.design/index-cn)

## 

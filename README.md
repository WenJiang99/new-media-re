# new-media 
    存放新媒体比赛项目


## 开发环境
- [Node](https://nodejs.org/zh-cn/)
  - 下载
  - 安装
  - 命令行执行node -v 测试是否安装成功(如果提示 node 不是可执行命令，就需要手动添加node到环境变量)
- Git Or GitHub
  - [Git](https://git-scm.com/downloads)
  - Github
- IDE
  - [VSCODE](https://code.visualstudio.com/Download)（用其他IDE也可以，推荐VSCODE）
  - Chrome浏览器（或者其他）
## 启动
- 打开克隆下来的仓库，在仓库根目录下启动命令行
- 执行`git checkout develop`切换到develop分支
- 执行`npm install yarn -g` 全局安装 `yarn`(可选，用于替代npm来安装依赖)
- 执行`yarn install` 或者 `npm install` 安装依赖
- 执行`yarn start` 或者 `npm run start` 启动项目
- 在浏览器 **https://127.0.0.1:6677 或者 https://localhost:6677**查看项目


## 项目结构
- src：项目源代码目录
  - assets：存放项目的各种静态资源（图片，字体等文件）
  - screens：存放各个页面文件
    - App：项目的入口页面，配置路由
    - Home：Home页面

    - components:存放项目的通用组件，每个组件单独写在一个子目录下
    - interface：存放一些通用接口
    - lib：通用的公共方法库
      - common
        - contant.ts：存放通用的常量
        - map.ts：存放map地图有关的变量、函数
        - canvas.ts：有关canvas绘图的一些函数、变量
  - index.tsx,index.html：项目的入口文件
- scripts：存放脚本、项目的配置信息
- dist：存放编译后生成的文件，用于生产环境，部署到服务器
- node_modules：项目的依赖包目录

## 主要技术栈
- React框架
- React Router
- Redux（Optional）
- Typescript
- Webpack打包
- Babel转译
- Antd UI

## 

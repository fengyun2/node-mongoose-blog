# node-mongoose-blog
> node-mongoose-blog

> 只是实现某些后台接口, 没做web界面

## Install

```bash
npm install
npm run watch (chokidar 'src/**' -c 'npm run build')
npm start
```

## 请求

- Category

1. create

```bash

curl -i -X POST -H "'Content-type':'application/x-www-form-urlencoded', 'charset':'utf-8', 'Accept': 'text/plain'" -d 'data={"name":"yy直播","alias":"zhibo"}' http://localhost:3000/api/category/create
```

2. get_all

```bash
curl -i http://localhost:3000/api/category/get_all
```

## BUG

## 2016/10/14

- 1. api处用 `export default` 导出模块也是有问题, 已改为 `module.exports`

- 2. `post` 过来的数据需要 `JSON.parse` 解析才能存进 `mongodb`, 好诡异的事情

- 3. 用 `curl` `post` 数据过来, 会出现中文乱码, 不知道是 node 这边的问题还是 `curl`这边的问题

### 2016/10/13

- 1. 现在还想不明白为啥 `export default app`; 导出模块, 方法有问题, 读取不到[现改为 `module.exports = app`]
- 2. 实时监控编译还是有些问题
  解决了:
  `chokidar-cli` 必须全局安装, 并且 `chokidar 'src/**' -c 'npm run build'`才生效



# node-mongoose-blog
> node-mongoose-blog

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

curl -i -X POST -H "'Content-type':'application/x-www-form-urlencoded', 'charset':'utf-8', 'Accept': 'text/plain'" -d '{"name":"yy直播","alias":"zhibo"}' http://localhost:3000/api/category/create
```

2. get_all

```bash

```

## BUG

- 1. 现在还想不明白为啥 `export default app`; 导出模块, 方法有问题, 读取不到[现改为 `module.exports = app`]
- 2. 实时监控编译还是有些问题
  解决了:
  `chokidar-cli` 必须全局安装, 并且 `chokidar 'src/**' -c 'npm run build'`才生效

- 3. api处用 `export default` 导出模块也是有问题, 已改为 `module.exports`

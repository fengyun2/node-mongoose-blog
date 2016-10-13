# node-mongoose-blog
> node-mongoose-blog

## Install

```bash
npm install
npm run watch (chokidar 'src/**' -c 'npm run build')
npm start
```

## BUG

- 1. 现在还想不明白为啥 export default = app; 导出模块, 方法有问题, 读取不到[现改为 module.exports = app]
- 2. 实时监控编译还是有些问题
  解决了:
  `chokidar-cli` 必须全局安装, 并且 `chokidar 'src/**' -c 'npm run build'`才生效

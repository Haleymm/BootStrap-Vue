import Koa from 'koa';
import path from 'path';
//静态资源中间件
import resource from 'koa-static';
// 创建web服务器
const app = new Koa();
const host = 'localhost';
const port = 3000;

app.use(resource(path.join(__dirname, './static')));

app.listen(port, () => {
  console.log(`server is listening at ${host}:${port}`);
});
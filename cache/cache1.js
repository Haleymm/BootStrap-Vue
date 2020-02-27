import Koa from 'koa';
import path from 'path';
//静态资源中间件
import resource from 'koa-static';
// 创建web服务器
const app = new Koa();
const host = 'localhost';
const port = 3001;

app.use(async (ctx, next) => {
    // 设置响应头Cache-Control 设置资源有效期为300秒
     ctx.set({
       'Cache-Control': 'max-age=300'  
     });
     await next();
   });
app.use(resource(path.join(__dirname, './static')));

app.listen(port, () => {
  console.log(`server is listening at ${host}:${port}`);
});
/*
 * @Author: linjian
 * @Date: 2020-01-03 14:19:20
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
require('dotenv').config()
const Koa = require('koa')

const next = require('next')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


const logUtil = require('./utils-server/logUtil');
const apiRouter = require('./routers/Api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  // middlewares
  server.use(bodyparser({
    enableTypes:['json', 'form', 'text']
  }))
  server.use(json())
  server.use(logger())
  // logger
  server.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    var ms;
    try {
      //开始进入到下一个中间件
      await next();

      ms = new Date() - start;
      //记录响应日志
      logUtil.logResponse(ctx, ms);

    } catch (error) {
      
      ms = new Date() - start;
      //记录异常日志
      logUtil.logError(ctx, error, ms);
    }
  });
// error handler
  onerror(server)
  server.use(apiRouter.routes(), apiRouter.allowedMethods())
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(process.env.PORT, () => {
    console.log('server is running at http://localhost:8081')
  })
})
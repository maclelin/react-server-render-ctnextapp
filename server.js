/*
 * @Author: linjian
 * @Date: 2020-01-03 14:19:20
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
const Koa = require('koa')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(8081, () => {
    console.log('server is running at http://localhost:8081')
  })
})
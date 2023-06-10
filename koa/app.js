const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const Router = require('koa-router')
const onerror = require('koa-onerror')
const app = new Koa()
// 统一错误处理
onerror(app)

const views = require('./njkTpl')

const project = process.env.PROJ_NAME

app.use(logger())
app.use(koaBody())
app.use(
  views(path.join(__dirname, '../src'), {
    noCache: true,
    watch: true
  })
)

const router = new Router()

router.get('/', ctx => {
  // throw new Error(121)
  ctx.render(`${project}/index.html`)
})
router.get('/:pathname', (ctx, next) => {
  let pathname = ctx.params.pathname
  let extName = pathname.replace(/^.*?(\..*?)$/, '$1')
  if (extName) {
    if (extName === '.html') {
      ctx.render(`${project}/${pathname}`)
    }
  } else {
    pathname += '.html'
    ctx.render(`${project}/${pathname}`)
  }
  next()
})

app.use(router.routes())

app.use(koaStatic(path.join(__dirname, `../src/${project}`)))
app.use(koaStatic(path.join(__dirname, '../src/_lib')))

module.exports = app

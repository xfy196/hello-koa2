const router = require('koa-router')()
const path = require("path")
const fs = require("fs")
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get("/read", async(ctx, next) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, "../views/index.ejs"))
})

module.exports = router
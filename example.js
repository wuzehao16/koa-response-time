const Koa = require('koa');
const app = new Koa();
const responseTime = require('./')

app.use(responseTime());

app.use(async (ctx, next) => {
  return next().then(()=> {
    return sleep(150);
  }).then(() => {
    ctx.body = 'hello';
  })
})

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(function done() {
      resolve();
    }, ms);
  })
}

app.listen(3000);

console.log('listening on port 3000');

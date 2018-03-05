/**
 * Expose 'responseTime()'.
 */

module.exports = responseTime;

/**
 * Add X-Resonse-Time header field
 *
 * @return {function}
 * @api public
 */

function responseTime() {
  return function responseTime(ctx, next) {
    var start =  Date.now();
    return next().then(() => {
      var delta = Math.ceil(Date.now() - start);
      ctx.set("X-Resonse-Time", delta + 'ms');
    })
  }
}

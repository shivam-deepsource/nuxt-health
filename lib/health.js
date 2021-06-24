/*
 * nuxt-health
 * Copyright (c) 2019 YourSoft.run (https://github.com/YourSoftRun/nuxt-health)
 * MIT Licensed
 */

const testers = {
  server ({ nuxt }) {
    return nuxt.renderer.resources.ssrTemplate !== undefined
  },
  client () {
    return true // TODO: Find a way to test client
  }
}

console.log("TESTING")

const falseIfFail = (type, options) => {
  if (options[type]) {
    try {
      return !testers[type](options) ? false : undefined
    } catch (error) {
      return error instanceof Error ? error.toString() : error
    }
  }
}

module.exports = options => async (_, res) => {
  res.setHeader('Content-Type', 'application/json+health')
  res.statusCode = 200
  testers.custom = options.custom
  const health = {
    status: 'pass',
    server: await falseIfFail('server', options),
    client: await falseIfFail('client', options),
    custom: await falseIfFail('custom', options)
  }
  if (health.server === false || health.client === false || health.custom === false) {
    health.status = 'fail'
    // eslint-disable-next-line require-atomic-updates
    res.statusCode = 503
  }
  return res.end(JSON.stringify(health))
}

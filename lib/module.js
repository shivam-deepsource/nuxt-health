/*
 * nuxt-health
 * Copyright (c) 2019 YourSoft.run (https://github.com/YourSoftRun/nuxt-health)
 * MIT Licensed
 */

const HealthServerMiddleware = require('./health.js')

const defaults = {
  path: '/.well-known/nuxt/server-health',
  client: true,
  server: true
}

module.exports = function (moduleOptions) {
  const options = {
    ...defaults,
    ...this.options.health,
    ...moduleOptions,
    nuxt: this.nuxt
  }
  this.addServerMiddleware({ path: options.path, handler: HealthServerMiddleware(options) })
}

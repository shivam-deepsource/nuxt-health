# nuxt-health

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f95bacbc814e4302a5719fc0288b0187)](https://www.codacy.com/app/Hugome/nuxt-health?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=YourSoftRun/nuxt-health&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/166736a1d7ffb6638647/maintainability)](https://codeclimate.com/github/YourSoftRun/nuxt-health/maintainability)
[![David](https://img.shields.io/david/YourSoftRun/nuxt-health.svg)](https://david-dm.org/YourSoftRun/nuxt-health)
[![Known Vulnerabilities](https://snyk.io/test/github/YourSoftRun/nuxt-health/badge.svg)](https://snyk.io/test/github/YourSoftRun/nuxt-health)

[![Downloads](https://img.shields.io/npm/dm/nuxt-health.svg)](https://www.npmjs.com/package/nuxt-health)

## How to use it

In your `nuxt.config.js`
```js
module.exports = {
  modules: [
    'nuxt-health'
  ],
  health: {
    /** @type {String?} Path of health check. */
    path: '/.well-known/nuxt/server-health',
    /** @type {Boolean?} Enable server check. */
    server: true,
    /** @type {Boolean?} Enable client check. */
    client: true,
    /** @type {Function?} Add custom check to the health */
    async custom(options) { }
  }
}
```

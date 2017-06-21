var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')
var proxyMiddleware = require('http-proxy-middleware')

var app = express()
var compiler = webpack(config)

// Define HTTP proxies to your custom API backend


// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// app.use(hotMiddleware)

// serve pure static assets
app.use('/src/assets', express.static('./src/assets'))

module.exports = app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080\n')
})

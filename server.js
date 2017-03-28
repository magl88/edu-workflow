/* eslint-disable no-console */
/* eslint-disable max-len */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

const port = 8080
const apiHost = process.env.API_HOST || 'http://localhost'
const app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  color: true,
//  historyApiFallback: true,
})

app.use('/', (req, res) => {
  if (/^\/api/.test(req.url)) {
    res.writeHead(307, { Location: `${apiHost}${req.url}` })
    res.end()
  } else {
    res.sendFile(`${process.cwd()}/index.html`)
  }
})

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}/`)
})


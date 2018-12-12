const express = require('express')
const next = require('next')
const nextServerlessHandler = require('next-serverless/handler')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const requestHandler = (req, res) => {
  handle(req, res)
}

module.exports.handler = nextServerlessHandler(app, requestHandler, () => {
  const server = express()
  server.use(requestHandler)
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
});

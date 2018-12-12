const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const createServer = () => {
  const server = express()  
  server.get('/post/:title', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.title } 
    app.render(req, res, actualPage, queryParams)
  })
  server.get("*", (req, res) => handle(req, res))
  return server
};

const server = createServer()

if (!process.env.LAMBDA) {
  app.prepare().then(() => {
    server.listen(3000, err => {
      if (err) throw err
      console.log(`Ready on http://localhost:3000`)
    });
  });
}

module.exports.app = app
module.exports.server = server

const restify = require('restify')
const server = restify.createServer()

let users = {}
let max_user_id = 0

server.get("/", (req, res, next) => {
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(200)
    res.end(JSON.stringify(users))
    return next()
})

server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
const restify = require('restify')
const server = restify.createServer()

let users = {}
let max_user_id = 0

server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
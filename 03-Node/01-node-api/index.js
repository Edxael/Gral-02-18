
// ------- IMPORTING -----------
const restify = require('restify')
const server = restify.createServer()
const setupController = require('./controllers/setup-controllers.js')
const userController = require('./controllers/apiCalls.js')


// ------- CONTROLLERS -----------
setupController(server, restify)
userController(server)


// ------- SERVER LISTENER -----------
server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
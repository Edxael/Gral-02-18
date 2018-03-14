const restify = require('restify')


const respond = (req, res, next) => {
  res.send('Buenos Dias: ' + req.params.name)
  next()
}


const server = restify.createServer()
server.get('/MyGET/:name', respond)
server.post('/MyPOST/:name', respond)


server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
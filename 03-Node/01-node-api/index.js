const restify = require('restify')
const server = restify.createServer()

let users = {}
let max_user_id = 0

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())



server.get("/", function(req, res, next) {
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(users));
	return next();
});

server.post("/user", function(req, res, next) {
	var user = req.body;
	max_user_id++;
	user.id = max_user_id;
	users[user.id] = user;
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(user));
	return next();
});



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
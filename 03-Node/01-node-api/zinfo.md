

Location of the barebones:
http://restify.com/docs/home/

BareBones: in index.js

------------------------------------------------------

Code before I create the fake DataBase:

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

------------------------------------------------------




------------------------------------------------------
Topics to study more in deept:

Node dependency injections...





----------------------------------------------------
Update code for L-13

Summary:

These are some critical code corrections for Lesson 13 to bring the code up to date. For the full source code please see the complete app.js file provided.

The code in the video is no longer up to date.

Code Corrections:

1. Replace restify.acceptParser and restify.bodyParser with restify.plugins.acceptParser and restify.plugins.bodyParser:

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());

2. Replace req.params with req.body

  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  CODE

var restify = require('restify');
var server = restify.createServer();

var users = {};
var max_user_id = 0;

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());

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

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


----------------------------------------------------
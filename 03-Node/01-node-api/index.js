// ------- FUNCTIONS FOR DRY CODE ---------
const respond = ( res, next, status, data, http_code ) => {
    let response = {
        'status': status,
        'data': data
    }
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(http_code)
    res.end(JSON.stringify(response))
    return next()
}

const success = (res, next, data) => {
    respond(res, next, 'success', data, 200)
}

const failure = (res, next, data, http_code) => {
    respond(res, next, 'failure', data, http_code)
}


// ------- IMPORTING ---------
const restify = require('restify')
const server = restify.createServer()


// ------- FAKE DB ---------
let users = {
    '1': 
   { first_name: 'Ayumi',
     last_name: 'Hamasaki',
     email_address: 'ayu@avex.com.jp',
     id: 1 },
     "2": {
        first_name: "Haruka",
        last_name: "Kodoma",
        email_address: "harupy@htk48.com",
        id: 2
    }
 }

let max_user_id = 2
// --------------------------------

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())





// *****************************************
// ************* API CALLS *****************

// Requesting all users fro DB
server.get("/", (req, res, next) => {
    success(res, next, users)
})

// Requesting a user by ID
server.get("/user/:id", (req, res, next) => {
    success(res, next, users[parseInt(req.params.id)])
})

// Add User to DB
server.post("/user", (req, res, next) => {
    let user = req.body
    
	max_user_id++
	user.id = max_user_id
    users[user.id] = user
    
    success(res, next, user)

});

// Update User
server.put("/user/:id", (req, res, next) => {

    let user = users[ req.params.id ]
    let updates = req.body

    for( z in updates ){
        user[z] = updates[z]
    }

    success(res, next, user)
})

// Delete a user by ID
server.del("/user/:id", (req, res, next) => {
    delete users[ req.params.id ]
    success(res, next, [])
})

// *******************************************



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
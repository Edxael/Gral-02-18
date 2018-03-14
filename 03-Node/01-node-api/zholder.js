// ----------------------------------------------------------------------------------
// Server running 1 

const restify = require('restify')
const server = restify.createServer()


let users = { }
let max_user_id = 0

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())



server.get("/", (req, res, next) => {
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(200)
    res.end(JSON.stringify(users))
    return next()
})

server.post("/user", (req, res, next) => {
    let user = req.body
    
	max_user_id++
	user.id = max_user_id
    users[user.id] = user
    
	res.setHeader('content-type', 'application/json')
	res.writeHead(200)
    res.end(JSON.stringify(user))
    
	return next()
});



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})

// ----------------------------------------------------------------------------------



// ************************************************************************************
// AFTER I GOT THE PUT (UPDATE) TO WORK:

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
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(200)
    res.end(JSON.stringify(users))
    return next()
})

// Requesting a user by ID
server.get("/user/:id", (req, res, next) => {
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(200)
    res.end(JSON.stringify(users[parseInt(req.params.id)]))
    return next()
})

// Add User to DB
server.post("/user", (req, res, next) => {
    let user = req.body
    
	max_user_id++
	user.id = max_user_id
    users[user.id] = user
    
	res.setHeader('content-type', 'application/json')
	res.writeHead(200)
    res.end(JSON.stringify(user))

    console.log("Manual all: ", users)
    console.log(" ")
    console.log("Single: ", users["1"])
    console.log(" -------------------- ")
    console.log(" ")
    
	return next()
});

// Update User
server.put("/user/:id", (req, res, next) => {

    console.log("req.params.id: ", req.params.id)
    console.log( users[req.params.id] )

    let user = users[ req.params.id ]
    console.log(" ")
    let updates = req.body

    // console.log("Manual all: ", users)
    // console.log(" ")

    // console.log("User: ", user)
    console.log("Updates: ", updates)
    console.log(" ")

    for( z in updates ){

        console.log("Uaser.: ",user[z])
        console.log("Update: ",updates[z])
        
        user[z] = updates[z]
    }

    console.log(" ")
    
	res.setHeader('content-type', 'application/json')
	res.writeHead(200)
    res.end(JSON.stringify(user))

    console.log( users[req.params.id] )
    console.log(" ")
    console.log(" ******************* ")
    
	return next()
});

// ******************************************



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})

// ************************************************************************************
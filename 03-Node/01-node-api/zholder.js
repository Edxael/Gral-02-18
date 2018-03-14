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





// ===========================================================================================
// CRUD COMPLETE BEFORE CLEANING THE CODE 
// ===========================================================================================
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
    
	return next()
});

// Update User
server.put("/user/:id", (req, res, next) => {

    let user = users[ req.params.id ]
    let updates = req.body

    for( z in updates ){
        user[z] = updates[z]
    }
    
	res.setHeader('content-type', 'application/json')
	res.writeHead(200)
    res.end(JSON.stringify(user))
    
	return next()
})

// Delete a user by ID
server.del("/user/:id", (req, res, next) => {
    delete users[ req.params.id ]
    res.setHeader('content-type', 'aplication/json')
    res.writeHead(200)
    res.end( JSON.stringify( true ) )
    return next()
})

// *******************************************



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
// ===========================================================================================
// ===========================================================================================












// ===========================================================================================
// CRUD COMPLETE BEFORE GOIN MODULAR
// ===========================================================================================

  ---FILE-TREE---

[root]
    |--index.js
    |--package.json
    |
    |--[config]
    |       |--serverFunctions.js
    |
    |--[controllers]
            |--apiCalls.js
            |--setup-controllers.js

            

// ------- FUNCTIONS FOR DRY CODE ----------
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

// const servFuns = require('./config/serverFunctions')


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
    if(typeof users[req.params.id] === 'undefined'){
        failure(res, next, 'The specify user not exist in DB', 404)
    }else{
        success(res, next, users[parseInt(req.params.id)])
    }
    
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
    if(typeof users[req.params.id] === 'undefined'){
        failure(res, next, 'The specify user not exist in DB', 404)
    }else{
        let user = users[ req.params.id ]
        let updates = req.body

        for( z in updates ){
            user[z] = updates[z]
        }

        success(res, next, user)
    }

})

// Delete a user by ID
server.del("/user/:id", (req, res, next) => {
    if(typeof users[req.params.id] === 'undefined'){
        failure(res, next, 'The specify user not exist in DB', 404)
    }else{
        delete users[ req.params.id ]
        success(res, next, [])
    }
    
})

// *******************************************



server.listen(5000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
// ===========================================================================================
// ===========================================================================================
















// ===========================================================================================
//                             CRUD COMPLETE MODULAR CONFIGURATION
// ===========================================================================================


// -------------------------------------------------------------------------------
// FILE [ index.js ('root') ]
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
// -------------------------------------------------------------------------------



// -------------------------------------------------------------------------------
// FILE [ serverFunctions.js ('root/config/serverFunctions.js') ]
        _respond = ( res, next, status, data, http_code ) => {
            let response = {
                'status': status,
                'data': data
            }
            res.setHeader('content-type', 'aplication/json')
            res.writeHead(http_code)
            res.end(JSON.stringify(response))
            return next()
        }

        module.exports.success = (res, next, data) => {
            _respond(res, next, 'success', data, 200)
        }

        module.exports.failure = (res, next, data, http_code) => {
            _respond(res, next, 'failure', data, http_code)
        }
// -------------------------------------------------------------------------------





// -------------------------------------------------------------------------------
// FILE [ apiCalls.js ('root/controllers/apiCalls.js') ]
        const myFuns = require('../config/serverFunctions')

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
            
            // *****************************************
            // ************* API CALLS *****************

        module.exports = (server) => {


            // Requesting all users fro DB
            server.get("/", (req, res, next) => {
                myFuns.success(res, next, users)
            })

            // Requesting a user by ID
            server.get("/user/:id", (req, res, next) => {
                if(typeof users[req.params.id] === 'undefined'){
                    myFuns.failure(res, next, 'The specify user not exist in DB', 404)
                }else{
                    myFuns.success(res, next, users[parseInt(req.params.id)])
                }
                
            })

            // Add User to DB
            server.post("/user", (req, res, next) => {
                let user = req.body
                
                max_user_id++
                user.id = max_user_id
                users[user.id] = user
                
                myFuns.success(res, next, user)

            });

            // Update User
            server.put("/user/:id", (req, res, next) => {
                if(typeof users[req.params.id] === 'undefined'){
                    myFuns.failure(res, next, 'The specify user not exist in DB', 404)
                }else{
                    let user = users[ req.params.id ]
                    let updates = req.body

                    for( z in updates ){
                        user[z] = updates[z]
                    }

                    myFuns.success(res, next, user)
                }

            })

            // Delete a user by ID
            server.del("/user/:id", (req, res, next) => {
                if(typeof users[req.params.id] === 'undefined'){
                    myFuns.failure(res, next, 'The specify user not exist in DB', 404)
                }else{
                    delete users[ req.params.id ]
                    myFuns.success(res, next, [])
                }
                
            })


        }
// -------------------------------------------------------------------------------




// -------------------------------------------------------------------------------
// FILE [ setup-controllers.js ('root/controllers/setup-controllers.js') ]
        module.exports = (server, restify) => {
            server.use(restify.plugins.acceptParser(server.acceptable))
            server.use(restify.plugins.queryParser())
            server.use(restify.plugins.bodyParser())
        }
// -------------------------------------------------------------------------------


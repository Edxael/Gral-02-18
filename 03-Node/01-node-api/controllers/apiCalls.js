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

    // *******************************************

}

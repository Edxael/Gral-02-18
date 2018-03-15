
// BASE SETUP [ server.js ]
// =============================================================================

// call the packages we need
const express    = require('express');       // call express
const app        = express()                // define our app using express
const bodyParser = require('body-parser')
const db         = require('mongoose')
const SingerTemplate   = require('./API-Files/singerSchema')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// var port = process.env.PORT || 8080;        // set our port

// conection to DataBase
db.connect('mongodb://master:Hkodoma48@ds125896.mlab.com:25896/courpath', (err) => {
    if(err){ console.log(err) }else { console.log("Conected to DataBase.") }
})






// ROUTES FOR OUR API
// =============================================================================
const router = express.Router()              // get an instance of the express Router

// middleware to use for all requests
router.use( (req, res, next) => {
    // do logging
    console.log('Something is happening.')
    next(); // make sure we go to the next routes and don't stop here
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// app.use('/', (req, res) => {
//     // res.send('Hello Edmundo')
//     res.json({ message: 'Edmundo -2- welcome to our api!' })
// })


// on routes that end in /singesr
// ----------------------------------------------------

    
router.route('/singers')     // create a singer (accessed at POST http://localhost:5000/api/singers)

    .post( (req, res) => {
        const oneSinger = new SingerTemplate();      // create a new instance of the Singer model
        oneSinger.name = req.body.name;  // set the singer name (comes from the request)
        oneSinger.save( (err) => {   // save the bear and check for errors
            if (err) { res.send(err) }
            res.json({ message: 'Singer Record Created...' })
        })
    })
    
    .get( (req, res) => {   // get all the singers (accessed at GET http://localhost:8080/api/singers)
        SingerTemplate.find( (err, allSingers) => {
            if (err) { res.send(err) }
            res.json(allSingers)
        })
    })




router.route('/singers/:_id')
    
    .get( (req, res) => {  // get ONE singer by id (accessed at GET http://localhost:8080/api/singers/:_id)
        SingerTemplate.findById(req.params._id, (err, oneSinger) => {
            if (err) { res.send(err) }
            res.json(oneSinger)
        })
    })

    .put( (req, res) => {   // update the singer record with given id (accessed at PUT http://localhost:8080/api/singers/:_id)
        SingerTemplate.findById(req.params._id, (err, oneSinger) => {
            if (err) { res.send(err) }

            oneSinger.name = req.body.name;  // update the singer record
            oneSinger.save( (err) => {   // save the singer record
                if (err) { res.send(err) }
                res.json({ message: 'Singer Record updated!' })
            })
        })
    })

    .delete( (req, res) => {  // delete a singer record using id (accessed at DELETE http://localhost:8080/api/singers/:_id)
        SingerTemplate.remove({
            _id: req.params._id
        }, (err, bear) => {
            if (err) { res.send(err) }
            res.json({ message: 'Singer Record Successfully deleted' })
        })
    })




// REGISTER OUR ROUTES ---------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)








// THE SERVER
// =============================================================================


// ********* SERVER LISTENER *********
app.listen(5000, (err) => {
    if(err){ throw err }
    console.log(" ")
    console.log("API Up-&-Running.....")
})
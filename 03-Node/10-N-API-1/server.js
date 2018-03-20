    // call the packages we need
// =============================================================================
const express     = require('express');       
const app         = express()                
const bodyParser  = require('body-parser')
const db          = require('mongoose')
const parseString = require('xml2js').parseString
const xml2js = require('xml2js')
const SingerTemplate   = require('./API-Files/singerSchema')



    // Connection to database.
// =============================================================================
db.connect('mongodb://admin1:Webaholics1@ds115569.mlab.com:15569/xml-1', (err) => {
    if(err){ console.log(err) }else { console.log("Conected to DataBase.") }
})



    // Middleware
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./API-Files/headers'))
const router = express.Router()             

router.use( (req, res, next) => {   
    console.log(' ')
    console.log(" \n Request to the server detected.... \n =================================================")
    next(); 
})



    // on routes that end in /singesr
// =============================================================================
app.use('/api', router)      // all of our routes will be prefixed with /api
router.route('/singers')     // create a singer (accessed at POST http://localhost:5000/api/singers)


    .post( (req, res) => {
        const oneSinger = new SingerTemplate();     

        console.log( req.body.xml )
        console.log( typeof req.body.xml )

        let tob = {}
        parseString(req.body.xml, (err, result) => { tob = result } )
        oneSinger.name = tob.SingerProfile.name[0];  

        console.log("El Objeto: ");
        console.log(tob)
        console.log(tob.SingerProfile.name[0])
        

        oneSinger.save( (err) => {   
            if (err) { res.send(err) }
            res.json({ message: 'Singer Record Created...' })
        })
    })



    
    .get( (req, res) => {   // get all the singers (accessed at GET http://localhost:5000/api/singers)
        SingerTemplate.find( (err, allSingers) => {
            if (err) { res.send(err) }
            res.json(allSingers)
        })
    })

    // ------------------------------------------------------------

router.route('/singers/:_id')  
    
    .get( (req, res) => {  // http://localhost:5000/api/singers/5aab446b0f66102c6131b83b
        SingerTemplate.findById(req.params._id, (err, oneSinger) => {
            if (err) { res.send(err) }

            let temObj = {
                SingerProfile: {
                    Name: oneSinger.name,
                    id: JSON.stringify(oneSinger._id)
                }
            }

            console.log(temObj)
            let myBuilder = new xml2js.Builder()
            let myXML = myBuilder.buildObject(temObj)

            res.send( myXML )   
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
        }, (err, xmldb) => {
            if (err) { res.send(err) }
            res.json({ message: 'Singer Record Successfully deleted' })
        })
    })



// THE SERVER LISTENER
// =============================================================================

app.listen(5000, (err) => {
    if(err){ throw err }
    console.log(" ")
    console.log("API Up-&-Running.....")
})

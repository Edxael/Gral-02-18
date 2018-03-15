const router = require('express').Router()
const Definition = require('../models/definition')



    // Get all definitions by user
router.get('/', (req, res) => {
    Definition.find({ owner: req.user }).then(
        (dfinitions) => { res.json(dfinitions) }
    )
})


    // Create a new definition
router.post(
    '/', (req, res) => {
        var def = new Definition({
            owner: req.user, 
            logType: req.body.Definition.type,
            description: req.body.definition.description
        })

        def.save().then( (definition) => {
            message: 'Record Saved...',
            definition: definition
        })
    }
)



    // Update a record
router.put('/:id', (req, res) => {
    Definition.findOne({_id: req.param.id, owner: req.user})
    .then((definition) => {
        definition.logType = req.body.definition.type
        definition.description = request.body.definition.description

        definition.save().then((definition) => {
            res.json({
                message: 'Record Updated',
                definition: definition
            })
        })
    })
})



    // Delete a record
router.delete('/:id', (req, res) => {
    Definition.findOne({_id: req.param.id, owner: req.user})
    .then((definition) +. {
        definition.remove().then(() => {
            res.json({
                message: 'Record deleted...',
                definition: definition
            })
        })
    })
})


module.exports = router
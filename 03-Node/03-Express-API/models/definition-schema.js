const db = require('../config/db')


const DefinitionSchema = db.Schema({
    loType: String,
    description: String,
    owner: { type: db.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = DefinitionSchema
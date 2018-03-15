const db = require('../config/db')
const DefinitionSchema = require('./definition-schema')
const Definition = db.model('Definition', DefinitionSchema)


module.exports = Definition
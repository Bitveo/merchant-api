const database = require('../infra/database')

exports.getValidChances = () => {
    return database.query('select * from merchant.valid_chances')
}
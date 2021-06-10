const database = require('../infra/database')

exports.getValidChances = () => {
    return database.query('select * from merchant.valid_chances')
}

exports.getErrorArbitration = () => {
    return database.query('select * from merchant.error_arbitration')
}

exports.getArbitrations = () => {
    return database.query('select * from merchant.arbitrations')
}

exports.getChanceArbitration = () => {
    return database.query('SELECT * FROM merchant.arbitrations INNER JOIN merchant.valid_chances ON uuid_valid_chance=uuid')
}
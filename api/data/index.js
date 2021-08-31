const database = require('../infra/database')

exports.getValidChances = () => {
    return database.query('select * from merchant.valid_chances order by id desc')
}

exports.getErrorArbitration = () => {
    return database.query('select * from merchant.error_arbitration order by id desc')
}

exports.getArbitrations = () => {
    return database.query('select * from merchant.arbitrations order by id desc')
}

exports.getChanceArbitration = () => {
    return database.query('SELECT * FROM merchant.arbitrations INNER JOIN merchant.valid_chances ON uuid_valid_chance=uuid order by id desc')
}

exports.getChanceArbitrationValues = () => {
    return database.query('SELECT merchant.valid_chances.date, ex_buy, ex_sell, buy_value, sell_value, buy_value_verified, sell_value_verified, buy_tax, sell_tax, buy_fee_verified, sell_fee_verified, merchant.arbitrations.amount_currency_main_buy, merchant.arbitrations.amount_currency_main_sell FROM merchant.valid_chances INNER JOIN merchant.arbitrations ON merchant.valid_chances.uuid = merchant.arbitrations.uuid_valid_chance order by merchant.valid_chances.id desc')
}

exports.getBalances = () => {
    return database.query('select * from merchant.balances order by id desc')
}

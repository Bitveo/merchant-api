const data = require('../data')

exports.getValidChances = () => {
    const validChances = data.getValidChances()
    if (validChances) return validChances
    else return {}
}
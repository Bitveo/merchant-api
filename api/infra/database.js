const pgp = require('pg-promise')()
const fs = require('fs')


const dbAccessCredentials = () => {
    if(process.env.ENVIRONMENT === 'development'){
        return {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE
        }
    } else {
    return {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE,
            ssl: { ca: fs.readFileSync(__dirname + '/certs/ca-certificate.crt') }
        }
    }
}

const db = pgp(dbAccessCredentials())

module.exports = db

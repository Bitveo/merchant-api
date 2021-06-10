const express = require('express')
const app = express()
const service = require('./service')

app.get('/', async (req, res) => {
    const validChances = await service.getValidChances()
    res.send(validChances)
})

app.listen(8080);
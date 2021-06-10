const express = require('express')
const app = express()
const service = require('./service')

app.get('/', async (req, res) => {
    res.send('Welcome Merchant API')
})

app.get('/api/valid-chances', async (req, res) => {
    const validChances = await service.getValidChances()
    res.send(validChances)
})

app.get('/api/error-arbitration', async (req, res) => {
    const errorArbitration = await service.getErrorArbitration()
    res.send(errorArbitration)
})

app.get('/api/arbitrations', async (req, res) => {
    const arbitrations = await service.getArbitrations()
    res.send(arbitrations)
})

app.get('/api/chance-arbitration', async (req, res) => {
    const chanceArbitration = await service.getChanceArbitration()
    res.send(chanceArbitration)
})

app.listen(8080);
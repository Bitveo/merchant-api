const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.send('Welcome to Merchant API!')
})

app.listen(8080);
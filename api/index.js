const express = require('express')
const app = express()
const service = require('./service')
const ccxt = require('ccxt')
const ipRangeCheck = require('ip-range-check')
const publicIp = require('public-ip')

// const deniedMessage = 'Merchant API - Access Denied'

app.get('/', async (req, res) => {
    res.send('Welcome Merchant API')
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     res.send('Welcome Merchant API')
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/valid-chances', async (req, res) => {
    const validChances = await service.getValidChances()
    res.send(validChances)
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     const validChances = await service.getValidChances()
    //     res.send(validChances)
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/error-arbitration', async (req, res) => {
    const errorArbitration = await service.getErrorArbitration()
    res.send(errorArbitration)
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     const errorArbitration = await service.getErrorArbitration()
    //     res.send(errorArbitration)
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/arbitrations', async (req, res) => {
    const arbitrations = await service.getArbitrations()
    res.send(arbitrations)
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     const arbitrations = await service.getArbitrations()
    //     res.send(arbitrations)
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/chance-arbitration', async (req, res) => {
    const chanceArbitration = await service.getChanceArbitration()
    res.send(chanceArbitration)
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     const chanceArbitration = await service.getChanceArbitration()
    //     res.send(chanceArbitration)
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/exchanges-balance', async (req, res) => {
    const binance = new ccxt.binance({
        apiKey: process.env.API_KEY_PUBLIC_BINANCE,
        secret: process.env.API_KEY_SECRET_BINANCE,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const ftx = new ccxt.ftx({
        apiKey: process.env.API_KEY_PUBLIC_FTX,
        secret: process.env.API_KEY_SECRET_FTX,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const bitfinex = new ccxt.bitfinex({
        apiKey: process.env.API_KEY_PUBLIC_BITFINEX,
        secret: process.env.API_KEY_SECRET_BITFINEX,
        enableRateLimit: true,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const kucoin = new ccxt.kucoin({
        apiKey: process.env.API_KEY_PUBLIC_KUCOIN,
        secret: process.env.API_KEY_SECRET_KUCOIN,
        password: 'Fantech01',
        enableRateLimit: true,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const poloniex = new ccxt.poloniex({
        apiKey: process.env.API_KEY_PUBLIC_POLONIEX,
        secret: process.env.API_KEY_SECRET_POLONIEX,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const cex = new ccxt.cex({
        apiKey: process.env.API_KEY_PUBLIC_CEX,
        secret: process.env.API_KEY_SECRET_CEX,
        uid: process.env.UID_CEX,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })
    
    const huobi = new ccxt.huobipro({
        apiKey: process.env.API_KEY_PUBLIC_HUOBI,
        secret: process.env.API_KEY_SECRET_HUOBI,
        timeout: parseFloat(process.env.API_REQUEST_TIMEOUT)
    })

    const responseBinance = await binance.fetchBalance();
    const responseFtx = await ftx.fetchBalance();
    const responseBitfinex = await bitfinex.fetchBalance();
    const responseKucoin = await kucoin.fetchBalance();
    const responsePoloniex = await poloniex.fetchBalance();
    const responseCex = await cex.fetchBalance();
    const responseHuobi = await huobi.fetchBalance();

    res.send({
        'binance': {
            'BTC': responseBinance.BTC,
            'USD': responseBinance.USD,
            'USDT': responseBinance.USDT,
            'BRL': responseBinance.BRL
        },
        'ftx': {
            'BTC': responseFtx.BTC,
            'USD': responseFtx.USD,
            'USDT': responseFtx.USDT,
            'BRL': responseFtx.BRL
        },
        'bitfinex': {
            'BTC': responseBitfinex.BTC,
            'USD': responseBitfinex.USD,
            'USDT': responseBitfinex.USDT,
            'BRL': responseBitfinex.BRL
        },
        'kucoin': {
            'BTC': responseKucoin.BTC,
            'USD': responseKucoin.USD,
            'USDT': responseKucoin.USDT,
            'BRL': responseKucoin.BRL
        },
        'poloniex': {
            'BTC': responsePoloniex.BTC,
            'USD': responsePoloniex.USD,
            'USDT': responsePoloniex.USDT,
            'BRL': responsePoloniex.BRL
        },
        'cex': {
            'BTC': responseCex.BTC,
            'USD': responseCex.USD,
            'USDT': responseCex.USDT,
            'BRL': responseCex.BRL
        }
    })
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     x
    //     x
    //     x
    //     x
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/balances', async (req, res) => {
    const balances = await service.getBalances()
    res.send(balances)
    // if(ipRangeCheck(await publicIp.v4(), process.env.VALID_IP_RANGE)){
    //     const balances = await service.getBalances()
    //     res.send(balances)
    // } else {
    //     res.send(deniedMessage)
    //     console.log('Api Denied, IP:', await publicIp.v4())
    // }
})

app.get('/api/chance-arbitration-values', async (req, res) => {
    const chanceArbitrationValues = await service.getChanceArbitrationValues()
    res.send(chanceArbitrationValues)
})

app.get('/api/exchanges-configuration', async (req, res) => {
    const exchangesConfiguration = await service.getExchangesConfiguration()
    res.send(exchangesConfiguration)
})


app.listen(8080);
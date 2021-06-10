const express = require('express')
const app = express()
const service = require('./service')
const ccxt = require('ccxt')

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
            'USDC': responseBinance.USDC,
            'BRL': responseBinance.BRL
        },
        'ftx': {
            'BTC': responseFtx.BTC,
            'USD': responseFtx.USD,
            'USDT': responseFtx.USDT,
            'USDC': responseFtx.USDC,
            'BRL': responseFtx.BRL
        },
        'bitfinex': {
            'BTC': responseBitfinex.BTC,
            'USD': responseBitfinex.USD,
            'USDT': responseBitfinex.USDT,
            'USDC': responseBitfinex.USDC,
            'BRL': responseBitfinex.BRL
        },
        'kucoin': {
            'BTC': responseKucoin.BTC,
            'USD': responseKucoin.USD,
            'USDT': responseKucoin.USDT,
            'USDC': responseKucoin.USDC,
            'BRL': responseKucoin.BRL
        },
        'poloniex': {
            'BTC': responsePoloniex.BTC,
            'USD': responsePoloniex.USD,
            'USDT': responsePoloniex.USDT,
            'USDC': responsePoloniex.USDC,
            'BRL': responsePoloniex.BRL
        },
        'cex': {
            'BTC': responseCex.BTC,
            'USD': responseCex.USD,
            'USDT': responseCex.USDT,
            'USDC': responseCex.USDC,
            'BRL': responseCex.BRL
        },
        'huobi': {
            'BTC': responseHuobi.BTC,
            'USD': responseHuobi.USD,
            'USDT': responseHuobi.USDT,
            'USDC': responseHuobi.USDC,
            'BRL': responseHuobi.BRL
        }
    })
})

app.listen(8080);
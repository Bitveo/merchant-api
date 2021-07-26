module.exports = {
    apps : [{
        name   : "merchant-api-development",
        script : "./index.js",
        watch: true,
        ignore_watch : ["node_modules"],
        env: {
            "ENVIRONMENT": "development",
            "POWER_ON": "true",
            "HIDE_DETAIL_CONSOLE_LOG": "true",
            "SPREAD_ACTIVE_ORDER": "0.002",
            "LOOP_INTERVAL": "10000",
            "API_REQUEST_TIMEOUT": "3000",
            "OPERATION_TOOK_LIMIT": "1500",
            "SPREAD_ACTIVE_TRY_LEVEL": "0.002",
            
            "DEFAULT_CURRENCY_1": "BTC",
            "DEFAULT_AMOUT_1": "0.03",
            "DEFAULT_CURRENCY_2": "USDT",
            "DEFAULT_AMOUT_2": "1050",
            "DEFAULT_CURRENCY_3": "USD",
            "DEFAULT_AMOUT_3": "1050",
            
            "MULTIPLIER_MARGIN_SECURITY": "3",
            "MULTIPLIER_TRY_LEVEL": "2",
            
            "DB_USER": "postgres",
            "DB_PASSWORD": "postgres",
            "DB_HOST": "localhost",
            "DB_PORT": "5432",
            "DB_DATABASE": "postgres"
        }
    }]
  }
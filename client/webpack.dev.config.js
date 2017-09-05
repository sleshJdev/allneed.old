const config = require('./webpack.config')
    , path = require('path');

config.devtool = 'source-map';

config.devServer = {
    port: 8080,
    proxy: {
        '/api': {
            target: {
                protocol: 'http',
                host: 'localhost',
                port: 9000
            }
        }
    }
};

module.exports = config;
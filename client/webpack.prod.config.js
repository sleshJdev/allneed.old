const config = require('./webpack.config')
    , webpack = require('webpack');

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    })
);

module.exports = config;
const path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin');


function absPath(relativePath) {
    return path.join(__dirname, relativePath);
}

const config = {
    context: absPath('app'),

    entry: absPath('app/index.js'),

    output: {
        path: absPath('build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: absPath('app/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;
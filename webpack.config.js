var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'frontend/build');
var APP_DIR = path.resolve(__dirname, 'frontend');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config;
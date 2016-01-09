var webpack = require('webpack');

var config = {
    entry: './app.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};

module.exports = config;

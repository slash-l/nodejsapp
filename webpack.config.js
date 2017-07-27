const webpack = require('webpack');
const path = require('path')

let externals = _externals();

module.exports = {
    entry: {
        app: './app.js',
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js']
    },
    externals: externals,
    node: {
        console: true, // default true
        global: true,
        process: true,
        Buffer: true,
        __filename: true, // default "mock"
        __dirname: true, // default "mock"
        setImmediate: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}
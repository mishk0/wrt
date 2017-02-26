var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            },
            {
                test: /yabble\.css$/,
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?modules' })
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
            'classNames': 'classnames',
            '$': 'jquery',
            '_': 'lodash',
            'Tappable': 'react-tappable'
        })
    ]
};

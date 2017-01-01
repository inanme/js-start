var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', 'bootstrap-loader', './src/app.js'],
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js[x]?$/,
                loader: 'eslint-loader',
                exclude: /(node_modules|bower_components)/,
            }
        ],
        loaders: [{
            test: /\.js[x]?$/,
            loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
        }, {
            test: /\.(eot|ttf|svg|gif|png)$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

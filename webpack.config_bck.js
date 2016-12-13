var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {presets: ['es2015']}
            },
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass', 'file']},
            {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
            {test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};
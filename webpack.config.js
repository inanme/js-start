module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
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
        loaders: [
            {
                cacheDirectory: true,
                test: /\.js[x]?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};

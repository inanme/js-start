module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    }
};

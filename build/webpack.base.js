

module.exports = {
    module: {
        rules: [
            {
               test: /\.js$/,
               use: ['babel-loader'],
               exclude: /(node_modules)/
            },
            {
                test: /\.css/,
                use: [
                     MiniCssExtractPlugin.loader,
                    //process.env.NODE_ENV === 'production'?MiniCssExtractPlugin.loader:'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
}
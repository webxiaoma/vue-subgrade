const path = require('path');
const config = require('../config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const isProduction = process.env.NODE_ENV === 'production'?true:false

module.exports = {
    context: path.resolve(__dirname,'../'),
    entry:{
        'polyfill':'babel-polyfill',
        'index':'./src/index.js'
    },
    output: {
        filename: 'js/[name]-[hash:8].js',
        path:path.resolve(__dirname,'../',config.build.assetsRoot),
        path: path.resolve(__dirname,'../','dist'),
        publicPath:isProduction
            ?config.build.assetsPublicPath
            :config.dev.assetsPublicPath
    },
    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@':  path.join(__dirname,'../src'),
        },
        modules:[path.resolve(__dirname,'../node_modules')],
        extensions:[".js",".vue",".json"]
    },
    module: {
        rules: [
            ...utils.cssLoader(MiniCssExtractPlugin.loader,{
                css:{module:config.dev.cssModule}
            }),
            {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include:path.resolve(__dirname,'../src')
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options:{
                        name:utils.assetsSubDir('images/[name]-[hash:8].[ext]'),
                        limit:10000,
                    }
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: utils.assetsSubDir('media/[name]-[hash:8].[ext]'),
                        limit: 10000
                    }
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: utils.assetsSubDir('fonts/[name]-[hash:8].[ext]'),
                        limit: 10000
                    }
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           inject: true, 
           template:  path.resolve(__dirname, '../index.html') 
        }),
       new VueLoaderPlugin()
    ]
}
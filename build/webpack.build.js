const path = require('path');
const buildConfig = require('../config').build
const wepackMerge = require('webpack-merge');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackBaseConfig = require("./webpack.base.js") // 合并webpack配置

module.exports = wepackMerge(webpackBaseConfig,{
    mode: 'production',  //production
    // devtool:'source-map',
    optimization:{
        splitChunks:{
            chunks:'all', 
            name:'vue'
            // minSize:100,  //打包10字节以上的模块 默认30000
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname,'../',buildConfig.assetsRoot)],{
            root: path.resolve(__dirname,'../'),
            watch:true
        }),
        new MiniCssExtractPlugin({
            filename: `${buildConfig.assetsSubDir}/css/[name]-[hash:8].css`,
            chunkFilename: '[id].css'
        }),

    ],
});


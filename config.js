module.exports = {
    dev:{   // development
        assetsSubDir: 'static',
        assetsPublicPath: '',
        proxyTable: {},

        host: 'localhost',
        port: 9000,
        openBrowser: true, 
        cssModule:false, // vue css module形式
    },
    build:{  // production
       assetsRoot:'./dist',  // 打包目录
       assetsSubDir: 'static',
       assetsPublicPath:''  // 公共路径
    }
}
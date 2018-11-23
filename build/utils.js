const path = require('path');
const config = require('../config');

exports.assetsSubDir = function(pathUrl){
    let subDir = process.env.NODE_ENV !== 'production'
    ?config.dev.assetsSubDir:config.build.assetsSubDir

    return  path.posix.join(subDir,pathUrl)
}

exports.cssLoader = function(miniCssLoader,opt){
    let LoaderWrap = [];
    let loaders = {
        "css":getLoader("css"),
        "postcss":getLoader("postcss"),
        "less":getLoader("less"),
        "sass":getLoader("sass",{indentedSyntax: true}),
        "scss":getLoader("scss"),
        "stylus":getLoader("stylus"),
    };

    function getLoader(style,options){
        return {
            loader:`${style}-loader`,
            options:Object.assign({},options,opt[style])
        }
    }
    
    for(item in loaders){
        let loaderObj = {};
   
        if(item === "css"){
            LoaderWrap.push({
                test: new RegExp('\\.' + item + '$'),
                use: [
                    process.env.NODE_ENV === 'production'?miniCssLoader:{
                        loader: 'vue-style-loader',
                    },
                    loaders.css,
                    loaders.postcss,
                ]
            })
        }else{
            if(item !== "postcss"){
                loaderObj = loaders[item]
                LoaderWrap.push({
                    test: new RegExp('\\.' + item + '$'),
                    use: [
                        process.env.NODE_ENV === 'production'?miniCssLoader:{
                            loader: 'vue-style-loader',
                        },
                        loaders.css,
                        loaders.postcss,
                        loaderObj
                    ]
                })
            }

        }
        
    }

    return LoaderWrap
}
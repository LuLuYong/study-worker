const path = require('path');
module.exports={
    //入口文件的配置项
    entry:{
        app:'./src/main.js'
    },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'../dist'),
        //输出的文件名称
        filename:'main.js'
    },
    mode:"development",
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{
        historyApiFallback: true,//不跳转
        inline: true,
        hot: true,//实时刷新
        host:'192.168.1.79',
        compress:true,
        port:9000
    }//  配置webpack服务
}
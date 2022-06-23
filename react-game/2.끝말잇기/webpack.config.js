const path=require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports={
    name:'word-relay-setting',
    mode:'development', // 실서비스 : production
    devtool: 'eval', //빠르게
    resolve:{
        extensions:['.js','.jsx'],
    },
    entry:{
        app:['./client'],
    }, // 입력

    module:{
        rules:[{
            test:/\.jsx?/, //정규표현식
            loader:'babel-loader',
            //=> 바벨 로더를 사용해서 js,jsx에 적용,
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins: [
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins:[
        new RefreshWebpackPlugin()
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js',
        publicPath:'/dist/',
    }, // 출력

    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}
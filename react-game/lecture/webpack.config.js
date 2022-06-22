const path=require('path');

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
            }
        }],
    },

    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js',
    }, // 출력
}
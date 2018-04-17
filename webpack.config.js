var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/src/js/main.js',

    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "app/dist"), // string
        filename: "[name].js",
        publicPath: "/app/dis/",
        libraryTarget: "umd", // 通用模块定义
    },

    module: {
        rules:[
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app/src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],

                loader: 'babel-loader',

                options:{
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css%/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    devtool: 'source-map',
    context: __dirname,
    target: 'web',

    devServer: {
        proxy: { // proxy URLs to backend development server
          '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'app/dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: path.resolve(__dirname, 'app/src/index.html')
        })
      ],

      watch: false, // boolean

      watchOptions: {
        aggregateTimeout: 1000, // in ms
        // 将多个更改聚合到单个重构建(rebuild)
    
        poll: true,
        poll: 500, // 间隔单位 ms
        // 启用轮询观察模式
        // 必须用在不通知更改的文件系统中
        // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透過網路，讓不同的機器、不同的作業系統、可以彼此分享個別的檔案 ( share file )）
      },
      mode: 'none'

}
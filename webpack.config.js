const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/home/main.js',
        login: './src/login/login.js'
    }, 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/home/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'loginAluno.html',
            template: './src/login/loginAluno.html',
            chunks: ['login']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
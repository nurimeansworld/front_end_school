const path = require('path');
const myLoader = require('./myLoader');
const webpack = require('webpack');
const childProcess = require('child_process');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 20kb
                    }
                },
            }
        ]

    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
            git commit : ${childProcess.execSync('git rev-parse --short HEAD')}
            committer : ${childProcess.execSync('git config user.name')}
            last build : ${new Date().toLocaleString()}
            `
        }),
        new webpack.DefinePlugin({
            pw: 123456
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true,
                removeComments: true,
            } : false
        })
    ]
}
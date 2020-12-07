const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: [
        './src/js/app.js',
        './src/sass/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 3000
    }
};
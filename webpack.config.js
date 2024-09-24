const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            favicon: path.resolve(__dirname, 'src', 'assets', 'scissors.svg'),
        }),

        new copyWebPackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src', 'assets'),
                    to: path.resolve(__dirname, 'dist', 'src', 'assets'),
                }
            ]
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};

// exemplo na notação moderna do js

/*
import path from 'path';
export default {
    target: 'web',
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
*/

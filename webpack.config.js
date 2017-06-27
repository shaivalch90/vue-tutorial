const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require("glob");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Vue-Tutorial-1-App',
    filename: 'index.html',
    template: './src/index.html',
    inject: true
});

const jQueryPlugin = new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        });
var entryPoints = [
        './src/index.js',
        'font-awesome/css/font-awesome.css',
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap-theme.css',
        './src/styles/custom.scss'];

// Glob sync gets all th files in the folder and adds to an array
// _.concat(glob.sync('./src/scripts/*.js'), entryPoints)

module.exports = {
    entry: _.concat(glob.sync('./src/scripts/*.js'), entryPoints),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'shaival': 'vue/dist/vue'
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                },
                {
                    loader: 'file-loader'
                }
                ]
            }
        ]
    },
    plugins: [jQueryPlugin, HtmlWebpackPluginConfig]
}
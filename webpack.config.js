'use strict';

const webpack = require('webpack');

module.exports = {
    // Точки входа
    entry: './main',

    watch: true,
    // Сколько ждать при изменении файла чтоб watch отработал
    watchOptions: {
        aggregateTimeout: 100
    },

    // Куда нужно выкладывать
    output: {
        path:       __dirname + '/build',
        publicPath: '/build/',
        filename:   '[name].js'
    },

    // Где икать обычные файлы (более быстрая сборка)
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js']
    },

    // Где искать лоадеры (более быстрая сборка)
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates:    ['*-loader', '*'],
        extensions:         ['', '.js']
    },

    // Модули
    module: {
        loaders: [
            {
                test:   /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
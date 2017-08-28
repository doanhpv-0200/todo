const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
})

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    resolve: {
        alias: {
            components: path.join(__dirname, 'src/components/')
        },
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
}

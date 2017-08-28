const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'index.[chunkhash].js'
    }
});

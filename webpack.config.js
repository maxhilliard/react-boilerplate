const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
});

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/_dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
            {
                test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' },
            }, {
                enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoader: 1,
                            modules: true,
                            localIdentName: '[name]_[local]__[hash:base64:5]',
                        },
                    }, {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};

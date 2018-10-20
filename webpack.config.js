const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/_dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
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
            }, {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]',
                    },
                }],
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

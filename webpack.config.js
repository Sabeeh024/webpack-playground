const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
    const isProduction = argv.mode === 'production';
    const config = {
        mode: argv.mode,
        entry: { main: './src/index.jsx' },
        output: {
            filename: '[name].[contenthash:8].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
            chunkFilename: '[name].[contenthash:8].chunk.js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.png$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.ttf$/i,
                    type: 'asset/resource',
                },
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'build')
            },
            port: 3000,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    }
    !isProduction && (config.devtool = 'eval-cheap-module-source-map');
    return config
}

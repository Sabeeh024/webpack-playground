const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
    const isProduction = argv.mode === 'production';
    const config = {
        mode: argv.mode,
        entry: { main: './src/index.js' },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
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
        plugins: [new HtmlWebpackPlugin()],
    }
    !isProduction && (config.devtool = 'eval-cheap-module-source-map');
    return config
}

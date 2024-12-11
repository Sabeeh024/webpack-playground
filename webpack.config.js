const path = require('path')

module.exports = {
    mode: 'development',
    entry: { main: './src/index.js' },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
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
    }
}
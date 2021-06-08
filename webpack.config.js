const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
    },
    output: {
        publicPath: "auto",
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src', 'core'),
            'models': path.resolve(__dirname, 'src', 'models'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

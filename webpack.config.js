const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: './public',
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/',
    
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
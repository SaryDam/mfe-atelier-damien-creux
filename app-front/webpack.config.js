const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:3001/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "header",
            filename: "remoteEntry.js",
            exposes: {
                "./Header": "./src/Header",
            },
            shared: {
                react: { singleton: true, eager: true },
                "react-dom": { singleton: true, eager: true },
            },
        }),
    ],
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
};

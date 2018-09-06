const autoprefixer = require("autoprefixer")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

module.exports = (env,options) => {
    let  devMode = options.mode !== "production"
    return {
        devServer: {
            host: "0.0.0.0"
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[chunkhash].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new webpack.EnvironmentPlugin({
                "process.env.NODE_ENV" : "production"
            })
        ],
        output: {
            filename: devMode ? "bundle.js" : "bundle.[chunkhash].js",
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use:[
                        devMode ?'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "plugins": () => autoprefixer()
                            }
                        }                
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                minimize: devMode ? false : true
                            }
                        }
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(otf|ttf)$/,
                    use: ["file-loader"],
                }
            ]
        }
    }
}

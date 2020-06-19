const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const config = {
  mode: isDev ? "development" : "production",
  entry: path.resolve("src", "index.tsx"),
  target: "web",
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".css"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: !isDev,
      title: isDev ? "[development mode] colec" : undefined,
    }),
  ],
  devServer: {
    hot: true,
    port,
  },
};

module.exports = config;

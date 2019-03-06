import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config = {
  entry: {
    main: path.resolve("./src/index.tsx")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
};

export default config;

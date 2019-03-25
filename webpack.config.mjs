import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
const config = {
  entry: {
    main: path.resolve('./src/index.tsx'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /^\?raw$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[local]--[hash:base64:5]',
                  import: false,
                },
              },
              'postcss-loader',
            ],
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve('./public'),
        to: path.resolve('./dist'),
      },
    ]),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

export default config;

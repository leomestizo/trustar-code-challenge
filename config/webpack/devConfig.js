const autoprefixer = require('autoprefixer');
const path = require('path');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./baseConfig');

const workingDirectory = process.cwd();

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(workingDirectory, 'public'),
    hot: true,
    port: 8081,
  },
  devtool: 'inline-source-map',
});

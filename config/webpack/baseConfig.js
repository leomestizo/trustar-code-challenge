const dotenvSafe = require('dotenv-safe');
const path = require('path');
const webpack = require('webpack');

const workingDirectory = process.cwd();
const srcDirectory = path.resolve(workingDirectory, 'src');

dotenvSafe.config();

module.exports = {
  context: srcDirectory,
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      common: path.resolve(srcDirectory, 'common'),
      core: path.resolve(srcDirectory, 'core'),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin(['API_BASE_URL', 'API_KEY']),
  ],
};

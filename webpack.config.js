/* eslint-env node */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var ErudaWebpackPlugin;

try {
  ErudaWebpackPlugin = require('eruda-webpack-plugin');
} catch(e) {}

const srcBasePath = path.resolve(__dirname, 'src');
const publicBasePath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    menu: './src/menu.js',
    game: './src/game.js'
  },
  output: {
    path: publicBasePath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 2,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          reuseExistingChunk: true,
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcBasePath],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  useBuiltIns: 'usage',
                  targets: 'defaults',
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Attorney Online`,
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: 'index.html',
      chunks: ['common', 'menu']
    }),
    new HtmlWebpackPlugin({
      title: `Attorney Online :: GAME IS ON`,
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: 'client.html',
      chunks: ['common', 'game']
    }),
    ErudaWebpackPlugin
      ? new ErudaWebpackPlugin({
        plugins: ['dom']
      })
      : undefined
  ],
  devServer:{
    contentBase: publicBasePath,
    port: 3000
  },
  devtool: 'source-map'
};

/* eslint-env node */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

var ErudaWebpackPlugin;

try {
  ErudaWebpackPlugin = require('eruda-webpack-plugin');
} catch(e) {}

const srcBasePath = path.resolve(__dirname, 'src');
const publicBasePath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: publicBasePath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: 'index.html',
      chunks: ['vendor', 'main']
    }),
    new HtmlWebpackPlugin({
      template: 'src/app.ejs',
      filename: 'client.html',
      redirect: true
    }),
    new VueLoaderPlugin(),
    ErudaWebpackPlugin
      ? new ErudaWebpackPlugin({
        plugins: ['dom']
      })
      : undefined
  ],
  devServer:{
    contentBase: publicBasePath,
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'source-map'
};

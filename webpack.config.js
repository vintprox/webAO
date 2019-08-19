/**
 * Webpack configuration
 */

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
  // Put bundled files into `public` directory
  output: {
    path: publicBasePath,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Chunk dedicated to node modules
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
      // Rule for transpiling JavaScript code with latest syntax to one supported by all target browsers
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
      // Rule for compiling stylesheet
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      // Rule for compiling Vue Single File Components to JavaScript code
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      // Rule for compiling YAML
      {
        test: /\.yml$/,
        loader: 'js-yaml-loader'
      }
    ]
  },
  resolve: {
    // Parent directories aliases
    alias: {
      '~': __dirname,
      '@': srcBasePath
    },
    // Allow importing stuff without appending listed extensions
    extensions: ['.js', '.vue', '.yml']
  },
  plugins: [
    // Generate index page from template
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: 'index.html',
      chunks: ['vendor', 'main'],
      production: process.env.NODE_ENV == 'production'
    }),
    new VueLoaderPlugin(),
    // Add plugin for Eruda embedded developer tools if it was installed
    ErudaWebpackPlugin
      ? new ErudaWebpackPlugin({
        plugins: ['dom']
      })
      : undefined
  ],
  // Run development server on `http://localhost:3000`
  devServer: {
    contentBase: publicBasePath,
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'source-map'
};

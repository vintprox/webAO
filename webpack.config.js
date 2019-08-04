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

  // Scripts to begin bundling from
  entry: {
    main: './src/main.js'
  },

  // Put bundled files into `public` directory
  output: {
    path: publicBasePath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  // Webpack optimization utilities  
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

  // Set module loaders for file types
  module: {

    rules: [

      // Rule for transpiling JavaScript code with latest syntax to one supported by all target browsers
      {
      
        test: /\.js$/,

        // Propagate the rule to all scripts in `src` directory
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

      // Rule for compiling Vue Single File Components to JavaScript code
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

  // Module resolution traits that we meet in `import` operator
  resolve: {

    // Allow importing stuff without appending listed extensions
    extensions: ['.js', '.vue']

  },

  // Webpack plugins
  plugins: [

    // Generate index page from template
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: 'index.html',
      chunks: ['vendor', 'main']
    }),

    // Generate `client.html` file for URL backwards compatibility
    new HtmlWebpackPlugin({
      template: 'src/app.ejs',
      filename: 'client.html',
      redirect: true
    }),

    // Plugin that fetches Vue Single File Components
    new VueLoaderPlugin(),

    // Add plugin for Eruda embedded developer tools if it was installed
    ErudaWebpackPlugin
      ? new ErudaWebpackPlugin({
        plugins: ['dom']
      })
      : undefined

  ],

  // Run development server on `http://localhost:3000`
  devServer:{
    contentBase: publicBasePath,
    port: 3000,
    historyApiFallback: true
  },

  // Provide map files for listing through bundle in developer tools
  devtool: 'source-map'

};

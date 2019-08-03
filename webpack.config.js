/* eslint-env node */

const path = require('path');

module.exports = {
  entry: {
    menu: 'src/menu.js',
    game: 'src/game.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
	commons: {
	  chunks: 'initial',
	  minChunks: 2,
	  minSize: 0
	},
	vendors: {
	  chunks: 'all',
	  priority: 10
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
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
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: `public/index.html`,
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'src/app.ejs',
      filename: `public/client.html`,
      chunks: ['game']
    })
  ],
  devtool: 'source-map'
};


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'dev'
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html'
});


module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                // modules: true,
                // importLoaders: 1,
                // localIdentName: '[name]_[local]_[hash:base64]',
                // minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        })
      },
    ]
  },
  devServer: {
    port: 9999,
    contentBase: __dirname + '/dist'
  },
  plugins: [
    htmlPlugin,
    extractSass
  ],
  resolve: {
    modules: [__dirname + '/src', "node_modules"],
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'source-map',
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './index.html' });

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/assets/js/bundle.js'
  },
  devServer: {
    hot: false,
    liveReload: true,
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
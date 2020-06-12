const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html'
});
const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: './src/assets/logo.svg',
})

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
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    FaviconsWebpackPluginConfig
  ]
};
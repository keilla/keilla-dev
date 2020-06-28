const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const homePage = new HtmlWebpackPlugin({
  template: './index.html',
  chunks: ['main', 'home'],
  title: 'keilla.dev'
});
const talksPage = new HtmlWebpackPlugin({
  template: './index.html',
  chunks: ['main', 'talks'],
  filename: 'talks',
  title: 'Talks'
});
const faviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: './src/assets/logo.svg',
});
const copyPluginConfig = new CopyPlugin({
  patterns: [
    { from: './src/assets/logos/', to: 'public' },
  ]
});

module.exports = {
  entry: {
    main: './src/main.js',
    home: './src/app/home.js',
    talks: './src/app/talks.js',
  },
  output: {
    filename: './public/assets/js/[name].js'
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
    homePage,
    talksPage,
    faviconsWebpackPluginConfig,
    copyPluginConfig
  ]
};
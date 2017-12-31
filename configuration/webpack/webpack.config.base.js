const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin  = require('stylelint-webpack-plugin');

const sourcePath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../docs');
const modulesPath = path.join(__dirname, '../../node_modules');

module.exports = {
  context: sourcePath,
  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        loaders: ['raw-loader', 'pug-html-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
    modules: [
      modulesPath,
      sourcePath,
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new StyleLintPlugin({
      files: ['**/*.scss', '**/*.vue'],
      syntax: 'scss',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};

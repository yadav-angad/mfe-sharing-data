const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote1: 'remote1@http://localhost:3001/remoteEntry.js',
        sharedContext: 'sharedContext@http://localhost:3002/remoteEntry.js',
      },
      exposes: {},
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        shared: { singleton: true },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ],
};

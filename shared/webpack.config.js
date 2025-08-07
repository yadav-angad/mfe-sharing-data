const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/context/SharedContextProvider.js', // Or a common entry point
  mode: 'development',
  devServer: {
    port: 3002, // Port for your shared-context
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sharedContext',
      filename: 'remoteEntry.js',
      exposes: {
        './SharedContextProvider': './src/context/SharedContextProvider.js',
        './useSharedContext': './src/context/useSharedContext.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};
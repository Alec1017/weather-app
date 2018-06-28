const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: ['babel-polyfill', './src/index.js'], // Where the application starts
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform ES6 and JSX files to javascript
        loader: 'babel-loader',
        options: { 
          presets: ['env', 'react'],
          plugins: ['transform-class-properties']
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Rule for processing CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|svg|woff|woff2|ttf|eot)$/, // Rule for processing other file types
        use: ['url-loader']
      }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }, // Allows us to import modules without needing to add extensions
  output: { // Where to put the bundled code
    publicPath: path.resolve(__dirname, 'dist/'), // What directory the bundle goes in
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Location of static files
    port: 3000,
    publicPath: 'http://localhost:3000/dist', // Where the bundled code is
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], // Reloads server with a code change
};

const path = require('path');
const webpack = require('webpack');

const bundlePath = path.resolve(__dirname, 'dist/');


module.exports = {
  entry: './src/index.js', // Where the application starts
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transform ES6 and JSX files to javascript
        loader: 'babel-loader',
        options: { presets: ['env'] },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Rule for processing CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }, // Allows us to import modules without needing to add extensions
  output: { // Where to put the bundled code
    publicPath: bundlePath, // What directory the bundle goes in
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Location of static files
    port: 3000,
    publicPath: 'http://localhost:3000/dist', // Where the bundled code is
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], // Reloads server with a code change
};

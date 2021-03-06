var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "inline-sourcemap",
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
            loader: 'css-loader',
            options: {
              url: false
            }
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: 'sass-loader'
          }]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000',
        options: {
          includePaths: ['src/images/']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/public/",
    filename: "main.js"
  },
  plugins: []
};
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: !isProduction
  },
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.modules\.\w+$/i
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}

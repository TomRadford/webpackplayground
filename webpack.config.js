const path = require('path')
const webpack = require('webpack')

const config = (env, argv) => {
  console.log('argv', argv.mode)

  const backend_url = argv.mode === 'production' 
  ? 'https://obscure-harbor-49797.herokuapp.com/api/notes'
  : 'http://localhost:3001/notes'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000
    },
    devtool: 'source-map',
    module: {
      rules: [
        // JSX loader:
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ],
              ['@babel/preset-env']
            ]
          }
        },
        // CSS loaderS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: JSON.stringify(backend_url)
    })
  ]
  }
}

module.exports = config

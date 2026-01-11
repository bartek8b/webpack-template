const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: isProd ? 'main.[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    devServer: {
      watchFiles: ['./src/template.html'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        // Uncomment the below line to set the path for favicon
        // favicon: './src/favicon.png',
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[contenthash].css' : '[name].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff2?|ttf|otf|eot)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      splitChunks: isProd ? { chunks: 'all' } : false,
    },
  };
};

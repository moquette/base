import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config = {
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: 'static/css/[name].[contenthash].css',
  chunkFilename: 'static/css/[id].[contenthash].css',
}

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config)

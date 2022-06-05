import path from 'path'

import { externalItems } from './config'
import entry from './entry'
import optimization from './optimization'
import * as plugins from './plugins'
import * as rules from './rules'
import { isDevServer, isProd } from './utils/env'
import { arrayFilterEmpty } from './utils/helpers'

export default {
  context: __dirname,
  target: isDevServer ? 'web' : ['web', 'es5'],
  mode: isProd ? 'production' : 'development',
  entry,
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: isDevServer ? undefined : './',
    assetModuleFilename: isDevServer
      ? 'static/media/[name].[fullhash][ext][query]'
      : 'static/media/[name].[contenthash][ext][query]',
    filename: isDevServer ? 'static/js/[name].[fullhash].js' : 'static/js/[name].[contenthash].js',
  },
  module: {
    rules: arrayFilterEmpty([
      rules.javascriptRule,
      rules.typescriptRule,
      rules.htmlRule,
      rules.imagesRule,
      rules.svgRule,
      rules.fontsRule,
      rules.cssRule,
      ...rules.lessRules,
      ...rules.sassRules,
    ]),
  },
  plugins: arrayFilterEmpty([
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.esLintPlugin,
    plugins.copyPlugin,
  ]),
  resolve: {
    plugins: arrayFilterEmpty([plugins.tsconfigPathsPlugin]),
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  optimization,
  externals: externalItems,
}

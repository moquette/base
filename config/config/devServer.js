/**
 * @see https://webpack.js.org/configuration/dev-server/
 */

import { devServerProxyConfig } from './devServierProxy'

export const devServerConfig = {
  client: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  hot: true,
  port: 3000,
  open: true,
  proxy: devServerProxyConfig,
  static: {
    publicPath: '/',
  },
}

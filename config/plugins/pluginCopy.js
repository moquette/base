import { join } from 'path'

import CopyPlugin from 'copy-webpack-plugin'

import { rootDir } from '../utils/env'

const config = {
  patterns: [
    {
      from: join(rootDir, './public'),
      to: join(rootDir, './dist'),
      globOptions: {
        ignore: ['**/index.html'],
      },
    },
  ],
}

export const copyPlugin = new CopyPlugin(config)

import merge from 'webpack-merge'

import baseConfig from './config/base'
import devConfig from './config/dev'
import prodConfig from './config/prod'
import { isProd } from './config/utils/env'

export default () => (isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig))

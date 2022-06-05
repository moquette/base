/**
 * @see https://github.com/postcss/postcss
 */
import { isProd } from '../utils/env'
import { arrayFilterEmpty } from '../utils/helpers'

module.exports = () => {
  const plugins = arrayFilterEmpty([
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
    isProd ? 'cssnano' : null,
  ])
  return {
    plugins,
  }
}

/**
 * Resource list for sass-resource-loader
 * @see https://github.com/shakacode/sass-resources-loader
 * @example
 *  [
 *      path.resolve(__dirname, '../src/styles/variables.scss'),
 *  ]
 */
const path = require('path')

export const sassResourceItems = [path.resolve(__dirname, '../../src/assets/styles/variables.scss')]

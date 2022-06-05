module.exports = {
  './{src,webpack}/**/*.{js,jsx,ts,tsx,json,scss,css,md,html}': [
    'npx prettier --write',
  ],
  './src/**/*.{ts,tsx}': [() => 'npx tsc --noEmit', 'npx eslint --fix'],
}

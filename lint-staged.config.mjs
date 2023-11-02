export default {
  '*.{js,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    // 'jest --bail --findRelatedTests',
  ],
}

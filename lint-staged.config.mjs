export default {
  '*.{js,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    // FIXME: should run rollup and jest on commit
    // 'rollup -c',
    // 'jest --bail --findRelatedTests',
  ],
}

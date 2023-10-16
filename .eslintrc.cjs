module.exports = {
  extends: ['@nurmarief/eslint-config', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack.common.js',
          'webpack.dev.js',
          'webpack.prod.js',
        ],
      },
    ],
    'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
  },
};

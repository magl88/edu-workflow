module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    jasmine: true,
  },
  rules: {
    'arrow-body-style': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-empty-pattern': 1,
    'no-extra-parens': 0,
    'no-unused-vars': 1,
    'no-console': 0,
    'linebreak-style': 0,
    'arrow-parens': 0,
    'no-mixed-operators': 0,
    'max-len': [
      2,
      {
        code: 120,
      }
    ],
    semi: [
      2,
      'never',
    ],

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,

    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-prop-types': 0,
    'react/self-closing-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any', 'array'],
      },
    ],
    'react/require-default-props': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': 0,
  },
}

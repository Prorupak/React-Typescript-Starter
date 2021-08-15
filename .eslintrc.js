module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],

    'import/resolver': ['.js', '.jsx', '.ts', '.tsx'],

    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [2, 'single'],
    'arrow-body-style': ['error', 'always'],
    'jsx-quotes': 1,
    'linebreak-style': [2, 'windows'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/sort-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    semi: 0
  }
};

module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'import'
  ],
  'settings': {
    'import/extensions': [
      '.ts'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    }
  },
  'rules': {
    'import/no-restricted-paths': [
      'error',
      {
        'zones': [
          { 'target': './src/domain', 'from': './src/app' },
          { 'target': './src/domain', 'from': './src/infra' },
          { 'target': './src/app', 'from': './src/infra' },
        ],
      }
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Não precisa importar React no JSX moderno
    'react/react-in-jsx-scope': 'off',
    // Permite JSX em arquivos .js e .jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Permite exportação sem default
    'import/prefer-default-export': 'off',
  },
};

export default [
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];

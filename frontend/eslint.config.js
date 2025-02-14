import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Varsayılan kurallar
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Daha fazla hata kontrolü sağlayan kurallar
      'react/jsx-no-target-blank': 'error', // Güvenlik açığını engeller
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/no-unused-prop-types': 'warn', // Kullanılmayan propTypes'leri uyarır
      'react/no-array-index-key': 'warn', // Key olarak index kullanımına uyarı verir
      'react/no-danger': 'error', // Güvenlik için innerHTML kullanımını engeller
      'react/jsx-no-duplicate-props': 'error', // JSX içindeki duplicate prop'ları engeller
      'react/jsx-no-script-url': 'error', // XSS saldırılarına karşı güvenlik sağlar
      'react/jsx-pascal-case': 'error', // Component isimlerinin PascalCase olmasını zorunlu kılar
      'react-hooks/exhaustive-deps': 'error', // useEffect bağımlılıklarını doğru kontrol eder

      // Genel JavaScript kuralları
      'no-console': 'warn', // Konsol loglarını uyarır
      'no-debugger': 'error', // debugger kullanımını engeller
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Kullanılmayan değişkenleri engeller
      'eqeqeq': ['error', 'always'], // Strict eşitlik kullanımı
      'curly': 'error', // Koşullarda süslü parantezleri zorunlu kılar
      'no-alert': 'warn', // alert kullanımına uyarı verir
    },
  },
]

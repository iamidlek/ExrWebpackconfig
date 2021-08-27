module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {

    // > 의 끝나는 줄에 따른 에러 여부
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        // 빈태그
        "void": "always",
        // 내용없으면 일반 태그도빈태그처럼할껀지
        "normal": "never",
        // 컴포넌트에 대해 빈태그처럼 사용 가능하게 할껀지
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}

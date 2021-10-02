module.exports = {
    env: {
      // 브라우저에서도 노드에서도 검사
      browser: true,
      node: true
    },
    extends: [
      // vue 규칙
      //'plugin:vue/vue3-essential', // lv1
      'plugin:vue/vue3-strongly-recommended', //lv2
      //'plugin:vue/vue3-recommended',// lv3
      // js 규칙 기본적으로 권장되는 js 검사를 함
      'eslint:recommended'
    ],
    parserOptions: {
      // es6를 es5도 돌아가게 변환
      parser: 'babel-eslint'
    },
    rules: {
      // 입맛에 맞는 규칙으로 변경하는 경우

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

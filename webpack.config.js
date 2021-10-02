const _require = id => require(require.resolve(id, { paths: [require.main.path] }))
// import
const path = _require('path')
// 전역 모듈 'path'

//npm i -D html-webpack-plugin 이후
const HtmlPlugin = _require('html-webpack-plugin')

// npm i -D copy-webpack-plugin 이후
const CopyPlugin = _require('copy-webpack-plugin')

// 플러그인에 
const { VueLoaderPlugin } = _require('vue-loader')


// export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    
    // 경로 별칭
    alias: {
      // ~ 면 현위치+/src 인게 된다
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정

  // 웹팩은 js 파일을 진입점으로 한다
  entry: './src/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    // 절대 경로
    // 첫번째 인수와 두번째 인수를 합쳐줌 경로+경로
    // __dirname 현재 webpack config파일의 위치 + 폴더명
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // path와 filename 을 주석처리해도 된다 defalut 값이기 때문에(dist main.js)

    // 기존 파일 지워짐
    clean: true
  },

  // css 읽어오기
  module: {
    rules: [
      {
        test: /\.vue$/,
        // 하나일때는 배열 없어도됨
        use: ['vue-loader']
      },
      {
        // .css로 끝나는 모든 것 + ? 니까 scss 도 가능
        test: /\.s?css$/,
        use: [
          // 순서 중요
          'vue-style-loader',
          'style-loader', // 해석된 부분을 삽입해서 사용
          'css-loader',// 먼저 로드됨 js에서 css를 해석하는 용도
          // postcss-loader 적용시에는 packagejson에 browserslist 명시가 필요
          // .postcssrc도 작성
          'postcss-loader',// 순서 중요 scss에 공급업체 접두사 붙임 
          'sass-loader' // css로드가 로드되기전에 먼저 로드되야됨 (먼저 동작해야됨)
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
  plugins: [ // main.js 와 html이 병합됨
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [ // sttic이 dist에 copy됨
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host:'localhost'
  }
}

// 설정후 npm run build

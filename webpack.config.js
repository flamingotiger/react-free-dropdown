const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.resolve(__dirname, 'src'); // src 경로
const Dev = process.env.NODE_ENV === 'development'; // 개발자 모드
const webpackDevServer = Dev ? {
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 5000
  }
} : {}; // webpack dev server 포트설정

const splitChunk = !Dev ? {} : {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
  }
} 
// 청크 최적화 비동기로 6개 리미트
// 일반적으로 브라우저는 동시 6개까지 request 할 수 있음

module.exports = {
  entry: "./src/index.js", // 가져올 파일
  output: {
    filename: Dev ? '[name].js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname + 'build')
  }, // 빌드후 결과물 파일
  ...webpackDevServer,
  mode: Dev ? "development" : "production", // 프로덕션모드, 개발자모드
  module: { // 로더
    rules: [
      {
        test: /\.(js|jsx)$/, // 로더 적용할 대상
        exclude: /node_modules/, // 로더 제외 설정
        include: srcPath, // 일정경로에서만 로더 적용
        use: ["babel-loader", "stylelint-custom-processor-loader"] // 바벨로더 및 스타일드 컴포넌트 로더/린트
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // html 로더
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ // html 자동생성 플러그인
      template: './public/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin() // 사용하지 않는 빌드 파일 자동 삭제
  ],
  optimization: { // 청크 최적화
    ...splitChunk
  }
}
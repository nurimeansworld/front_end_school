// 라우팅 : URL보고 어디로 가! 지시해주는 것.
// 미들웨어 : 요청과 응답 중간(middle)에서 무언가를 해주는 것.
// 사용자 작성 미들웨어, 내부 미들웨어, 외부 미들웨어
// npm init --yes
// npm i express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능
// 기본 라우팅 공식문서
// https://expressjs.com/ko/starter/basic-routing.html
// 라우팅 공식문서
// https://expressjs.com/ko/guide/routing.html
// 정규표현식 -> 노션 문서 참고
// https://ridibooks.com/books/2773000049
const express = require('express');
const indexRouter = require('router/index.js'); // 뒤에 index.js 생략 가능
const aRouter = require('router/a.js');
const bRouter = require('router/b.js');
const cRouter = require('router/c.js');

const app = express();

// 최종 실행 코드(마지막 실습)
// 아래처럼 여러개의 미들웨어를 하나의 use에 매핑 가능
// 순서가 중요함, 모든 url 매핑 확인 전! 무조건 실행되는 코드.
// app.use((req, res, next) => {
//     console.log('one');
//     next();
// }, (req, res, next) => {
//     console.log('two');
//     next();
// }, (req, res, next) => {
//     console.log('three');
//     next();
// })

app.use('/', indexRouter);
app.use('/a', aRouter);
app.use('/b', bRouter);
app.use('/c', cRouter);

app.use((req, res, next) => {
  res.status(404).send('못찾음!'); // res.send는 res.status(200).send('')
  // 보안상 status는 좀 더 고민해본 후 작성, 200을 일부러 보내주는 경우가 많습니다.
});

app.use((err, req, res, next) => {
  console.log('error!');
  console.log(err);
});
// 매개변수가 4개인것만 에러처리합니다. 주의해주세요.

app.listen(8080); // 보통 위에 있고 맨 마지막에는 error 처리하는 경우가 많음
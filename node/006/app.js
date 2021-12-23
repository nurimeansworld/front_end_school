// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

const fs = require('fs');
// rename, readFile, readdir, writeFile, appendFile, copyFile, mkdir;
// 1. rename : 이름 변경
let 변수 = '눌누리'; // 사용자 이름
let 날짜 = new Date();
fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
  console.log(err);
});

// // 2. readFile : file 내용 읽기
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

// // 3. readdir : dir 구조 읽기
// fs.readdir('./', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

// // 4. writeFile : file 새로 추가
// fs.writeFile('./test2.txt', 'hello world 2', (err) => {
//   console.log(err);
// });

// // 5. appendFile : file 내용 추가
// fs.appendFile('./test2.txt', '\nhello world 3', (err) => {
//   console.log(err);
// });

// // 6. copyFile : file 복사
// fs.copyFile('./test2.txt', './test3.txt', (err) => {
//   console.log(err);
// });

// // 7. mkdir : dir 추가
// fs.mkdir('./yoyo', (err) => {
//   console.log(err);
// });

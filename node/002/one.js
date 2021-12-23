// const 개인프로필 = require('two.js');  // 이렇게 설정하면 인식하지 못함
const 개인프로필 = require('./two.js');

console.log(개인프로필);
// {
//   '이름': '누리',
//   '나이': 10,
//   '한살더먹음': [Function: 한살더먹음],
//   '값가져와': [Function: 값가져와]
// }
console.log(개인프로필.이름); // 누리
console.log(개인프로필.나이); // 10

개인프로필.한살더먹음;
개인프로필.값가져와;

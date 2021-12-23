// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep으로 확인 필요
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source'));
console.log(path.join(__dirname, 'app.js'));
// console.log(__dirname+'/node');  // 이런 식으로 사용 X

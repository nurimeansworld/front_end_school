// 자주 쓰이는 함수들
let s = "abcdefABCDEF";

console.log(s.length);
console.log(s.indexOf("CDE"));
console.log(s.search("ABC"));
// 없으면 -1 return
console.log(s.indexOf("G"));
console.log(s.search("G"));
console.log(s.slice(3, 5));
console.log(s.slice(3, -5));
console.log(s.slice(5));
console.log(s.substr(6, 3));
console.log(s.substring(6));

s.replace("ABC", "nuri");

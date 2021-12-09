// 자주 쓰이는 함수들
let s = "abcdefABCDEF";

console.log(s.length); // 12
console.log(s.indexOf("CDE")); // 8
console.log(s.search("ABC")); // 6
// 없으면 -1 return
console.log(s.indexOf("G")); // -1
console.log(s.search("G")); // -1
console.log(s.slice(3, 5)); // de
console.log(s.slice(3, -5)); // deFA
console.log(s.slice(5)); // fABCDEF
console.log(s.substr(6, 3)); // ABC
console.log(s.substring(6)); // ABCDEF

console.log(s.replace("ABC", "nuri")); // abcdefnuriDEF
